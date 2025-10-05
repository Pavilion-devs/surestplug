import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import NetworkSection from './components/NetworkSection';
import TrustSection from './components/TrustSection';
import HustlersSection from './components/HustlersSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Marketplace from './pages/Marketplace';
import Wallet from './pages/Wallet';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import Settings from './pages/Settings';
import CreateListing from './pages/CreateListing';

function App() {
  return (
    <Router>
      <div className="antialiased text-neutral-900 bg-white">
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={
            <>
              <Header />
              <main className="relative">
                <Hero />
                <NetworkSection />
                <TrustSection />
                <HustlersSection />
                <HowItWorksSection />
                <TestimonialsSection />
                <CTASection />
              </main>
              <Footer />
            </>
          } />

          {/* Auth Pages (no header/footer) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Dashboard Pages (with DashboardLayout) */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/messages" element={<Messages />} /> */}
          <Route path="/settings" element={<Settings />} />
          <Route path="/create-listing" element={<CreateListing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
