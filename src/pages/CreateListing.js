import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';

const CreateListing = () => {
  const navigate = useNavigate();
  const [listingType, setListingType] = useState('service');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    priceMin: '',
    priceMax: '',
    // Dropshipping specific
    businessName: '',
    productType: '',
    commission: '',
    industry: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    navigate('/marketplace');
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-2">
            Create New Listing
          </h1>
          <p className="text-lg text-neutral-600">
            Add a service or business opportunity
          </p>
        </div>

        {/* Listing Type Selection */}
        <div className="bg-white border-2 border-neutral-200 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-neutral-900 mb-4">Listing Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => setListingType('service')}
              className={`p-4 border-2 rounded-lg text-left transition-all ${
                listingType === 'service'
                  ? 'border-neutral-900 bg-neutral-50'
                  : 'border-neutral-200 hover:border-neutral-900'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="font-bold text-neutral-900">Service</h3>
              </div>
              <p className="text-sm text-neutral-600">
                Offer a service like plumbing, photography, design, etc.
              </p>
            </button>

            <button
              onClick={() => setListingType('dropshipping')}
              className={`p-4 border-2 rounded-lg text-left transition-all ${
                listingType === 'dropshipping'
                  ? 'border-neutral-900 bg-neutral-50'
                  : 'border-neutral-200 hover:border-neutral-900'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <h3 className="font-bold text-neutral-900">Dropshipping Opportunity</h3>
              </div>
              <p className="text-sm text-neutral-600">
                Post a business opportunity for local agents
              </p>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white border-2 border-neutral-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-neutral-900 mb-6">
            {listingType === 'service' ? 'Service Details' : 'Opportunity Details'}
          </h2>

          <div className="space-y-4">
            {listingType === 'service' ? (
              <>
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Service Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900"
                    placeholder="e.g., Professional Plumbing Services"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    required
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900"
                    placeholder="Describe your service in detail..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-900 mb-2">
                      Category *
                    </label>
                    <select
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900"
                    >
                      <option value="">Select category</option>
                      <option value="home">Home Services</option>
                      <option value="photography">Photography</option>
                      <option value="design">Design</option>
                      <option value="writing">Writing</option>
                      <option value="tech">Tech</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-900 mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900"
                      placeholder="e.g., Lagos"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Price Range *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="number"
                      name="priceMin"
                      required
                      value={formData.priceMin}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900"
                      placeholder="Min (₦)"
                    />
                    <input
                      type="number"
                      name="priceMax"
                      required
                      value={formData.priceMax}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900"
                      placeholder="Max (₦)"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900"
                    placeholder="e.g., FashionHub Nigeria"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Product Type *
                  </label>
                  <input
                    type="text"
                    name="productType"
                    required
                    value={formData.productType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900"
                    placeholder="e.g., Fashion & Accessories"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    required
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900"
                    placeholder="Describe the opportunity and requirements..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-900 mb-2">
                      Industry *
                    </label>
                    <select
                      name="industry"
                      required
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900"
                    >
                      <option value="">Select industry</option>
                      <option value="fashion">Fashion</option>
                      <option value="electronics">Electronics</option>
                      <option value="food">Food</option>
                      <option value="beauty">Beauty</option>
                      <option value="health">Health</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-900 mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900"
                      placeholder="e.g., Lagos or Nationwide"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Commission Rate *
                  </label>
                  <input
                    type="text"
                    name="commission"
                    required
                    value={formData.commission}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900"
                    placeholder="e.g., 15% per sale"
                  />
                </div>
              </>
            )}

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="flex-1 py-3 border-2 border-neutral-200 text-neutral-900 rounded-md font-medium hover:bg-neutral-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-3 bg-neutral-900 text-white rounded-md font-medium hover:bg-neutral-800 transition-colors"
              >
                Create Listing
              </button>
            </div>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CreateListing;
