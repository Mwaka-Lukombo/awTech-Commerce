
import { Link, NavLink, useNavigate } from "react-router-dom";


//icons
import { FaBars, FaDoorClosed, FaPowerOff, FaSearch, FaShoppingCart} from 'react-icons/fa';

//react
import {useState, useEffect} from 'react';


//hooks
import { useAuth } from "../../hooks/useAuth";
import { LogOut } from "lucide-react";
import { uploads } from "../../config/httpRequest";

//productStore
import { productStore } from "../../store/produtcStore";
import { authStore } from "../../store/authStore";
import { Carrinho } from "../Carrinho/Carrinho";



export const NavBar = () => {
   const [showCarrinho, setShowCarrinho] = useState(false);
   const [profileImage, setProfileImage] = useState(null);
    const Auth = useAuth();
      const {logout} = authStore();
        const handleLogout = ()=>{
          logout();
        }
         const {carrinhoProduct, getCart} = productStore();
         const {user} = authStore.getState();

         const total = carrinhoProduct.reduce((acc,produto)=> acc + produto.price * produto.quantidade,0)
           
          useEffect(()=>{
            getCart()
          },[carrinhoProduct])

      

  return (
    <>
    {!Auth && (
    <div className="min-header">
        <p>Bem-vindo ao awTech commerce! <NavLink className={({isActive})=> isActive ? 'auth-active' : ''}   to='/register'>Criar conta</NavLink> ou <NavLink className={({isActive}) => isActive ? 'auth-active' : ''} to='/login'>Iniciar sessão</NavLink></p>
    </div>
      )}
    <nav className='navbar'> 
       <div className="logo">
          <Link to='/'>
             <h1>awTech</h1>
          </Link>
       </div>

       <ul> 

        {Auth ? (
          <>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>

          <li>
            <NavLink to='/produtos'>Produtos</NavLink>
          </li>

          <li>
            <NavLink to='/usuarios'>Usuarios</NavLink>
          </li>

          <li>
            <NavLink to='/createPromo'>Promoções</NavLink>
          </li>
        <div className="perfil-content-user">
          <NavLink to="/profile" className={({isActive})=> isActive ? '' : ''} >
           <div className="top-user-perfil">
             <img src={user.profileImage ? `${uploads}/users/${user.profileImage}` : './user.png'} alt="profile image" />
           </div>
           </NavLink>
        </div>
        
            <LogOut className="logout" onClick={handleLogout} />

          
      
          </>
        ) : (
          <>
          
             <li>
            <NavLink to='/sobre'>Sobre</NavLink>
          </li>

          </>
        )}
             
     
       </ul>

       {Auth && (
        <div className="carrinho-compras">
          <FaShoppingCart />

        
            <div className="content-cart" style={{cursor:'pointer'}} onClick={()=> setShowCarrinho(!showCarrinho)}>
              <h4>Carrinho de compras</h4>
              <p className="price-cart">{carrinhoProduct.length } {carrinhoProduct.length > 1 ? "itens" : "item"} - {total.toLocaleString()} MZN</p>
            </div>
       
       </div>
       )}

       <button className="icon-mobile">
         <FaBars />
       </button>
    </nav>

      <Carrinho 
      showCarrinho={showCarrinho} 
      setShowCarrinho={setShowCarrinho} 
      produtos={carrinhoProduct}
      />

    {Auth  && (
    <div className="search-category">
      
    </div>
     )}
    
    </>
  )
}
