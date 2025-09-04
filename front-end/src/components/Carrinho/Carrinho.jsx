//css
import './Carrinho.css';

//icons
import { FaProductHunt, FaTimesCircle } from 'react-icons/fa';
import { ClosedCaption, Store, StoreIcon, TrashIcon } from 'lucide-react';

//uploads
import {uploads} from '../../config/httpRequest';
import { useEffect, useState } from 'react';
import { productStore } from '../../store/produtcStore';

export const Carrinho = ({
  showCarrinho,
  setShowCarrinho,
  produtos
}) => {
   const [total, setTotal] = useState(0);
     const {deleteCart} = productStore();

   useEffect(()=>{
    if(produtos.length > 0 ){
       const soma = produtos.reduce((acc,produto)=>{
         const preco = parseFloat(produto.price) || 0;
         const sqt = parseInt(produto.quantidade) || 1;

         return acc + (preco *sqt);
       }, 0)
       setTotal(soma)
    }else{
      setTotal(0)
    }
   },[produtos])

   const handleDelete = (id)=>{
     deleteCart(id)
   }

  return (
    <div className={`carrinho-content ${!showCarrinho ? 'hide' : ''}` }>
        <div className='top-cart'>
            <span><StoreIcon /> awTech</span>
            <FaTimesCircle className='close-btn' onClick={()=> setShowCarrinho(!showCarrinho)} />
        </div>

        {produtos.length === 0 && (
          <p style={{margin:"20px 0"}}>O Carrinho está vazío</p>
        )}

        {produtos && produtos.map((produto)=> (
          <div className='middle-cart'>
            <div className='product-content'>
              <div className='img-product'>
                <img src={`${uploads}/products/${produto.image ? produto.image : <Store />}`} />
              </div>
              <div className='description-product'>
                <h3>{produto.name}</h3>
                <p>Preço: {produto.price}</p>
                <p>Quantidade: <b>{produto.quantidade}</b></p>
                <input type='number' min={1} placeholder='Quantidade' value={produto.quantidade || ''} />
              </div>

              <button className='trash' onClick={()=> handleDelete(produto._id)}>
                <TrashIcon />
              </button>
            </div>
        </div>
        ))}

        <div className='footer-cart'>
          <h3>Total: {total.toLocaleString()} MZN</h3>
        </div>
    </div>
  )
}
