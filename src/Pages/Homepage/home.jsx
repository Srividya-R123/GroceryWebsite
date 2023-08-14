import React from 'react'  
import Navbar from '../../COMPONENTS/Navbar/NavBar'
import BannerSlider from '../../COMPONENTS/Banners/BannerSlider'
import HomeCategories from '../../COMPONENTS/Category/HomeCategories'
import Product from '../../COMPONENTS/SideBar/Product'



const Home=()=>{
 
  return (
   <div>
    <Navbar/>
    <BannerSlider />
    <HomeCategories/>
    <Product/>

    Home</div>
  )
}

export default Home