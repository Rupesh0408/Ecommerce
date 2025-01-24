import  dotenv from "dotenv";
import mongoose from "mongoose"
import express from "express";


    const connectDB  = async()=>{
        try{
            const conn = await mongoose.connect(process.env.MONOGO_URL);
        console.log(`connected to the monogodb ${conn.connection.host}`)
    } 
    catch(error){
        console.log(`Connecting to the Server ${error}`)
    }
}


export default connectDB;