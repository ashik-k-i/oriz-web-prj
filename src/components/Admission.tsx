import React, { useState } from 'react';
import { Phone, MessageCircle, Clock, GraduationCap, Users, DollarSign } from 'lucide-react';

const Admission = () => {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    email: '',
    phone: '',
    whatsapp: '',
    purpose: 'Demo'
  });

  const countries = [
    'India', 'United States', 'United Kingdom', 'Canada', 'Australia', 
    'UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain',
    'Malaysia', 'Singapore', 'Other'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const features = [
    { icon: Clock, text: 'Flexible Time' },
    { icon: Users, text: 'Live Classes' },
    { icon: GraduationCap, text: 'Experienced Teachers' },
    { icon: DollarSign, text: 'Affordable Fee' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Admission Open Now!
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 bg-[#00AEEF]/10 px-3 py-1 rounded-full">
                <feature.icon className="w-4 h-4 text-[#00AEEF]" />
                <span className="text-sm text-[#0C2D57] font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="tel:+919946042500"
              className="flex items-center gap-2 bg-[#0C2D57] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#0C2D57]/90 transition-all duration-300 shadow-lg"
            >
              <Phone size={18} />
              Call: +91 9946 042 500
            </a>
            <a 
              href="https://wa.me/919946042500"
              className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg"
            >
              <MessageCircle size={18} />
              WhatsApp: +91 9946 042 500
            </a>
          </div>
        </div>
        
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
                required
              >
                <option value="">Select Country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <input
                type="tel"
                name="whatsapp"
                placeholder="WhatsApp Number"
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
              />
            </div>
            
            <div>
              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
                required
              >
                <option value="Demo">Demo</option>
                <option value="Admission">Admission</option>
                <option value="Enquiry">Enquiry</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#00AEEF] text-white py-3 rounded-lg font-semibold text-sm hover:bg-[#0099d4] transition-colors duration-300"
            >
              Request a Free Demo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Admission;