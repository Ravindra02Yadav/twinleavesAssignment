import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Product from './Product'
import SingleProducts from './SingleProducts'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/products/:id" element={<SingleProducts />} />
        <Route path="*" element={<h3>Page Not Found</h3>} />
        </Routes>
    </div>
  )
}

export default AllRoutes