/**
 * This module provides route indexes between uri patterns and controllers
 * for the dump service.
 * @module metis-backend/services/dump
 */


import express from 'express';

import {
  downloadAllData,
  uploadData,
  deleteAllData
} from './dump.controller';

const router = new express.Router();

router.get('/', downloadAllData);
router.post('/', uploadData);
router.delete('/', deleteAllData);


export default router;
