"use client"

import React from 'react';
import { services } from './portfolioData';

const ServiceNav = ({ 
  selectedService, 
  onServiceSelect, 
  className = "",
  variant = "desktop"
}) => {
  const mobileStyles = "flex space-x-6 whitespace-nowrap pb-4";
  const desktopStyles = "space-y-4 sticky top-4";

  const getItemStyles = (service) => {
    const isActive = selectedService === service;
    const baseStyles = "cursor-pointer transition-all duration-300";
    
    if (variant === "mobile") {
      return `${baseStyles} text-xl flex-shrink-0 ${
        isActive 
          ? 'text-black font-semibold' 
          : 'text-gray-500 hover:text-gray-700'
      }`;
    }
    
    return `${baseStyles} text-lg ${
      isActive 
        ? 'text-black font-semibold translate-x-2' 
        : 'text-gray-500 hover:text-gray-700 hover:translate-x-2'
    }`;
  };

  return (
    <ul className={`${variant === "mobile" ? mobileStyles : desktopStyles} ${className}`}>
      {services.map((service) => (
        <li 
          key={service}
          className={getItemStyles(service)}
          onClick={() => onServiceSelect(service)}
        >
          {service}
        </li>
      ))}
    </ul>
  );
};

export default ServiceNav;