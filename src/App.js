
import { BrowserRouter , Routes, Route} from 'react-router-dom';
// import React, { useEffect,useState } from "react";
import './App.css';
// import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import ContactUs from './Pages/ContactUs';
import Shop from './Pages/Shop';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import Login from './Components/Login';
import Cart from './Pages/CartPage';
import ParallaxEndSection from './Components/Member';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div >
     <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="Member" element={<ParallaxEndSection />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"

        />
     </BrowserRouter>
    </div>
  );
}

export default App;
