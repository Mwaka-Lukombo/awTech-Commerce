const {validationResult} = require('express-validator');





const handleValidation = (req,res,next)=>{
    const errors = validationResult(req);


    if(errors.isEmpty()){
        return next();
    }

    const extractedErros = [];

    errors.array().map((error)=> extractedErros.push(error.msg));

    return res.status(422).json({
        errors:extractedErros
    })
}



module.exports = handleValidation;










