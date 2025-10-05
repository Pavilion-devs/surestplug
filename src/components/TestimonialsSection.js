import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I found my first 10 customers here and never worried about payment again.",
      author: "Tunde",
      role: "Service Provider"
    },
    {
      quote: "I expanded my small clothing brand to 4 cities with SurestPlug agents.",
      author: "Chioma",
      role: "Business Owner"
    }
  ];

  return (
    <section className="sm:px-6 max-w-7xl mr-auto ml-auto pr-5 pl-5 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6">
          Trusted by Real People
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border-2 border-neutral-200 rounded-lg p-8 hover:border-neutral-900 transition-all duration-300">
            <svg className="w-8 h-8 text-neutral-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-lg text-neutral-700 italic mb-6 leading-relaxed">
              "{testimonial.quote}"
            </p>
            <div className="border-t border-neutral-200 pt-4">
              <p className="font-bold text-neutral-900">
                {testimonial.author}
              </p>
              <p className="text-sm text-neutral-600">
                {testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="cursor-pointer transition-all duration-300 ease hover:shadow-none hover:translate-y-[3px] hover:translate-x-[3px] text-sm font-bold text-center bg-white border-black border-2 rounded-md pt-2.5 pr-6 pb-2.5 pl-6 shadow-[5px_5px_0px_black] inline-flex items-center gap-2">
          Join the community that gets work done
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
