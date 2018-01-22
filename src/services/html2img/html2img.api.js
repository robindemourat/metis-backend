/**
 * This module provides route indexes between uri patterns and controllers
 * for the html2img service.
 * @module metis-backend/services/html2img
 */


import express from 'express';

import html2img from './html2img.controller';

const router = new express.Router();

router.post('/', html2img);

export default router;
