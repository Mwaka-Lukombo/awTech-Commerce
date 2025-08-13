
import { Link, NavLink } from "react-router-dom";


//icons
import { FaBars, FaSearch, FaShoppingCart} from 'react-icons/fa';

//hooks
import { useAuth } from "../../hooks/useAuth";

export const NavBar = () => {

  const {Auth} = useAuth();
  
  return (
    <>
    <div className="min-header">
        <p>Bem-vindo ao awTech commerce! <NavLink className={({isActive})=> isActive ? 'auth-active' : ''}   to='/register'>Criar conta</NavLink> ou <NavLink className={({isActive}) => isActive ? 'auth-active' : ''} to='/login'>Iniciar sessão</NavLink></p>
    </div>
    <nav className='navbar'> 
       <div className="logo">
          <Link to='/'>
             <h1>awTech</h1>
          </Link>
       </div>

       <ul> 
             <li>
            <NavLink to='/'>Home</NavLink>
          </li>

          <li>
            <NavLink to='/sobre'>Sobre</NavLink>
          </li>

          <li>
            <NavLink to='/novidades'>Novidades</NavLink>
          </li>

          <li>
            <NavLink to='/promocoes'>Promoções</NavLink>
          </li>
    
     
       </ul>

       {Auth && (
        <div className="carrinho-compras">
          <FaShoppingCart />
          <div className="content-cart">
            <h4>Carrinho de compras</h4>
            <p className="price-cart">0 item - 0,00MZN</p>
          </div>
       </div>
       )}

       <button className="icon-mobile">
         <FaBars />
       </button>
    </nav>

   
    <div className="search-category">
       {Auth  && (
         <>
        <div className="category-display">

        </div>
      <form>
        <select>
            <option selected>Categoria:</option>
            <option>Camisas</option>
            <option>Celulares</option>
            <option>Calsados</option>
        </select>
        <input type="text" placeholder="Insira a sua pesquisa" />
         <button>
            <FaSearch />
         </button>
      </form>
        </>
          )}
    </div>
    
    </>
  )
}
