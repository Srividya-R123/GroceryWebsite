import React from 'react'
import CategorySidebar from './CategorySidebar'
import AllProduct from './AllProduct'
import './Product.css'
const Product = () => {
  return (
    <div className='productsidebar'>
        <CategorySidebar/>
        <AllProduct/>
    </div>
  )
}

export default Product