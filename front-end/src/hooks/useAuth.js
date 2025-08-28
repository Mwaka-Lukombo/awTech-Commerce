
import { useState, useEffect } from "react";

//redux
import {useSelector} from 'react-redux';
import { authStore } from "../store/authStore";



export const useAuth = ()=>{
   const user = authStore((state) => state.user);
    const Auth = !!user;

    return Auth;    
}









