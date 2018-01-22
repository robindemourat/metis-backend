/**
 * This module provides an entrypoint to the pdf publication releaser
 * @module metis-backend/releasers/pdf
 */

import {resolve as resolvePath} from 'path';
import {readFile} from 'fs-extra';
import {readFileSync} from 'fs';

/**
 * @todo use proper component to render pdf view
 */
import Component from 'metis-shared/dist/components/previews/StaticMontagePreview/PreviewContainer';


import {
  fetchCitationData,
  mountLocalAssets
} from '../../utils/data';

import generatePdf from './pdf.generator';
import {dal as deliverableDal} from '../../components/deliverables';


const tempDirPath = resolvePath(__dirname + '/../../../temp');
const styles = readFileSync(resolvePath(__dirname + '/../../../node_modules/metis-shared/dist/style.css'), 'utf8');


export default function publish(data, diffusion) {
  return new Promise((resolve, reject) => {


    let deliverable;
    let getAssetUri;

    mountLocalAssets(data.assets)
    .then(fn => {
      getAssetUri = fn;
      return fetchCitationData();
    })
    .then(citationData => {
      const {citationStyle, citationLocale} = citationData;
      return generatePdf({
        Component,
        props: data,
        tempDirPath,
        outputDirPath: tempDirPath,
        citationLocale,
        citationStyle,
        getAssetUri,
        styles
      }, pdfPath => {
        deliverable = {
          type: 'deliverable',
          date_produced: new Date().getTime(),
          diffusion_id: diffusion._id,
          montage_id: data.montage._id,
          montage_type: data.montage.metadata.montage_type,
          montage_title: data.montage.metadata.title,
          version: diffusion.version,
          filename: pdfPath.split('/').pop(),
          mimetype: 'application/pdf'
        };
        return readFile(pdfPath)
          .then(deliverableData => {
            return deliverableDal.createDeliverable(deliverable, deliverableData);
          });
      });
    })
    .then(resolve)
    .catch(reject);
  });
}
