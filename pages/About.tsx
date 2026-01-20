
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 text-center">About Our Brand</h1>
        
        <div className="prose prose-slate lg:prose-lg mx-auto">
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            MinimalShop was founded on a simple principle: high-quality design shouldn't be complicated. We believe that the objects you surround yourself with should be intentional, durable, and beautiful.
          </p>
          
          <img 
            src="https://picsum.photos/seed/workspace/1000/600" 
            alt="Our Workshop" 
            className="w-full rounded-2xl shadow-xl mb-12 object-cover h-[400px]"
          />

          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Minimalist Journey</h2>
          <p className="text-slate-600 mb-6">
            Our journey began in a small studio with the vision of creating the perfect everyday t-shirt. From there, we expanded into home goods, accessories, and stationery, always keeping the same focus on quality and simplicity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
              <h3 className="font-bold text-lg mb-2 text-indigo-600">Our Mission</h3>
              <p className="text-slate-600">To inspire a simpler way of living through thoughtful design and sustainable craftsmanship.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
              <h3 className="font-bold text-lg mb-2 text-indigo-600">Our Vision</h3>
              <p className="text-slate-600">A world where consumerism is replaced by a deep appreciation for long-lasting quality.</p>
            </div>
          </div>

          <p className="text-slate-600 italic border-l-4 border-indigo-600 pl-6 text-lg">
            "We don't just sell products. We sell time, focus, and clarity. By removing the unnecessary, we make room for what truly matters."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
