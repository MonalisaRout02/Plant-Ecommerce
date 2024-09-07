import React from 'react'
import Button from './Button'

const AboutUs = () => {
  return (
    <div className='flex justify-center '  style={{marginBottom:'180px',marginTop:'280px'
    }}>
      <div className='flex flex-col lg:flex-row w-full px-5 lg:w-3/4 md:w-3/4  lg:gap-8'  >
        <div className='flex flex-col  w-full lg:w-2/4 mb-10' >
            <h1 className='Text pb-8 ' id='subHeading'>Know Our Story</h1>
            <p className='Text  pb-6 BodyText ' style={{ textAlign: 'justify'}} > We're dedicated to bringing the beauty and tranquility of nature into your home with a carefully curated selection of plants. Packaged in eco-friendly materials and accompanied by expert care tips, our plants help you create a serene, nature-inspired space. Whether you're an experienced plant lover or just starting out, our diverse range ensures there's something perfect for every home and lifestyle. Let us guide you in choosing plants that enhance your environment and bring joy to your everyday life. </p>
            <Button  text="Know more"/>
        </div>
        <div className='flex flex-row gap-3 justify-between' style={{height:'328px'}}>
            <div style={{height:'328px'}}><img style={{height:'328px', objectFit:'cover', borderRadius:'18px'}} src="./assets/KnowUs/First.svg" alt="know us"/></div>
            <div className='flex flex-col justify-between' style={{height:'328px'}}>
                <img style={{height:'220px', objectFit:'cover', borderRadius:'18px'}} src="./assets/KnowUs/Sec1.svg"alt="know us"/>
                <img style={{height:'100px', objectFit:'cover', borderRadius:'18px'}} src="./assets/KnowUs/Sec2.svg"alt="know us"/>
            </div>
            <div className='flex flex-col justify-between' style={{height:'328px',  borderRadius:'18px'}}>
                <img  style={{height:'100px', objectFit:'cover', borderRadius:'18px'}} src="./assets/KnowUs/Third1.svg"  alt="know us"/>
                <img style={{height:'220px', objectFit:'cover', borderRadius:'18px'}} src="./assets/KnowUs/Third2.svg"   alt="know us"/>
            </div>
        
        </div>
        </div>
    </div>
    
  )
}

export default AboutUs
