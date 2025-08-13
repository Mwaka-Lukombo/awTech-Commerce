const mongoose = require('mongoose');
const Product = require ('../models/product.model');



//create an product
const createProduct = async (req,res)=>{
  const {name, price, descricao, quantidade, categoria} = req.body 
   const {name: userName } = req.user;
     const image = req.file.filename

       if(!name || !price || !descricao || !quantidade || !categoria){
          return res.status(500).json({errors:['Houve um erro inesperrado, por favor tente mais tarde!']})
       }

       //check if product exists
       const product = await Product.findOne({name:name, descricao:descricao});

       if(product){
         return res.status(401).json({success:false,errors:['O produto já foi cadastrado!']})
       }
    
          const newProduct = await Product.create( {
            name,
            price,
            descricao,
            image,
            quantidade,
            categoria,
            userName
         })


          res.status(200).json({
           success:true,
           message:"O produto foi cadastrado com sucesso!",
           product
         })

}

//delete an product
const deleteProduct = async(req,res)=>{
    const {id} = req.params 
    if(!id){
       return res.status(500).json({errors:['Houve um erro inesperado tem novamente mais tarde!']})
    }

    //find and delete
    try{
      await Product.findByIdAndDelete(new mongoose.Types.ObjectId(id))
      
      res.status(200).json({success:true, message:"O produto foi excluido com sucesso"});
      
    }catch(err){
       console.log(err)
    }    
}

//get all products
const getProducts = async(req,res)=>{

  try{
     const Products = await Product.find().sort({createdAt:-1});

     res.status(200).json(Products)
   }catch(err){
     console.log(err)
   }

}


module.exports ={
    createProduct,
    deleteProduct,
    getProducts
}







