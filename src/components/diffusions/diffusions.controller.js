// /**
//  * Plurishing-backend
//  * =======
//  * Diffusions component controller
//  */

import {
  getDiffusions as getDiffusionsDAL,
  getDiffusion as getDiffusionDAL,
  createDiffusion as createDiffusionDAL,
  updateDiffusion as updateDiffusionDAL,
  deleteDiffusion as deleteDiffusionDAL
} from './diffusions.dal';

import {controller as micropublicationController} from '../../releasers/micropublication';
import {controller as staticpublicationController} from '../../releasers/staticpublication';
import {controller as dynamicpublicationController} from '../../releasers/dynamicpublication';


/**
 * Get a list of diffusions
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 * @todo add filters handling through req queries
 */
export const getDiffusions = (req, res) =>
  res.json(getDiffusionsDAL({}));

/**
 * Get a single diffusion
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const getDiffusion = (req, res) =>
  res.json(
    getDiffusionDAL({
      id: req.params.id
    })
  );

/**
 * Create a single diffusion
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const createDiffusion = (req, res) => {
  // normally diffusion should have a 'waiting' status when provided
  const diff = {
    ...req.body,
    status: 'processing'
  };
  let diffId;
  // create the diffusion
  createDiffusionDAL(diff)
  // return the diffusion with 'processing' status
  .then(({id}) => {
    diffId = id;
    return getDiffusionDAL({id});
  })
  .then(diffusion => res.json(diffusion))
  // launch diffusion operations
  .then(() => {
    switch(diff.montage_type) {
      case 'micropublication':
        return micropublicationController.release(diff);
      case 'static':
        return staticpublicationController.release(diff);
      case 'dynamic':
        return dynamicpublicationController.release(diff);
      default:
        return Promise.resolve();
    }
  })
  // success
  .then(() =>
    updateDiffusionDAL(diffId, {...diff, status: 'success'})
  )
  // error
  .catch(() =>
    updateDiffusionDAL(diffId, {...diff, status: 'error'})
  );
};

/**
 * Update a single diffusion
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const updateDiffusion = (req, res) =>
  res.json(
    // update the diffusion
    updateDiffusionDAL(
      req.params.id,
      req.body, // for now we perform a full replace (vs merge with $set)
    )
    // return the diffusion
    .then(({id}) => getDiffusionDAL({id}))
    .then(diffusion => res.json(diffusion))
  );

/**
 * Delete a single diffusion
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const deleteDiffusion = (req, res) =>
  res.json(deleteDiffusionDAL({_id: req.params.id}));

