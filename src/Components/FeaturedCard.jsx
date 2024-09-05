import React from 'react';
import AddToCart from './AddToCart';

const FeaturedCard = ({ products }) => {
  return (
    <div className='flex flex-col w-[13rem] h-[17rem] shadow-lg p-2 z-10 ' > 
      <div className='relative'>
        <img src={products.imgUrl} alt={products.name} className="w-full h-full object-cover" /> 
        <AddToCart />
      </div>
      <div className='mt-2'> 
        <p id='BodyText'>{products.name}</p>
        <div className='flex flex-row items-center'>
          <p className='flex flex-grow' id='BoldBodyText'>{products.price}</p>
          <img style={{ width: '7%' }} src="./assets/Arrow.svg" alt="Arrow" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
