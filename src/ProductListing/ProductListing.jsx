import React, { useEffect, useState } from 'react';
import { getFiltereddata } from '../utils/getFiltereddata';
import { useProducts } from "../Context/ProductContext";

import FeaturedCard from '../Components/FeaturedCard';
import FilterBar from '../Components/FilterBar';

const ProductListing = () => {
    let FinalProduct = [];

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

    if (products.length > 0) {
        FinalProduct = getFiltereddata(state, products);
    }

    return (
        <div style={{ height: '100%', overflow: 'auto' }}>
            <div className="flex flex-row gap-10 mt-20" style={{ height: '100%' }}>
                <div style={{ width: '25%', padding: '0 15px' }}>
                    <FilterBar />
                </div>
                <div
                    className="productsContainer grid grid-cols-4 gap-2"
                    style={{
                        width: '70%',
                        minHeight: '100vh',
                        overflowY: 'auto',
                        paddingBottom: '20px', // for spacing
                    }}
                >
                    {FinalProduct.length > 0 ? (
                        FinalProduct.map((product) => (
                            <FeaturedCard key={product.id} products={product} />
                        ))
                    ) : (
                        <p>No products found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductListing;
