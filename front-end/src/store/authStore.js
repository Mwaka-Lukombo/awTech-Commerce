    import {create} from 'zustand';
    import {axiosInstance} from '../lib/axioInstance';
    import toast from 'react-hot-toast';
    import { productStore } from './produtcStore';



export const authStore = create((set) => ({
    user: JSON.parse(localStorage.getItem("user")) || null,
    users:[],
    isLoading: false,
    isError:null,
    register:async(dataUser)=>{
        set({isLoading:true})
        
        try{
            const {resetCart} = productStore.getState();
            const res = await axiosInstance.post('/api/user/register',dataUser);
            set({user:res.data})
            localStorage.setItem("user", JSON.stringify(res.data));
            toast.success("Usuário cadastrado com sucesso");
            resetCart();
        }catch(error){
            console.log("Houve um erro no registro",error)
            toast.error(error.response.data.errors)
        }finally{
            set({isLoading:false})
        }
    },
    update:async(data)=>{
        set({isLoading:true});

        try{
        const {user} = authStore.getState();
        const res = await axiosInstance.put(`/api/user/update`,data,{
            headers:{
            'Content-Type':"multipart/form-data",
            Authorization: `Bearer ${user?.token}`
            }
        });
        set({user:res.data})
        toast.success("Perfil atualizado!")
        }catch(error){
        console.error("Houve um erro ao atualizar o usuario",error);
        toast.error(error.response?.data?.errors);
        }finally{
            set({isLoading:false})
        }

    },
    getUsers:async(userId)=>{
      set({isLoading:true})

      try{
        const res = await axiosInstance.get(`/api/user/users`)
        set({users:res.data})
        toast.success("Carregando!")
      }catch(error){
        console.log("Houve um erro ao buscar usuarios!",error);
        toast.error(error.response.data.errors)
      }finally{
        set({isLoading:false})
      }
    },
    deleteUser:async(id)=>{
        set({isLoading:true});

        try{
          const res = await axiosInstance.delete(`/api/user/${id}`);

          toast.success("Usuário excluido com sucesso!")
          set((state)=> ({
            users:state.users.filter((user) => user._id !== id)
          }))
        }catch(error){
          console.log("Houve um erro ao deletar usuario",error);
          toast.error(error.response.data.errors)
        }finally{
            set({isLoading:false})
        }
    },
    login:async(data)=>{
        set({isLoading:true})
    try{
        const res = await axiosInstance.post('/api/user/login',data);
        toast.success("Login efetuado com sucesso!")
        if(res.data && res.data._id){
            const {getCart} = productStore.getState();
            localStorage.setItem("user", JSON.stringify(res.data))
            set({user:res.data})
            getCart();
        }
        return res;
        }catch(error){
            console.log("Teve um erro no login",error);
            toast.error(error.response.data.errors)
        }finally{
            set({isLoading:false})
        }    
    },
    logout:async()=>{
        const {resetCart} = productStore.getState();
        localStorage.removeItem("user");
        toast.success("Logout");
        set({user:null})
        resetCart();
    }
    }))







