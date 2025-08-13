import './Novidades.css';

//components
import { Process } from '../../components/process/Process';

//redux
import {useSelector, useDispatch} from 'react-redux';
import { getProducts } from '../../slices/productSlice';

//hooks
import {useEffect} from 'react';
import { Product } from '../../components/Product/Product';


export const Novidades = () => {
     const dispatch = useDispatch();
       const {products,loading, error} = useSelector((state) => state.products);

       useEffect(()=>{
          dispatch(getProducts())
       },[dispatch])


  return (
    <>

    {loading && <Process />}
     <h3 className='title'>Novidades</h3>
    <div className='row-container' style={{flexDirection:"row-reverse"}}>
     <div className='row-left'>
        
      </div>

     <div className='row-right'>
      {products && products.map((product)=> (
        <Product {...product} key={product._id} />
      ))}
        
     </div>

     
    </div>
    </>
  )
}
