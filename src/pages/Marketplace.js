import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Marketplace = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    location: '',
    priceRange: '',
    category: '',
    rating: ''
  });

  const services = [
    {
      id: 1,
      name: 'Professional Plumbing Services',
      provider: 'John Doe',
      price: '₦5,000 - ₦15,000',
      rating: 4.8,
      reviews: 124,
      location: 'Lagos',
      category: 'Home Services'
    },
    {
      id: 2,
      name: 'Event Photography',
      provider: 'Sarah Johnson',
      price: '₦25,000 - ₦100,000',
      rating: 4.9,
      reviews: 89,
      location: 'Abuja',
      category: 'Photography'
    },
    {
      id: 3,
      name: 'Graphic Design Services',
      provider: 'Mike Chen',
      price: '₦10,000 - ₦50,000',
      rating: 4.7,
      reviews: 156,
      location: 'Lagos',
      category: 'Design'
    }
  ];

  const opportunities = [
    {
      id: 1,
      business: 'FashionHub Nigeria',
      productType: 'Fashion & Accessories',
      commission: '15% per sale',
      location: 'Lagos',
      industry: 'Fashion',
      verified: true
    },
    {
      id: 2,
      business: 'TechGadgets NG',
      productType: 'Electronics',
      commission: '10% per sale',
      location: 'Nationwide',
      industry: 'Electronics',
      verified: true
    },
    {
      id: 3,
      business: 'Organic Foods Co',
      productType: 'Food & Beverages',
      commission: '12% per sale',
      location: 'Abuja',
      industry: 'Food',
      verified: true
    }
  ];

  const categories = ['All', 'Home Services', 'Photography', 'Design', 'Writing', 'Tech'];
  const industries = ['All', 'Fashion', 'Electronics', 'Food', 'Beauty', 'Health'];

  return (
    <DashboardLayout>
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-2">
            Marketplace
          </h1>
          <p className="text-lg text-neutral-600">
            Discover services and business opportunities
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-neutral-200 mb-6">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('services')}
              className={`pb-4 px-2 font-medium transition-colors relative ${
                activeTab === 'services'
                  ? 'text-neutral-900'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Services
              {activeTab === 'services' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('dropshipping')}
              className={`pb-4 px-2 font-medium transition-colors relative ${
                activeTab === 'dropshipping'
                  ? 'text-neutral-900'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Dropshipping
              {activeTab === 'dropshipping' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900"></div>
              )}
            </button>
          </div>
        </div>

        {/* Filter Button and Dropdown */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-neutral-600">
            Showing {activeTab === 'services' ? services.length : opportunities.length} results
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border-2 border-neutral-200 rounded-md hover:border-neutral-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span className="font-medium">Filters</span>
            </button>
            <select className="px-4 py-2 border-2 border-neutral-200 rounded-md text-sm focus:outline-none focus:border-neutral-900">
              <option>Sort by: Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {/* Filter Dropdown */}
        {showFilters && (
          <div className="bg-white border-2 border-neutral-200 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-neutral-900 mb-4">Filters</h3>

              <div className="space-y-4">
                {/* Location Filter */}
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Location
                  </label>
                  <select
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                    className="w-full px-3 py-2 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900"
                  >
                    <option value="">All Locations</option>
                    <option value="lagos">Lagos</option>
                    <option value="abuja">Abuja</option>
                    <option value="portharcourt">Port Harcourt</option>
                    <option value="ibadan">Ibadan</option>
                  </select>
                </div>

                {activeTab === 'services' ? (
                  <>
                    {/* Category Filter */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-900 mb-2">
                        Category
                      </label>
                      <div className="space-y-2">
                        {categories.map((cat) => (
                          <label key={cat} className="flex items-center">
                            <input type="checkbox" className="w-4 h-4 border-2 border-neutral-300 rounded" />
                            <span className="ml-2 text-sm text-neutral-600">{cat}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Price Range */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-900 mb-2">
                        Price Range
                      </label>
                      <select
                        value={filters.priceRange}
                        onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                        className="w-full px-3 py-2 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900"
                      >
                        <option value="">Any Price</option>
                        <option value="0-5000">₦0 - ₦5,000</option>
                        <option value="5000-20000">₦5,000 - ₦20,000</option>
                        <option value="20000-50000">₦20,000 - ₦50,000</option>
                        <option value="50000+">₦50,000+</option>
                      </select>
                    </div>

                    {/* Rating */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-900 mb-2">
                        Minimum Rating
                      </label>
                      <select
                        value={filters.rating}
                        onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
                        className="w-full px-3 py-2 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900"
                      >
                        <option value="">Any Rating</option>
                        <option value="4.5">4.5+ ⭐</option>
                        <option value="4.0">4.0+ ⭐</option>
                        <option value="3.5">3.5+ ⭐</option>
                      </select>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Industry Filter */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-900 mb-2">
                        Industry
                      </label>
                      <div className="space-y-2">
                        {industries.map((ind) => (
                          <label key={ind} className="flex items-center">
                            <input type="checkbox" className="w-4 h-4 border-2 border-neutral-300 rounded" />
                            <span className="ml-2 text-sm text-neutral-600">{ind}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Commission Rate */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-900 mb-2">
                        Commission Rate
                      </label>
                      <select
                        className="w-full px-3 py-2 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900"
                      >
                        <option value="">Any Rate</option>
                        <option value="5-10">5% - 10%</option>
                        <option value="10-15">10% - 15%</option>
                        <option value="15-20">15% - 20%</option>
                        <option value="20+">20%+</option>
                      </select>
                    </div>
                  </>
                )}

            </div>
            <div className="flex gap-3 pt-4">
              <button
                onClick={() => setShowFilters(false)}
                className="flex-1 py-2 border-2 border-neutral-200 rounded-md font-medium hover:bg-neutral-50"
              >
                Clear
              </button>
              <button className="flex-1 py-2 bg-neutral-900 text-white rounded-md font-medium hover:bg-neutral-800">
                Apply
              </button>
            </div>
          </div>
        )}

        {/* Listings Grid */}
        {activeTab === 'services' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white border-2 border-neutral-200 rounded-lg overflow-hidden hover:border-neutral-900 transition-all duration-300 cursor-pointer group"
              >
                <div className="p-6">
                  <div className="w-16 h-16 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:underline">
                    {service.name}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-3">by {service.provider}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-yellow-500">⭐</span>
                    <span className="font-bold text-neutral-900">{service.rating}</span>
                    <span className="text-sm text-neutral-500">({service.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3 text-sm text-neutral-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {service.location}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                    <span className="font-bold text-neutral-900">{service.price}</span>
                    <button className="px-4 py-2 bg-neutral-900 text-white rounded-md text-sm font-medium hover:bg-neutral-800 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opp) => (
              <div
                key={opp.id}
                className="bg-white border-2 border-neutral-200 rounded-lg overflow-hidden hover:border-neutral-900 transition-all duration-300 cursor-pointer group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-neutral-100 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    {opp.verified && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:underline">
                    {opp.business}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-3">{opp.productType}</p>
                  <div className="flex items-center gap-2 mb-3 text-sm">
                    <span className="px-2 py-1 bg-neutral-100 text-neutral-900 font-medium rounded">
                      {opp.commission}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3 text-sm text-neutral-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {opp.location}
                  </div>
                  <button className="w-full mt-4 py-2 bg-neutral-900 text-white rounded-md text-sm font-medium hover:bg-neutral-800 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Marketplace;
