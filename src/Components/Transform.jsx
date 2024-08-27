import React from 'react'
import Button from './Button'
const Transform = () => {
  return (
    <div className='transform flex justify-center bg-white' style={{marginBottom:'80px',}}>
         <div className='w-3/4 flex flex-row justify-center ' >
            <div className='w-2/4' style={{paddingRight:'200px'}}>
                <h4 className='Text' id='sideHeading'>Transform</h4>
                <h1 className='Text'id='subHeading'>Bringing Nature’s Beauty Into Your Home</h1>
         </div>
         <div className='w-2/4 pr-15'>
             <p className='Text pb-2' id='BodyText' style={{ textAlign: 'justify'}}> Discover the numerous benefits of having plants at home. From purifying the air to enhancing aesthetics and promoting mental wellness of the surrounding Environment as well as people.</p>
            <Button text="Shop now"/>
         </div>
    </div>
    </div>
   
  )
}

export default Transform
