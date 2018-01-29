/**
 * This module provides an entrypoint to the epub publication releaser
 * @module metis-backend/releasers/epub
 */

import {resolve as resolvePath} from 'path';
import {readFile} from 'fs-extra';
import {readFileSync} from 'fs';

import generateEpub from './epub.generator';
import {dal as deliverableDal} from '../../components/deliverables';

import {
  fetchCitationData,
  mountLocalAssets
} from '../../utils/data';

const tempDirPath = resolvePath(__dirname + '/../../../temp');
const styles = readFileSync(resolvePath(__dirname + '/../../../node_modules/metis-shared/dist/style.css'), 'utf8');

export default function publish(data, diffusion, renderingMode = 'epub-reflowable') {
  return new Promise((resolve, reject) => {

    let deliverable;
    let getAssetUri;

    mountLocalAssets(data.assets)
    .then(fn => {
      getAssetUri = asset => {
        // if (asset.mimetype.indexOf('image') > -1) {
        //   const path = fn(asset);
        //   const image = readFileSync(path, 'base64');
        //   return `data:${asset.mimetype};base64,${image}`;
        // } else {
        // console.log(fn(asset))
        return 'file://' + fn(asset);
        // }
      };
      return fetchCitationData();
    })
    .then(citationData => {
      const {citationStyle, citationLocale} = citationData;
      return generateEpub({
        // Component,
        props: data,
        tempDirPath,
        outputDirPath: tempDirPath,
        citationStyle,
        citationLocale,
        getAssetUri,
        renderingMode,
        styles
      }, epubPath => {
        deliverable = {
          type: 'deliverable',
          date_produced: new Date().getTime(),
          diffusion_id: diffusion._id,
          montage_id: data.montage._id,
          montage_type: data.montage.metadata.montage_type,
          montage_title: data.montage.metadata.title,
          version: diffusion.version,
          filename: epubPath.split('/').pop(),
          mimetype: 'application/epub+zip'
        };
        return readFile(epubPath)
          .then(deliverableData => {
            return deliverableDal.createDeliverable(deliverable, deliverableData);
          });
      });
    })
    .then(resolve)
    .catch(reject);
  });
}
