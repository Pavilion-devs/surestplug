import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    location: '',
    // Service Provider specific
    skills: '',
    experience: '',
    // Business Owner specific
    businessName: '',
    businessType: '',
    // Rider specific
    vehicleType: ''
  });

  const userTypes = [
    {
      id: 'service_provider',
      title: 'Service Provider',
      description: 'Offer what you do best and get paid safely through escrow.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'service_seeker',
      title: 'Service Seeker',
      description: 'Hire trusted hands for what you need — from plumbing to photography.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    // {
    //   id: 'rider',
    //   title: 'Delivery Rider',
    //   description: 'Earn per delivery by fulfilling requests from verified users near you.',
    //   icon: (
    //     <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    //     </svg>
    //   )
    // },
    {
      id: 'dropshipping_partner',
      title: 'Dropshipping Partner',
      description: 'Grow your business or represent local brands to earn commissions.',
      comingSoon: true,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ];

  const handleRoleSelect = (roleId) => {
    setSelectedRole(roleId);
    setStep(2);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For MVP, just navigate to dashboard
    navigate('/dashboard');
  };

  const renderStepOne = () => (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
          Choose your role
        </h2>
        <p className="text-lg text-neutral-600">
          Select how you want to use SurestPlug
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {userTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => !type.comingSoon && handleRoleSelect(type.id)}
            disabled={type.comingSoon}
            className={`border-2 rounded-lg p-6 transition-all duration-300 group text-left ${
              type.comingSoon 
                ? 'border-neutral-100 bg-neutral-50 cursor-not-allowed opacity-60' 
                : 'border-neutral-200 hover:border-neutral-900 hover:shadow-lg'
            }`}
          >
            <div className={`mb-4 transition-transform duration-300 ${
              type.comingSoon ? 'text-neutral-400' : 'text-neutral-900 group-hover:scale-110'
            }`}>
              {type.icon}
            </div>
            <div className="flex items-center gap-2 mb-3">
              <h3 className={`text-xl font-bold mb-3 tracking-tight ${
                type.comingSoon ? 'text-neutral-400' : 'text-neutral-900'
              }`}>
                {type.title}
              </h3>
              {type.comingSoon && (
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                  Coming Soon
                </span>
              )}
            </div>
            <p className={`text-sm leading-relaxed ${
              type.comingSoon ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              {type.description}
            </p>
          </button>
        ))}
      </div>

      <div className="text-center mt-8 text-sm text-neutral-600">
        Already have an account?{' '}
        <Link to="/login" className="text-neutral-900 font-bold hover:underline">
          Login
        </Link>
      </div>
    </div>
  );

  const renderStepTwo = () => (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <button
          onClick={() => setStep(1)}
          className="text-neutral-600 hover:text-neutral-900 mb-4 inline-flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <h2 className="text-4xl font-bold tracking-tight text-neutral-900 mb-2">
          Create your account
        </h2>
        <p className="text-neutral-600">
          {userTypes.find(t => t.id === selectedRole)?.title}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-neutral-900 mb-2">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900 transition-colors"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900 transition-colors"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-900 mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900 transition-colors"
            placeholder="+234 801 234 5678"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-neutral-900 mb-2">
            Location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            required
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900 transition-colors"
            placeholder="Lagos, Nigeria"
          />
        </div>

        {selectedRole === 'service_provider' && (
          <>
            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-neutral-900 mb-2">
                Skills/Services Offered
              </label>
              <input
                id="skills"
                name="skills"
                type="text"
                required
                value={formData.skills}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900 transition-colors"
                placeholder="e.g., Plumbing, Photography"
              />
            </div>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-neutral-900 mb-2">
                Years of Experience
              </label>
              <input
                id="experience"
                name="experience"
                type="number"
                required
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900 transition-colors"
                placeholder="5"
              />
            </div>
          </>
        )}

        {selectedRole === 'dropshipping_partner' && (
          <>
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-neutral-900 mb-2">
                Business Name
              </label>
              <input
                id="businessName"
                name="businessName"
                type="text"
                required
                value={formData.businessName}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900 transition-colors"
                placeholder="Your Business Name"
              />
            </div>
            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-neutral-900 mb-2">
                Business Type
              </label>
              <select
                id="businessType"
                name="businessType"
                required
                value={formData.businessType}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900 transition-colors"
              >
                <option value="">Select type</option>
                <option value="fashion">Fashion</option>
                <option value="electronics">Electronics</option>
                <option value="food">Food & Beverage</option>
                <option value="other">Other</option>
              </select>
            </div>
          </>
        )}

        {selectedRole === 'rider' && (
          <div>
            <label htmlFor="vehicleType" className="block text-sm font-medium text-neutral-900 mb-2">
              Vehicle Type
            </label>
            <select
              id="vehicleType"
              name="vehicleType"
              required
              value={formData.vehicleType}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900 transition-colors"
            >
              <option value="">Select vehicle</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="bicycle">Bicycle</option>
              <option value="car">Car</option>
              <option value="van">Van</option>
            </select>
          </div>
        )}

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-neutral-900 mb-2">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900 transition-colors"
            placeholder="••••••••"
          />
        </div>

        <div className="flex items-start">
          <input type="checkbox" required className="w-4 h-4 border-2 border-neutral-300 rounded mt-1" />
          <span className="ml-2 text-sm text-neutral-600">
            I agree to the{' '}
            <a href="#" className="text-neutral-900 font-medium hover:underline">
              Terms & Conditions
            </a>
            {' '}and{' '}
            <a href="#" className="text-neutral-900 font-medium hover:underline">
              Privacy Policy
            </a>
          </span>
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer transition-all duration-300 ease hover:shadow-none hover:translate-y-[2px] hover:translate-x-[2px] text-base font-bold text-white bg-neutral-900 border-neutral-900 border-2 rounded-md py-3 shadow-[4px_4px_0px_black] mt-6"
        >
          Create Account
        </button>

        <div className="text-center text-sm text-neutral-600 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-neutral-900 font-bold hover:underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  );

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-12">
      {step === 1 ? renderStepOne() : renderStepTwo()}
    </div>
  );
};

export default Register;
