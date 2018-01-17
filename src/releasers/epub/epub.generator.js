import React from 'react'; /* eslint no-unused-vars : 0 */
import ReactDOMServer from 'react-dom/server';
import {v4 as generateId} from 'uuid';
import {writeFile, remove} from 'fs-extra';
import Epub from 'epub-gen';

import {TranslationsProvider} from '../../utils/react-components';/* eslint no-unused-vars : 0 */
import DecoratedComposition from 'plurishing-shared/dist/components/views/static/DecoratedComposition';


import EpubNoteContentPointer from 'plurishing-shared/dist/components/views/static/EpubNoteContentPointer';
import EpubNotePointerPointer from 'plurishing-shared/dist/components/views/static/EpubNotePointerPointer';
import EpubLink from 'plurishing-shared/dist/components/views/static/EpubLink';

const buildAuthors = creators =>
  creators.reduce((total, creator, index) => {
      let s = total + creator.given + ' ' + creator.family;
      if (s < index - 1) {
        s += ', ';
      }
      return s;
    }, '');

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
        author: buildAuthors(composition.metadata.creators), // Optional
        filename: `composition-${index}`,
        data: html
    };
  }
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
  mode
}, onFileGenerated) {
  return new Promise((resolve, reject) => {
    const montage = props.montage;
    const metadata = montage.metadata;

    const renderingMode = mode === 'static' ? 'epub-reflowable' : 'epub-fixed';
    const css = [
      styles,
      // montage-specific css code
      montage.data.css.shared_css_code,
      montage.data.css[`${renderingMode}_css_code`]
    ].join('\n\n');

    const options = {
      title: metadata.title,
      author: buildAuthors(metadata.creators),
      // publisher: "Macmillan & Co.", // optional
      content: [
          ...montage.data.compositions
            .map((compositionCitation, index) => renderComposition(compositionCitation, {
              ...props,
              renderingMode,
              citationStyle,
              citationLocale,
              getAssetUri,
              index
            }))
            .filter(comp => comp)
      ],
      css
    };

    const outputPath = outputDirPath + '/test.epub';
    return new Epub(options, outputPath).promise
            .then(() => {
              onFileGenerated(outputPath);
              resolve(outputPath);
            })
            .catch(reject);
  });
}
