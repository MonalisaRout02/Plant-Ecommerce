import React from 'react'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {

   const  navigate = useNavigate();

   const handleNavigation= (path)=>{
        navigate(path)
   }
  return (
    <nav className=' flex flex-row justify-between px-5 py-3 z-10' style={{ backgroundColor: '#1E3822' }}>
        <div className='w-1/4 flex flex-row justify-start'><img src='/assets/Svg/Logo.svg' alt='Logo'/></div>
        <div className='w-2/4 flex justify-around'>
            <ul  style={{ listStyleType: 'none', display: 'flex', gap: '20px', width: '65%', height: '100%', justifyContent: 'space-around', alignItems: 'center', padding: 0, margin: 0, color:'white' }}>
                <li onClick={() => handleNavigation('/')} style={{ cursor: 'pointer' }}>Home</li>
                <li onClick={() => handleNavigation('/about')} style={{ cursor: 'pointer' }}>About</li>
                <li onClick={() => handleNavigation('/shop')} style={{ cursor: 'pointer' }}>Shop</li>
                <li onClick={() => handleNavigation('/contact')} style={{ cursor: 'pointer' }}>Contact</li>
            </ul>
        </div>
        <div className='w-1/4 flex flex-row justify-end'>
        <ul style={{ listStyleType: 'none', display: 'flex',  width: '55%', justifyContent: 'space-around',gap: '20px' }}>
                <li style={{ cursor: 'pointer' }}><img src='/assets/Svg/Union.svg' alt='Logo'/></li>
                <li onClick={() => handleNavigation('/cart')} style={{ cursor: 'pointer' }}><img src='/assets/Svg/ShoppingCart.svg' alt='Logo'/></li>
                <li onClick={() => handleNavigation('/Login')} style={{ cursor: 'pointer' }}><img src='/assets/Svg/Account.svg' alt='Logo'/></li>
              
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
