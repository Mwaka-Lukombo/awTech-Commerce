
import { useEffect, useState } from "react";
import { uploads } from "../../config/httpRequest";
import { Eye, EyeClosed } from "lucide-react";
import toast from "react-hot-toast";

//store
import {authStore} from '../../store/authStore'


export const Profile = () => {
    const [profileImage,setProfileImage] = useState(null);
     const [preview,setPreview] = useState(null);
      const {user} = authStore.getState();
       const [showPassword,setShowPassword] = useState(false);
        const [password,setPassword] = useState("");
         const [confirmPassword, setConfirmPassword] = useState("");
             
         //store
           const {isLoading, update} = authStore();



       const handlePassword = ()=>{
          setShowPassword(!showPassword)
       }

       //fortificar a validacao de update
       const formValidation = ()=>{

          if(profileImage == null){
             setProfileImage(user.profileImage)
          }

       }


       const handleFile = (e)=>{
         const image = e.target.files[0]
         setProfileImage(image);
         setPreview(image);
       }

         const handleSubmit = (e)=>{
          e.preventDefault();
          formValidation();
          const dateUser = {
            userId: user._id,
            password,
            confirmPassword,
            profileImage
          }

          const formData = new FormData();

          Object.keys(dateUser).forEach((key)=>{
            formData.append(key,dateUser[key])
          })
          update(formData)
          setPassword("")
          setConfirmPassword("")
          setProfileImage("")
       }
  return (
    <div className='container'>
        <div className='top-container-perfil'>
          <img src={preview ? URL.createObjectURL(preview) : `${uploads}/users/${user.profileImage}`} />
        </div>

        {!isLoading ? 
        <p className="information-update">Atualize as suas informações de perfil</p> :
        <p className="information-update">Atualizando informações... </p>
        }
    
        <form onSubmit={handleSubmit}>
            <label>
                <span>Name:</span>
                <input type="text" value={user.name}  disabled/>
            </label>

            <label>
                <span>E-mail:</span>
                <input type="text" value={user.email}  disabled/>
            </label>

            <label className="input-password">
                <span>Password:</span>
                <input type={showPassword ? 'text' : "password"} onChange={(e)=> setPassword(e.target.value)} value={password || ""}  placeholder="Digite a sua senha..."/>
                {showPassword ? <Eye onClick={handlePassword} /> : <EyeClosed onClick={handlePassword} />}
            </label>

            <label>
                <span>Confirm a password:</span>
                <input type="password" onChange={(e)=> setConfirmPassword(e.target.value)} value={confirmPassword || ""} placeholder="Confirme a sua senha..."/>
            </label>

            <label className="image-section">
                <span>Image:</span>
                <input type="file" accept="image/*" onChange={handleFile} />
            </label>

            {!isLoading && <input type="submit" value='Atualizar...' />}
            {isLoading && <input type="submit" value='Aguarde' disabled />}
        </form>
    </div>
  )
}
