import {create} from 'zustand';
import {axiosInstance} from '../lib/axioInstance';
import toast from 'react-hot-toast';
import { authStore } from './authStore';


export const productStore = create((set,get) => ({
  isLoading:false,
  product:{},
  products:[],
  carrinhoProduct:[],
  createProduct:async(data)=>{
    set({isLoading:true});
    const {user} = authStore.getState();
    try{
        const res = await axiosInstance.post('/api/products',data,{
            headers:{
                Authorization: `Bearer ${user.token}`
            }
        });
        set({product:res.data});
        toast.success("O produto foi cadastrado com sucesso!")
    }catch(error){
      console.log("Houve um erro ao cadastrar o produto",error);
      toast.error(error.response.data.errors);
    }finally{
        set({isLoading:false})
    }
  },
  addCart:async(data)=>{
    set({isLoading:true});
    const {user} = authStore.getState();
    try{
       const res = await axiosInstance.post(`/api/products/carrinho/${data._id}`,data,{
         headers:{
          Authorization:`Bearer ${user?.token}`
         }
       })
       toast.success("Produto no carrinho")
    }catch(error){
      console.log("Teve um erro ao adicionar no carrinho",error);
      toast.error(error.response.data.errors);
    }finally{
      set({isLoading:false})
    }  
  },
  getCart:async()=>{
    set({isLoading:true});
    const {user} = authStore.getState();
    try{
      const res = await axiosInstance.get(`/api/products/carrinho`,{
        headers:{
          Authorization: `Bearer ${user?.token}`
        }
      });
      set({carrinhoProduct:res.data})
      set({product:res.data})
    }catch(error){
      console.log("Houve um erro ao trazer os dados",error);
      toast.error(error.response?.data?.errors);
    }finally{ 
      set({isLoading:false})  
    }
  },
  deleteCart:async(data)=>{
    set({isLoading:true});

    try{
      const {user} = authStore.getState();
       const res = await axiosInstance.delete(`/api/products/carrinho/${data}`,{
         headers:{
          Authorization:`Bearer ${user?.token}`
         }
       })
       toast.success("Produto removido!");
       set((state)=> ({
        carrinhoProduct:state.carrinhoProduct.filter((item) => item !== data)
       }))
    }catch(error){
       console.log("Teve um problema ao deletar o produto", error);
       toast.error(error.response.data.errors);
    }finally{
      set({isLoading:false})
    }
  },
  resetCart:()=>{
    set({carrinhoProduct:[], product:{}})
  }
}))