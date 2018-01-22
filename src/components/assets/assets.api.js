/**
 * Metis-backend
 * =======
 * Asset api
 */

import express from 'express';

import {
  getAssets,
  getAsset,
  getAssetAttachment,
  createAsset,
  updateAsset,
  deleteAsset
} from './assets.controller';

const router = new express.Router();

router.get('/', getAssets);
router.get('/:id', getAsset);
router.get('/:id/:filename', getAssetAttachment);

router.post('/:id', createAsset);
router.put('/:id', updateAsset);
router.delete('/:id', deleteAsset);

export default router;
