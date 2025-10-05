import React from 'react';

const NetworkSection = () => {
  const roles = [
    {
      title: 'Service Provider',
      description: 'Offer what you do best and get paid safely through escrow.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Service Seeker',
      description: 'Hire trusted hands for what you need — from plumbing to photography.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: 'Rider',
      description: 'Earn per delivery by fulfilling requests from verified users near you.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Dropshipping Partner',
      description: 'Grow your business or represent local brands to earn commissions.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ];

  return (
    <section className="sm:px-6 max-w-7xl mr-auto ml-auto pr-5 pl-5 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
          Find your role in the ecosystem.
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Everyone plays a part — providers, customers, riders, and agents — all connected through one trusted network.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {roles.map((role, index) => (
          <div
            key={index}
            className="border-2 border-neutral-200 rounded-lg p-6 hover:border-neutral-900 transition-all duration-300 hover:shadow-lg group"
          >
            <div className="text-neutral-900 mb-4 group-hover:scale-110 transition-transform duration-300">
              {role.icon}
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3 tracking-tight">
              {role.title}
            </h3>
            <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
              {role.description}
            </p>
            <button className="text-sm font-medium text-neutral-900 hover:underline">
              Join Now →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NetworkSection;
