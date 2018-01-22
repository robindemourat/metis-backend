/**
 * Metis-backend
 * =======
 * Resource api
 */

import express from 'express';

import {
  getResources,
  getResource,
  createResource,
  updateResource,
  deleteResource
} from './resources.controller';

const router = new express.Router();

router.get('/', getResources);
router.get('/:id', getResource);
router.post('/', createResource);
router.put('/:id', updateResource);
router.delete('/:id', deleteResource);

export default router;
