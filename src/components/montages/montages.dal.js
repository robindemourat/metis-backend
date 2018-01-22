/**
 * This module provides couchdb database operations managers
 * for the montages component.
 * @module metis-backend/components/montages
 */

import db from '../../utils/plugDb';

import {Montage as schema} from 'metis-schemas';
import design from './montages.design';
import {addDesign} from '../../utils/couchdb';
import {dataIsValid} from '../../utils/schemas';

/**
 * Registering couchdb views related to montages objects
 */
addDesign(db, 'montages', design);


/**
 * Gets a list of montages with optional query params
 * @param {object} parameters
 * @return {Promise}
 */
export const getMontages = ({
  // query = {},
  include_docs = true
}) => {
  return db.viewAsync('montages', 'by_id', {
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
 * Gets a montage with a specific id
 * @param {object} parameters
 * @return {Promise}
 */
export const getMontage = ({
  id
}) =>
  db.getAsync(id)
      .then(montage =>
        // verify that data is compliant before returning it
        dataIsValid(montage, schema)
      );

/**
 * Creates a new montage
 * @param {object} montage
 * @return {Promise}
 */
export const createMontage = montage =>
  dataIsValid(montage, schema)
    .then(() => db.insertAsync(montage));

/**
 * Updates a montage
 * @param {string} id - id of montage to update
 * @param {object} montage - data to update
 * @return {Promise}
 */
export const updateMontage = (id, montage) =>
  // validate
  dataIsValid(montage, schema)
    // get existing document
    .then(() => db.getAsync(id))
    // update with new rev
    .then(montageDb =>
        db.insertAsync({
          ...montage,
          _rev: montageDb._rev
        }, montageDb._id)
    );

/**
 * Deletes a montage
 * @param {object} montage - montage to delete
 * @return {Promise}
 */
export const deleteMontage = ({_id}) =>
  db.getAsync(_id)
    .then(montage => db.destroyAsync(_id, montage._rev));
