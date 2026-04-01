import React from 'react';
import { LuShoppingCart } from 'react-icons/lu';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {

    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

    const handlePayment = () => {
        setCarts([]);
        toast.success("Payment Successfull!");
    }

    const handleDelete = (item) => {
        const filterdItems = carts.filter(i => i.id != item.id);
        setCarts(filterdItems);
        toast.error("Item deleted!");
    }
    return (
        <div className='space-y-5 mt-10 shadow-sm p-4 sm:p-10 rounded-2xl'>
            <h1 className='text-2xl font-bold'>Your Cart</h1>
            {
                carts.length === 0
                    ? <div className='p-10 sm:p-20 flex flex-col justify-center items-center gap-3'>
                        <LuShoppingCart className='text-5xl text-[#627382]' />
                        <p className='text-lg text-[#627382]'>Your cart is Empty</p>
                    </div>
                    :
                    <>
                        {
                            carts.map(item =>
                                <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-4 py-6 sm:py-8 bg-base-200 rounded-2xl' key={item.id}>
                                    <div className='flex items-center gap-4'>
                                        <img src={item.icon} alt="" className='w-10 h-10 object-contain' />
                                        <div>
                                            <h2 className='text-base sm:text-xl font-semibold'>{item.name}</h2>
                                            <p className='text-[#627382]'>${item.price}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => handleDelete(item)} className='btn btn-error btn-soft rounded-xl'>Remove</button>
                                    </div>
                                </div>)
                        }

                        <div className='flex justify-between text-2xl font-bold mx-5'>
                            <p>Total</p>
                            <h2>${totalPrice}</h2>
                        </div>
                        <button onClick={handlePayment} className='btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white text-base w-full rounded-2xl'>Proceed to Checkout</button>
                    </>
            }

        </div>
    );
};

export default Cart;