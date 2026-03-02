import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star, Instagram } from 'lucide-react';
import { services } from '../data/services';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop"
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F9F7]">
      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {HERO_IMAGES.map((img, index) => (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={img}
                alt={`Clinic Interior ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-[0.15em] uppercase mb-6"
          >
            Elevate Your<br />Natural Beauty
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/90 font-serif italic mb-10 max-w-2xl mx-auto"
          >
            Bespoke skin treatments tailored to your unique needs in the heart of Colombo.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#D4C5B9] hover:text-white transition-all duration-300"
            >
              Book Consultation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Bespoke Experience Section */}
      <section className="py-24 md:py-32 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-semibold tracking-[0.3em] text-gray-400 uppercase mb-8">
            Your Bespoke Experience
          </h2>
          <p className="text-2xl md:text-4xl font-serif text-gray-800 leading-relaxed">
            At DIBI Milano Skin Center, we believe that healthy skin is the foundation of true beauty. Our expert clinicians combine advanced technology with personalized care to deliver transformative results.
          </p>
          <div className="mt-12">
            <a href="#" className="inline-flex items-center text-sm font-medium tracking-widest text-gray-900 hover:text-[#D4C5B9] transition-colors uppercase border-b border-gray-900 hover:border-[#D4C5B9] pb-1">
              Discover Our Philosophy <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-[0.15em] text-gray-900 uppercase">
              Our Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                key={service.id} 
                to={`/service/${service.slug}`}
                className="group relative block overflow-hidden aspect-[4/5] bg-gray-100"
              >
                <img 
                  src={service.heroImage} 
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-xl md:text-2xl font-light text-white tracking-widest uppercase mb-3">
                    {service.name}
                  </h3>
                  <div className="overflow-hidden">
                    <p className="text-sm text-white/80 font-serif italic transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {service.shortDescription}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center text-xs font-semibold tracking-[0.2em] text-white uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Explore Treatment <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-900 text-gray-900 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="bg-[#D4C5B9] text-[#1A1A1A] py-4 overflow-hidden whitespace-nowrap">
        <div className="animate-[marquee_20s_linear_infinite] inline-block">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase mx-4">
            DELUXE SAMPLES OR FREE GIFT WITH PURCHASE. ORDER ONLINE OR IN STORE. T&CS APPLY.
          </span>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase mx-4">
            •
          </span>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase mx-4">
            COMPLIMENTARY SKIN CONSULTATION WITH EVERY FIRST VISIT.
          </span>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase mx-4">
            •
          </span>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase mx-4">
            DELUXE SAMPLES OR FREE GIFT WITH PURCHASE. ORDER ONLINE OR IN STORE. T&CS APPLY.
          </span>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase mx-4">
            •
          </span>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase mx-4">
            COMPLIMENTARY SKIN CONSULTATION WITH EVERY FIRST VISIT.
          </span>
        </div>
      </div>

      {/* Gift Cards Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-light tracking-[0.15em] text-gray-900 uppercase mb-6">
                The Gift of Glowing Skin
              </h2>
              <p className="text-lg font-serif text-gray-600 mb-10 leading-relaxed">
                Treat someone special to a bespoke skin experience. Our beautifully packaged gift cards can be used towards any treatment or product in our clinic.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-8 py-4 bg-[#1A1A1A] text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#D4C5B9] transition-all duration-300"
              >
                Buy Gift Card
              </a>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=2053&auto=format&fit=crop" 
                  alt="Gift Cards" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#F9F9F7] border border-gray-200 flex items-center justify-center rounded-full p-4 text-center">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-gray-500">
                  Available<br/>In Clinic<br/>& Online
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-[#F9F9F7]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-1 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-current text-[#D4C5B9]" />
            ))}
          </div>
          <h2 className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-12 leading-relaxed">
            "The most incredible facial I've ever had. The team at DIBI Milano truly understands skin and tailors everything to your specific needs. My skin has never looked better!"
          </h2>
          <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
            Sarah J. — Google Review
          </p>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {[
            'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1974&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop'
          ].map((img, i) => (
            <a key={i} href="#" className="relative group aspect-square overflow-hidden block">
              <img src={img} alt={`Instagram ${i+1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </a>
          ))}
        </div>
        <div className="text-center py-12 bg-white">
          <a href="https://www.instagram.com/dibimilano_skincentre" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium tracking-widest text-gray-900 hover:text-[#D4C5B9] transition-colors uppercase">
            Follow @dibimilano_skincentre <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
