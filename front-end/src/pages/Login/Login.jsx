import {useState, useEffect, useRef} from 'react'
import { authStore } from '../../store/authStore'

//icons
import {Eye, EyeClosed, EyeClosedIcon, EyeOff, Loader} from 'lucide-react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { Process } from '../../components/process/Process';

export const Login = () => {
  const {login, isLoading} = authStore();
   const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState({
      email:"",
      password:""
   })

  const formValidation = ()=>{
     if(!user.email){
      return toast.error("O email é necessario!")
     }

     if(!user.password){
      return toast.error("A senha é necessaria!");
     }

     if(!user.email.includes("@") || !user.email.includes(".com")){
       return toast.error("Email invalido!")
     }
  }

  const handleSubmit = (e)=>{
     e.preventDefault();
      formValidation();
      login(user);
      setUser("");
  }


  return (
    <div className='container' style={{marginBottom:"120px",marginTop:"100px"}}>
      <h3>Efectue o login:</h3>
       <form onSubmit={handleSubmit}>
          <label>
             <span>E-mail:</span>
             <input type='text' placeholder='Digite o seu e-mail'
             onChange={(e)=> setUser({...user,email : e.target.value})}
             value={user.email || ''}
             />
          </label>

          <label className='input-password'>
            <span>Password:</span>
            <input type={showPassword ? "text" : "password"} placeholder='Digite a sua senha'
             onChange={(e)=> setUser({...user,password : e.target.value})}
             value={user.password || ''}
            />

            {showPassword ? (         
              <Eye onClick={()=> setShowPassword(!showPassword)}  />
            ) : (
               <EyeOff onClick={()=> setShowPassword(!showPassword)} />
            )}
          </label>

          {isLoading && <input type='submit' value='Aguarde...' disabled />}
          {!isLoading && <input type='submit' value='Entrar' />}
       </form>

       <div className='info-container'>
         <p>Ainda nao tem uma conta? <Link to='/register'>Clique aqui</Link></p>
       </div>
    </div>
  )
}
