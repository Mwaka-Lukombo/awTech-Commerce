const multer = require('multer');
const path = require('path');




const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        let folder = '';

        if(req.baseUrl.includes("user")){
            folder = '/users'
        }else if(req.baseUrl.includes("products")){
            folder = '/products'
        }
        cb(null, `uploads/${folder}`);
    },
    filename:(req,file,cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const uploadFile = multer({storage});
module.exports = uploadFile;







