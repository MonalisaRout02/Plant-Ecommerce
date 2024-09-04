
import React, { useEffect, useState } from 'react';
import {getFiltereddata} from '../utils/getFiltereddata';
import { useProducts } from "../Context/ProductContext";
const ProductListing = () => {

    const [products,setProducts] = useState([]);
    const {state} = useProducts();
    useEffect(()=>{
        const getData = async()=>{
            const response = await fetch("/api/products");
            const data =await  response.json();
            setProducts(data.products);
        }
        getData() 
      },[])
    console.log(products.products);
    

  const FinalProduct = getFiltereddata(state, products);

  return (
    <div>
      
    </div>
  )
}

export default ProductListing
