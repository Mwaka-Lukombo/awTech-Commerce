require('dotenv').config();
require('./config/db');
const express = require('express');
const port = process.env.PORT || 5000;
const cors = require('cors');


const app = express();



//json config
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());


//static files
app.use('/uploads',express.static('uploads'));


//front-end config
app.use(cors());


//routes
const Router = require('./routes/Router');
app.use(Router);



app.listen(port, ()=>{
    console.log("App iniciado na porta "+port)
})

















