import './App.css';
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailsConteiner from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import CartProvider from './context/CartContext';
import CartContainer from './components/CartCheckout/CartCheckout';
import OrderContainer from './components/OrderContainer/OrderContainer';
import { Initial } from './pages/Initial'
import { Somos } from './pages/Us'
import "./App.css"
import React from "react";


function App() {

  return (

    <BrowserRouter basename='/'> 
      <CartProvider>
      <NavBar />
      <Routes>
      <Route exact path="/" element={<Initial />} />
            <Route path="somos" element={<Somos />} />          
            <Route path='/productos' element={<ItemListContainer/>}/>
            <Route path="categoria/:categoria" element={<ItemListContainer/>} />
            <Route path="item/:id" element={<ItemDetailsConteiner/>} />
            <Route path="/*" element={<Navigate to="" />} />   
            <Route path='/ordenes' element={<OrderContainer/>}/>
        <Route exact path='/cart' element={<CartContainer/>}/>
      </Routes>
      </CartProvider>
    </BrowserRouter>

  );
}

export default App;