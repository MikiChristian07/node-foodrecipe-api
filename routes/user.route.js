import express from 'express';
import UserController from '../controllers/user.controller.js'

const userRoutes = express.Router();

userRoutes.post('users/', UserController.createUser)

export default userRoutes;