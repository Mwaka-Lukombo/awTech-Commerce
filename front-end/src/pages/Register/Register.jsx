

//hooks
import {useState, useEffect} from 'react';

//redux
import { register } from '../../slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Register = () => {
    const [name,setName] = useState("");
     const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
       const [confirmPassword, setConfirmPassword] = useState(""); 
         const dispatch = useDispatch();
           const {user, loading,error, message} = useSelector((state) => state.user);

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(password !== confirmPassword){
            return;
        }

        const newUser = {
            name,
            email,
            password
        }

        dispatch(register(newUser))
        setName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }
  return (
    <div className="container">
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

         {!loading && <input type="submit" value='Enviar' />}
         {loading && <input type="submit" value='Aguarde...' disabled />}
         {message && <p>{message}</p>}
      </form>
    </div>
  )
}
