import {dal as compositionDal} from '../components/compositions';
import {dal as resourceDal} from '../components/resources';
import {dal as assetDal} from '../components/assets';

const mapify = (collection = [], key = 'id') =>
  collection.reduce((result, item) => ({
    ...result,
    [item[key]]: item/* eslint security/detect-object-injection : 0 */
  }), {});

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
            const assetsRequirements = resources.reduce((result, resource) => {
              const assetKeys = Object.keys(resource.data).filter(key => key.indexOf('asset_id') > -1);
              const assetMentions = assetKeys.map(key =>
                resource.data[key]);/* eslint security/detect-object-injection : 0 */
              return result.concat(assetMentions || []);
            }, [])
            .filter(id => id)
            .map(id => assetDal.getAsset({id}));

            Promise.all(assetsRequirements)
              .then(theseAssets => {
                assets = theseAssets;

                resolve({
                  montage,
                  compositions: mapify(compositions, '_id'),
                  resources: mapify(resources, '_id'),
                  assets: mapify(assets, '_id')
                });
              })
              .catch(reject);
          }).catch(reject);
      }).catch(reject);
  });
};
