import React from 'react'
import Button from './Button'
const Transform = () => {
  return (
    <div className='transform flex justify-center bg-white' style={{marginBottom:'80px',}}>
         <div className='lg:w-3/4 w-full px-5 md:w-3/4 flex flex-col lg:flex-row md:flex-row justify-center ' >
            <div className='lg:w-2/4 lg:pr-24 pt-2' >
                <h4 className='Text' id='sideHeading'>Transform</h4>
                <h2 className='Text'id='subHeading'>Bringing Nature’s Beauty Into Your Home</h2>
         </div>
         <div className='lg:w-2/4 lg:pr-15 pt-2'>
             <p className='Text pb-2 BodyText' style={{ textAlign: 'justify'}}> Discover the numerous benefits of having plants at home. From purifying the air to enhancing aesthetics and promoting mental wellness of the surrounding Environment as well as people.</p>
            <Button text="Shop now"/>
         </div>
    </div>
    </div>
   
  )
}

export default Transform
