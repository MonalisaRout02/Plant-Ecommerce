import React from 'react';
import Footer from '../Components/Footer';
import Accordion from '../Components/Accordian';
import Navbar from '../Components/Navbar';

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      {/* About us top part */}
      <div
        className='About-us-top flex flex-col lg:flex-row justify-between lg:h-[30%] overflow-hidden'
        style={{
          width: '100%',
          background: 'linear-gradient(to bottom, #1E3822, #498052)',
        }}
      >
        <div className='flex w-full lg:w-1/2 justify-center lg:justify-start items-center'>
          <h2
            className='Text text-center pb-10 lg:pb-0 lg:pl-20'
            id='subHeadingMember'
            style={{ color: 'white' }}
          >
            About Us
          </h2>
        </div>
        <div className='flex w-full lg:w-1/2 justify-center lg:justify-end items-end'>
          <img
            className='w-[50%] lg:w-[30%] md:w-[40%] sm:w-[50%]'
            src='/assets/AboutPlant.svg'
            alt='plant in pot'
          />
        </div>
      </div>

      {/* About Us Welcome */}
      <div className='flex justify-center my-20'>
        <div className='flex flex-col lg:flex-row w-full lg:w-3/4'>
          <div className='w-full lg:w-1/2 p-5 lg:p-20 lg:pl-0'>
            <h2 className='Text pb-7' id='subHeading'>
              Welcome to PetalNest, your go-to for all Plants
            </h2>
            <h4 className='Text pb-2' id='sideHeading'>
              At PetalNest,
            </h4>
            <p
              className='Text pb-2'
              id='BodyText'
              style={{ textAlign: 'justify' }}
            >
              We're dedicated to bringing the beauty and tranquility of nature
              into your home with a carefully curated selection of plants.
              Packaged in eco-friendly materials and accompanied by expert care
              tips, our plants help you create a serene, nature-inspired space.
              Whether you're an experienced plant lover or just starting out!
            </p>
          </div>
          <div className='w-full lg:w-1/2'>
            <img src='/assets/AboutUs.svg' alt='About-us-picture' />
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div
        className='flex justify-center w-full mb-20'
        style={{ backgroundColor: 'rgba(30, 55, 34, 0.5)' }}
      >
        <div className='flex flex-col lg:flex-row w-full lg:w-3/4 py-10 justify-between items-center'>
          <div className='flex flex-col items-center my-5 lg:my-0'>
            <img
              className='w-[50px] h-[50px] lg:w-[20%] lg:h-[40%]'
              src='/assets/Abouts/Truck.svg'
              alt='Truck'
            />
            <p
              className='Text text-center pt-3 pb-1'
              style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#1E3722',
              }}
            >
              Fast Delivery
            </p>
            <p className='Text text-center'>
              Free shipping over all orders
            </p>
          </div>

          <div className='flex flex-col items-center my-5 lg:my-0'>
            <img
              className='w-[50px] h-[50px] lg:w-[20%] lg:h-[40%]'
              src='/assets/Abouts/money.svg'
              alt='Money'
            />
            <p
              className='Text text-center pt-3 pb-1'
              style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#1E3722',
              }}
            >
              Big Savings
            </p>
            <p className='Text text-center'>
              Buy more and save more
            </p>
          </div>

          <div className='flex flex-col items-center my-5 lg:my-0'>
            <img
              className='w-[50px] h-[50px] lg:w-[20%] lg:h-[40%]'
              src='/assets/Abouts/Discount.svg'
              alt='Discount'
            />
            <p
              className='Text text-center pt-3 pb-1'
              style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#1E3722',
              }}
            >
              Member Discount
            </p>
            <p className='Text text-center'>
              On every order above $130
            </p>
          </div>

          <div className='flex flex-col items-center my-5 lg:my-0'>
            <img
              className='w-[50px] h-[50px] lg:w-[20%] lg:h-[40%]'
              src='/assets/Abouts/support.svg'
              alt='Support'
            />
            <p
              className='Text text-center pt-3 pb-1'
              style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#1E3722',
              }}
            >
              Customer Support
            </p>
            <p className='Text text-center'>
              24*7 support day and night
            </p>
          </div>
        </div>
      </div>

      <Accordion />
     

      <Footer />
    </div>
  );
};

export default AboutUs;
