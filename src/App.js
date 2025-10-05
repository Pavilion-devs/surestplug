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
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      <div className="antialiased text-neutral-900 bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="relative">
              <Hero />
              <NetworkSection />
              <TrustSection />
              <HustlersSection />
              <HowItWorksSection />
              <TestimonialsSection />
              <CTASection />
            </main>
          } />
          <Route path="/home" element={
            <main className="relative">
              <Hero />
              <NetworkSection />
              <TrustSection />
              <HustlersSection />
              <HowItWorksSection />
              <TestimonialsSection />
              <CTASection />
            </main>
          } />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
