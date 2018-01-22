/**
 * Metis-backend
 * =======
 * Diffusion data access layer
 */

import db from '../../utils/plugDb';

import {Diffusion as schema} from 'metis-schemas';
import design from './diffusions.design';
import {addDesign} from '../../utils/couchdb';
import {dataIsValid} from '../../utils/schemas';

/**
 * Registering couchdb views related to diffusions objects
 */
addDesign(db, 'diffusions', design);


/**
 * Gets a list of diffusions with optional query params
 * @param {object} parameters
 * @return {Promise}
 */
export const getDiffusions = ({
  // query = {},
  include_docs = true
}) => {
  return db.viewAsync('diffusions', 'by_id', {
      include_docs
    }).then(
      results =>
        new Promise(
          resolve =>
            resolve(
              results.rows.map(doc => doc.doc)
            )
          )
    );
};

/**
 * Gets a diffusion with a specific id
 * @param {object} parameters
 * @return {Promise}
 */
export const getDiffusion = ({
  id
}) =>
  db.getAsync(id)
      .then(diffusion =>
        // verify that data is compliant before returning it
        dataIsValid(diffusion, schema)
      );

/**
 * Creates a new diffusion
 * @param {object} diffusion
 * @return {Promise}
 */
export const createDiffusion = diffusion =>
  dataIsValid(diffusion, schema)
    .then(() => db.insertAsync(diffusion));

/**
 * Updates a diffusion
 * @param {string} id - id of diffusion to update
 * @param {object} diffusion - data to update
 * @return {Promise}
 */
export const updateDiffusion = (id, diffusion) =>
  // validate
  dataIsValid(diffusion, schema)
    // get existing document
    .then(() => db.getAsync(id))
    // update with new rev
    .then(diffusionDb =>
        db.insertAsync({
          ...diffusion,
          _rev: diffusionDb._rev
        }, diffusionDb._id)
    );

/**
 * Deletes a diffusion
 * @param {object} diffusion - diffusion to delete
 * @return {Promise}
 */
export const deleteDiffusion = ({_id}) =>
  db.getAsync(_id)
    .then(diffusion => db.destroyAsync(_id, diffusion._rev));
