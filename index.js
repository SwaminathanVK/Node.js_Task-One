import express from 'express';
import dotenv from 'dotenv';
import ConnectDB from "./Database/Config.js";
import recipeRouter from './Routers/Recipe.router.js';




dotenv.config();

const app = express();
app.use(express.json());


const PORT = process.env.PORT;

ConnectDB();

app.use('/api', recipeRouter);

app.listen(5001, ()=>{
    console.log('server is running')
})
