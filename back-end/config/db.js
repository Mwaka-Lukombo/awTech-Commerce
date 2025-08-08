require('dotenv').config();
const mongoose = require('mongoose');


const DB_NAME = process.env.DB_NAME;
const DB_PASS = process.env.DB_PASS;






async function connect(){

     try{
        const conn = await mongoose.connect(`mongodb+srv://${DB_NAME}:${DB_PASS}@cluster0.tyhrl.mongodb.net/awTechCommerce?retryWrites=true&w=majority&appName=Cluster0`);
        console.log("Conexao com o banco!");
        
        return conn;
     }catch(err){
        console.log(err)
     }
 
}


connect();
















