
const router = require('express').Router();


//controller
const {register, login} = require('../controllers/userController');


//middlewares
const validator = require('../middlewares/handleValidation');
const {registerValidation} = require('../middlewares/userValidation');


//routes
router.post('/register',registerValidation(),validator,register);
router.post('/login',login)





module.exports = router;

















