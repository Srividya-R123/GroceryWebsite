import { useState } from 'react'
import './App.css';

function createItem(name, price, quantity, image) {
  return {
    name: name,
    Price: price,
    quantity: quantity,
    image: image,
  };
}
const ItemCard=({ item1 })=>{
  return (
  <div className="item">
  <div>
    <img src={item1.image} alt={item1.name}></img>
  </div>
  <div><h3>{item1.name}</h3><p>Rs.{item1.Price}</p></div>
</div>
);
}


// const item1={
//   "name":"oil",
//   "Price":"120",
//   "quantity":"1L",
//   "image":"https://www.bigbasket.com/media/uploads/p/m/274141_11-gold-winner-refined-sunflower-oil.jpg"
// }

const App=()=>{
 
  return (
   <div className='app'>
    <h1>FreshMart.</h1>
    <div className='container'>
      <ItemCard item1={createItem("oil","120","1L","https://www.bigbasket.com/media/uploads/p/m/274141_11-gold-winner-refined-sunflower-oil.jpg")}/>

    </div>
   </div>
  )
}

export default App
