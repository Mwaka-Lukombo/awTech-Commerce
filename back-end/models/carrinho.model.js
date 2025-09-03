const mongoose = require('mongoose');
const {Schema} = mongoose;



const SchemaCarrinho = new Schema({
   produtoId:{type:mongoose.Types.ObjectId, required:true},
   name:{type:String, required:true},
   price:{type:Number, required:true},
   image:{type:String, required:true},
   quantidade:{type:Number, default:1},
   descricao:{type:String,required:true},
   userName:{type:String, required:true},
   userId:{type:mongoose.Types.ObjectId,required:true}
},{
    timestamps:true
})



const Carrinho = mongoose.model("Carrinho",SchemaCarrinho);
module.exports = Carrinho;







