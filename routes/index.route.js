/* eslint-disable import/extensions */
import express from 'express';
import userRoutes from './user.route.js';

const routes = express.Router();

routes.use('/users', userRoutes);

export default routes;
