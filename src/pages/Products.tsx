import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { products, getUniqueLines } from '../data/products';

export default function Products() {
  const [selectedLine, setSelectedLine] = useState<string>('All');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const lines = useMemo(() => ['All', ...getUniqueLines()], []);
  
  const filteredProducts = useMemo(() => {
    if (selectedLine === 'All') return products;
    return products.filter(p => p.line === selectedLine);
  }, [selectedLine]);

  return (
    <div className="min-h-screen bg-[#F9F9F7]">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2000&auto=format&fit=crop"
            alt="Products Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.3em] text-[#D4C5B9] uppercase mb-4"
          >
            Professional Skincare
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-[0.15em] uppercase mb-6"
          >
            Our Products
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/80 font-serif italic max-w-2xl mx-auto"
          >
            Discover our curated collection of advanced skincare formulations, 
            designed to transform your skin with science-backed ingredients.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> products
            </p>
            
            {/* Line Filter Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-2 px-6 py-3 bg-[#F9F9F7] border border-gray-200 text-sm font-medium tracking-widest uppercase hover:border-[#D4C5B9] transition-colors"
              >
                <span>{selectedLine === 'All' ? 'All Collections' : selectedLine}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 top-full mt-2 w-72 bg-white shadow-lg border border-gray-100 py-2 z-40"
                >
                  {lines.map((line) => (
                    <button
                      key={line}
                      onClick={() => {
                        setSelectedLine(line);
                        setDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-xs tracking-wider uppercase transition-colors ${
                        selectedLine === line 
                          ? 'bg-[#F9F9F7] text-gray-900 font-medium' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {line === 'All' ? 'All Collections' : line}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Collection Description Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-4 h-4 text-[#D4C5B9]" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#D4C5B9] uppercase">Collection Description</span>
          </div>
          <p className="text-xl md:text-2xl font-serif text-gray-700 leading-relaxed">
            {/* PLACEHOLDER: Collection Description */}
            {selectedLine === 'All' 
              ? "Our comprehensive skincare range combines cutting-edge dermatological research with luxurious textures. Each product is formulated to address specific skin concerns while delivering a sensorial experience that transforms your daily routine into a moment of self-care."
              : `The ${selectedLine} collection represents the pinnacle of targeted skincare innovation. Meticulously crafted with advanced active ingredients, this line offers professional-grade solutions for discerning individuals seeking visible, lasting results.`
            }
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link 
                  to={`/products/${product.slug}`}
                  className="group block bg-white"
                >
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    {product.images[0] ? (
                      <img 
                        src={`/${product.images[0]}`}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        <span className="text-gray-400 text-sm">No Image</span>
                      </div>
                    )}
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    
                    {/* Product Count Badge */}
                    {product.images.length > 1 && (
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 text-[10px] font-semibold tracking-wider uppercase">
                        {product.images.length} Images
                      </div>
                    )}
                    
                    {/* View Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-6 py-3 bg-white text-gray-900 text-xs font-semibold tracking-[0.15em] uppercase">
                        View Product
                      </span>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-6">
                    <p className="text-[10px] font-semibold tracking-[0.2em] text-[#D4C5B9] uppercase mb-2">
                      {product.line || 'DIBI Milano'}
                    </p>
                    <h3 className="text-sm font-medium text-gray-900 tracking-wide leading-snug line-clamp-2 min-h-[2.5rem]">
                      {product.name}
                    </h3>
                    
                    {/* Placeholder: Quick Benefits */}
                    <div className="mt-3 flex flex-wrap gap-1">
                      {/* PLACEHOLDER: Generated benefit tags based on ingredients */}
                      {product.ingredients.includes('HYALURONIC') && (
                        <span className="px-2 py-0.5 bg-gray-100 text-[10px] text-gray-600">Hydrating</span>
                      )}
                      {product.ingredients.includes('RETINOL') || product.ingredients.includes('PEPTIDE') ? (
                        <span className="px-2 py-0.5 bg-gray-100 text-[10px] text-gray-600">Anti-Aging</span>
                      ) : null}
                      {product.ingredients.includes('VITAMIN C') || product.ingredients.includes('ACID') ? (
                        <span className="px-2 py-0.5 bg-gray-100 text-[10px] text-gray-600">Brightening</span>
                      ) : null}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skincare Consultation CTA */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="w-5 h-5 text-[#D4C5B9]" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#D4C5B9] uppercase">Expert Recommendation</span>
          </div>
          
          {/* PLACEHOLDER: Personalized CTA Content */}
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-[0.1em] uppercase mb-6">
            {selectedLine === 'All' 
              ? "Not Sure Where to Start?"
              : `Complete Your ${selectedLine} Routine`
            }
          </h2>
          
          <p className="text-lg text-white/70 font-serif italic mb-10 max-w-2xl mx-auto">
            {/* PLACEHOLDER: Dynamic recommendation text */}
            {selectedLine === 'All'
              ? "Our skincare experts analyze your unique skin profile to recommend the perfect product combination for your concerns and goals."
              : "Maximize the benefits of your skincare routine with complementary products specifically selected to enhance the efficacy of this collection."
            }
          </p>
          
          <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#D4C5B9] transition-all duration-300">
            Get Personalized Recommendations <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
