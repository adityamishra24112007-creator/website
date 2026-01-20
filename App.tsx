
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onShopClick={() => setCurrentPage('shop')} />;
      case 'shop':
        return <Shop />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onShopClick={() => setCurrentPage('shop')} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-indigo-100">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
      
      {/* Floating WhatsApp Button for quick access */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-40 md:hidden"
      >
        <i className="fab fa-whatsapp text-3xl"></i>
      </a>
    </div>
  );
};

export default App;
