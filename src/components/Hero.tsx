import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const backgroundImages = [
    'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sliding Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0C2D57]/95 via-[#0C2D57]/85 to-[#00AEEF]/90" />
      
      {/* Additional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-16">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          We Will Make Your Child's Future
          <span className="block text-[#00AEEF] mt-2">Better and Brighter</span>
        </h1>
        
        {/* Subtitle */}
        <div className="text-lg sm:text-xl text-white/95 mb-10 max-w-4xl mx-auto leading-relaxed">
          <p className="font-medium">
            ORIZ is your child's dedicated academic partner, offering personalized learning experiences. 
            One-to-one is the best way to improve grades and get personalized attention. 
            Choose the subject you need & attend classes at your preferred time.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="tel:+919946042500"
            className="flex items-center gap-3 bg-[#00AEEF] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#0099d4] transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105"
          >
            <Phone size={20} />
            Call Now: +91 9946 042 500
          </a>
          <a 
            href="https://wa.me/919946042500"
            className="flex items-center gap-3 bg-white text-[#0C2D57] px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105"
          >
            <MessageCircle size={20} />
            WhatsApp Us
          </a>
        </div>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00AEEF] rounded-full"></div>
            <span>Worldwide Access</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00AEEF] rounded-full"></div>
            <span>Expert Teachers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00AEEF] rounded-full"></div>
            <span>Flexible Timing</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00AEEF] rounded-full"></div>
            <span>Affordable Fees</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
        <div className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors duration-300">
          <span className="text-xs font-medium">Scroll Down</span>
          <ChevronDown size={24} />
        </div>
      </div>
    </div>
  );
};

export default Hero;