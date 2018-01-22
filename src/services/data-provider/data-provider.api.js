
/**
 * Metis-backend
 * =======
 * Data provider api
 */

import express from 'express';

import {getMontageData, getAssetAttachmentUrl} from './data-provider.controller';

const router = new express.Router();

router.get('/montage/:id', getMontageData);
router.get('/asset/:id', getAssetAttachmentUrl);

export default router;
