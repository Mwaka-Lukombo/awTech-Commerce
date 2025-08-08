const express = require('express');
const router = express.Router();




router.use('/api/user/',require('../routes/userRouter'));

router.get('/', async(req,res)=>{
    res.json({msg:"Chamando o router da aplicacao"})
})







module.exports = router;









