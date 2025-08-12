import './Product.css';

import Camisa from '../../assempts/barca-25-26-home-kit (8).jpg';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

export const Product = () => {
  return (
    <div className='row-products'>
       <div className='flex'> 
       <div className='Product-image'>
         <img src={Camisa} alt='Camisa do barcelona' />
       </div>

       <div className='product-description'>
          <h3>Samsung Galaxy A25 128GB|6GB RAM Dual Sim, Azul</h3>
          <h4>18046,00 MZN</h4>
          <p>Experimente a combinação perfeita de potência e inovação com o Samsung Galaxy A25 5G. Equipado com uma Câmera Tripla Traseira de até 50MP com Estabilização Óptica, este smartphone permite capturar fotos incrivelmente nítidas e estáveis, enquanto a câmera de selfie de 13MP garante autorretratos impressionantes.</p>
       </div>

       </div>

       <div className='row-add-cart'>
           <button>
             <FaShoppingCart />
           </button>

           <button>
            <FaHeart  />
           </button>
       </div>
    </div>
  )
}
