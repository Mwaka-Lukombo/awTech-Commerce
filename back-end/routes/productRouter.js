const router = require('express').Router();


//controller
const {createProduct} = require('../controllers/productController');


//middlewares
const AuthGuard = require('../middlewares/authGuard');
const validator = require('../middlewares/handleValidation');
const uploadFile = require('../middlewares/uploadFile');
const {createProductValidation} = require('../middlewares/productValidation');


//routes
router.post('/',AuthGuard,createProductValidation(), validator,uploadFile.single("image"),createProduct);






module.exports = router;











