import React, { useEffect, useState } from 'react';
import { getFiltereddata } from '../utils/getFiltereddata';
import { useProducts } from "../Context/ProductContext";
import FeaturedCard from '../Components/FeaturedCard';
import FilterBar from '../Components/FilterBar';

const ProductListing = () => {
    const [products, setProducts] = useState([]);
    const { state } = useProducts();

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("/api/products");
            const data = await response.json();
            setProducts(data.products);
        };
        getData();
    }, []);

    const FinalProduct = products.length > 0 ? getFiltereddata(state, products) : [];

    return (
        <div className="flex flex-col h-full overflow-auto">
            <div className="flex flex-col md:flex-row gap-10 mt-20">
                <div className="w-full md:w-1/4 p-4">
                    <FilterBar />
                </div>

                <div className="productsContainer grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full p-4">
                    {FinalProduct.length > 0 ? (
                        FinalProduct.map((product) => (
                            <FeaturedCard key={product.id} products={product} />
                        ))
                    ) : (
                        <div className="flex justify-center items-center w-full h-full">
                            <img src="./assets/Plant.gif" alt="Loading..." className="w-1/2" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductListing;
