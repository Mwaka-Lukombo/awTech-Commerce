
const router = require('express').Router();


//controller
const {register, login,update, getUsers, deleteUser} = require('../controllers/userController');


//middlewares
const validator = require('../middlewares/handleValidation');
const {registerValidation} = require('../middlewares/userValidation');
const uploadFile = require('../middlewares/uploadFile');
const AuthGuard = require('../middlewares/authGuard');


//routes
router.post('/register',registerValidation(),validator,register);
router.post('/login',login);
router.put("/update",AuthGuard,uploadFile.single("profileImage"),update);
router.get("/users",getUsers);
router.delete("/:id",deleteUser)





module.exports = router;

















