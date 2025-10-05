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

          {/* Dashboard (no landing header/footer) */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
