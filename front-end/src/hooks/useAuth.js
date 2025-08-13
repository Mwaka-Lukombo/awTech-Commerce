
import { useState, useEffect } from "react";

//redux
import {useSelector} from 'react-redux';



export const useAuth = ()=>{
    const [Auth,setAuth] = useState(false);
     const [loading, setLoading] = useState(false);
       const {user} = useSelector((state) => state.user);

       useEffect(()=>{
          if(user){
            setAuth(true);
          }else{
            setAuth(false);
          }

          setLoading(false);
       },[user])

       return {Auth, loading};
}









