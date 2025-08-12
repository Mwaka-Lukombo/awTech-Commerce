import React from 'react'
import { Product } from '../../components/Product/Product'

export const Home = () => {
  return (
    <div className='row-container'>
      <div className='row-left'>
        <div className='row-perfil'>

        </div>
      </div>
      <div className='row-right'>
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}
