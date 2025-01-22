import express from 'express'
const app = express();
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js';
dotenv.config();
connectDB();

app.use(morgan('dev'))
//middleware to req and res the json data

app.use(express.json())

app.get('/hello',(req,res)=>{
    console.log("hello")
})

app.get('/biccccccc',(req,res)=>{
    res.send(`my app running at`)
})
const PORT =5000;


app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}` );
})