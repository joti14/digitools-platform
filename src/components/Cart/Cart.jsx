import React from 'react';
import { LuShoppingCart } from 'react-icons/lu';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {

    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
    // console.log(totalPrice)

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
        <div className='space-y-5 mt-10 shadow-sm p-10 rounded-2xl'>
            <h1 className='text-2xl font-bold'>Your Cart</h1>
            {
                carts.length === 0
                    ? <div className='p-20 flex flex-col justify-center items-center gap-3'>
                        <LuShoppingCart className='text-5xl text-[#627382]' />
                        <p className='text-lg text-[#627382]'>Your cart is Empty</p>
                    </div>
                    :
                    <>
                        {
                            carts.map(item =>
                                <div className='flex items-center justify-between gap-4 px-4 py-8 bg-base-200 rounded-2xl' key={item.id}>
                                    <div className='flex items-center gap-4'>
                                        <img src={item.icon} alt="" />
                                        <div>
                                            <h2 className='text-xl font-semibold'>{item.name}</h2>
                                            <p className='text-[#627382]'>${item.price}</p>
                                        </div>
                                    </div>
                                    <div>

                                        <button onClick={() => handleDelete(item)} className='btn btn-error btn-soft rounded-xl'>Remove</button>
                                    </div>

                                </div>)
                        }

                        <div className='flex justify-between'>
                            <p>Total</p>
                            <h2>${totalPrice}</h2>
                        </div>
                        <button onClick={handlePayment} className='btn btn-primary w-full rounded-2xl'>Proceed to Checkout</button>
                    </>
            }

        </div>
    );
};

export default Cart;