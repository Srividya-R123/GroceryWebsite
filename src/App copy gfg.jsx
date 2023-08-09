import { useState } from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";

import './App.css'


const App=()=>{
 
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/home" element={<Home />}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
