import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('account');

  const tabs = ['account', 'security', 'notifications', 'privacy'];

  return (
    <DashboardLayout>
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-2">
            Settings
          </h1>
          <p className="text-lg text-neutral-600">
            Manage your account preferences
          </p>
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
        {activeTab === 'account' && (
          <div className="space-y-6">
            <div className="bg-white border-2 border-neutral-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-neutral-900 mb-6">Account Information</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-900 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      defaultValue="User Name"
                      className="w-full px-4 py-2 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="user@example.com"
                      className="w-full px-4 py-2 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      defaultValue="+234 801 234 5678"
                      className="w-full px-4 py-2 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-900 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      defaultValue="Lagos, Nigeria"
                      className="w-full px-4 py-2 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Bio
                  </label>
                  <textarea
                    rows="4"
                    defaultValue="Professional service provider with over 5 years of experience."
                    className="w-full px-4 py-2 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900"
                  />
                </div>
                <button className="px-6 py-3 bg-neutral-900 text-white rounded-md font-medium hover:bg-neutral-800 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>

            <div className="bg-white border-2 border-neutral-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-neutral-900 mb-6">Bank Account</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border-2 border-neutral-200 rounded-lg">
                  <div>
                    <p className="font-medium text-neutral-900">GTBank</p>
                    <p className="text-sm text-neutral-600">0123456789</p>
                  </div>
                  <button className="text-sm text-red-600 hover:underline">Remove</button>
                </div>
                <button className="text-sm font-medium text-neutral-900 hover:underline">
                  + Add Bank Account
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="space-y-6">
            <div className="bg-white border-2 border-neutral-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-neutral-900 mb-6">Change Password</h2>
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900"
                  />
                </div>
                <button className="px-6 py-3 bg-neutral-900 text-white rounded-md font-medium hover:bg-neutral-800 transition-colors">
                  Update Password
                </button>
              </div>
            </div>

            <div className="bg-white border-2 border-neutral-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-neutral-900 mb-6">Two-Factor Authentication</h2>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-neutral-900 mb-1">Enable 2FA</p>
                  <p className="text-sm text-neutral-600">Add an extra layer of security to your account</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neutral-900"></div>
                </label>
              </div>
            </div>

            <div className="bg-white border-2 border-red-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-red-600 mb-2">Danger Zone</h2>
              <p className="text-sm text-neutral-600 mb-4">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <button className="px-6 py-3 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="bg-white border-2 border-neutral-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-neutral-900 mb-6">Notification Preferences</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-neutral-200">
                <div>
                  <p className="font-medium text-neutral-900 mb-1">Email Notifications</p>
                  <p className="text-sm text-neutral-600">Receive email updates about your account</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neutral-900"></div>
                </label>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-neutral-200">
                <div>
                  <p className="font-medium text-neutral-900 mb-1">New Messages</p>
                  <p className="text-sm text-neutral-600">Get notified when you receive new messages</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neutral-900"></div>
                </label>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-neutral-200">
                <div>
                  <p className="font-medium text-neutral-900 mb-1">Order Updates</p>
                  <p className="text-sm text-neutral-600">Notifications about order status changes</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neutral-900"></div>
                </label>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-neutral-200">
                <div>
                  <p className="font-medium text-neutral-900 mb-1">Payment Notifications</p>
                  <p className="text-sm text-neutral-600">Updates about payments and withdrawals</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neutral-900"></div>
                </label>
              </div>
              <div className="flex items-center justify-between py-4">
                <div>
                  <p className="font-medium text-neutral-900 mb-1">Marketing Emails</p>
                  <p className="text-sm text-neutral-600">Receive tips, offers, and product updates</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neutral-900"></div>
                </label>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'privacy' && (
          <div className="space-y-6">
            <div className="bg-white border-2 border-neutral-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-neutral-900 mb-6">Privacy Settings</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between py-4 border-b border-neutral-200">
                  <div>
                    <p className="font-medium text-neutral-900 mb-1">Profile Visibility</p>
                    <p className="text-sm text-neutral-600">Make your profile visible to everyone</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neutral-900"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-neutral-200">
                  <div>
                    <p className="font-medium text-neutral-900 mb-1">Show Online Status</p>
                    <p className="text-sm text-neutral-600">Let others see when you're online</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neutral-900"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between py-4">
                  <div>
                    <p className="font-medium text-neutral-900 mb-1">Allow Direct Messages</p>
                    <p className="text-sm text-neutral-600">Anyone can send you messages</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neutral-900"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-neutral-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-neutral-900 mb-4">Data & Privacy</h2>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 border-2 border-neutral-200 rounded-md hover:border-neutral-900 transition-colors">
                  Download My Data
                </button>
                <button className="w-full text-left px-4 py-3 border-2 border-neutral-200 rounded-md hover:border-neutral-900 transition-colors">
                  View Privacy Policy
                </button>
                <button className="w-full text-left px-4 py-3 border-2 border-neutral-200 rounded-md hover:border-neutral-900 transition-colors">
                  View Terms of Service
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Settings;
