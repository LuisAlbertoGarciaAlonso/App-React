import React from 'react';
import './Css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //saque Navigate
import { NavBar } from './components/Header/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/CartWidget/CartWidget.jsx';
import { ProductsProvider } from './Context/ProductsContext';


//import ItemCount from './components/ItemCount/ItemCount.jsx';

export default function App() {
    
 

  return (
    <ProductsProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/category/:catId" element={<ItemListContainer />} />

        <Route path="/product/:itemId" element={<ItemDetailContainer />} />

        <Route path="/Carrito" element={<CartWidget />} />
        
        {/*   MENSAJE DE ERROR RUTA QUE NO EXISTE
        <Route path="*" element={<h1>404 NOT FOUND</h1>} /> */}
        {/* REDIRECCIONAR SI NO EXISTE RUTA
        <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </BrowserRouter>
    </ProductsProvider>
  );
}
