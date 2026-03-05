import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { services } from '../data/services';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Left Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-widest text-gray-800">
            <Link to="/" className="hover:text-gray-500 transition-colors">HOME</Link>
            <Link to="/products" className="hover:text-gray-500 transition-colors">PRODUCTS</Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="flex items-center hover:text-gray-500 transition-colors uppercase">
                SERVICES <ChevronDown className="ml-1 w-3 h-3" />
              </button>
              
              {/* Dropdown */}
              <div 
                className={`absolute top-full left-0 pt-4 w-64 transition-all duration-200 origin-top-left ${
                  servicesDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                }`}
              >
                <div className="bg-white shadow-lg border border-gray-100 py-2 rounded-sm">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/service/${service.slug}`}
                      className="block px-4 py-2 text-xs text-gray-600 hover:bg-gray-50 hover:text-gray-900 uppercase tracking-wider"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <a href="#" className="hover:text-gray-500 transition-colors">BOOK ONLINE</a>
            <a href="#" className="hover:text-gray-500 transition-colors">SHOP</a>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="text-center">
              <h1 className="text-xl md:text-2xl font-light tracking-[0.2em] text-gray-900 uppercase">
                DIBI Milano
              </h1>
              <p className="text-[10px] md:text-xs tracking-[0.3em] text-gray-500 uppercase mt-1">
                Skin Center
              </p>
            </Link>
          </div>

          {/* Right Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-widest text-gray-800">
            <a href="#" className="hover:text-gray-500 transition-colors">TRAINING</a>
            <a href="#" className="hover:text-gray-500 transition-colors">EGIFT CARDS</a>
            <a href="#" className="hover:text-gray-500 transition-colors">MORE</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-800 hover:text-gray-500 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen border-t border-gray-100' : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          <Link to="/" className="block px-3 py-3 text-sm font-medium tracking-widest text-gray-800 border-b border-gray-50">HOME</Link>
          <Link to="/products" className="block px-3 py-3 text-sm font-medium tracking-widest text-gray-800 border-b border-gray-50">PRODUCTS</Link>
          
          <div className="border-b border-gray-50">
            <button 
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium tracking-widest text-gray-800"
            >
              SERVICES <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`bg-gray-50 overflow-hidden transition-all duration-300 ${servicesDropdownOpen ? 'max-h-96' : 'max-h-0'}`}>
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/service/${service.slug}`}
                  className="block px-6 py-2 text-xs tracking-wider text-gray-600"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          
          <a href="#" className="block px-3 py-3 text-sm font-medium tracking-widest text-gray-800 border-b border-gray-50">BOOK ONLINE</a>
          <a href="#" className="block px-3 py-3 text-sm font-medium tracking-widest text-gray-800 border-b border-gray-50">SHOP</a>
          <a href="#" className="block px-3 py-3 text-sm font-medium tracking-widest text-gray-800 border-b border-gray-50">TRAINING</a>
          <a href="#" className="block px-3 py-3 text-sm font-medium tracking-widest text-gray-800 border-b border-gray-50">EGIFT CARDS</a>
        </div>
      </div>
    </nav>
  );
}
