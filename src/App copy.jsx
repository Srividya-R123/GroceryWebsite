import { useState } from 'react'
import './App.css'
//component
const Person=(props)=>{
  return (
    <>
     <h1>Name:{props.name}</h1>
    <h2>Age:{props.age}</h2>
      
    </>
  )
}

const App=()=>{
  return (
    <div className='App'>
    <Person name='Srividya' age='20'/>
      
    </div>
  )
}

export default App
