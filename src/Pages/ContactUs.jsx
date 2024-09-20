import React from 'react';
import ContactForm from '../Components/ContactForm';
import Navbar from '../Components/Navbar';
const ContactUs = () => {
  return (
    <div>
      <Navbar/>
      <div
        className='Contact-us-top flex flex-row justify-between lg:h-[30%] overflow-clip'
        style={{ width: '100%', background: 'linear-gradient(to bottom, #1E3822, #498052)' }}
      >
        <div className='flex w-1/2 justify-start items-center'>
          <h2
            className='Text text-center pb-10 pl-20'
            id='subHeadingMember'
            style={{ color: 'white' }}
          >
            Contact Us
          </h2>
        </div>
        <div className='flex w-1/2 justify-end items-end'>
          <img
            className='lg:w-[30%] md:w-[40%] sm:w-[30%]'
            src='/assets/AboutPlant.svg'
            alt='plant in pot'
          />
        </div>
      </div>

      <div className='flex justify-center my-20'>
        <div className='w-full lg:w-3/4 md:w-[90%] sm:w-full flex flex-col lg:flex-row'>
          <div className='flex flex-col w-full lg:w-1/2 px-4'>
            <h4 className='Text pb-4' id='sideHeading' style={{ fontSize: '0.7rem' }}>
              Contact Us
            </h4>
            <h2 className='Text pb-5' id='subHeading'>
              Get In Touch
            </h2>
            <p className='Text pb-6 lg:pr-28' id='BodyText'>
              Thank you for your interest in PetalNest. We’re excited to hear from you.
            </p>

            <div className='flex flex-row my-3'>
              <img className='pr-3' src='assets/Contact/location.svg' alt='location' />
              <div className='flex flex-col'>
                <p className='Text pb-1' id='BodyText'>
                  Call Us for inquiry
                </p>
                <p className='Text' style={{ fontSize: '0.8rem', color: '#151515' }}>
                  +5678765456
                </p>
              </div>
            </div>

            <div className='flex flex-row my-3'>
              <img className='pr-3' src='assets/Contact/email.svg' alt='email' />
              <div className='flex flex-col'>
                <p className='Text pb-1' id='BodyText'>
                  Email anytime
                </p>
                <p className='Text' style={{ fontSize: '0.8rem', color: '#151515' }}>
                  petalnest@gmail.com
                </p>
              </div>
            </div>

            <div className='flex flex-row my-3'>
              <img className='pr-3' src='assets/Contact/telephone.svg' alt='telephone' />
              <div className='flex flex-col'>
                <p className='Text pb-1' id='BodyText'>
                  Visit Our Store
                </p>
                <p className='Text' style={{ fontSize: '0.8rem', color: '#151515' }}>
                  15 Maniel Lane, 560023
                </p>
              </div>
            </div>
          </div>

          <div className='w-full lg:w-1/2 flex items-center px-4 mt-8 lg:mt-0'>
            <ContactForm />
          </div>
        </div>
      </div>


      <div className='responsive-map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124400.14425899845!2d77.50669956207273!3d13.003512376670596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1649294a5637%3A0xb1f8b77e331512cf!2sBengaluru%20Palace!5e0!3m2!1sen!2sin!4v1724741920884!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    


  );
};

export default ContactUs;
