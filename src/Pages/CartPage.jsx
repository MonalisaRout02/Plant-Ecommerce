import React,{useEffect, useState} from 'react'
import { useCart } from '../Context/CartContext'
import Cartpagecard from '../Components/Cartpagecard';
import Navbar from '../Components/Navbar';
const Cart = () => {

  const { state } = useCart();
  const [cartItemState, setItemState] = useState(false);
  console.log("from cart page",state.cart);
  
  useEffect(() => {
    if (state.cart.length > 0) {
      setItemState(true);
    } else {
      setItemState(false);
    }
  }, [state.cart.length]);


  return (
    <div>
      <Navbar/>
      <div className='w-full flex justify-center align-middle my-20' >
    <div className=' w-[70%]'>
      {!cartItemState && (
                  <div className='flex justify-center mt-20'>
                   
                    <h2>No Items in the cart</h2>
                    </div>
                )}
      <div className='flex flex-col gap-10'>
      
      {cartItemState &&
                  state.cart.map((products) => {
                    return <Cartpagecard  key={products.id}  product={products} id={products.id} />;
                  })}

      </div>
    </div>
    </div>
    </div>
    
  )
}

export default Cart
