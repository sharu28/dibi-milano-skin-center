import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { services, Service as ServiceType } from '../data/services';

export default function Service() {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<ServiceType | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Find service
    const foundService = services.find(s => s.slug === slug);
    if (foundService) {
      setService(foundService);
    }
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9F9F7]">
        <div className="text-center">
          <h2 className="text-2xl font-light tracking-widest uppercase mb-4">Service Not Found</h2>
          <Link to="/" className="text-sm font-medium tracking-widest text-gray-900 hover:text-[#D4C5B9] transition-colors uppercase border-b border-gray-900 pb-1">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F9F7]">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={service.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-[0.15em] uppercase mb-6"
          >
            {service.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/90 font-serif italic max-w-2xl mx-auto"
          >
            {service.shortDescription}
          </motion.p>
        </div>
      </section>

      {/* Dynamic Sections */}
      <div className="bg-white">
        {service.sections.map((section, index) => {
          const isEven = index % 2 === 0;
          
          if (section.layout === 'full') {
            return (
              <section key={index} className="py-24 px-4 max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-light tracking-[0.15em] text-gray-900 uppercase mb-8">
                  {section.title}
                </h2>
                <div className="text-lg font-serif text-gray-600 leading-relaxed">
                  {Array.isArray(section.content) ? (
                    section.content.map((p, i) => <p key={i} className="mb-4">{p}</p>)
                  ) : (
                    <p>{section.content}</p>
                  )}
                </div>
              </section>
            );
          }

          if (section.layout === 'split-left-image' || section.layout === 'split-right-image') {
            const isLeftImage = section.layout === 'split-left-image';
            return (
              <section key={index} className={`py-16 md:py-24 ${!isEven ? 'bg-[#F9F9F7]' : 'bg-white'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className={`order-1 ${isLeftImage ? 'lg:order-1' : 'lg:order-2'}`}>
                      {section.image && (
                        <div className="aspect-[4/5] md:aspect-square overflow-hidden bg-gray-100">
                          <img 
                            src={section.image} 
                            alt={section.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                    <div className={`order-2 ${isLeftImage ? 'lg:order-2' : 'lg:order-1'}`}>
                      {section.subtitle && (
                        <h3 className="text-xs font-semibold tracking-[0.3em] text-gray-400 uppercase mb-4">
                          {section.subtitle}
                        </h3>
                      )}
                      <h2 className="text-3xl md:text-4xl font-light tracking-[0.15em] text-gray-900 uppercase mb-8">
                        {section.title}
                      </h2>
                      <div className="text-lg font-serif text-gray-600 leading-relaxed space-y-4">
                        {Array.isArray(section.content) ? (
                          section.content.map((p, i) => <p key={i}>{p}</p>)
                        ) : (
                          <p>{section.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          }

          if (section.layout === 'split-text') {
            return (
              <section key={index} className={`py-16 md:py-24 ${!isEven ? 'bg-[#F9F9F7]' : 'bg-white'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-light tracking-[0.15em] text-gray-900 uppercase mb-8">
                        {section.title}
                      </h2>
                    </div>
                    <div>
                      {section.subtitle && (
                        <h3 className="text-xs font-semibold tracking-[0.3em] text-gray-400 uppercase mb-6">
                          {section.subtitle}
                        </h3>
                      )}
                      <div className="text-lg font-serif text-gray-600 leading-relaxed space-y-4">
                        {Array.isArray(section.content) ? (
                          section.content.map((p, i) => <p key={i}>{p}</p>)
                        ) : (
                          <p>{section.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          }

          if (section.layout === 'menu') {
            return (
              <section key={index} className={`py-16 md:py-24 ${!isEven ? 'bg-[#F9F9F7]' : 'bg-white'}`}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light tracking-[0.15em] text-gray-900 uppercase mb-6">
                      {section.title}
                    </h2>
                    {section.subtitle && (
                      <p className="text-lg font-serif text-gray-600 max-w-2xl mx-auto">
                        {section.subtitle}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-6">
                    {section.items?.map((item, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-gray-200 pb-4 group">
                        <div className="flex-1 pr-4">
                          <h4 className="text-lg md:text-xl font-medium tracking-wide text-gray-900 group-hover:text-[#D4C5B9] transition-colors">
                            {item.name}
                          </h4>
                          {item.description && (
                            <p className="text-sm font-serif text-gray-500 mt-1 italic">
                              {item.description}
                            </p>
                          )}
                        </div>
                        <div className="mt-2 sm:mt-0 whitespace-nowrap">
                          <span className="text-lg font-mono text-gray-900 tracking-tight">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          return null;
        })}
      </div>

      {/* FAQs / Details Accordion */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-24 bg-[#F9F9F7]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.15em] text-gray-900 uppercase mb-12 text-center">
              Treatment Details
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex justify-between items-center py-4 text-left focus:outline-none group"
                  >
                    <span className="text-sm font-semibold tracking-[0.15em] uppercase text-gray-900 group-hover:text-[#D4C5B9] transition-colors">
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pb-4 text-base font-serif text-gray-600 leading-relaxed">
                      {Array.isArray(faq.answer) ? (
                        faq.answer.map((p, i) => <p key={i} className="mb-2">{p}</p>)
                      ) : (
                        <p className="whitespace-pre-line">{faq.answer}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Booking CTA */}
      <section className="py-32 bg-white text-center px-4">
        <h2 className="text-3xl md:text-4xl font-light tracking-[0.15em] text-gray-900 uppercase mb-6">
          Ready for Radiant Skin?
        </h2>
        <p className="text-lg font-serif text-gray-600 mb-10 max-w-2xl mx-auto">
          Book your {service.name} treatment today and take the first step towards your skin goals.
        </p>
        <a 
          href={service.bookingLink} 
          className="inline-flex items-center justify-center px-10 py-5 bg-[#1A1A1A] text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#D4C5B9] transition-all duration-300"
        >
          Book Now
        </a>
      </section>
    </div>
  );
}
