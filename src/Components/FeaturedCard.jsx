import React from 'react';
import AddToCart from './AddToCart';

const FeaturedCard = ({ ProductName, Price, imgUrl }) => {
  return (
    <div className='flex flex-col w-[13rem] shadow-lg p-2 ' style={{ minHeight: 'auto' }}> 
      <div className='relative'>
        <img src={imgUrl} alt={ProductName} className="w-full h-auto object-cover" /> 
        <AddToCart />
      </div>
      <div className='mt-2'> 
        <p id='BodyText'>{ProductName}</p>
        <div className='flex flex-row items-center'>
          <p className='flex flex-grow' id='BoldBodyText'>{Price}</p>
          <img style={{ width: '7%' }} src="./assets/Arrow.svg" alt="Arrow" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
