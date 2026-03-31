import React, { use } from 'react';
import Product from './Product';
import Cart from '../Cart/Cart';


const Products = ({ productPromise, activeTab, setActiveTab, carts, setCarts }) => {
    const products = use(productPromise);
    // console.log(products)

    return (
        <div className='max-w-7xl mx-auto py-20 space-y-3'>
            <div className='text-center space-y-3'>
                <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>

            {/* buttons */}
            <div className='flex justify-center'>
                <div className="tabs tabs-box rounded-full  inline-flex">
                    <input
                        type="radio"
                        name="my_tabs_1"
                        className="tab rounded-full text-base w-40"
                        aria-label="Products"
                        defaultChecked
                        onClick={() => setActiveTab('product')}
                    />
                    <input
                        type="radio"
                        name="my_tabs_1"
                        className="tab rounded-full text-base w-40"
                        aria-label={`Cart (${carts.length})`}
                        onClick={() => setActiveTab('cart')}
                    />
                </div>
            </div>

            {
                activeTab === 'product' && <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                    {
                        products.map(product => 
                        <Product
                            key={product.id}
                            product={product}
                            carts={carts}
                            setCarts={setCarts}
                        ></Product>)
                    }
                </div>
            }
            {
                activeTab === 'cart' && <Cart carts={carts} setCarts={setCarts}></Cart>
            }

        </div>
    );
};

export default Products;