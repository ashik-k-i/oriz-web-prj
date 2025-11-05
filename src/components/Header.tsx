import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-[#FFFFFF] p-1 rounded-lg">
              <img 
                src="/logo.png" 
                alt="ORIZ Academy Logo" 
                className="w-8 h-8" 
              />
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-[#0C2D57]' : 'text-white'
              }`}>
                ORIZ Academy
              </h1>
              <p className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                Individual Tuition Concept
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-[#00AEEF] ${
                  isScrolled ? 'text-[#0C2D57]' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919946042500"
              className="flex items-center gap-2 bg-[#00AEEF] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#0099d4] transition-all duration-300"
            >
              <Phone size={16} />
              Call Now
            </a>
            <a
              href="https://wa.me/919946042500"
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'bg-[#0C2D57] text-white hover:bg-[#0C2D57]/90' 
                  : 'bg-white text-[#0C2D57] hover:bg-gray-50'
              }`}
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-[#0C2D57]' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setIsMenuOpen(false);
                  }}
                  className="block text-[#0C2D57] text-sm font-medium hover:text-[#00AEEF] transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-3 border-t border-gray-200">
                <a
                  href="tel:+919946042500"
                  className="flex items-center justify-center gap-2 bg-[#00AEEF] text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  <Phone size={16} />
                  Call: +91 9946 042 500
                </a>
                <a
                  href="https://wa.me/919946042500"
                  className="flex items-center justify-center gap-2 bg-[#0C2D57] text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;