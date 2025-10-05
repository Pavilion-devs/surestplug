import React from 'react';

const Footer = () => {
  return (
    <footer className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 py-8">
      <div className="border-neutral-200 border-t pt-8">
        <div className="flex flex-col items-center text-center gap-4">
          <p className="text-sm text-neutral-600">
            Escrow-protected • Verified users • Built for Africa's growing service economy
          </p>
          <div className="flex gap-6 text-sm text-neutral-600">
            <a href="#" className="hover:text-neutral-900 transition-colors tracking-tight">Terms</a>
            <a href="#" className="hover:text-neutral-900 transition-colors tracking-tight">Privacy</a>
            <a href="#" className="hover:text-neutral-900 transition-colors tracking-tight">Support</a>
            <a href="#" className="hover:text-neutral-900 transition-colors tracking-tight">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
