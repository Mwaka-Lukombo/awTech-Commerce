import './Product.css';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { uploads } from '../../config/httpRequest';

//react
import {useState, useEffect} from 'react';

//Product stores
import { productStore } from '../../store/produtcStore';

export const Product = ({
  _id,
  name,
  price,
  descricao,
  quantidade,
  categoria,
  image,
  userName
}) => {

   const [carrinho, setCarrinho] = useState({
    _id,
    name,
    price,
    image,
    descricao
   })

   const {isLoading,addCart,carrinhoProduct} = productStore();

  const handleCart = ()=>{
    addCart(carrinho)
  }
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
             <FaShoppingCart onClick={()=>{
               handleCart(_id)
               setCarrinho({...carrinho,idProduct:_id});
               setCarrinho({...carrinho,name:name})
               setCarrinho({...carrinho,price:price})
               setCarrinho({...carrinho,image:image})
               setCarrinho({...carrinho,descricao:descricao})
             }} />
           </button>

           <button>
            <FaHeart  />
           </button>
       </div>

       </div>

       
    </div>
  )
}
