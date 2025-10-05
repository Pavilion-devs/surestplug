import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    navigate('/');
  };

  const menuItems = [
    {
      name: 'Home',
      path: '/dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      name: 'Marketplace',
      path: '/marketplace',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      name: 'Wallet',
      path: '/wallet',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      name: 'Messages',
      path: '/messages',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      name: 'Profile',
      path: '/profile',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      name: 'Settings',
      path: '/settings',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const notifications = [
    { id: 1, title: 'New message from John', time: '5 min ago', type: 'message' },
    { id: 2, title: 'Payment received', time: '1 hour ago', type: 'transaction' },
    { id: 3, title: 'New order request', time: '2 hours ago', type: 'order' }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-neutral-200 z-40">
        <div className="h-full px-4 flex items-center justify-between">
          {/* Left side - Logo and Mobile menu */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="SurestPlug Logo" 
                className="h-8 w-12"
              />
              {/* <span className="text-xl font-bold tracking-tight text-neutral-900 hidden sm:block">
                SurestPlug
              </span> */}
            </div>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Search Bar - Center */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-auto">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search services, opportunities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900 transition-colors"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Right Side - Notifications & Profile */}
          <div className="flex items-center gap-2">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="p-2 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 relative"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white border-2 border-neutral-200 rounded-lg shadow-lg">
                  <div className="p-4 border-b border-neutral-200">
                    <h3 className="font-bold text-neutral-900">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notif) => (
                      <div key={notif.id} className="p-4 border-b border-neutral-100 hover:bg-neutral-50 cursor-pointer">
                        <p className="text-sm font-medium text-neutral-900">{notif.title}</p>
                        <p className="text-xs text-neutral-500 mt-1">{notif.time}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 text-center border-t border-neutral-200">
                    <button className="text-sm font-medium text-neutral-900 hover:underline">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 p-2 rounded-md hover:bg-neutral-100"
              >
                <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-sm">
                  U
                </div>
                <svg className="w-4 h-4 text-neutral-600 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border-2 border-neutral-200 rounded-lg shadow-lg">
                  <div className="p-4 border-b border-neutral-200">
                    <p className="font-bold text-neutral-900">User Name</p>
                    <p className="text-xs text-neutral-500">user@example.com</p>
                  </div>
                  <div className="py-2">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900">
                      My Profile
                    </Link>
                    <Link to="/settings" className="block px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900">
                      Settings
                    </Link>
                  </div>
                  <div className="border-t border-neutral-200 py-2">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-neutral-50"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className={`fixed top-16 left-0 bottom-0 w-64 bg-white border-r border-neutral-200 z-30 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>

        <nav className="p-4 space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                  isActive
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
        />
      )}

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 min-h-screen">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
