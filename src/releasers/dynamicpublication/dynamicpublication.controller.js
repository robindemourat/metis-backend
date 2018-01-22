/**
 * This module a function for releasing a dynamic publication through
 * one or several formats/channels
 * @module metis-backend/releasers/dynamicpublication
 */

import {dal as montageDal} from '../../components/montages';
import {fetchMontageDependencies} from '../../utils/data';

import web from '../web';

export const release = (diffusion) => {
  return new Promise ((resolve, reject) => {
    // get related montage
    montageDal.getMontage({id: diffusion.montage_id})
      .then(montage => {
        // fetch montage dependencies
        return fetchMontageDependencies(montage);
      })
      // register all release operations to perform
      .then(data => {
        const targets = diffusion.parameters.targets;
        const operations = targets.map(targetId => {
          switch(targetId) {

            case 'web':
              return web(data, diffusion);

            default:
              return Promise.resolve();
          }
        });
        // execute
        return Promise.all(operations);
      })
      .then(resolve)
      .catch(reject);
  });
};
