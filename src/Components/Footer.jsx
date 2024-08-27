import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className='flex justify-center py-10 '
    style={{
        backgroundImage: 'url(/assets/Footerr.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} >
        
        <div className='flex flex-row w-3/4 justify-around'>
                <div className='flex flex-col'>
                <h2 className='footerHead'>Navigation Links</h2>
                <Link to='/HomePage' className='footerText'>Home Page</Link>
                <Link to='/Shop'className='footerText'>Shop Page</Link>
                <Link to='/AboutUsPage' className='footerText'>About Us</Link>
                <Link to='/ContactUs' className='footerText'>Contact Us</Link>
                </div>
                 <div className='flex flex-col '>
                <h2 className='footerHead'>Useful Links</h2>
                <p className='footerText'>Services</p>
                <p className='footerText'>Supports</p>
                <p className='footerText'>Terms & Conditions</p>
                <p className='footerText'>Privcay Policy</p>
                </div>
                <div className='flex flex-col'>
                <h2 className='footerHead'>Connect With Us</h2>
                <p className='footerText'>Phone : +213456526512</p>
                <a href="mailto:petalnest@gmail.com">petalnest@gmail.com</a>

                </div>
            </div>
       
            
        
        
      
    </div>
  )
}

export default Footer
