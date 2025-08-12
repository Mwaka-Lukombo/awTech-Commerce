export const api = `http://localhost:5000/api`;
export const uploads = `http://localhost:5000/uploads`;


export const httpRequest = (method,data,token = null, image = null)=>{
     let config;

     if(method === "POST"){

        if(token){
            config.headers.Authorization = `Berar ${token}`;
        }
        config = {
            method,
            headers:{
              'Content-Type':'application/json'  
            },
            body:JSON.stringify(data)
        }

        return config;
     }else if(method === "DELETE" || data === null){
         config = {
            method,
            headers:{}
         }

         return config;
     }
}



