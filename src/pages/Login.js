import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

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

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900 mb-2">
            Welcome back
          </h2>
          <p className="text-neutral-600">
            Login to continue to SurestPlug
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
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
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 border-2 border-neutral-300 rounded" />
              <span className="ml-2 text-neutral-600">Remember me</span>
            </label>
            <a href="#" className="text-neutral-900 hover:underline font-medium">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer transition-all duration-300 ease hover:shadow-none hover:translate-y-[2px] hover:translate-x-[2px] text-base font-bold text-white bg-neutral-900 border-neutral-900 border-2 rounded-md py-3 shadow-[4px_4px_0px_black]"
          >
            Login
          </button>

          <div className="text-center text-sm text-neutral-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-neutral-900 font-bold hover:underline">
              Get Started
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
