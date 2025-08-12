
import { Product } from '../../components/Product/Product';

//customs imported
import awTech from '../../assempts/awTech.png';
import { uploads } from '../../config/httpRequest';

//components


//hooks
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

//redux
import { getProducts } from '../../slices/productSlice';
import { Process } from '../../components/process/Process';



export const Home = () => {

  const dispatch = useDispatch();
    const {products, loading, message} = useSelector((state)=> state.products);

    useEffect(()=>{
       dispatch(getProducts())
    },[dispatch])

    console.log(products)
  return (

    <>
    {loading && <Process />}
    <div className='row-container'>
      <div className='row-left'>
        <div className='row-perfil'>
          <img src={awTech} alt='awTech logotipo' />
          <div className='content-perfil'>
            <h3>awTech</h3>
            <p>Diversas novidades</p>
          </div>
        </div>
      </div>
      <div className='row-right'>
        {products && products.map((product) => (
          <Product {...product} key={product._id}/>
        ))}
        
        
      </div>
    </div>
    </>
  )
}
