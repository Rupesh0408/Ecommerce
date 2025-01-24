//  import { measureMemory } from "vm"
import {hashPassword } from "../helpers/authHelper.js"
import userModel from "../models/userModel.js"
 
 export const registerController = async (req,res)=>{
try{
    const {name,email,password,phone,address} =  req.body;
    if(!name){
        return res.send({error:'Name is Required'})

    }
    if(!email){
        return res.send({error:"email is required"})
    }
    if(!password){
        return res.send({error:'password is required'})
    }
    if(!phone){
        return res.send({error:'phone  is required'})
    }
    if(!address){
        return res.send({error:'address is required'})
    }
    const existingUser  = await userModel.findOne({email})
    if(existingUser){
        return res.status(200).send({
            success: true,
            message: "already registered user"
        });
    }

    const hashedPassword = await hashPassword(password)
    const user = await new userModel({
        name,email,password:hashedPassword,phone,address
    }).save()
    res.status(201).send({
        success: true,
        message: "user created successfully",
       user
    })

}
 
catch(error){
    console.log(error);
    res.status(500).send({
        success: false,
        message: "Errro in Registeration"
    })
}
}
