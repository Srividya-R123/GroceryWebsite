import { useState } from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Pages/Homepage/home';
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App=()=>{
 
  return (
    
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/Home" element={<Home />}></Route>
    <Route path="*" element={<div><h1>404 NOT PAGE FOUND</h1></div>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
