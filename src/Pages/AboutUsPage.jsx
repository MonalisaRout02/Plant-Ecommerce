import React from 'react'
import Footer from '../Components/Footer'
const AboutUs = () => {
  return (
    <div>
      {/* About us top part */}
      <div className='About-us-top flex flex-row justify-between lg:h-[30%] overflow-clip' style={{ width: '100%',background: 'linear-gradient(to bottom, #1E3822, #498052)'}}>
        <div className='flex w-1/2 justify-start items-center'>
            <h2 className='Text text-center pb-10 pl-20  ' id='subHeadingMember' style={{ color: 'white' }}>About US</h2>
        </div>
        <div className='flex w-1/2 justify-end items-end'>
            <img className='lg:w-[30%] md:w-[40%] sm:w-[30%]' src="/assets/AboutPlant.svg" alt=""plant in pot />
        </div>
      </div>
      {/* about us Welcome */}
      <div className='flex justify-center '> 
        <div className='flex flex-row w-3/4 my-20'>
          <div className='w-1/2 p-20 pl-0'>
          <h2 className='Text pb-7'id='subHeading'>Welcome to PetalNest, your go-to for all Plants</h2>
          <h4 className='Text pb-2' id='sideHeading'>At PetalNest,</h4>
          <p className='Text pb-2' id='BodyText' style={{ textAlign: 'justify'}}> we're dedicated to bringing the beauty at PetalNest, we bring the beauty and tranquility of nature into your home with a carefully curated selection of plants. Packaged in eco-friendly materials and accompanied by expert care tips, our plants help you create a serene, nature-inspired space. Whether you're an experienced plant lover or just starting out ! we're dedicated to bringing the beauty at PetalNest,</p>
          </div>
          <div className='w-1/2'>
            <img src="/assets/AboutUs.svg " alt="About-us-picture" />
          </div>
        </div>
      </div>
      {/* why choose us */}
      <div className='flex justify-center w-full mb-20' style={{backgroundColor:'rgba(30, 55, 34, 0.5)'}}>
        
            <div className='flex flex-row w-3/4 py-10 justify-between'> 
                
                <div className='flex flex-col items-center'>
                  <img className="w-[20%] h-[40%]" src="/assets/Abouts/Truck.svg" alt=" Truck" />
                  <p className='Text text-center pt-3 pb-1' style={{fontSize:'16px', fontWeight:'600', color:'1E3722'}}>Fast Delivery</p>
                  <p className='Text text-center' >Free shipping over all orders</p>

                </div>
                <div className='flex flex-col items-center'>
                  <img className="w-[20%] h-[40%]" src="/assets/Abouts/money.svg" alt=" Truck" />
                  <p className='Text text-center pt-3 pb-1' style={{fontSize:'16px', fontWeight:'600', color:'1E3722'}}>Big Savings</p>
                  <p className='Text text-center' >Buy more and save more</p>

                </div>
                <div className='flex flex-col items-center'>
                  <img className="w-[20%] h-[40%]" src="/assets/Abouts/Discount.svg" alt=" Truck" />
                  <p className='Text text-center pt-3 pb-1' style={{fontSize:'16px', fontWeight:'600', color:'1E3722'}}>Member Discount</p>
                  <p className='Text text-center' >On every order above $130</p>

                </div>
                <div className='flex flex-col items-center'>
                  <img className="w-[20%] h-[40%]" src="/assets/Abouts/support.svg" alt=" Truck" />
                  <p className='Text text-center pt-3 pb-1' style={{fontSize:'16px', fontWeight:'600', color:'1E3722'}}>Customer Support</p>
                  <p className='Text text-center' >24*7 support day and night</p>

                </div>
            </div>
      </div>
      
      
      <Footer />

    </div>
  )
}

export default AboutUs
