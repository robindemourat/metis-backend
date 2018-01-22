
/**
 * Metis-backend
 * =======
 * Data provider api
 */

import express from 'express';

import {getMontageData, getAssetAttachment} from './data-provider.controller';

const router = new express.Router();

router.get('/montage/:id', getMontageData);
router.get('/asset/:id', getAssetAttachment);

export default router;
