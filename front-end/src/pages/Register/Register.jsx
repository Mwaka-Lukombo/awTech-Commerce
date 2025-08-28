

//hooks
import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';



//redux
import toast from 'react-hot-toast';
import { authStore } from '../../store/authStore';

export const Register = () => {
    const [name,setName] = useState("");
     const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
       const [confirmPassword, setConfirmPassword] = useState(""); 
         const {register, isLoading} = authStore();
         

         const formValidation = ()=>{
            if(!name){
              toast.error("O nome é obrigatório");
            }

            if(!email){
              toast.error("O nome é obrigatório");
            }else if(!email.includes("@") || !email.includes(".com")){
               toast.error("O email é inválido");
            }

            if(password !== confirmPassword){
               toast.error("As senhas não conferem");
            }

            
         }
       

    const handleSubmit = (e)=>{
        e.preventDefault();
        formValidation();
        const newUser = {
            name,
            email,
            password
        }
        register(newUser);
    }

    
  return (
    <div className="container" style={{marginTop:"50px"}}>
      <h3>Crie uma conta:</h3>
      <form onSubmit={handleSubmit}>
         <label>
            <span>Nome:</span>
            <input type="text" placeholder="Insira o seu nome" onChange={(e)=> setName(e.target.value)} value={name || ''} />
         </label>

         <label>
            <span>E-mail:</span>
            <input type="text" placeholder="Insira o seu email" onChange={(e) => setEmail(e.target.value)} value={email || ''} />
         </label>

         <label>
            <span>Password:</span>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password || ''} />
         </label>

        <label>
            <span>Confirme a password:</span>
            <input type="password" placeholder="Password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword || ''} />
         </label>

           <input type="submit" value='Enviar' />
         {/* {loading && <input type="submit" value='Aguarde...' disabled />} */}
        
      </form>
      <div className='info-container'>
         <p>Ja tem uma conta? <Link to='/login'>Clique aqui</Link></p>
       </div>
    </div>
  )
}
