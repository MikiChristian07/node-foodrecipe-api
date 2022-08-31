import express from 'express';
import { UserController } from '../controllers/index.controller.js';

const userRoutes = express.Router();

userRoutes.post('/', UserController.createUser)

export default userRoutes;