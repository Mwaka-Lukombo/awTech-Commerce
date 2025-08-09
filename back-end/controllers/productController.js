const mongoose = require('mongoose');
const Product = require ('../models/product.model');




const createProduct = async (req,res)=>{
  const {name, price, descricao, quantidade, categoria} = req.body 
   const {userName } = req.user;
     const image = req.file

       if(!name || !price || !descricao || !quantidade || !categoria){
          return res.status(500).json({errors:['Houve um erro inesperrado, por favor tente mais tarde!']})
       }

       //check if product exists
       const product = await Product.findOne({name:name, descricao:descricao});

       if(product){
         return res.status(401).json({errors:['O produto já foi cadastrado!']})
       }

       try{
          const newProduct = await Product.create( {
            name,
            price,
            descricao,
            image,
            quantidade,
            categoria,
            userName
         })

         res.status(200).json(newProduct);
         return {success:true, message:"Produto cadastrado com sucesso!"}
       }catch(err){
         return res.status(400).json({errors:['Falha ao cadastrar usuario!']})
       }

}



module.exports ={
    createProduct
}







