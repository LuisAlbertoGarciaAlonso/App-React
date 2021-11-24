import React from 'react';
import './Css/style.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './components/Header/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemListContainer/ItemDetailContainer';
import CartWidget from './components/CartWidget/CartWidget.jsx';
import ItemCount from './components/ItemCount/ItemCount.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/category/:catId" element={<ItemListContainer />} />

        <Route path="/product/:itemId" element={<ItemDetailContainer />} />

        {/*   MENSAJE DE ERROR RUTA QUE NO EXISTE
        <Route path="*" element={<h1>404 NOT FOUND</h1>} /> */}

        {/* REDIRECCIONAR SI NO EXISTE RUTA
        <Route path="*" element={<Navigate to="/" />} /> */}
        
      </Routes>
            {/* <CartWidget/> 
            <ItemCount/> este es de la entega de esta semana 22/11 y 24/11 */}
    </BrowserRouter>
  );
}
