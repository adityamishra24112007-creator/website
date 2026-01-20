
import React from 'react';
import { Page } from '../types';

interface HomeProps {
  onShopClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onShopClick }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-slate-200">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://picsum.photos/seed/interior/1920/1080" 
            alt="Hero background" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
            ESSENTIALS FOR <br/><span className="text-indigo-600">MODERN LIFE</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
            Discover our curated collection of minimalist products designed for quality, functionality, and timeless style.
          </p>
          <button 
            onClick={onShopClick}
            className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Explore Shop
          </button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Philosophy</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "Quality Materials", icon: "fa-gem", desc: "We source only the finest sustainable materials for our products." },
            { title: "Minimal Design", icon: "fa-leaf", desc: "No clutter. Just clean lines and intuitive functionality." },
            { title: "Ethical Craft", icon: "fa-hand-holding-heart", desc: "Fair wages and safe environments for every artisan." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className={`fas ${item.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to upgrade your daily carry?</h2>
          <p className="text-indigo-100 mb-8 text-lg">Join 10,000+ customers who've embraced the minimalist movement.</p>
          <button 
            onClick={onShopClick}
            className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors"
          >
            Browse Products
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
