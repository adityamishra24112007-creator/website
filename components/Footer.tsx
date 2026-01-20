
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">MINIMALSHOP</h3>
          <p className="text-sm leading-relaxed">
            Crafting simple, high-quality essentials for the modern lifestyle. We believe in less, but better.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">Home</button></li>
            <li><button onClick={() => setCurrentPage('shop')} className="hover:text-white transition-colors">Shop</button></li>
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">Our Story</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors">Contact Us</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Newsletter</h4>
          <p className="text-sm mb-4">Join our list for exclusive releases and updates.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-slate-800 border-none rounded-l-md px-4 py-2 w-full focus:ring-1 focus:ring-indigo-500 outline-none"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-md transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 text-center text-xs">
        <p>&copy; 2024 MinimalShop Essentials. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
