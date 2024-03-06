import React from 'react'
import { products } from "../lib/data";
import { Cards } from '../components/Cards';

const ProductPage = () => {
  return (
    < >
    <div className='card'>
      {/* { products.map(product => <Cards name={product.name} price={product.price} brand={product.brand} description={product.description} rate={product.rate} image={product.image}/>)} */
      <Cards products={products}/>
      }
   </div>
    </>
  )
}

export default ProductPage;
