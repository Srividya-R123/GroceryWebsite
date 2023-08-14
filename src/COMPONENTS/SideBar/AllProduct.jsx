import React from 'react'
import ProductCard from './ProductCard'
import './AllProducts.css'

const AllProduct = () => {
    const pro= [
        {
            id:1,
            image:"https://cdn.zeptonow.com/production///tr:w-250,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/298556bb-be74-40cf-8de9-8d0a515ae3ba-Photo.jpeg",
            desc:"Raddish",
            Price:100,
            quan:"1 Kg",

        },
        {
            id:2,
            image:"https://5.imimg.com/data5/WN/VI/IV/SELLER-19874282/beetroot.jpg",
            desc:"Beetroot",
            Price:200,
            quan:"1 Kg",

        },
        {
            id:3,
            image:"https://www.jiomart.com/images/product/original/590002136/onion-5-kg-pack-product-images-o590002136-p590002136-0-202203141906.jpg?im=Resize=(420,420)",
            desc:"Onion",
            Price:150,
            quan:"1 Kg",

        },
        {
            id:4,
            image:"https://smartyield.in/wp-content/uploads/2021/06/Tomato-red.png",
            desc:"tomato",
            Price:100,
            quan:"1 Kg",

        },
        {
            id:5,
            image:"https://5.imimg.com/data5/VK/ZF/GE/SELLER-50068616/brinjal.jpeg",
            desc:"brinjal",
            Price:250,
            quan:"2 Kg",

        },
        {
            id:6,
            image:"https://shop.organicmandya.com/cdn/shop/products/1NjnqfBEDCZF8soVFB1u_0FH1FjKsrzLt_3a52a355-c738-41f7-bfd5-944049aa184a_700x700.jpg?v=1608550591",
            desc:"Carrot",
            Price:80,
            quan:"1 Kg",

        },
        {
            id:7,
            image:"https://apneemandi.com/wp-content/uploads/2023/05/000318982-1.jpg",
            desc:"Potato",
            Price:400,
            quan:"3 Kg",

        },
        {
            id:8,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj5Ahxu_HmS8dYC3AkUckll9hNAXjEEt7DaQ&usqp=CAU",
            desc:"Yam",
            Price:200,
            quan:"2 Kg",

        },
        {
            id:9,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8bruJ-JNCeIeVG05Olgvn4dRQDz6TEHvbyA&usqp=CAU",
            desc:"Pumpkin",
            Price:120,
            quan:"1 Kg",

        },

        {
            id:10,
            image:"https://m.media-amazon.com/images/I/61M7ZbTTlVL.jpg",
            desc:"Lady's Finger",
            Price:50,
            quan:"1 Kg",

        }
    ]
  return (
    <div className='allproducts'>
        <h1>All Products</h1>
        <div class='products'>
            {
                pro.map((item)=>{
                  return(
                    <ProductCard  data={item} key={item.id}/>
                )
                })
             }
        </div>
    </div>
  )
}

export default AllProduct