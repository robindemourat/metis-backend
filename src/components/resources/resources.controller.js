// /**
//  * Plurishing-backend
//  * =======
//  * Resources component controller
//  */

import {
  getResources as getResourcesDAL,
  getResource as getResourceDAL,
  createResource as createResourceDAL,
  updateResource as updateResourceDAL,
  deleteResource as deleteResourceDAL
} from './resources.dal';

/**
 * Get a list of resources
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 * @todo add filters handling through req queries
 */
export const getResources = (req, res) =>
  res.json(getResourcesDAL({}));

/**
 * Get a single resource
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const getResource = (req, res) =>
  res.json(
    getResourceDAL({
      id: req.params.id
    })
  );

/**
 * Create a single resource
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const createResource = (req, res) =>
  // create the resource
  createResourceDAL({
          ...req.body,
          type: 'resource'
        })
  // return the resource
  .then(({id}) => getResourceDAL({id}))
  .then(resource => res.json(resource));

/**
 * Update a single resource
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const updateResource = (req, res) =>
  res.json(
    // update the resource
    updateResourceDAL(
      req.params.id,
      req.body, // for now we perform a full replace (vs merge with $set)
    )
    // return the resource
    .then(({id}) => getResourceDAL({id}))
    .then(resource => res.json(resource))
  );

/**
 * Delete a single resource
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const deleteResource = (req, res) =>
  res.json(deleteResourceDAL({_id: req.params.id}));

