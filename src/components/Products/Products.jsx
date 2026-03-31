import React, { use } from 'react';
import Product from './Product';

const Products = ({ productPromise }) => {
    const products = use(productPromise);
    // console.log(products)
    return (
        <div className='max-w-7xl mx-auto py-20 space-y-3'>
            <div className='text-center space-y-3'>
                <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>

            {/* buttons */}
            <div className='flex justify-center '>

                <div className='inline-flex rounded-3xl shadow-sm p-1.5 overflow-hidden'>
                    <button className='btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-r-none rounded-l-2xl text-white'>Products</button>
                    <button className='btn rounded-l-none rounded-r-2xl'>Cart (2)</button>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>

        </div>
    );
};

export default Products;