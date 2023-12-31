import React from 'react'
import "./Products.scss";
import Product from "./Product/Product";


const Products = ({innerPage,headingtext}) => {
  return (
    <>
      <div className="products-container">

        {! innerPage && <div className="sec-heading">{headingtext}</div>}

        <div className="products">

          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
         
       
        </div>

      </div>
    </>
  )
}

export default Products
