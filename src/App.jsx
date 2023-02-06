import { useState } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/NavBar'

function App() {
 

  return (
    <>
     <Navbar/>
     <ItemListContainer greeting={"Bienvenidos a Ciasola"}/>
    </>
  )
}

export default App
