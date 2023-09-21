import React from 'react'
import RelatedProducts from "./RelatedProducts/RelatedProducts"
import prod from "../../assets/products/earbuds-prod-2.webp";
import {
  FaCartPlus,
  FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest,
  FaFacebookF,

} from "react-icons/fa";
import "./SingleProduct.scss";


const SingleProduct = () => {

  return (
    <>

      <div className="single-product-main-content">
        <div className="layout">
          <div className="single-product-page">

            <div className="left">
              <img src={prod} alt="" />
            </div>


            <div className="right">
              <span className='name'>Product name</span>
              <span className='price'>Price</span>
              <span className='desc'>Desc</span>


              <div className="cart-buttons">
                <div className="quantity-buttons">
                  <span>-</span>
                  <span>+</span>
                  <span>5</span>
                </div>

                <button className='add-to-cart'>
                  <FaCartPlus size={20} />
                  ADD TO CART
                </button>
              </div>

              <span className="divider">
                <div className="info-item">
                  <span className="text-bold">
                    Category
                    <span>Headphonse</span>
                  </span>

                  <span className="text-bold">
                    Share :
                    <span className='social-icons'>
                      < FaFacebookF size={16} />
                      < FaInstagram size={16} />
                      < FaTwitter size={16} />
                      < FaLinkedinIn size={16} />
                      < FaPinterest size={16} />
                    </span>
                  </span>
                </div>
              </span>

            </div>


          </div>
          <RelatedProducts />
        </div>
      </div>

    </>
  )
}

export default SingleProduct
