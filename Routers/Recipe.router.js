import express from 'express';
import {createRecipee, deleteRecipeById, getRecipeeById, getrecipeedetail, updateRecipeeById} from '../Controllers/Recipe.controller.js';

const router = express.Router();

router.post('/createRecipe',createRecipee);
router.get('/getrecipee',getrecipeedetail);
router.get('/getrecipeebyid/:id',getRecipeeById);
router.put('/updateredipe/:id',updateRecipeeById);
router.delete('/deleterecipe/:id',deleteRecipeById)


export default router;