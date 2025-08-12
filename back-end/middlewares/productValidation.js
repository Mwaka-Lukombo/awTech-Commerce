const {body} = require('express-validator');





const createProductValidation = ()=>{
    return[
        body('name')
        .isString()
        .withMessage('O nome do produto e obrigatorio!'),
        body('price')
        .isString()
        .withMessage('Digite o preco do produto'),
        body("descricao")
        .isString()
        .withMessage("A descricacao e obrigatoria!")
        ,
        body('quantidade')
        .isString()
        .withMessage('Digite a quantidade do produto'),
        body('categoria')
        .isString()
        .withMessage("Digite a categoria do produto")
    ]
}


module.exports = {
    createProductValidation
}












