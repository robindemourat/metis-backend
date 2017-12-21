// /**
//  * Plurishing-backend
//  * =======
//  * Montages component controller
//  */

import {
  getMontages as getMontagesDAL,
  getMontage as getMontageDAL,
  createMontage as createMontageDAL,
  updateMontage as updateMontageDAL,
  deleteMontage as deleteMontageDAL
} from './montages.dal';

/**
 * Get a list of montages
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 * @todo add filters handling through req queries
 */
export const getMontages = (req, res) =>
  res.json(getMontagesDAL({}));

/**
 * Get a single montage
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const getMontage = (req, res) =>
  res.json(
    getMontageDAL({
      id: req.params.id
    })
  );

/**
 * Create a single montage
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const createMontage = (req, res) =>
  // create the montage
  createMontageDAL({
          ...req.body,
          type: 'montage'
        })
  // return the montage
  .then(({id}) => getMontageDAL({id}))
  .then(montage => res.json(montage));

/**
 * Update a single montage
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const updateMontage = (req, res) =>
  res.json(
    // update the montage
    updateMontageDAL(
      req.params.id,
      req.body, // for now we perform a full replace (vs merge with $set)
    )
    // return the montage
    .then(({id}) => getMontageDAL({id}))
    .then(montage => res.json(montage))
  );

/**
 * Delete a single montage
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const deleteMontage = (req, res) =>
  res.json(deleteMontageDAL({_id: req.params.id}));

