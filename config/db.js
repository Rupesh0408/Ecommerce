import  dotenv from "dotenv";
import mongoose from "mongoose"
import express from "express";


    const connectDB  = async()=>{
        try{
       await mongoose.connect(process.env.MONOGO_URL);
        console.log("Connected to mongo")
    } 
    catch(error){
        console.log(`Connecting to the Server ${error}`)
    }
}


export default connectDB;