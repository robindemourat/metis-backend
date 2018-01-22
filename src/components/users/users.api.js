/**
 * This module provides route indexes between uri patterns and controllers
 * for the users objects.
 * @module metis-backend/components/users
 */

import express from 'express';

import {
  getUsers,
  getUser,
  createUser,
  changeUserPassword,
  updateUser,
  deleteUser
} from './users.controller';

const router = new express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
// password change is particularly protected (only own user can access it)
router.post('/change-password', changeUserPassword);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
