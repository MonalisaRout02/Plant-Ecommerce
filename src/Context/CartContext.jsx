import {cartReducer} from "../Reducers/CartReducer.jsx"
import {createContext,useReducer,useContext } from "react";


const Cartcontext=createContext();

const useCart = () => useContext(Cartcontext);

const CartProvider = ({children}) => {
 const [state,dispatch] = useReducer(cartReducer,{cart:[]});
  return (
    <Cartcontext.Provider value={{state,dispatch}}>
      {children}
    </Cartcontext.Provider>
  );
};

export  {CartProvider,useCart};