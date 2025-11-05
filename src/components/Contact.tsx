import React from 'react';
import { MapPin, Phone, Mail, Globe, Facebook, Instagram, MessageCircle, Youtube } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: MapPin, text: 'ORIZ Academy – Individual Tuition Concept' },
    { icon: Phone, text: '+91 9946 042 500' },
    { icon: Mail, text: 'info@orizacademy.com' },
    { icon: Globe, text: 'www.orizacademy.com' }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', href: '#' },
    { icon: Instagram, name: 'Instagram', href: '#' },
    { icon: MessageCircle, name: 'WhatsApp', href: 'https://wa.me/919946042500' },
    { icon: Youtube, name: 'YouTube', href: '#' }
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0C2D57] mb-4">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-[#00AEEF] mx-auto mb-6"></div>
          <p className="text-gray-600 text-sm">
            Get in touch with us for any queries or to start your learning journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-[#0C2D57] mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <item.icon className="w-5 h-5 text-[#00AEEF] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0C2D57] text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-[#0C2D57] mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 bg-[#00AEEF] text-white rounded-full hover:bg-[#0099d4] transition-colors duration-300"
                    title={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#0C2D57] mb-4">Quick Contact</h3>
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-4">
                  Ready to start your child's learning journey? Contact us now!
                </p>
                <div className="flex flex-col gap-3">
                  <a 
                    href="tel:+919946042500"
                    className="flex items-center justify-center gap-2 bg-[#00AEEF] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#0099d4] transition-all duration-300"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>
                  <a 
                    href="https://wa.me/919946042500"
                    className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-green-600 transition-all duration-300"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>
                  <a 
                    href="mailto:info@orizacademy.com"
                    className="flex items-center justify-center gap-2 bg-[#0C2D57] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#0C2D57]/90 transition-all duration-300"
                  >
                    <Mail size={18} />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;