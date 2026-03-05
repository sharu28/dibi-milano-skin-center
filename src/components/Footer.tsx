import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#F9F9F7] text-gray-900 pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Contact */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-light tracking-[0.2em] uppercase mb-2">
                DIBI Milano
              </h2>
              <p className="text-xs tracking-[0.3em] text-gray-500 uppercase">
                Skin Center
              </p>
            </div>

            <p className="text-sm text-gray-600 max-w-md leading-relaxed serif-text">
              Elevating your natural beauty through bespoke skin treatments and advanced technology in the heart of Colombo.
            </p>

            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-[#D4C5B9]" />
                <span>No 10, 2nd Floor, Dasa Group Building<br />Rosmead Place<br />Colombo 7</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#D4C5B9]" />
                <span>0112 674 546</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-[#D4C5B9]" />
                <a href="https://wa.me/94776333505" className="hover:text-gray-900 transition-colors">+94 77 633 3505</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#D4C5B9]" />
                <a href="mailto:hello@dibimilano.com" className="hover:text-gray-900 transition-colors">hello@dibimilano.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-6 text-gray-500">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link to="/" className="hover:text-[#D4C5B9] transition-colors">Home</Link></li>
              <li><a href="#" className="hover:text-[#D4C5B9] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#D4C5B9] transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-[#D4C5B9] transition-colors">Shop Products</a></li>
              <li><a href="#" className="hover:text-[#D4C5B9] transition-colors">Book Online</a></li>
              <li><a href="#" className="hover:text-[#D4C5B9] transition-colors">Gift Cards</a></li>
              <li><Link to="/careers" className="hover:text-[#D4C5B9] transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-6 text-gray-500">Opening Hours</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex justify-between">
                <span>Monday - Sunday</span>
                <span>9:00 AM - 6:30 PM</span>
              </li>
              <li className="flex justify-between text-gray-600">
                <span>Open on Poya Days</span>
              </li>
            </ul>

            <div className="mt-8">
              <h3 className="text-xs font-semibold tracking-widest uppercase mb-4 text-gray-500">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/dibimilano_skincentre" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#D4C5B9] hover:border-[#D4C5B9] hover:text-white transition-all text-gray-600">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#D4C5B9] hover:border-[#D4C5B9] hover:text-white transition-all text-gray-600">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map - Full Width */}
        <div className="w-full h-[512px] bg-gray-200 rounded-lg overflow-hidden mb-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.817578298918!2d79.86379531537456!3d6.912411995005934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2597022026115%3A0x633d1b8222a0335e!2s10%20Rosmead%20Pl%2C%20Colombo%2000700%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DIBI Milano Location"
          ></iframe>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} DIBI Milano Skin Center. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Cancellation Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
