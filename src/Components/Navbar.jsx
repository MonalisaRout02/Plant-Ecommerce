import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log("token navbar", token);
    setIsLoggedIn(!!token);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setIsSidebarOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <>
      <nav className='flex items-center justify-between px-5 py-3 z-10' style={{ backgroundColor: '#1E3822' }}>
        <div className='flex-grow w-1/4 flex justify-start'>
          <img className='w-40' src='/assets/Svg/Logo.svg' alt='Logo' />
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex justify-center w-1/2'>
          <ul className='flex space-x-16 text-white'>
            <li onClick={() => handleNavigation('/')} className='cursor-pointer'>Home</li>
            <li onClick={() => handleNavigation('/about')} className='cursor-pointer'>About</li>
            <li onClick={() => handleNavigation('/shop')} className='cursor-pointer'>Shop</li>
            <li onClick={() => handleNavigation('/contact')} className='cursor-pointer'>Contact</li>
          </ul>
        </div>

        <div className='flex items-center justify-end w-1/4'>
          <ul className='flex space-x-5'>
            {isLoggedIn && (
              <>
                <li style={{ cursor: 'pointer' }}><img src='/assets/Svg/Union.svg' alt='Search Icon' /></li>
                <li onClick={() => handleNavigation('/cart')} style={{ cursor: 'pointer' }}><img src='/assets/Svg/ShoppingCart.svg' alt='Cart Icon' /></li>
              </>
            )}
            {isLoggedIn ? (
              <>
                <li style={{ cursor: 'pointer' }}><img src='/assets/Svg/Account.svg' alt='User Icon' /></li>
                <li onClick={handleLogout} className='cursor-pointer text-white'>Logout</li>
              </>
            ) : (
              <li onClick={() => handleNavigation('/login')} className='cursor-pointer'>
                <button className='bg-gradient-to-b from-[#1E3822] to-[#498052] text-white rounded-md px-4 py-2'>
                  Get Started
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className='md:hidden flex items-center'>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className='text-white'>
            <img className='w-6 ml-10' src='/assets/hamburger.svg' alt='Menu' />
          </button>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-20'>
          <div className='bg-white w-64 h-full p-5'>
            <button onClick={() => setIsSidebarOpen(false)} className='mb-4'>
              Close
            </button>
            <ul className='flex flex-col space-y-4'>
              <li onClick={() => handleNavigation('/')} className='cursor-pointer'>Home</li>
              <li onClick={() => handleNavigation('/about')} className='cursor-pointer'>About</li>
              <li onClick={() => handleNavigation('/shop')} className='cursor-pointer'>Shop</li>
              <li onClick={() => handleNavigation('/contact')} className='cursor-pointer'>Contact</li>
              {isLoggedIn ? (
                <li onClick={handleLogout} className='cursor-pointer'>Logout</li>
              ) : (
                <li onClick={() => handleNavigation('/login')} className='cursor-pointer'>Get Started</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
