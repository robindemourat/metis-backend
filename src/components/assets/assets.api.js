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

import {
  authenticateWithTokens
} from '../../utils/middlewares';

const router = new express.Router();

// only this route is public
router.get('/:id/:filename', getAssetAttachment);

// other routes are protected by an access token
router.use(authenticateWithTokens);

router.get('/', getAssets);
router.get('/:id', getAsset);

router.post('/:id', createAsset);
router.put('/:id', updateAsset);
router.delete('/:id', deleteAsset);

export default router;
