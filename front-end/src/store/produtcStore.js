import {create} from 'zustand';
import {axiosInstance} from '../lib/axioInstance';
import toast from 'react-hot-toast';


const user = JSON.parse(localStorage.getItem("user"));


export const productStore = create((set) => ({
  isLoading:false,
  product:{},
  products:[],
  carrinhoProduct:[],
  createProduct:async(data)=>{
    set({isLoading:true});
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

    try{
       const res = await axiosInstance.post(`/api/products/carrinho/${data._id}`,data,{
         headers:{
          Authorization:`Bearer ${user.token}`
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

    try{
      const res = await axiosInstance.get(`/api/products/carrinho`,{
        headers:{
          Authorization: `Bearer ${user.token}`
        }
      });
      set({carrinhoProduct:res.data})
    }catch(error){
      console.log("Houve um erro ao trazer os dados",error);
      toast.error(error.response.data.errors);
    }finally{ 
      set({isLoading:false})  
    }
  }
}))