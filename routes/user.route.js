/* eslint-disable import/extensions */
import express from 'express';
import { UserController } from '../controllers/index.controller.js';

const userRoutes = express.Router();

userRoutes.post('/', UserController.createUser);
userRoutes.post('/login', UserController.loginUser);
export default userRoutes;
