import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { makeServer } from "./server";
import { ProductProvider } from './Context/ProductContext';
import { CartProvider } from './Context/CartContext';
makeServer();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 <ProductProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductProvider>
  
);


