// /**
//  * Plurishing-backend
//  * =======
//  * Compositions component controller
//  */

import {
  getCompositions as getCompositionsDAL,
  getComposition as getCompositionDAL,
  createComposition as createCompositionDAL,
  updateComposition as updateCompositionDAL,
  deleteComposition as deleteCompositionDAL
} from './compositions.dal';

/**
 * Get a list of compositions
 * @param {object} req - the request of query
 * @param {object} res - the composition of query
 * @todo add filters handling through req queries
 */
export const getCompositions = (req, res) =>
  res.json(getCompositionsDAL({}));

/**
 * Get a single composition
 * @param {object} req - the request of query
 * @param {object} res - the composition of query
 */
export const getComposition = (req, res) =>
  res.json(
    getCompositionDAL({
      id: req.params.id
    })
  );

/**
 * Create a single composition
 * @param {object} req - the request of query
 * @param {object} res - the composition of query
 */
export const createComposition = (req, res) =>
  // create the composition
  createCompositionDAL({
          ...req.body,
          type: 'composition'
        })
  // return the composition
  .then(({id}) => getCompositionDAL({id}))
  .then(composition => res.json(composition));

/**
 * Update a single composition
 * @param {object} req - the request of query
 * @param {object} res - the composition of query
 */
export const updateComposition = (req, res) =>
  res.json(
    // update the composition
    updateCompositionDAL(
      req.params.id,
      req.body, // for now we perform a full replace (vs merge with $set)
    )
    // return the composition
    .then(({id}) => getCompositionDAL({id}))
    .then(composition => res.json(composition))
  );

/**
 * Delete a single composition
 * @param {object} req - the request of query
 * @param {object} res - the composition of query
 */
export const deleteComposition = (req, res) =>
  res.json(deleteCompositionDAL({_id: req.params.id}));

