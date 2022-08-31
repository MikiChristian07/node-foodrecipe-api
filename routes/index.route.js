import express from 'express';
import userRoutes from './user.route.js'

const routes = express.Router();

routes.post('users/', userRoutes)

export default routes;