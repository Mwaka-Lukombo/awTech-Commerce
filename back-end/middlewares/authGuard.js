require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const secret = process.env.SECRET;



const AuthGuard = async (req,res,next)=>{
  const Header = req.headers.authorization;
    const token = Header && Header.split(" ")[1];


    if(!token){
        return res.status(401).json({errors:['Acesso negado!']})
    }

     try{       
       //verificar o token
        const verify = await jwt.verify(token,secret);
        req.user = await User.findById(verify.userId).select("-password");
        next();
     }catch(err){
        return res.status(401).json({errors:['Token invalido!']})
     }
}





module.exports = AuthGuard;






