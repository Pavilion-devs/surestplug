import React from 'react';

const Hero = () => {
  return (
    <section className="sm:px-6 max-w-[1200px] mr-auto ml-auto pr-5 pl-5 space-y-6">
      <div className="sm:pt-36 md:pt-44 lg:pt-48 text-center pt-32 space-y-6">
        <h1 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[1.1] font-bold tracking-tight text-neutral-900">
          One platform. Endless opportunities to earn, serve, and grow.
        </h1>
        <p className="sm:text-lg md:text-xl text-base text-neutral-600 tracking-tight max-w-3xl mx-auto mt-6">
          Whether you're finding services, expanding your business, or delivering goods — SurestPlug connects you to people who make things happen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
          <div className="relative inline-block group">
            <button className="cursor-pointer flex transition-all duration-300 ease hover:shadow-none hover:translate-y-[3px] hover:translate-x-[3px] text-sm font-bold text-center bg-white border-black border-2 rounded-md pt-2.5 pr-6 pb-2.5 pl-6 shadow-[5px_5px_0px_black] gap-x-2 gap-y-2 items-center justify-center">
              Get Started
              <svg className="w-5 h-5 transition-all duration-300 ease-in-out" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd"></path>
              </svg>
            </button>
            <span className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                  style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255,255,255,.55), rgba(255,255,255,.28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}
                  aria-hidden="true"></span>
          </div>
          <button className="text-sm font-medium text-neutral-900 border-neutral-900 border-2 rounded-md pt-2.5 pr-6 pb-2.5 pl-6 hover:bg-neutral-50 transition-colors">
            Explore Marketplace
          </button>
        </div>
        <p className="text-xs text-neutral-500 mt-4 flex items-center justify-center gap-2">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          100% escrow-secured transactions. Verified users only.
        </p>
      </div>
    </section>
  );
};

export default Hero;
