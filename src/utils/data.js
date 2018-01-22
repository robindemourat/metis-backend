/* eslint promise/param-names : 0 */
/**
 * This module exports several functions related to data management,
 * especially querying data and static files,
 * and storing data from db to local temp files.
 * @module metis-backend/utils/data
 */


import {dal as compositionDal} from '../components/compositions';
import {dal as resourceDal} from '../components/resources';
import {dal as assetDal} from '../components/assets';
import {
  readFile,
  remove,
  ensureDir,
  writeFile
} from 'fs-extra';
import {resolve as resolvePath} from 'path';

const assetsFolder = resolvePath(__dirname + '/../../assets');
const tempFolder = resolvePath(__dirname + '/../../temp');
const tempAssetsFolder = resolvePath(`${tempFolder}/assets`);

export const mountLocalAssets = assets =>
  new Promise((resolve, reject) => {
    // should return getAssetUri function ie : asset => `${tempDirPath}/${asset._id}/${asset.filename}`
    return remove(tempAssetsFolder)
            .then(() => ensureDir(tempAssetsFolder))
            .then(() => {
              const toResolve = assets.map(asset => {
                return ensureDir(`${tempAssetsFolder}/${asset._id}`)
                  .then(() => {
                    return assetDal
                        .getAssetAttachment({id: asset._id, filename: asset.filename});
                  })
                  .then(({data}) => {
                    return writeFile(`${tempAssetsFolder}/${asset._id}/${asset.filename}`, data);
                  });
              });
              return Promise.all(toResolve);
            })
            .then(() => {
              const getAssetUri = asset => `${tempAssetsFolder}/${asset._id}/${asset.filename}`;
              resolve(getAssetUri);
            })
            .catch(reject);
  });

export const unmountLocalAssets = (/*assets*/) =>
  new Promise((resolve, reject) => {
    // removing all assets
    return remove(tempAssetsFolder).then(resolve).catch(reject);
    // targeting only specific assets
    // const toResolve = assets.map(asset => {
    //   const folder = `${tempAssetsFolder}/${asset._id}`;
    //   return remove(folder)
    // });
    // return Promise.all(toResolve)
  });

export const fetchCitationData = () =>
  new Promise((resolve, reject) => {
    let citationStyle;
    let citationLocale;
    readFile(`${assetsFolder}/apa.csl`, 'utf8')
          .then(str => {
            citationStyle = str;
            return readFile(`${assetsFolder}/english-locale.xml`, 'utf8');
          })
          .then(str => {
            citationLocale = str;
            resolve({citationStyle, citationLocale});
          })
          .catch(reject);
  });

export const fetchMontageDependencies = (montage) => {
  return new Promise((resolve, reject) => {
    let compositions;
    let resources;
    let assets;
    // register compositions
    const compositionsRequirements = montage.data.compositions
            .map(target => target.target_composition_id)
            .filter(id => id)
            .map(id => compositionDal.getComposition({id}));
    Promise.all(compositionsRequirements)
      .then(theseCompositions => {
        compositions = theseCompositions;

        // register resources requirement
        const resourcesRequirements = compositions.reduce((result, composition) => {
          return result.concat(composition.resources || []);
        }, [])
        .filter(id => id)
        .map(id => resourceDal.getResource({id}));

        Promise.all(resourcesRequirements)
          .then(theseResources => {
            resources = theseResources;
            const parseData = data =>
              Object.keys(data).reduce((result, key) => {
                  if (key.indexOf('asset_id') > -1) {
                    return result.concat(data[key]); /* eslint security/detect-object-injection : 0 */
                  }
                  return result;
                }, []);

            // register assets requirement as a list of assets ids
            const assetsRequirements = resources
              .reduce((result, resource) => {
                if (Array.isArray(resource.data)) {
                  return result.concat(resource.data.reduce((result2, item) => {
                    return result2.concat(parseData(item));
                  }, []));

                }
                return result.concat(parseData(resource.data)) ;
              }, [])
            .filter(id => id)
            .map(id =>
              new Promise((reso, rej) => {

                return assetDal.getAsset({id})
                        .then(asset => {
                          // fetch raw data for text assets
                          if (asset.mimetype.indexOf('text') === 0) {
                            return assetDal.getAssetAttachment({
                              id,
                              filename: asset.filename
                            })
                            .then(attachment => {
                              return reso({
                                ...asset,
                                rawData: attachment.data.toString()
                              });
                            });
                          }
                          return reso(asset);
                        })
                        .catch(rej);
              })
            );


            Promise.all(assetsRequirements)
              .then(theseAssets => {
                assets = theseAssets;
                resolve({
                  montage,
                  compositions: compositions,
                  resources: resources,
                  assets: assets
                  // compositions: mapify(compositions, '_id'),
                  // resources: mapify(resources, '_id'),
                  // assets: mapify(assets, '_id')
                });
              })
              .catch(reject);
          }).catch(reject);
      }).catch(reject);
  });
};
