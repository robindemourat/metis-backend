/**
 * Plurishing-backend
 * =======
 * Deliverable api
 */

import express from 'express';

import {
  getDeliverables,
  getDeliverable,
  getDeliverableAttachment,
  createDeliverable,
  updateDeliverable,
  deleteDeliverable
} from './deliverables.controller';

const router = new express.Router();

router.get('/', getDeliverables);
router.get('/:id', getDeliverable);
router.get('/:id/:filename', getDeliverableAttachment);

router.post('/:id', createDeliverable);
router.put('/:id', updateDeliverable);
router.delete('/:id', deleteDeliverable);

export default router;
