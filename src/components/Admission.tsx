import React, { useState } from 'react';
import { Phone, MessageCircle, Clock, GraduationCap, Users, DollarSign, Send, CheckCircle, BookOpen, Award } from 'lucide-react';

const Admission = () => {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    email: '',
    phone: '',
    whatsapp: '',
    purpose: 'Demo'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const countries = [
    'India', 'United States', 'United Kingdom', 'Canada', 'Australia', 
    'UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain',
    'Malaysia', 'Singapore', 'Other'
  ];

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    // Construct WhatsApp message with form details
    const message = `*New Admission Enquiry*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Country:* ${formData.country}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*WhatsApp:* ${formData.whatsapp || 'Not provided'}\n` +
      `*Purpose:* ${formData.purpose}\n\n` +
      `Please contact me for more information.`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp number (remove + and 00, use international format)
    const whatsappNumber = '919946042500';
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        country: '',
        email: '',
        phone: '',
        whatsapp: '',
        purpose: 'Demo'
      });
    }, 3000);
  };

  const features = [
    { icon: Clock, text: 'Flexible Time' },
    { icon: Users, text: 'Live Classes' },
    { icon: GraduationCap, text: 'Experienced Teachers' },
    { icon: DollarSign, text: 'Affordable Fee' }
  ];

  const highlights = [
    { icon: BookOpen, text: 'Comprehensive curriculum' },
    { icon: Award, text: 'Certified instructors' },
    { icon: Users, text: 'One-on-one attention' },
    { icon: Clock, text: '24/7 support available' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0C2D57] mb-4">
            Admission Open Now!
          </h2>
          <div className="w-16 h-1 bg-[#00AEEF] mx-auto mb-6"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#0C2D57] mb-4">
                Start Your Learning Journey Today
              </h3>
              <p className="text-gray-600 mb-6">
                Join ORIZ Academy and embark on a journey of academic excellence with our expert mentors. 
                We provide personalized education tailored to your needs.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-[#0C2D57] mb-4">Why Choose ORIZ Academy?</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <highlight.icon className="w-5 h-5 text-[#00AEEF] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{highlight.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-[#0C2D57] mb-4">Our Features</h4>
              <div className="flex flex-wrap gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 bg-[#00AEEF]/10 px-4 py-2 rounded-full">
                    <feature.icon className="w-4 h-4 text-[#00AEEF]" />
                    <span className="text-sm text-[#0C2D57] font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-[#0C2D57] mb-4">Contact Us Directly</h4>
              <a 
                href="tel:+919946042500"
                className="flex items-center gap-3 bg-[#0C2D57] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#0C2D57]/90 transition-all duration-300 shadow-lg w-full sm:w-auto justify-center"
              >
                <Phone size={18} />
                Call Us
              </a>
              <a 
                href="https://wa.me/919946042500"
                className="flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg w-full sm:w-auto justify-center"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
          </div>
          
          {/* Right Side - Form */}
          <div className="bg-gray-50 rounded-xl p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-[#0C2D57] mb-6">Request Information</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#0C2D57] mb-2">Redirecting to WhatsApp...</h3>
                <p className="text-gray-600">Your details have been prepared. Please wait...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent transition-all duration-200 bg-white"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent transition-all duration-200 bg-white"
                    required
                  >
                    <option value="">Select your country</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent transition-all duration-200 bg-white"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent transition-all duration-200 bg-white"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number (Optional)</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="Enter your WhatsApp number"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent transition-all duration-200 bg-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Purpose</label>
                  <select
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent transition-all duration-200 bg-white"
                    required
                  >
                    <option value="Demo">Request a Demo</option>
                    <option value="Admission">Admission Enquiry</option>
                    <option value="Enquiry">General Enquiry</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold text-sm hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} />
                  Send via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            By submitting this form, you agree to our terms of service and privacy policy
          </p>
        </div>
      </div>
    </section>
  );
};

export default Admission;