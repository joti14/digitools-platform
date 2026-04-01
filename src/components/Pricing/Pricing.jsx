import React from 'react';

const Pricing = () => {
    return (
        <div className='max-w-7xl mx-auto my-25 space-y-4'>
            <div className='text-center space-y-4'>
                <h2 className='text-5xl font-extrabold'>Simple, Transparent Pricing</h2>
                <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className='mt-10 grid grid-cols-3'>

                {/* Starter Card */}
                <div className="card w-96 bg-base-200 shadow-sm">
                    <div className="card-body flex flex-col">
                        <div className="space-y-1">
                            <h2 className="text-3xl font-bold">Starter</h2>
                            <p className='text-gray-500 mb-3'>Perfect for getting started</p>
                        </div>
                        <span className="text-2xl font-bold">
                            $0<span className="text-base text-gray-500">/Month</span>
                        </span>
                        <ul className="mt-3 flex flex-col gap-2 text-sm text-gray-500">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>1 project per month</span>
                            </li>
                        </ul>

                        <div className="mt-auto pt-6">
                            <button className="btn btn-block text-white font-bold rounded-full bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)]  hover:scale-[1.02] transition-all duration-200">
                                Get Started Free
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pro Card */}
                <div className="card w-96 bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] shadow-sm text-white">
                    <div className="card-body flex flex-col relative">
                        <span className="badge badge-xs badge-warning badge-soft p-3 absolute -top-2 left-30 rounded-full text-xs">
                            Most Popular
                        </span>
                        <div className="space-y-1">
                            <h2 className="text-3xl font-bold">Pro</h2>
                            <p className=''>Best for professionals</p>
                        </div>
                        <h2 className="text-2xl">
                            $29<span className="text-xs">/Month</span>
                        </h2>
                        <ul className="mt-3 flex flex-col gap-2 text-sm">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Access to all premium tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Unlimited templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Priority support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Unlimited projects</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Cloud sync</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Advanced analytics</span>
                            </li>
                        </ul>

                        <div className="mt-auto pt-6">
                            <button className="btn btn-block bg-white border-none shadow-none font-bold rounded-full hover:scale-[1.02] transition-all duration-200">
                                <span className="bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] bg-clip-text text-transparent">
                                    Start Pro Trial
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Enterprise Card */}
                <div className="card w-96 bg-base-200 shadow-sm">
                    <div className="card-body flex flex-col">
                        <div className="space-y-1">
                            <h2 className="text-3xl font-bold">Enterprise</h2>
                            <p className='text-gray-500 mb-3'>For teams and businesses</p>
                        </div>
                        <span className="text-2xl font-bold">
                            $99<span className="text-base text-gray-500">/Month</span>
                        </span>
                        <ul className="mt-3 flex flex-col gap-2 text-sm text-gray-500">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Dedicated support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>SLA guarantee</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Custom branding</span>
                            </li>
                        </ul>

                        <div className="mt-auto pt-6">
                            <button className="btn btn-block text-white font-bold rounded-full bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] hover:scale-[1.02] transition-all duration-200">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Pricing;