/**
 * This module provides route indexes between uri patterns and controllers
 * for the compositions objects.
 * @module metis-backend/components/compositions
 */

import express from 'express';

import {
  getCompositions,
  getComposition,
  createComposition,
  updateComposition,
  deleteComposition
} from './compositions.controller';

const router = new express.Router();

router.get('/', getCompositions);
router.get('/:id', getComposition);
router.post('/', createComposition);
router.put('/:id', updateComposition);
router.delete('/:id', deleteComposition);

export default router;
