import React from 'react'; /* eslint no-unused-vars : 0 */
import ReactDOMServer from 'react-dom/server';
import {v4 as generateId} from 'uuid';
import {writeFile, remove} from 'fs-extra';
import Prince from 'prince';

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

    const str = ReactDOMServer.renderToStaticMarkup(
      <TranslationsProvider>
        <style>
          {styles}
        </style>
        <Component
          {...props}
          renderingMode="pdf"
          getAssetUri={getAssetUri}
          citationStyle={citationStyle}
          citationLocale={citationLocale}
        />
      </TranslationsProvider>
    );


    const id = generateId();
    const tempHtml = `${tempDirPath}/${id}.html`;
    const tempPdf = `${tempDirPath}/${id}.pdf`;
    writeFile(tempHtml, str)
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
