import { Package, Rocket, User } from 'lucide-react';
import React from 'react';

const GetStarted = () => {
    return (
        <div className='bg-base-200'>
            <div className='max-w-7xl mx-auto p-6 sm:p-12 lg:p-20'>
                <div className='text-center space-y-3 mb-8'>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold'>Get Started in 3 Steps</h1>
                    <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    <div className="card w-full bg-base-100 card-xs shadow-sm text-center py-10 relative">
                        <span className='absolute top-2 right-2 bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] inline-flex justify-center items-center w-2 h-2 rounded-full text-sm font-medium text-white p-4'>01</span>
                        <div className="card-body flex items-center">
                            <div className="p-2 rounded-full bg-[#F7EDFE] flex items-center justify-center">
                                <User className="text-purple-700 w-10 h-10" />
                            </div>
                            <h2 className="card-title text-2xl font-bold">Create Account</h2>
                            <p className='text-[#627382]'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 card-xs shadow-sm py-10 text-center relative">
                        <span className='absolute top-2 right-2 bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] inline-flex justify-center items-center w-2 h-2 rounded-full text-sm font-medium text-white p-4'>02</span>
                        <div className="card-body flex items-center">
                            <div className="p-2 rounded-full bg-[#F7EDFE] flex items-center justify-center">
                                <Package className="text-purple-700 w-10 h-10" />
                            </div>
                            <h2 className="card-title text-2xl font-bold">Choose Products</h2>
                            <p className='text-[#627382]'>Browse our catalog and select the tools <br /> that fit your needs.</p>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 card-xs shadow-sm text-center py-10 relative">
                        <span className='absolute top-2 right-2 bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] inline-flex justify-center items-center w-2 h-2 rounded-full text-sm font-medium text-white p-4'>03</span>
                        <div className="card-body flex items-center">
                            <div className="p-2 rounded-full bg-[#F7EDFE] flex items-center justify-center">
                                <Rocket className="text-purple-700 w-10 h-10" />
                            </div>
                            <h2 className="card-title text-2xl font-bold">Start Creating</h2>
                            <p className='text-[#627382]'>Download and start using your premium <br /> tools immediately.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;