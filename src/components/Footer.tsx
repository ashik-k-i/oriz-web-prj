import React from 'react';
import { GraduationCap, Phone, Mail, MapPin, MessageCircle, Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Programs', href: '#programs', id: 'programs' },
    { name: 'Mentors', href: '#mentors', id: 'mentors' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 64; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const programs = [
    'Foundation Programs',
    'Academic Tuition',
    'Madrassa Tuition',
    'KG to 12 Classes'
  ];

  const subjects = [
    'Mathematics',
    'English',
    'Malayalam',
    'Arabic',
    'Hindi',
    'Urdu'
  ];

  return (
    <footer className="bg-[#0C2D57] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
             <div className="bg-[#FFFFFF] p-1 rounded-lg">
              <img 
                src="/logo.png" 
                alt="ORIZ Academy Logo" 
                className="w-8 h-8" 
              />
            </div>
              <div>
                <h3 className="text-xl font-bold text-white">ORIZ Academy</h3>
                <p className="text-xs text-white/70">Individual Tuition Concept</p>
              </div>
            </div>
            <p className="text-sm text-white/80 mb-4 leading-relaxed">
              Making your child's future better and brighter through personalized one-on-one learning experiences with expert teachers worldwide.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Phone size={16} className="text-[#00AEEF]" />
                <span>+91 9946 042 500</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Mail size={16} className="text-[#00AEEF]" />
                <span>orizacademy3@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-white/80 hover:text-[#00AEEF] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Programs</h4>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index} className="text-sm text-white/80">
                  {program}
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Subjects</h4>
            <ul className="space-y-2">
              {subjects.map((subject, index) => (
                <li key={index} className="text-sm text-white/80">
                  {subject}
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-white mb-3">Follow Us</h5>
              <div className="flex gap-3">
                <a 
                  href="https://www.instagram.com/oriz_academy_?igsh=ZmEyc2czN2J5dXYx" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-lg hover:bg-[#00AEEF] transition-colors duration-300"
                >
                  <Instagram size={16} />
                </a>
                <a 
                  href="https://wa.me/message/2R7AVGPVM5MPD1" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-lg hover:bg-[#00AEEF] transition-colors duration-300"
                >
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-white/80">
                © 2025 ORIZ Academy. All Rights Reserved.
              </p>
            </div>
            <div className="text-center md:text-right">
              <a 
                href="https://technotalim.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/60 hover:text-[#00AEEF] transition-colors duration-300 inline-flex items-center gap-1"
              >
                Designed and Developed by TechnoTaLim
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="py-6 border-t border-white/10 text-center">
          <div className="bg-gradient-to-r from-[#00AEEF]/20 to-[#00AEEF]/10 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-2">Ready to Start Learning?</h4>
            <p className="text-sm text-white/80 mb-4">Contact us today for a free demo session</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="tel:+919946042500"
                className="flex items-center justify-center gap-2 bg-[#00AEEF] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#0099d4] transition-all duration-300"
              >
                <Phone size={16} />
                Call Now
              </a>
              <a 
                href="https://wa.me/message/2R7AVGPVM5MPD1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white text-[#0C2D57] px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-50 transition-all duration-300"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;