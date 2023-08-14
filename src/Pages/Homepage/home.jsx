import React from 'react'  
import Navbar from '../../COMPONENTS/Navbar/NavBar'
import BannerSlider from '../../COMPONENTS/Banners/BannerSlider'
import HomeCategories from '../../COMPONENTS/Category/HomeCategories'
import Product from '../../COMPONENTS/SideBar/Product'
import Footer1 from '../../COMPONENTS/footer/Footer1'
import Footer from '../../COMPONENTS/footer/Footer'



const Home=()=>{
 
  return (
   <div>
    <Navbar/>
    <BannerSlider />
    <HomeCategories/>
    <Product/>
    <Footer1/>
    <Footer/>

    </div>
  )
}

export default Home