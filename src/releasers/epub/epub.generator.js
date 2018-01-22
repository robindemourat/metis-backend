import React from 'react'; /* eslint no-unused-vars : 0 */
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import {v4 as generateId} from 'uuid';
import {writeFile, remove} from 'fs-extra';
import Epub from 'epub-gen';

import DecoratedComposition from 'plurishing-shared/dist/components/views/static/DecoratedComposition';

import EpubNoteContentPointer from 'plurishing-shared/dist/components/views/static/EpubNoteContentPointer';
import EpubNotePointerPointer from 'plurishing-shared/dist/components/views/static/EpubNotePointerPointer';
import EpubLink from 'plurishing-shared/dist/components/views/static/EpubLink';
import StandaloneCover from 'plurishing-shared/dist/components/views/static/StandaloneCover';
import Colophon from 'plurishing-shared/dist/components/views/static/Colophon';
// import Toc from 'plurishing-shared/dist/components/views/static/Toc';

import {TranslationsProvider} from '../../utils/react-components';/* eslint no-unused-vars : 0 */

import html2img from '../../services/html2img/html2img.service';

import {resolve as resolvePath} from 'path';

const tempFolder = resolvePath(`${__dirname}/../../../temp/`);

const buildAuthors = creators =>
  creators.map(creator => `${creator.given} ${creator.family}`)
    .join(', ');


// class LinkProvider extends React.Component{
//   static childContextTypes = {
//     Link: PropTypes.func
//   }
//   getChildContext = () => ({
//     Link: EpubLink,
//   })
//   render(){
//     return this.props.children;
//   }
// }

const renderComposition = (parameters, {
  renderingMode,
  assets,
  resources,
  compositions,
  citationLocale,
  citationStyle,
  getAssetUri,
  index
}) => {

  const {target_composition_id} = parameters;
  const composition = compositions.find(comp => comp._id === target_composition_id);

  if (composition) {
    const html = ReactDOMServer.renderToStaticMarkup(
      <TranslationsProvider>
        <DecoratedComposition
            parameters={parameters}
            renderingMode={renderingMode}
            composition={composition}
            resources={resources}
            assets={assets}
            getAssetUri={getAssetUri}
            citationStyle={citationStyle}
            citationLocale={citationLocale}
            Link={EpubLink}
            NoteContentPointer={EpubNoteContentPointer}
            NotePointerPointer={EpubNotePointerPointer}
        />
      </TranslationsProvider>
    );
    return {
        title: composition.metadata.title,
        // author: buildAuthors(composition.metadata.creators), // Optional
        filename: `composition-${index}`,
        data: html
    };
  }
};

const generateCoverHtml = (montage, renderingMode, styles) => {
  return ReactDOMServer.renderToStaticMarkup(
      <StandaloneCover
        styles={styles}
        montage={montage}
        renderingMode={renderingMode}
      />
    );
};

export default function generateEpub ({
  // Component,
  props,
  outputDirPath,
  tempDirPath,
  citationLocale,
  citationStyle,
  getAssetUri,
  styles='',
  renderingMode
}, onFileGenerated) {
  return new Promise((resolve, reject) => {
    const montage = props.montage;
    const compositions= props.compositions;
    const metadata = montage.metadata;

    const css = [
      styles,
      // montage-specific css code
      montage.data.css.shared_css_code,
      montage.data.css[`${renderingMode}_css_code`]
    ].join('\n\n');

    const coverHTML = generateCoverHtml(montage, renderingMode, styles);
    const coverFilePath = `${tempFolder}/${generateId()}.jpg`;

    // console.log('will render toc html');
    // const ToCHtml = ReactDOMServer.renderToStaticMarkup(
    //   <TranslationsProvider>
    //       <LinkProvider>
    //         <Toc
    //             montage={montage}
    //             compositions={compositions}
    //         />
    //       </LinkProvider>
    //   </TranslationsProvider>
    // );

    const colophonHTML = ReactDOMServer.renderToStaticMarkup(
      <TranslationsProvider>
          <Colophon
              contents={montage.data.colophon}
          />
      </TranslationsProvider>
    );


    html2img(coverHTML, coverFilePath, err => {
      if (err) {
        reject(err);
      } else {
        const options = {
          title: metadata.title,
          author: buildAuthors(metadata.creators),
          cover: coverFilePath,
          appendChapterTitles: false,
          layout: renderingMode === 'epub-reflowable' ? 'reflowable' : 'fixed',
          tocTitle: 'Table des matières',
          // publisher: "Macmillan & Co.", // optional
          content: [
              // custom toc component if needed
              // {
              //   title: 'Table des matières',
              //   excludeFromToc: true,
              //   data: ToCHtml
              // },
              ...montage.data.compositions
                .map((compositionCitation, index) => renderComposition(compositionCitation, {
                  ...props,
                  renderingMode,
                  citationStyle,
                  citationLocale,
                  getAssetUri,
                  index
                }))
                .filter(comp => comp),
              {
                title: 'Colophon',
                data: colophonHTML
                // excludeFromToc: true
              }
          ],
          css
        };

        const outputPath = `${outputDirPath}/${montage._id}.epub`;
        return new Epub(options, outputPath).promise
                .then(() => {
                  onFileGenerated(outputPath);
                  resolve(outputPath);
                })
                .catch(reject);
      }
    });
  });
}
