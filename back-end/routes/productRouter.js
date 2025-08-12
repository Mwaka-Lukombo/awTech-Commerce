const router = require('express').Router();


//controller
const {createProduct, deleteProduct, getProducts} = require('../controllers/productController');


//middlewares
const AuthGuard = require('../middlewares/authGuard');
const validator = require('../middlewares/handleValidation');
const uploadFile = require('../middlewares/uploadFile');
const {createProductValidation} = require('../middlewares/productValidation');


//routes
router.get('/',getProducts);
router.post('/',AuthGuard,uploadFile.single("image"),validator,createProduct);
router.delete('/:id',AuthGuard,deleteProduct);





module.exports = router;











