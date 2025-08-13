import { api, httpRequest } from "../config/httpRequest";




const register = async(dataUser)=>{
   const config = httpRequest("POST",dataUser);
     const data = await fetch(api+'/user/register',config);
      const res = await data.json();

     if(res){
        localStorage.setItem("user", JSON.stringify(res))
     }

     return res;
}



export const userService = {
    register
}







