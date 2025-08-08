
const router = require('express').Router();


//controller
const {register} = require('../controllers/userController');


//middlewares
const validator = require('../middlewares/handleValidation');
const {registerValidation} = require('../middlewares/userValidation');


//routes
router.post('/login',registerValidation(),validator,register)





module.exports = router;

















