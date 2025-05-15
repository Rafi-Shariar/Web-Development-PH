import React from 'react';
import ProductCard from './ProductCard';

const ProductContainer = ({coffees}) => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className='flex flex-col items-center justify-center'>
                  <h1 className='text-2xl  mt-10'>Our Popular Products</h1>
                  <button className='btn'>Add Coffee</button>
            </div>

            <div className='grid grid-cols-2 gap-5'>
                {
                    coffees.map(coffee => <ProductCard coffee={coffee}></ProductCard>)
                }
            </div>
            
        </div>
    );
};

export default ProductContainer;