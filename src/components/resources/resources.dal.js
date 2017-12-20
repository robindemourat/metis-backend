/**
 * Plurishing-backend
 * =======
 * Resource data access layer
 */

import db from '../../utils/plugDb';

import {Resource as schema} from 'plurishing-schemas';
import design from './resources.design';
import {addDesign} from '../../utils/couchdb';
import {dataIsValid} from '../../utils/schemas';

/**
 * Registering couchdb views related to resources objects
 */
addDesign(db, 'resources', design);


/**
 * Gets a list of resources with optional query params
 * @param {object} parameters
 * @return {Promise}
 */
export const getResources = ({
  // query = {},
  include_docs = true
}) => {
  return db.viewAsync('resources', 'by_id', {
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
 * Gets a resource with a specific id or email
 * @param {object} parameters
 * @return {Promise}
 */
export const getResource = ({
  id
}) =>
  db.getAsync(id)
      .then(resource =>
        // verify that data is compliant before returning it
        dataIsValid(resource, schema)
      );

/**
 * Creates a new resource
 * @param {object} resource
 * @return {Promise}
 */
export const createResource = resource =>
  dataIsValid(resource, schema)
    .then(() => db.insertAsync(resource));

/**
 * Updates a resource
 * @param {string} id - id of resource to update
 * @param {object} resource - data to update
 * @return {Promise}
 */
export const updateResource = (id, resource) =>
  // validate
  dataIsValid(resource, schema)
    // get existing document
    .then(() => db.getAsync(id))
    // update with new rev
    .then(resourceDb =>
        db.insertAsync({
          ...resource,
          _rev: resourceDb._rev
        }, resourceDb._id)
    );

/**
 * Deletes a resource
 * @param {object} resource - resource to delete
 * @return {Promise}
 */
export const deleteResource = ({_id}) =>
  db.getAsync(_id)
    .then(resource => db.destroyAsync(_id, resource._rev));
