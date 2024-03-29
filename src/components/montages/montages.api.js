/**
 * This module provides route indexes between uri patterns and controllers
 * for the montages objects.
 * @module metis-backend/components/montages
 */

import express from 'express';

import {
  getMontages,
  getMontage,
  createMontage,
  updateMontage,
  deleteMontage
} from './montages.controller';

const router = new express.Router();

router.get('/', getMontages);
router.get('/:id', getMontage);
router.post('/', createMontage);
router.put('/:id', updateMontage);
router.delete('/:id', deleteMontage);

export default router;
