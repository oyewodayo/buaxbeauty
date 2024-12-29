"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';


const Classess = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const thumbnails = [
    '/editorial-4.png',
    '/image-2.png',
    '/image-3.png',
    '/image-4.png',
    '/image-5.png',
    '/image-6.png'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="p-4 flex justify-center">
        <div className="w-24 h-24 mb-4 transition-transform hover:scale-105 duration-300">
          <img src="/logo.png" alt="Binax Logo" className="rounded-full" />
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery Section */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="h-[500px] relative overflow-hidden rounded-lg transition-opacity duration-300">
              <img 
                src={thumbnails[selectedImage]}
                alt="Studio session"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-6 gap-2">
              {thumbnails.map((thumb, idx) => (
                <button
                  key={idx}
                  className={`aspect-square relative overflow-hidden rounded-sm transition-all duration-200 ${
                    selectedImage === idx 
                      ? 'ring-2 ring-orange-500 scale-95' 
                      : 'hover:scale-95'
                  }`}
                  onClick={() => setSelectedImage(idx)}
                >
                  <img 
                    src={thumb}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-serif">
              Working/ Studio Session
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              Step into a dynamic studio environment where creativity and expertise come together 
              to achieve your perfect look. Our Working Studio Session provides a hands-on 
              experience tailored to your style and vision. Whether preparing for a special 
              event or simply wanting to experiment with new trends, our artist brings a wealth 
              of skill to ensure you leave feeling empowered and radiant.
            </p>
            <div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                Make a Booking
              <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <BookingModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Footer/>
    </div>
  );
};

export default Classess;