import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Dashboard Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold tracking-tight text-neutral-900">
              SurestPlug
            </h1>
            <button
              onClick={handleLogout}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-2">
            Welcome to your Dashboard
          </h2>
          <p className="text-lg text-neutral-600">
            Your account has been created successfully!
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border-2 border-neutral-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-neutral-600">Total Earnings</h3>
              <svg className="w-8 h-8 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-neutral-900">₦0.00</p>
            <p className="text-sm text-neutral-500 mt-2">No transactions yet</p>
          </div>

          <div className="bg-white border-2 border-neutral-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-neutral-600">Active Orders</h3>
              <svg className="w-8 h-8 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-neutral-900">0</p>
            <p className="text-sm text-neutral-500 mt-2">No active orders</p>
          </div>

          <div className="bg-white border-2 border-neutral-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-neutral-600">Wallet Balance</h3>
              <svg className="w-8 h-8 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-neutral-900">₦0.00</p>
            <p className="text-sm text-neutral-500 mt-2">Available for withdrawal</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white border-2 border-neutral-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-neutral-900 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="border-2 border-neutral-200 rounded-lg p-4 hover:border-neutral-900 transition-all duration-300 text-left group">
              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-3 group-hover:bg-neutral-900 transition-colors">
                <svg className="w-6 h-6 text-neutral-900 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-neutral-900 mb-1">Browse Marketplace</h4>
              <p className="text-sm text-neutral-600">Find services or opportunities</p>
            </button>

            <button className="border-2 border-neutral-200 rounded-lg p-4 hover:border-neutral-900 transition-all duration-300 text-left group">
              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-3 group-hover:bg-neutral-900 transition-colors">
                <svg className="w-6 h-6 text-neutral-900 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h4 className="font-bold text-neutral-900 mb-1">Create Listing</h4>
              <p className="text-sm text-neutral-600">Add a new service or opportunity</p>
            </button>

            <button className="border-2 border-neutral-200 rounded-lg p-4 hover:border-neutral-900 transition-all duration-300 text-left group">
              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-3 group-hover:bg-neutral-900 transition-colors">
                <svg className="w-6 h-6 text-neutral-900 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h4 className="font-bold text-neutral-900 mb-1">View Wallet</h4>
              <p className="text-sm text-neutral-600">Manage your earnings</p>
            </button>

            <button className="border-2 border-neutral-200 rounded-lg p-4 hover:border-neutral-900 transition-all duration-300 text-left group">
              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-3 group-hover:bg-neutral-900 transition-colors">
                <svg className="w-6 h-6 text-neutral-900 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-neutral-900 mb-1">Edit Profile</h4>
              <p className="text-sm text-neutral-600">Update your information</p>
            </button>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="mt-8 bg-neutral-900 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Getting Started</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="w-10 h-10 rounded-full bg-white text-neutral-900 flex items-center justify-center font-bold text-lg mb-3">
                1
              </div>
              <h4 className="font-bold mb-2">Complete Your Profile</h4>
              <p className="text-sm text-neutral-300">Add your details and verification documents</p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full bg-white text-neutral-900 flex items-center justify-center font-bold text-lg mb-3">
                2
              </div>
              <h4 className="font-bold mb-2">Explore the Marketplace</h4>
              <p className="text-sm text-neutral-300">Find opportunities that match your skills</p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full bg-white text-neutral-900 flex items-center justify-center font-bold text-lg mb-3">
                3
              </div>
              <h4 className="font-bold mb-2">Start Earning</h4>
              <p className="text-sm text-neutral-300">Connect with customers and grow your business</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
