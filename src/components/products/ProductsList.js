import React from 'react'
import { Collection } from 'react-materialize'
import ProductItem from './ProductItem'

const ProductsList = props => {
  return (
    <Collection>
      {
        props.products.map(product => (
          <ProductItem product={product}/>
        ))
      }
    </Collection>
  )
}

export default ProductsList