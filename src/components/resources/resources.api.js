/**
 * This module provides route indexes between uri patterns and controllers
 * for the resources objects.
 * @module metis-backend/components/resources
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
