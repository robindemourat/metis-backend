/**
 * This module a function that produces a pdf static file thanks to PrinceXML technology.
 * @module metis-backend/releasers/pdf
 */

import React from 'react'; /* eslint no-unused-vars : 0 */
import ReactDOMServer from 'react-dom/server';
import {v4 as generateId} from 'uuid';
import {writeFile, remove} from 'fs-extra';
import Prince from 'prince';

import PdfNoteContentPointer from 'metis-shared/dist/components/views/static/PdfNoteContentPointer';
import PdfNotePointerPointer from 'metis-shared/dist/components/views/static/PdfNotePointerPointer';
import PdfLink from 'metis-shared/dist/components/views/static/PdfLink';

import {TranslationsProvider} from '../../utils/react-components';/* eslint no-unused-vars : 0 */

export default function generatePdf ({
  Component,
  props,
  outputDirPath,
  tempDirPath,
  citationStyle,
  citationLocale,
  getAssetUri,
  styles = ''
}, onFileGenerated) {
  return new Promise((resolve, reject) => {
    const contentStr = ReactDOMServer.renderToStaticMarkup(
          <TranslationsProvider>
            <Component
              {...props}
              renderingMode="pdf"
              getAssetUri={getAssetUri}
              citationStyle={citationStyle}
              citationLocale={citationLocale}
              Link={PdfLink}
              NoteContentPointer={PdfNoteContentPointer}
              NotePointerPointer={PdfNotePointerPointer}
              Link={PdfLink}
            />
          </TranslationsProvider>
    );
    const str = `
<html>
  <head>
  </head>
  <body>
    ${contentStr}
    <style>
      ${styles}
    </style>
  </body>
</html>
`;
    const id = generateId();
    const tempHtml = `${tempDirPath}/${id}.html`;
    const tempPdf = `${outputDirPath}/${id}.pdf`;
    writeFile(tempHtml, str, 'utf8')
      .then(() => {
        return Prince()
          .inputs(tempHtml)
          .output(tempPdf)
          .execute();
      })
      .then(() => {
        return onFileGenerated(tempPdf);
      })
      .then(() => remove(tempHtml))
      .then(() => remove(tempPdf))
      .then(resolve)
      .catch(reject);
  });
}
