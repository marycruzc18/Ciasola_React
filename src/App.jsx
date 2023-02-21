import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

const  App = () => {
 

  return (

    <BrowserRouter>

     <Navbar/>

     <Routes>

      <Route exact path="/" element= {<ItemListContainer />} />

      <Route exact path="/category/:category" element= {<ItemListContainer/>} />

      <Route exact path="/item/:id" element= {<ItemDetailContainer/>} />

     </Routes>

    </BrowserRouter>
  );
};

export default App;
