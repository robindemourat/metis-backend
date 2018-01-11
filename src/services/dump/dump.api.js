/**
 * Plurishing-backend
 * =======
 * Dump api
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
