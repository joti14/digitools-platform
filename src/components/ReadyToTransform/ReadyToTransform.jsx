import React from 'react';

const ReadyToTransform = () => {
    return (
        <div className='bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] p-20 text-center text-white space-y-8'>
            <div className='space-y-3'>
                <h1 className='text-4xl font-bold'>Ready to Transform Your Workflow?</h1>
                <p>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
            </div>
            <div className='flex items-center justify-center gap-3'>
                <button className="btn bg-white border-none shadow-none font-bold rounded-full hover:scale-[1.02] transition-all duration-200">
                    <span className="bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] bg-clip-text text-transparent">
                        Explore Products
                    </span>
                </button>
                <button className='btn bg-transparent text-white shadow-none rounded-full hover:scale-[1.02] transition-all duration-200'>View Pricing</button>
            </div>
            <p>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default ReadyToTransform;