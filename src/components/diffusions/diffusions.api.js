/**
 * This module provides route indexes between uri patterns and controllers
 * for the diffusions objects.
 * @module metis-backend/components/diffusions
 */
import express from 'express';

import {
  getDiffusions,
  getDiffusion,
  createDiffusion,
  updateDiffusion,
  deleteDiffusion
} from './diffusions.controller';

const router = new express.Router();

router.get('/', getDiffusions);
router.get('/:id', getDiffusion);
router.post('/', createDiffusion);
router.put('/:id', updateDiffusion);
router.delete('/:id', deleteDiffusion);

export default router;
