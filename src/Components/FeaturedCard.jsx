import React from 'react';

import { useCart } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const FeaturedCard = ({ products }) => {

  const {
    state: { cart},
    dispatch,
  } = useCart();

  return (
    <div className='flex flex-col w-[13rem] h-[17rem] shadow-lg p-2 z-10 ' > 
      <div className='relative'>
        <img src={products.imgUrl} alt={products.name} className="w-full h-full object-cover" /> 
        {cart.some((p) => p.id === products.id) ? (
          <Link to="/cart">
            <div className='CartDiv'>
              <button className='Cart'>
              <img style={{width:'70%'}} src = "./assets/Cart.svg"/>
              </button>
            </div>
          </Link>
        ) : (
          <Link to="/cart">
          <div className='CartDiv'>
          <button
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: products })}
            className='Cart'
          >
            <img style={{width:'70%'}} src = "./assets/Cart.svg"/>
          </button>
          </div>
          </Link>
        )}


        
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
