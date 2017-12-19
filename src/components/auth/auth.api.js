import express from 'express';

import {
  login,
  resetPassword,
  signup
} from './auth.controller';

const router = new express.Router();

router.post('/request-password-reset', resetPassword);
router.post('/sign-up', signup);
router.post('/login', login);
router;

export default router;
