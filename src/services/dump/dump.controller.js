/* eslint promise/param-names : 0 */

import archiver from 'archiver';
import {ensureDir, remove, writeFile, readFile} from 'fs-extra';
import {createWriteStream} from 'fs';
import {resolve as resolvePath} from 'path';

import {dal as assetDal} from '../../components/assets';
import {dal as resourceDal} from '../../components/resources';
import {dal as compositionDal} from '../../components/compositions';
import {dal as montageDal} from '../../components/montages';
import {dal as diffusionDal} from '../../components/diffusions';
import {dal as deliverableDal} from '../../components/deliverables';

const tempFolder = resolvePath(__dirname + '/../../../temp/');
const dumpFolder = `${tempFolder}/dump/`;
const zipDest = `${tempFolder}/dump.zip`;


export const downloadAllData = (req, res) =>
  new Promise((resolve, reject) => {
    const data = {};

    // ensure temp folder structure is set
    remove(dumpFolder)
      .then(() => ensureDir(dumpFolder))
      .then(() => ensureDir(`${dumpFolder}/data`))
      .then(() => ensureDir(`${dumpFolder}/assets`))
      .then(() => ensureDir(`${dumpFolder}/deliverables`))
      .then(() => assetDal.getAssets({}))
      // get assets
      .then(assets => {
        data.assets = assets;
        // download assets attachments
        const attachments = assets.map(asset => {
          return new Promise((resolve2, reject2) => {
            assetDal.getAssetAttachment({
              id: asset._id,
              filename: asset.filename
            })
            .then(attachment => {
              const path = `${dumpFolder}/assets/${asset.filename}`;
              return writeFile(path, attachment.data, 'binary');
            })
            .then(resolve2)
            .catch(reject2);
          });
        });
        return Promise.all(attachments);
    })
    // get other objects
    .then(() => {
      return resourceDal.getResources({});
    })
    .then(resources => {
      data.resources = resources;
      return compositionDal.getCompositions({});
    })
    .then(compositions => {
      data.compositions = compositions;
      return montageDal.getMontages({});
    })
    .then(montages => {
      data.montages = montages;
      return diffusionDal.getDiffusions({});
    })
    .then(diffusions => {
      data.diffusions = diffusions;
      return deliverableDal.getDeliverables({});
    })
    // get deliverables
    .then(deliverables => {
      data.deliverables = deliverables;
      // download deliverables attachments
      const attachments = deliverables.map(deliverable => {
          return new Promise((resolve2, reject2) => {
            deliverableDal.getDeliverableAttachment({
              id: deliverable._id,
              filename: deliverable.filename
            })
            .then(attachment => {
              const path = `${dumpFolder}/deliverables/${deliverable.filename}`;
              return writeFile(path, attachment.data, 'binary');
            })
            .then(resolve2)
            .catch(reject2);
          });
        });
      return Promise.all(attachments);
    })
    // write data
    .then(() => {
      const dest = `${dumpFolder}/data/data.json`;
      return writeFile(dest, JSON.stringify(data), 'utf8');
    })
    // zip file
    .then(() => {
      return new Promise((resolve2, reject2) => {
        const output = createWriteStream(zipDest);
        const archive = archiver('zip', {
          zlib: { level: 9 } // Sets the compression level.
        });
        output.on('close', function() {
          // console.log(archive.pointer() + ' total bytes');
          // console.log('archiver has been finalized and the output file descriptor has closed.');
          resolve2();
        });

        // This event is fired when the data source is drained no matter what was the data source.
        // It is not part of this library but rather from the NodeJS Stream API.
        // @see: https://nodejs.org/api/stream.html#stream_event_end
        output.on('end', function() {
          resolve2();
        });


        // good practice to catch warnings (ie stat failures and other non-blocking errors)
        archive.on('warning', function(err) {
          if (err.code === 'ENOENT') {
            // log warning
          } else {
            // throw error
            reject2(err);
          }
        });

        // good practice to catch this error explicitly
        archive.on('error', function(err) {
          reject2(err);
        });

        // pipe archive data to the file
        archive.pipe(output);

        // add folder to archive
        archive.directory(dumpFolder, false);
        archive.finalize();
      });
    })
    .then(() => {
      return readFile(zipDest);
    })
    // return zip
    .then(file => {
      return res.end(file, 'binary');
    })
    .catch(reject);
  });

export const uploadData = (req, res) =>
  res.json(['uploaded']);

export const deleteAllData = (req, res) =>
  res.json(['deleted']);
