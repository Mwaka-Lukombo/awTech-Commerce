const mongoose = require('mongoose');
const {Schema} = mongoose;



const SchemaProduct = new Schema({
    name:{type:String, required:true},
    price:{type:String, required:true},
    descricao:{type:String, require:true},
    image:String,
    quantidade:{type:Number, required:true},
    categoria:{type:String, required:true},
    userName:String
},{
    collection:"products",
    timestamps:true
})






const Product = mongoose.model('Product', SchemaProduct);

module.exports = Product;








