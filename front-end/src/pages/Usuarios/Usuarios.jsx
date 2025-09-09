import './Usuarios.css';


import { useEffect } from 'react';
import { authStore } from '../../store/authStore';
import {uploads} from '../../config/httpRequest';


export const Usuarios = () => {
  const {isLoading, getUsers,users, deleteUser} = authStore();
   const {user} = authStore.getState();

  useEffect(()=>{
    getUsers(user._id);
  },[user])
  

  const handleDelete = (id)=>{
     deleteUser(id)
  }
  
  return (
    <div className="row-container">
       <div className='row-usuarios'>


     {users && users.map((user)=> (
         <div className='usuario-single'>
           <div className='left-side-single'>
             <div className='left-sinde-perfil'>
               <img src={user.profileImage ?`${uploads}/users/${user.profileImage}` : './user.png'} />
             </div>
           </div>

           <div className='right-side-single'>
              <div className='right-side-description'>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
             </div>

             <div className='right-side-buttons'>
                <button className='editar'>
                    Editar
                </button>

                <button className='deletar' onClick={()=> handleDelete(user._id)}>
                    Deletar
                </button>
             </div>
           </div>
         </div>
         ))}

         

         

         

         

         

        
       </div> {/*row usuarios*/}
    </div>
  )
}
