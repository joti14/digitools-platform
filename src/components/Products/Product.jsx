import React, { useState } from 'react';
import PricingFeature from './PricingFeature';
import { FaCheck } from 'react-icons/fa';


const Product = ({ product }) => {
    // console.log(product)
    const [isAddToCart, setIsAddToCart] = useState(false);

    const handleAddToCart = () => {
        setIsAddToCart(true);
    }

    const { icon, name, description, price, period, features, tag, tagType } = product;

    return (
        <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body space-y-2">
                <span
                    className={`absolute top-1 right-2 badge badge-xs text-sm p-2 ${tagType === 'best-seller'
                        ? 'badge badge-soft badge-warning'
                        : tagType === 'popular'
                            ? 'badge badge-soft badge-primary'
                            : tagType === 'new'
                                ? 'badge badge-soft badge-success'
                                : ''
                        }`}
                >
                    {tag}
                </span>
                <img src={icon} alt="" className='w-8' />
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold">{name}</h2>
                    <p className='text-[#627382]'>{description}</p>
                </div>
                <h2 className="text-xl"><span className='font-bold'>${price}</span>/{period}</h2>

                {
                    features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                }
                <div className="mt-6">
                    <button onClick={handleAddToCart} className={`btn btn-block border-none shadow-none text-white ${isAddToCart
                        ? 'bg-green-500'
                        : 'bg-linear-to-r from-[#4f39f6] to-[#9514fa]'
                        }`}>
                        <span className="flex items-center justify-center gap-2">
                            {isAddToCart && <FaCheck />}
                            <span>{isAddToCart ? 'Added to Cart' : 'Buy Now'}</span>
                        </span></button>
                </div>
            </div>
        </div>
    );
};

export default Product;