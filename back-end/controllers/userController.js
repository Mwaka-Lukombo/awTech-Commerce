require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;



const generateToken = (userId)=>{
  const token =  jwt.sign({userId},secret,{expiresIn:"5d"})

  return token;
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


//login 
const login = async(req,res)=>{
    const {email, password} = req.body;
    

    if(!email || !password){
       return res.status(401).json({errors:['As suas credenciais são necessarias']})
    }

    //check if user exists
    const user = await User.findOne({email:email});

    if(!user){
      return res.status(404).json({errors:['O usuario não existe!']})
    }

    //check password
    if(!(await(bcrypt.compare(password, user.password)))){
       return res.status(401).json({errors:['A palavra passe não confere!']})
    }
     

     //generate token
     const token = generateToken(user._id);
     res.status(200).json({user,token})

     return {success:true, message:"Login efetuado com sucesso!"}
}


module.exports = {
    register,
    login 
}





