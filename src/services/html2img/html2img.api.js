

/**
 * Plurishing-backend
 * =======
 * Html to image api
 */

import express from 'express';

import html2img from './html2img.controller';

const router = new express.Router();

router.post('/', html2img);

export default router;
