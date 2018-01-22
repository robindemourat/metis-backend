/**
 * This module provides route indexes between uri patterns and controllers
 * for the data provider service.
 * @module metis-backend/services/data-provider
 */


import express from 'express';

import {getMontageData, getAssetAttachment} from './data-provider.controller';

const router = new express.Router();

router.get('/montage/:id', getMontageData);
router.get('/asset/:id', getAssetAttachment);

export default router;
