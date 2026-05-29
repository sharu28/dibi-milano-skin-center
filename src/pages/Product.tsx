import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp, Sparkles, Star, Info, Beaker, MessageCircle } from 'lucide-react';
import { getProductBySlug, getProductsByLine, Product as ProductType } from '../data/products';

const WHATSAPP_NUMBER = '94776333505';

const lineGuidance: Record<string, string> = {
  'NUOVAPELLE': 'Created for clients looking for a refined anti-ageing home-care step.',
  'CREAM AND SERUM ANTI AGING AGE METHOD': 'Designed for age-focused routines that support skin comfort, tone, and visible freshness.',
  'ACID INFUSION': 'A targeted line for renewal-focused routines and uneven-looking texture or tone.',
  'BIOSTIMULATING SYSTEM LAB': 'Part of a professional home-care system focused on skin vitality and resilience.',
  'COLLAGE SYSTEM LAB': 'A collagen-focused line for routines centred on smoothness, comfort, and a firmer-looking finish.',
  'CREME AND COSMETICS DEFENCE SOLUTION': 'A gentle support line for skin that feels delicate, stressed, or reactive.',
  'FACE PERFECTION': 'Everyday cleansing and preparation products for a balanced professional routine.',
  'FILLER CODE COSMETIC EFFECT FILLERS': 'Created for routines focused on a smoother, fuller-looking finish.',
  'CREAM MOISTURIZING AND NOURISHING HYDRA PERFECTION': 'A hydration-focused line for skin that needs comfort and moisture support.',
  'COSMETICS LIFTING EFFECT LIFT CREATOR': 'Designed for lifting-focused routines and a more toned-looking complexion.',
  'FACE ANTI OXIDANT MAGNIFIC MASK': 'A treatment mask line for routines that need antioxidant care and radiance support.',
  'FACE REGENERATING PRODUCTS PROCELLULAR 365': 'A regeneration-focused line for skin that needs recovery, comfort, and renewed-looking texture.',
  'COSMETICS SEBUM BALANCING PURE EQUALIZER': 'A balancing line for oily, combination, or blemish-prone skin routines.',
  'ANTI AGING WITH GOLD THE GOLD': 'A premium age-focused line for glow, comfort, and a polished finish.',
  'CREAMS AND SERUM ANTI WRINKLE WHITE SCIENCE': 'A brightening-focused line for uneven-looking tone and luminosity.'
};

const priorityIngredients = [
  'SODIUM HYALURONATE',
  'HYALURONIC',
  'NIACINAMIDE',
  'RETINOL',
  'PEPTIDE',
  'COLLAGEN',
  'CAFFEINE',
  'VITAMIN',
  'MANDELIC ACID',
  'FERULIC ACID',
  'GLYCERIN',
  'SHEA',
  'SQUALANE',
  'CERAMIDE',
  'TOCOPHEROL'
];

function cleanCopy(value: string) {
  return value
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getIngredientList(product: ProductType) {
  return product.ingredients
    .split(',')
    .map((ingredient) => cleanCopy(ingredient))
    .filter(Boolean);
}

function getHighlightedIngredients(product: ProductType) {
  const ingredients = getIngredientList(product);
  const highlighted = ingredients.filter((ingredient) => {
    const upperIngredient = ingredient.toUpperCase();
    return priorityIngredients.some((priority) => upperIngredient.includes(priority));
  });

  return (highlighted.length > 0 ? highlighted : ingredients.slice(0, 4)).slice(0, 4);
}

function getLineGuidance(product: ProductType) {
  return lineGuidance[product.line] || 'Part of the professional DIBI Milano home-care range.';
}

function getUsageSummary(product: ProductType) {
  const directions = cleanCopy(product.directions);

  if (/morning and evening|day and night/i.test(directions)) {
    return 'Suitable for a morning and evening routine when recommended for your skin.';
  }

  if (/night|evening/i.test(directions)) {
    return 'Best placed in an evening routine, following the product directions.';
  }

  if (/mask|rinse|minutes/i.test(directions)) {
    return 'Use as a treatment step according to the recommended timing on the product directions.';
  }

  return 'Use as directed, with routine guidance from the DIBI Milano skin team.';
}

function getProductHighlights(product: ProductType) {
  return [
    getLineGuidance(product),
    getUsageSummary(product),
    'Best selected after a skin consultation so the product matches your current skin condition.',
    'Available through DIBI Milano Skin Center Colombo for professional home-care support.'
  ];
}

function getWhatsAppHref(product: ProductType) {
  const message = encodeURIComponent(`Hi DIBI Milano Skin Center, I would like advice on ${product.name}.`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

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
              
              <p className="text-lg font-serif italic text-gray-600">
                {product.description || `${product.name} from the ${product.line} collection, available through DIBI Milano Skin Center Colombo.`}
              </p>
              
              <div className="bg-white p-6 border border-gray-100">
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="w-4 h-4 text-[#D4C5B9]" />
                  <span className="text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase">Product Guidance</span>
                </div>
                <ul className="space-y-3">
                  {getProductHighlights(product).map((highlight) => (
                    <li key={highlight} className="flex items-start">
                      <Star className="w-4 h-4 text-[#D4C5B9] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Action Buttons */}
              <div>
                <a
                  href={getWhatsAppHref(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center py-4 bg-[#1A1A1A] text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#D4C5B9] transition-colors"
                >
                  Ask About This Product <MessageCircle className="ml-2 w-4 h-4" />
                </a>
              </div>
              
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <span className="flex items-center">
                  <Info className="w-4 h-4 mr-1" />
                  Suitability: Confirm with your skin therapist
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
                    <div className="mb-6 p-4 bg-[#F9F9F7] border-l-4 border-[#D4C5B9]">
                      <div className="flex items-center space-x-2 mb-2">
                        <Sparkles className="w-4 h-4 text-[#D4C5B9]" />
                        <span className="text-xs font-semibold tracking-[0.1em] text-gray-500 uppercase">Formula Notes</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        Ingredient highlights include {getHighlightedIngredients(product).join(', ')}. Review the full ingredient list below and ask our team if you have sensitivities or are using active skincare at home.
                      </p>
                    </div>
                    
                    <p className="text-sm text-gray-600 leading-relaxed font-mono">
                      {cleanCopy(product.ingredients)}
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
                    <div className="mb-6 p-4 bg-[#F9F9F7] border-l-4 border-[#D4C5B9]">
                      <div className="flex items-center space-x-2 mb-2">
                        <Sparkles className="w-4 h-4 text-[#D4C5B9]" />
                        <span className="text-xs font-semibold tracking-[0.1em] text-gray-500 uppercase">Expert Application Tips</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        Apply on clean skin unless the product directions say otherwise. Introduce active products gradually and pause use if your skin feels uncomfortable.
                      </p>
                    </div>
                    
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {cleanCopy(product.directions)}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="border-b border-gray-100">
            <button
              onClick={() => toggleSection('guidance')}
              className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Sparkles className="w-5 h-5 text-[#D4C5B9]" />
                <h2 className="text-sm font-semibold tracking-[0.15em] uppercase">Professional Guidance</h2>
              </div>
              {expandedSection === 'guidance' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            <AnimatePresence>
              {expandedSection === 'guidance' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-8 pb-8 space-y-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      DIBI Milano products are best chosen as part of a complete routine, especially if you are using exfoliating acids, retinoids, brightening products, or post-treatment home care.
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Visit or message DIBI Milano Skin Center Colombo for guidance on where this product fits in your current skincare routine.
                    </p>
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
