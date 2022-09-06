/* eslint-disable import/extensions */
import express from 'express';
import { UserController } from '../controllers/index.controller.js';

const recipeRoutes = express.Router();

recipeRoutes.post('/', UserController.createRecipe);
recipeRoutes.get('/', UserController.getAllRecipe);
recipeRoutes.get('/:id', UserController.getRecipeById);
recipeRoutes.put('/:id', UserController.updateRecipe);
recipeRoutes.delete('/:id', UserController.updateRecipe);

export default recipeRoutes;
