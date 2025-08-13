import './Product.css';

import Camisa from '../../assempts/barca-25-26-home-kit (8).jpg';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

import { uploads } from '../../config/httpRequest';

export const Product = ({
  name,
  price,
  descricao,
  quantidade,
  categoria,
  image,
  userName
}) => {
  return (
    <div className='row-products'>
       <div className='flex'> 
       <div className='Product-image'>
         <img src={`${uploads}/products/${image}`} alt={userName} />
       </div>

       <div className='product-description'>
          <h3>{name}</h3>
          <h4>{price} MZN</h4>
          <p>{descricao}</p>
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

       
    </div>
  )
}
