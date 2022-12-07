import NavBar from './components/NavBar/NavBar';
import { Contact } from './Pages/Contact'
import { Initial } from './Pages/Initial'
import { CategoriesProduct } from './Pages/CategoriesProduct'
import { DetailProduct }  from "./Pages/DetailProduct"
import { Somos } from './Pages/Us'
import "./App.css"
import React from "react";
import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom";


export function App() {

  return (
    <>
    <BrowserRouter>
      <div className="App">
        <div className="container mt-2">
          <NavBar />
          <hr></hr>
          <Routes>            
            <Route path="/" element={<Initial />} />
            <Route path="somos" element={<Somos />} />          
            <Route path="contacto" element={<Contact />} />
            <Route path="categoria/:categoria" element={<CategoriesProduct/>} />
            <Route path="detalle/:id" element={<DetailProduct/>} />
            <Route path="/*" element={<Navigate to="" />} />            
          </Routes>
          <br/><br/>
        </div>
      </div>
      </BrowserRouter>
      </>
  );
}
