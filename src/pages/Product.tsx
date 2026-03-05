import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp, Sparkles, Star, Info, Beaker, Heart, Share2 } from 'lucide-react';
import { getProductBySlug, products, getProductsByLine } from '../data/products';

export default function Product() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = slug ? getProductBySlug(slug) : undefined;
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [expandedSection, setExpandedSection] = useState<string | null>('ingredients');
  
  // Get related products from same line
  const relatedProducts = product 
    ? getProductsByLine(product.line).filter(p => p.slug !== product.slug).slice(0, 3)
    : [];

  useEffect(() => {
    // Reset image when product changes
    setSelectedImage(0);
    setExpandedSection('ingredients');
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F9F9F7] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light tracking-widest uppercase mb-4">Product Not Found</h1>
          <Link to="/products" className="text-[#D4C5B9] hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-[#F9F9F7]">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-xs tracking-widest uppercase text-gray-500">
            <Link to="/" className="hover:text-gray-900">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-gray-900">Products</Link>
            <span>/</span>
            <Link to={`/products?line=${encodeURIComponent(product.line)}`} className="hover:text-gray-900">
              {product.line}
            </Link>
            <span>/</span>
            <span className="text-gray-900 truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Left: Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={product.images[selectedImage] ? `/${product.images[selectedImage]}` : ''}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                
                {/* Image Navigation Arrows */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setSelectedImage(prev => prev === 0 ? product.images.length - 1 : prev - 1)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setSelectedImage(prev => prev === product.images.length - 1 ? 0 : prev + 1)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>
              
              {/* Thumbnail Strip */}
              {product.images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`flex-shrink-0 w-20 h-20 overflow-hidden border-2 transition-colors ${
                        selectedImage === idx ? 'border-[#D4C5B9]' : 'border-transparent'
                      }`}
                    >
                      <img src={`/${img}`} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Right: Product Info */}
            <div className="lg:sticky lg:top-32 lg:self-start space-y-8">
              {/* Line Badge */}
              <div>
                <Link 
                  to={`/products?line=${encodeURIComponent(product.line)}`}
                  className="inline-block text-xs font-semibold tracking-[0.2em] text-[#D4C5B9] uppercase hover:underline"
                >
                  {product.line}
                </Link>
              </div>
              
              {/* Product Name */}
              <h1 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide leading-tight">
                {product.name}
              </h1>
              
              {/* Placeholder: Product Tagline */}
              <p className="text-lg font-serif italic text-gray-600">
                {/* PLACEHOLDER: Generated product tagline based on key ingredients */}
                Advanced formulation targeting visible signs of aging with clinically-proven active ingredients
              </p>
              
              {/* Placeholder: Key Benefits */}
              <div className="bg-white p-6 border border-gray-100">
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="w-4 h-4 text-[#D4C5B9]" />
                  <span className="text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase">Key Benefits</span>
                </div>
                <ul className="space-y-3">
                  {/* PLACEHOLDER: Generate 4 key benefits based on product ingredients */}
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-[#D4C5B9] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Deeply hydrates and plumps skin for a youthful appearance</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-[#D4C5B9] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Reduces the appearance of fine lines and wrinkles</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-[#D4C5B9] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Strengthens skin barrier for improved resilience</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-[#D4C5B9] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Enhances natural radiance and even skin tone</span>
                  </li>
                </ul>
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="flex-1 py-4 bg-[#1A1A1A] text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#D4C5B9] transition-colors">
                  Add to Cart
                </button>
                <button className="p-4 border border-gray-200 hover:border-[#D4C5B9] transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-4 border border-gray-200 hover:border-[#D4C5B9] transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
              
              {/* Placeholder: Skin Type Recommendations */}
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <span className="flex items-center">
                  <Info className="w-4 h-4 mr-1" />
                  {/* PLACEHOLDER: Best for skin types */}
                  Best for: All Skin Types
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Sections */}
      <section className="border-t border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto">
          
          {/* Ingredients Section */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => toggleSection('ingredients')}
              className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Beaker className="w-5 h-5 text-[#D4C5B9]" />
                <h2 className="text-sm font-semibold tracking-[0.15em] uppercase">Ingredients</h2>
              </div>
              {expandedSection === 'ingredients' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            <AnimatePresence>
              {expandedSection === 'ingredients' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-8 pb-8">
                    {/* Placeholder: Key Active Ingredients Highlight */}
                    <div className="mb-6 p-4 bg-[#F9F9F7] border-l-4 border-[#D4C5B9]">
                      <div className="flex items-center space-x-2 mb-2">
                        <Sparkles className="w-4 h-4 text-[#D4C5B9]" />
                        <span className="text-xs font-semibold tracking-[0.1em] text-gray-500 uppercase">Key Active Ingredients</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        {/* PLACEHOLDER: Extract and explain key active ingredients */}
                        This formula features powerful actives including {product.ingredients.split(',').slice(0, 3).join(', ')}, 
                        working synergistically to deliver visible results.
                      </p>
                    </div>
                    
                    <p className="text-sm text-gray-600 leading-relaxed font-mono">
                      {product.ingredients}
                    </p>
                    <p className="mt-4 text-xs text-gray-400 italic">
                      For the complete and updated list of ingredients, please refer to the product packaging.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Directions Section */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => toggleSection('directions')}
              className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Info className="w-5 h-5 text-[#D4C5B9]" />
                <h2 className="text-sm font-semibold tracking-[0.15em] uppercase">Directions for Use</h2>
              </div>
              {expandedSection === 'directions' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            <AnimatePresence>
              {expandedSection === 'directions' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-8 pb-8">
                    {/* Placeholder: Enhanced Application Tips */}
                    <div className="mb-6 p-4 bg-[#F9F9F7] border-l-4 border-[#D4C5B9]">
                      <div className="flex items-center space-x-2 mb-2">
                        <Sparkles className="w-4 h-4 text-[#D4C5B9]" />
                        <span className="text-xs font-semibold tracking-[0.1em] text-gray-500 uppercase">Expert Application Tips</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        {/* PLACEHOLDER: Generate expert application tips */}
                        For optimal results, apply to freshly cleansed, slightly damp skin. 
                        Use gentle upward motions to promote lymphatic drainage and enhance absorption.
                      </p>
                    </div>
                    
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {product.directions}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Placeholder: The Science Section */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => toggleSection('science')}
              className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Sparkles className="w-5 h-5 text-[#D4C5B9]" />
                <h2 className="text-sm font-semibold tracking-[0.15em] uppercase">The Science</h2>
              </div>
              {expandedSection === 'science' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            <AnimatePresence>
              {expandedSection === 'science' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-8 pb-8 space-y-4">
                    {/* PLACEHOLDER: Generate scientific explanation */}
                    <p className="text-sm text-gray-700 leading-relaxed">
                      This advanced formulation leverages cutting-edge delivery systems to ensure 
                      active ingredients penetrate the skin barrier effectively. The molecular structure 
                      of key components has been optimized for maximum bioavailability.
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Clinical studies have demonstrated significant improvements in skin hydration, 
                      elasticity, and overall appearance within 4-6 weeks of consistent use. The formula 
                      works at the cellular level to support natural skin regeneration processes.
                    </p>
                    
                    {/* Placeholder: Clinical Results */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="text-center p-4 bg-[#F9F9F7]">
                        <p className="text-2xl font-light text-[#D4C5B9]">94%</p>
                        <p className="text-xs text-gray-500 mt-1">Saw improved hydration</p>
                      </div>
                      <div className="text-center p-4 bg-[#F9F9F7]">
                        <p className="text-2xl font-light text-[#D4C5B9]">87%</p>
                        <p className="text-xs text-gray-500 mt-1">Noticed firmer skin</p>
                      </div>
                      <div className="text-center p-4 bg-[#F9F9F7]">
                        <p className="text-2xl font-light text-[#D4C5B9]">91%</p>
                        <p className="text-xs text-gray-500 mt-1">Would recommend</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 bg-[#F9F9F7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-light tracking-[0.15em] text-gray-900 uppercase">
                Complete Your Routine
              </h2>
              <p className="mt-4 text-gray-600 font-serif italic">
                Products that complement {product.name}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((related) => (
                <Link 
                  key={related.slug}
                  to={`/products/${related.slug}`}
                  className="group block bg-white"
                >
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    {related.images[0] ? (
                      <img 
                        src={`/${related.images[0]}`}
                        alt={related.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        <span className="text-gray-400 text-sm">No Image</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] font-semibold tracking-[0.2em] text-[#D4C5B9] uppercase mb-2">
                      {related.line}
                    </p>
                    <h3 className="text-sm font-medium text-gray-900 tracking-wide">
                      {related.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
