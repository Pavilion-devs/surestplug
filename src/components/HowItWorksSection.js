import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Sign up',
      description: 'and choose your role.'
    },
    {
      number: '2',
      title: 'List or find',
      description: 'what you need — services, deliveries, or opportunities.'
    },
    {
      number: '3',
      title: 'Get paid',
      description: 'securely after completion.'
    }
  ];

  return (
    <section className="sm:px-6 max-w-7xl mr-auto ml-auto pr-5 pl-5 py-20 bg-neutral-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6">
          How It Works
        </h2>
        <p className="text-lg text-neutral-600">
          Simple as 1-2-3
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-900 text-white text-2xl font-bold mb-4">
              {step.number}
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2 tracking-tight">
              {step.title}
            </h3>
            <p className="text-neutral-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="cursor-pointer transition-all duration-300 ease hover:shadow-none hover:translate-y-[3px] hover:translate-x-[3px] text-sm font-bold text-center bg-white border-black border-2 rounded-md pt-2.5 pr-6 pb-2.5 pl-6 shadow-[5px_5px_0px_black]">
          Start Now — It's Free
        </button>
      </div>
    </section>
  );
};

export default HowItWorksSection;
