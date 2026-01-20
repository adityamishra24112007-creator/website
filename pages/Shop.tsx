
import React from 'react';
import { PRODUCTS, WHATSAPP_NUMBER } from '../constants';

const Shop: React.FC = () => {
  const handleBuy = (productName: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in buying the ${productName}. Is it available?`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-slate-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">The Catalog</h1>
          <p className="text-slate-500">Carefully curated essentials for your lifestyle.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 flex flex-col transition-all hover:shadow-lg">
              <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-slate-800 leading-tight">{product.name}</h3>
                  <span className="text-indigo-600 font-bold">{product.price}</span>
                </div>
                <p className="text-slate-500 text-sm mb-6 flex-grow">{product.description}</p>
                <button 
                  onClick={() => handleBuy(product.name)}
                  className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 active:scale-95 transition-all"
                >
                  <i className="fab fa-whatsapp text-xl"></i>
                  Buy via WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
