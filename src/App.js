import React from "react";
import {Routes,Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Home from "./Home";
import Products from "./Products";
import About from "./About";
import Health from "./Health";
import It from "./It";
import Car from "./Car";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Products/>}>
            <Route path="health" element={<Health/>}/>
            <Route path="it" element={<It/>}/>
            <Route path="car" element={<Car/>}/>
        </Route>
        
      </Routes>
      
    </>
  );
}

export default App;
