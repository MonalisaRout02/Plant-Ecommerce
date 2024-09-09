import React from 'react'
import { useCart } from '../Context/CartContext';
const Cartpagecard = ({product}) => {
    const { state, dispatch } = useCart();
    console.log(product);
  return (
    <div className='border-slate-100 border border-2 m-3 p-3 w-full'>
      <div className='flex justify-between items-center'>
      <img 
            src={product.imgUrl}
            alt={product.category}
            className="image-product w-20"
          />
        <div className='Text'id='sideHeading' >{product.name}</div>
        <div  className='Text'id='sideHeading'>${product.price}</div>
        <div className="flex justify-between counter px-5 bg-slate-200 rounded-xl py-1">
              <button onClick={() => dispatch({type: "DECREASE_QUANTITY", payload: product})}
                
              >
                 <img className="w-3" src="./assets/minus.svg" alt="plus" />
              </button>
              <div className='px-4'>
              <span >{product.qnty}</span>

              </div>
              
              <button 
               onClick={() =>
                dispatch({ type: "INCREASE_QUANTITY", payload: product })
              } 
              >
                <img className="w-3" src="./assets/plus.svg" alt="plus" />
              </button>
            </div>

            <div>
            <button
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: product })
                }
                className=" btn-value "
              >
               
                <img className="w-3"src="./assets/dustbin.svg" alt="plus" />
              </button>
            </div>
          
      </div>
    </div>
  )
}

export default Cartpagecard
