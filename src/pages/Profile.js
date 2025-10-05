import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);

  const tabs = ['overview', 'services', 'reviews', 'documents'];

  return (
    <DashboardLayout>
      <div className="mx-auto">
        {/* Profile Header */}
        <div className="bg-white border-2 border-neutral-200 rounded-lg p-8 mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-neutral-900 text-white flex items-center justify-center text-4xl font-bold">
              U
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-neutral-900">User Name</h1>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Verified
                </span>
              </div>
              <p className="text-neutral-600 mb-2">Service Provider</p>
              <div className="flex items-center gap-4 text-sm text-neutral-600">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Lagos, Nigeria
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">⭐</span>
                  4.8 (124 reviews)
                </div>
                <div>Member since Oct 2024</div>
              </div>
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-6 py-3 bg-neutral-900 text-white rounded-md font-medium hover:bg-neutral-800 transition-colors"
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-neutral-200 mb-6">
          <div className="flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-2 font-medium transition-colors relative capitalize ${
                  activeTab === tab
                    ? 'text-neutral-900'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* About */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white border-2 border-neutral-200 rounded-lg p-6">
                <h2 className="text-xl font-bold text-neutral-900 mb-4">About</h2>
                <p className="text-neutral-600 leading-relaxed">
                  Professional service provider with over 5 years of experience. Specialized in delivering high-quality services with a focus on customer satisfaction. Available for both short-term and long-term projects.
                </p>
              </div>

              <div className="bg-white border-2 border-neutral-200 rounded-lg p-6">
                <h2 className="text-xl font-bold text-neutral-900 mb-4">Skills & Expertise</h2>
                <div className="flex flex-wrap gap-2">
                  {['Plumbing', 'Electrical Work', 'Carpentry', 'Painting', 'Home Repair'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-neutral-100 text-neutral-900 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white border-2 border-neutral-200 rounded-lg p-6">
                <h2 className="text-xl font-bold text-neutral-900 mb-4">Availability</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600">Response Time</span>
                    <span className="font-medium text-neutral-900">Within 2 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600">Working Hours</span>
                    <span className="font-medium text-neutral-900">Mon-Sat, 8AM-6PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600">Status</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      Available
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              <div className="bg-white border-2 border-neutral-200 rounded-lg p-6">
                <h3 className="font-bold text-neutral-900 mb-4">Statistics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-neutral-600">Completion Rate</span>
                      <span className="text-sm font-bold text-neutral-900">98%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-neutral-600">Response Rate</span>
                      <span className="text-sm font-bold text-neutral-900">95%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-neutral-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-600">Total Jobs</span>
                      <span className="text-lg font-bold text-neutral-900">124</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-600">Total Earnings</span>
                      <span className="text-lg font-bold text-neutral-900">₦248,500</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-neutral-200 rounded-lg p-6">
                <h3 className="font-bold text-neutral-900 mb-4">Certifications</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Email Verified</p>
                      <p className="text-xs text-neutral-500">user@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Phone Verified</p>
                      <p className="text-xs text-neutral-500">+234 801 234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">ID Verified</p>
                      <p className="text-xs text-neutral-500">Government ID</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="bg-white border-2 border-neutral-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-neutral-900">My Services</h2>
              <button className="px-4 py-2 bg-neutral-900 text-white rounded-md font-medium hover:bg-neutral-800 transition-colors">
                + Add Service
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border-2 border-neutral-200 rounded-lg p-4">
                  <h3 className="font-bold text-neutral-900 mb-2">Professional Plumbing Service</h3>
                  <p className="text-sm text-neutral-600 mb-3">Complete plumbing solutions for homes and offices</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-neutral-900">₦5,000 - ₦15,000</span>
                    <button className="text-sm text-neutral-600 hover:text-neutral-900">Edit</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="bg-white border-2 border-neutral-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-neutral-900 mb-6">Reviews</h2>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border-b border-neutral-200 pb-6 last:border-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-bold text-neutral-900">John Doe</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>⭐</span>
                          ))}
                        </div>
                        <span className="text-sm text-neutral-500">2 days ago</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-neutral-600">
                    Excellent service! Very professional and completed the job on time. Highly recommended.
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'documents' && (
          <div className="bg-white border-2 border-neutral-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-neutral-900 mb-6">Documents</h2>
            <div className="space-y-4">
              {[
                { name: 'Government ID', status: 'verified' },
                { name: 'Proof of Address', status: 'verified' },
                { name: 'Professional Certificate', status: 'pending' }
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-4 border-2 border-neutral-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <svg className="w-8 h-8 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-neutral-900">{doc.name}</p>
                      <p className="text-xs text-neutral-500">Uploaded Oct 1, 2024</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    doc.status === 'verified'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {doc.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Profile;
