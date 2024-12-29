"use client"

import React, { useState } from 'react';
import ServiceNav from './ServiceNav';
import { imageData } from './portfolioData';

const PortfolioLayout = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [selectedService, setSelectedService] = useState('Wedding and Pre Wedding');

  return (
    <div className="min-h-screen bg-white">
      <nav className="p-4 flex justify-center">
        <div className="w-24 h-24 mb-4 transition-transform hover:scale-105 duration-300">
          <img src="/logo.png" alt="Binax Logo" className="rounded-full" />
        </div>
      </nav>

      <div className="container mx-auto px-4">
        {/* Mobile Services */}
        <div className="md:hidden overflow-x-auto mb-8">
          <ServiceNav
            selectedService={selectedService}
            onServiceSelect={setSelectedService}
            variant="mobile"
          />
        </div>

        {/* Desktop Layout */}
        <div className="flex gap-8">
          {/* Desktop Services */}
          <div className="hidden md:block w-1/6">
            <ServiceNav
              selectedService={selectedService}
              onServiceSelect={setSelectedService}
              variant="desktop"
            />
          </div>

          {/* Image Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {imageData[selectedService].map((image, index) => (
                <div key={index} className="col-span-1 row-span-1">
                  <div 
                    className="relative h-98 overflow-hidden group"
                    onMouseEnter={() => setHoveredImage(index)}
                    onMouseLeave={() => setHoveredImage(null)}
                  >
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div 
                      className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
                        hoveredImage === index ? 'opacity-100' : 'opacity-0'
                      }`} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioLayout;