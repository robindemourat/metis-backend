/**
 * Plurishing-backend
 * =======
 * Composition data access layer
 */

import db from '../../utils/plugDb';

import {Composition as schema} from 'plurishing-schemas';
import design from './compositions.design';
import {addDesign} from '../../utils/couchdb';
import {dataIsValid} from '../../utils/schemas';

/**
 * Registering couchdb views related to compositions objects
 */
addDesign(db, 'compositions', design);


/**
 * Gets a list of compositions with optional query params
 * @param {object} parameters
 * @return {Promise}
 */
export const getCompositions = ({
  // query = {},
  include_docs = true
}) => {
  return db.viewAsync('compositions', 'by_id', {
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
 * Gets a composition with a specific id or email
 * @param {object} parameters
 * @return {Promise}
 */
export const getComposition = ({
  id
}) =>
  db.getAsync(id)
      .then(composition =>
        // verify that data is compliant before returning it
        dataIsValid(composition, schema)
      );

/**
 * Creates a new composition
 * @param {object} composition
 * @return {Promise}
 */
export const createComposition = composition =>
  dataIsValid(composition, schema)
    .then(() => db.insertAsync(composition));

/**
 * Updates a composition
 * @param {string} id - id of composition to update
 * @param {object} composition - data to update
 * @return {Promise}
 */
export const updateComposition = (id, composition) =>
  // validate
  dataIsValid(composition, schema)
    // get existing document
    .then(() => db.getAsync(id))
    // update with new rev
    .then(compositionDb =>
        db.insertAsync({
          ...composition,
          _rev: compositionDb._rev
        }, compositionDb._id)
    );

/**
 * Deletes a composition
 * @param {object} composition - composition to delete
 * @return {Promise}
 */
export const deleteComposition = ({_id}) =>
  db.getAsync(_id)
    .then(composition => db.destroyAsync(_id, composition._rev));
