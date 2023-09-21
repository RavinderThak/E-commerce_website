import React, { useEffect } from 'react'
import "./Home.scss";


import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from '../../Utils/api';

const Home = () => {

  useEffect(()=>{

    getCategories()

  }, []);

  const getCategories =() =>{
    fetchDataFromApi("/api/categories?populate=*").then(res =>console.log(res))

  }

  return (
    <>
      <div className="Home">
        <Banner />
        <div className="main-content">
          <div className="layout">
            <Category />
          
          
            <Products headingtext="Popular Products"/>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home
