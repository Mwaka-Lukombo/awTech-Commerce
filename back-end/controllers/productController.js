const mongoose = require('mongoose');
const Product = require ('../models/product.model');
const Carrinho = require('../models/carrinho.model');



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

//add products to cart
const carrinho = async(req,res)=>{
   const {id} = req.params
     const {
      name,
      price,
      image,
      quantidade,
      descricao,
      userId,
      userName
     } = req.body 

     if(!id){
        return res.status(401).json({errors:['Houve um erro tente novamente mais tarde!']})
     }

     //check if products exists in cart
     const Product = await Carrinho.findOne({descricao:descricao,userId:userId});

     if(Product){
       return res.status(400).json({errors:['O Produto já esta no carrinho']})
     }

     try{
        const productCart = await Carrinho.create({
          produtoId:id,
          name,
          price,
          image,
          quantidade,
          descricao,
          userName,
          userId
        })

        res.status(200).json(productCart)
     }catch(error){
        console.log(error)
     }

 
}

//select products cart
const getProductsCart = async(req,res)=>{
  const userId = req.user._id;
   const userName = req.user.name

  
  const Products = await Carrinho.find({userId:userId});

  if(!Products){
    return res.status(404).json({errors:['Carrinho Vazio!']})
  }

  res.status(201).json(Products)
}  

//delete cart product
const deleteCart = async(req,res)=>{
  const {id} = req.params

  if(!id){
     return res.status(401).json({errors:['Houve um erro tente novamente mais tarde!']})
  }

  const product = await Carrinho.findById(id);

  if(!product){
    return res.status(404).json({errors:['O produto nao existe!']})
  }

   await Carrinho.deleteOne(product)
   res.status(200).json({success:true,message:"Produto deletado com sucesso!"})
 


}


module.exports ={
    createProduct,
    deleteProduct,
    getProducts,
    carrinho,
    getProductsCart,
    deleteCart
}







