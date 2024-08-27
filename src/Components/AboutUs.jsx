import React from 'react'
import Button from './Button'

const AboutUs = () => {
  return (
    <div className='flex justify-center '  style={{marginBottom:'155px'
    }}>
      <div className='flex flex-col lg:flex-row lg:w-[75%] md:w-[75%] sm:w-[95%] lg:gap-12'  >
        <div className='flex flex-col justify-between w-full lg:w-2/4 lg:mb-0 sm:mb-10 ' style={{height:'328px'}}>
            <h1 className='Text' id='subHeading'>Know Our Story</h1>
            <p className='Text  ' style={{ textAlign: 'justify'}} id='BodyText'> At PetalNest, we're dedicated to bringing the beauty at PetalNest, we bring the beauty and tranquility of nature into your home with a carefully curated selection of plants. Packaged in eco-friendly materials and accompanied by expert care tips, our plants help you create a serene, nature-inspired space. Whether you're an experienced plant lover or just starting out !</p>
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
