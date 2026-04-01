import React from 'react';

const Stats = () => {
    return (
    <section className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between text-white px-6 gap-6 sm:gap-0">
        
        <div className="px-8 text-center">
          <h2 className="text-4xl font-bold">50K+</h2>
          <p className="text-sm">Active Users</p>
        </div>

        <div className="hidden sm:block h-10 w-px bg-white/40"></div>

        <div className="px-8 text-center">
          <h2 className="text-4xl font-bold">200+</h2>
          <p className="text-sm">Premium Tools</p>
        </div>

        <div className="hidden sm:block h-10 w-px bg-white/40"></div>

        <div className="px-8 text-center">
          <h2 className="text-4xl font-bold">4.9</h2>
          <p className="text-sm">Rating</p>
        </div>

      </div>
    </section>
  );
};

export default Stats;