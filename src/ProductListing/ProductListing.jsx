
import React, { useEffect, useState } from 'react';
import {getFiltereddata} from '../utils/getFiltereddata';
import { useProducts } from "../Context/ProductContext";

import FeaturedCard from '../Components/FeaturedCard';
import FilterBar from '../Components/FilterBar';
const ProductListing = () => {

    let FinalProduct =[];

    const [products, setProducts] = useState([]);
    const {state} = useProducts();
    useEffect(()=>{
        const getData = async()=>{
            console.log("inside get data");
            const response = await fetch("/api/products");
            const data =await  response.json();
            setProducts(data.products);
        }
        getData() 
      },[])
    console.log("products are",products);
   

    
    
 if(products.length > 0 )
 {
     FinalProduct = getFiltereddata(state, products);
    console.log(FinalProduct);
 }
 



  return (
    <div>
    <div  className='flex flex-row gap-10 mt-20'>
        <div className='w-[25%] px-10'>
            <FilterBar />
        </div>
      <div className="productsContainer grid grid-cols-4  gap-2 w-[70%]">
        {FinalProduct.map((product) => (
          <FeaturedCard products={product} />
        ))}
      </div>
    </div>
  </div>
  )
}

export default ProductListing
