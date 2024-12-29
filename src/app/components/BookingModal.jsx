"use client"

import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const BookingModal = ({ isOpen, onClose }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClose = () => {
    // Reset both the form and confirmation state
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    });
    setIsConfirmed(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-3xl px-8 md:px-20 py-10">
        {!isConfirmed ? (
          <>
            <h2 className="text-5xl font-serif text-center mb-4">Working/ Studio Session</h2>
            <p className="text-gray-600 text-center mb-8">
              Unlock the artistry of makeup in our exclusive Working Studio Session. This is more than 
              just a makeup application – it's a collaborative, tailored experience where our professional 
              artist brings your unique style to life.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">First Name</label>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-2xl"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Last Name</label>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-2xl"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-600">Email Address</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-2xl"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Phone Number</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-2xl"
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-black text-white py-6 rounded-full hover:bg-gray-800 transition-colors"
              >
                Confirm Booking
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <h2 className="text-3xl font-serif mb-4">Your Booking Is Confirmed!</h2>
            <p className="text-gray-600 mb-8">
              Thank you for scheduling your Working Studio Session! One of our team 
              members will reach out soon to discuss the details and answer any questions 
              you may have. We can't wait to bring your vision to life!
            </p>
            <Button 
              onClick={handleClose}
              className="bg-black text-white py-3 px-16 rounded-full hover:bg-gray-800 transition-colors"
            >
              All Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;