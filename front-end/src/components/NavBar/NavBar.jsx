
import { Link, NavLink } from "react-router-dom";


//icons
import { FaSearch, FaShoppingCart} from 'react-icons/fa';

export const NavBar = () => {
  return (
    <>
    <div className="min-header">
        <p>Bem-vindo ao awTech commerce! <Link  to='/register'>Criar conta</Link> ou <Link to='/login'>Iniciar sessão</Link></p>
    </div>
    <nav className='navbar'> 
       <div className="logo">
          <h1>Logo Marca</h1>
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

       <div className="carrinho-compras">
          <FaShoppingCart />
          <div className="content-cart">
            <h4>Carrinho de compras</h4>
            <p className="price-cart">0 item - 0,00MZN</p>
          </div>
       </div>
    </nav>
    <div className="search-category">
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
    </div>
    </>
  )
}
