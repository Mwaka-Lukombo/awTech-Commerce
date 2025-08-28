    import {create} from 'zustand';
    import {axiosInstance} from '../lib/axioInstance';
    import toast from 'react-hot-toast';


const user = JSON.parse(localStorage.getItem("user"));

    export const authStore = create((set) => ({
        user:user || null,
        isLoading: false,
        isError:null,

        register:async(dataUser)=>{
            set({isLoading:true})
           
            try{
                const res = await axiosInstance.post('/api/user/register',dataUser);
                set({user:res.data})
                localStorage.setItem("user", JSON.stringify(res.data));
                toast.success("Usuário cadastrado com sucesso");
            }catch(error){
              console.log("Houve um erro no registro",error)
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
                    localStorage.setItem("user", JSON.stringify(res.data))
                    set({user:res.data})
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
            localStorage.removeItem("user");
            toast.success("Logout")
            set({user:null})
        }
    }))







