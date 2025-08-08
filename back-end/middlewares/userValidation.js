
const {body} = require('express-validator');







const registerValidation = ()=>{
   return[
      body('name')
      .isString()
      .withMessage("O campo de nome e obrigatorio"),
      body("email")
      .isString()
      .withMessage("O campo de e-mail e obrigatorio!"),
      body("password")
      .isString()
      .withMessage("A senha e obrigatoria")
      .isLength({min:3})
      .withMessage("A senha deve ter mais de 3 caracteres!")
   ]
}




module.exports = {
    registerValidation
}






