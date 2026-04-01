import React, { use } from 'react';
import Product from './Product';
import Cart from '../Cart/Cart';

const Products = ({ productPromise, activeTab, setActiveTab, carts, setCarts }) => {
    const products = use(productPromise);

    return (
        <div className='max-w-7xl mx-auto px-4 py-10 sm:py-20 space-y-3'>
            <div className='text-center space-y-3'>
                <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>Premium Digital Tools</h2>
                <p className='text-[#627382] text-sm sm:text-base'>
                    Choose from our curated collection of premium digital products designed <br className='hidden sm:block' />
                    to boost your productivity and creativity.
                </p>
            </div>

            {/* Tab Buttons */}
            <div className='flex justify-center'>
                <div className="flex bg-base-200 rounded-full p-1 gap-1">
                    <button
                        onClick={() => setActiveTab('product')}
                        className={`px-5 sm:px-8 py-2 rounded-full font-semibold text-sm sm:text-base cursor-pointer
                            ${activeTab === 'product'
                                ? 'bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] text-white shadow'
                                : 'text-gray-500 hover:text-gray-800'
                            }`}
                    >
                        Products
                    </button>
                    <button
                        onClick={() => setActiveTab('cart')}
                        className={`px-5 sm:px-8 py-2 rounded-full font-semibold text-sm sm:text-base cursor-pointer
                            ${activeTab === 'cart'
                                ? 'bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] text-white shadow'
                                : 'text-gray-500 hover:text-gray-800'
                            }`}
                    >
                        Cart ({carts.length})
                    </button>
                </div>
            </div>

            {activeTab === 'product' && (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                    {products.map(product => (
                        <Product
                            key={product.id}
                            product={product}
                            carts={carts}
                            setCarts={setCarts}
                        />
                    ))}
                </div>
            )}

            {activeTab === 'cart' && (
                <Cart carts={carts} setCarts={setCarts} />
            )}
        </div>
    );
};

export default Products;