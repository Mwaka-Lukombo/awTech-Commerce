require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;



const generateToken = (userId)=>{
    jwt.sign({userId},secret,{expiresIn:"5d"})
}



//register an user
const register = async(req,res)=>{
   const {name, email, password} = req.body

   if(!name || !email || !password){
     return res.status(401).json({errors:['Houve um erro inesperrado, por favor tente mais tarde!']})
   }

   //check if user exists
   const user = await User.findOne({email:email});

   if(user){
     return res.status(401).json({errors:['O usuário já existe']})
   }

   //create password hash
   const Salt = await bcrypt.genSalt(12);
    const newPassword = await bcrypt.hash(password, Salt);

       
      const newUser = await User.create({
         name,
         email,
         password: newPassword
      })

      
    //genearte token
    const token = generateToken(newUser._id);

      res.status(201).json({newUser,token});
      return {success:true, message:"Usuario cadastrado com sucesso!"}
}



module.exports = {
    register
}





