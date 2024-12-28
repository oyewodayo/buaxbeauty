"use client"

import React, { useState } from 'react';

const PortfolioLayout = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [selectedService, setSelectedService] = useState('Wedding and Pre Wedding');
  
  const services = [
    'Wedding and Pre Wedding',
    'Male Grooming',
    'Editorial',
    'Birthday Shoot',
    'Music/Commercial shoot',
    'Jewellery'
  ];

  const imageData = {
    'Wedding and Pre Wedding': Array.from({ length: 6 }, (_, i) => ({
      src: `/wedding-${i + 1}.png`,
      alt: `Wedding ${i + 1}`
    })),
    'Male Grooming': Array.from({ length: 6 }, (_, i) => ({
      src: `/grooming-${i + 1}.png`,
      alt: `Grooming ${i + 1}`
    })),
    'Editorial': Array.from({ length: 4 }, (_, i) => ({
      src: `/editorial-${i + 1}.png`,
      alt: `Editorial ${i + 1}`
    })),
    'Birthday Shoot': Array.from({ length: 4 }, (_, i) => ({
      src: `/birthday-${i + 1}.png`,
      alt: `Birthday ${i + 1}`
    })),
    'Music/Commercial shoot': Array.from({ length: 6 }, (_, i) => ({
      src: `/commercial-${i + 1}.png`,
      alt: `Commercial ${i + 1}`
    })),
    'Jewellery': Array.from({ length: 6 }, (_, i) => ({
      src: `/jewellery-${i + 1}.png`,
      alt: `Jewellery ${i + 1}`
    }))
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

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
          <ul className="flex space-x-6 whitespace-nowrap pb-4">
            {services.map((service) => (
              <li 
                key={service} 
                className={`text-xl cursor-pointer flex-shrink-0 transition-colors duration-300 ${
                  selectedService === service 
                    ? 'text-black font-semibold' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => handleServiceClick(service)}
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Layout */}
        <div className="flex gap-8">
          {/* Desktop Services */}
          <div className="hidden md:block w-1/6">
            <ul className="space-y-4 sticky top-4">
              {services.map((service) => (
                <li 
                  key={service} 
                  className={`text-lg cursor-pointer transition-all duration-300 
                    ${selectedService === service 
                      ? 'text-black font-semibold translate-x-2' 
                      : 'text-gray-500 hover:text-gray-700 hover:translate-x-2'
                    }`}
                  onClick={() => handleServiceClick(service)}
                >
                  {service}
                </li>
              ))}
            </ul>
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