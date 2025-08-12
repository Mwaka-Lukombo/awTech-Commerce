import {api, httpRequest} from '../config/httpRequest';




const getProducts = async()=>{
   const config = httpRequest("GET",null,null);
     const data = await fetch(api+'/products',config)
     .then((res) => res.json())
     .catch((err)=> err)

     return data;
}



export const productService = {
    getProducts
}




