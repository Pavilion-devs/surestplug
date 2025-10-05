import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const services = [
    {
      id: "001",
      title: "Handpicked Quality",
      description: "Every piece carefully selected for elegance and craftsmanship.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 sm:w-14 sm:h-14 text-neutral-900">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      ),
      bgColor: "bg-violet-100"
    },
    {
      id: "002",
      title: "Fast Delivery",
      description: "Quick shipping to get your jewelry to you on time.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 sm:w-14 sm:h-14 text-neutral-900">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      ),
      bgColor: "bg-lime-100"
    },
    {
      id: "003",
      title: "Customer Care",
      description: "Dedicated support via WhatsApp for all your inquiries.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 sm:w-14 sm:h-14 text-neutral-900">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
      bgColor: "bg-rose-100"
    },
    {
      id: "004",
      title: "Curated Collections",
      description: "Gold rings and hand chains designed to elevate your style.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 sm:w-14 sm:h-14 text-neutral-900">
          <circle cx="12" cy="8" r="6"></circle>
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
        </svg>
      ),
      bgColor: "bg-amber-100"
    }
  ];

  return (
    <section className="sm:px-6 lg:px-8 sm:mt-32 lg:mt-20 max-w-7xl mt-24 mr-auto ml-auto pr-4 pl-4">
      <div className="sm:pt-20 border-neutral-200 border-0 pt-16 pb-16">
        <div className="mb-10 sm:mb-12 flex items-center justify-between">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            About Royal Adorns<span className="text-neutral-300">.</span>
          </h2>
          <Link
            to="/about"
            className="hidden sm:flex items-center gap-2 text-neutral-900 text-sm font-medium tracking-tight hover:underline"
          >
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          <div className="">
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed tracking-tight mb-6">
              Royal Adorns is your destination for elegant jewelry that adds a touch of luxury to your everyday style.
            </p>
            <p className="text-base text-neutral-600 leading-relaxed tracking-tight">
              Born from a passion for rings and beautiful accessories, Royal Adorns curates pieces that speak to your unique personality. From chunky gold statement rings to delicate dainty pieces and elegant hand chains, every item is chosen with care and attention to detail.
            </p>
          </div>
          <div className="space-y-8">
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-xl font-medium tracking-tight mb-2">Our Mission</h3>
              <p className="text-neutral-600 tracking-tight">To help you discover jewelry that makes you feel confident and beautiful.</p>
            </div>
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-xl font-medium tracking-tight mb-2">Our Collections</h3>
              <p className="text-neutral-600 tracking-tight">Carefully curated gold rings (chunky & dainty) and hand chains that elevate any look.</p>
            </div>
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-xl font-medium tracking-tight mb-2">Why Choose Us</h3>
              <p className="text-neutral-600 tracking-tight">Quality pieces, personalized service, and a commitment to making luxury accessible.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 gap-x-6 gap-y-6">
          {services.map((service) => (
            <div key={service.id} className={`relative border-black border-8 ${service.bgColor} rounded-[28px] overflow-hidden h-80 sm:h-96 flex flex-col`}>
              <div className="px-6 pt-6">
                <span className="text-neutral-700 text-sm tracking-tight">( {service.id} )</span>
              </div>
              <div className="flex-1 flex items-center justify-center">
                {service.icon}
              </div>
              <div className="px-6 pb-6">
                <h3 className="text-sm font-medium uppercase tracking-tight mb-2">{service.title}</h3>
                <p className="text-neutral-600 text-sm tracking-tight">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
