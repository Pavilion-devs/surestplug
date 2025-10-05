import React from 'react';

const CTASection = () => {
  return (
    <section className="sm:px-6 max-w-7xl mr-auto ml-auto pr-5 pl-5 py-20 bg-neutral-50">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6">
          Get Plugged In
        </h2>
        <p className="text-lg text-neutral-600 mb-4">
          Wherever you are, the plug is closer than you think.
        </p>
        <p className="text-base text-neutral-600 mb-8">
          Start connecting, earning, and growing from your browser or mobile.
        </p>
        <button className="cursor-pointer transition-all duration-300 ease hover:shadow-none hover:translate-y-[3px] hover:translate-x-[3px] text-sm font-bold text-center bg-neutral-900 text-white border-neutral-900 border-2 rounded-md pt-3 pr-8 pb-3 pl-8 shadow-[5px_5px_0px_black]">
          Launch App
        </button>
      </div>
    </section>
  );
};

export default CTASection;
