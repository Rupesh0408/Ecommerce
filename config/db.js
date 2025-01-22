import  dotenv from "dotenv";
import mongoose from "mongoose"
import express from "express";

try{
    const connect  = mongoose.connect(process.env.MONO_URL);
    console.log("Connected to MongoDB")
}
catch(error){
    console.log(`Connecting to the Server ${error}`)
}