
import { Link, NavLink, useNavigate } from "react-router-dom";


//icons
import { FaBars, FaDoorClosed, FaPowerOff, FaSearch, FaShoppingCart} from 'react-icons/fa';

//react
import {useState, useEffect} from 'react';


//hooks
import { useAuth } from "../../hooks/useAuth";
import { LogOut } from "lucide-react";

//productStore
import { productStore } from "../../store/produtcStore";
import { authStore } from "../../store/authStore";
import { Carrinho } from "../Carrinho/Carrinho";



export const NavBar = () => {
   const [showCarrinho, setShowCarrinho] = useState(false);
    const Auth = useAuth();
      const {logout} = authStore();
        const handleLogout = ()=>{
          logout();
        }
         const {isLoading,carrinhoProduct, getCart} = productStore();
           const {user} = authStore();     
                   
         useEffect(()=>{
            getCart();
         },[])

         
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
              <p className="price-cart">0 item - 0,00MZN</p>
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
