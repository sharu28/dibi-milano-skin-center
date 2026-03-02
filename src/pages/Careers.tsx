import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';

export default function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F9F7]">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1974&auto=format&fit=crop"
            alt="DIBI Milano Team"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-[0.15em] uppercase mb-6"
          >
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/90 font-serif italic max-w-2xl mx-auto"
          >
            Build your career with the leaders in bespoke skin treatments and advanced aesthetics.
          </motion.p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-semibold tracking-[0.3em] text-gray-400 uppercase mb-8">
            Our Culture
          </h2>
          <p className="text-xl md:text-3xl font-serif text-gray-800 leading-relaxed">
            At DIBI Milano Skin Center, we are passionate about transforming lives through skin health. We are always looking for dedicated, talented professionals who share our commitment to excellence, continuous learning, and providing an unparalleled client experience.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-[#F9F9F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-[0.15em] text-gray-900 uppercase mb-6">
              Current Openings
            </h2>
            <p className="text-lg font-serif text-gray-600">
              We are currently accepting applications for the following roles.
            </p>
          </div>

          <div className="space-y-6">
            {/* Position 1 */}
            <div className="bg-white p-8 border border-gray-100 hover:border-[#D4C5B9] transition-colors group">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="text-xl font-medium tracking-wide text-gray-900 mb-2 group-hover:text-[#D4C5B9] transition-colors">
                    Senior Aesthetician
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-widest mb-4 md:mb-0">
                    Full-Time • Colombo
                  </p>
                </div>
                <a href="mailto:careers@dibimilano.com?subject=Application for Senior Aesthetician" className="inline-flex items-center text-xs font-semibold tracking-[0.2em] text-gray-900 uppercase hover:text-[#D4C5B9] transition-colors">
                  Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
              <p className="text-gray-600 font-serif mt-4 leading-relaxed">
                Seeking an experienced aesthetician with a deep understanding of advanced skin treatments, chemical peels, and laser therapies. Minimum 3 years of clinical experience required.
              </p>
            </div>

            {/* Position 2 */}
            <div className="bg-white p-8 border border-gray-100 hover:border-[#D4C5B9] transition-colors group">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="text-xl font-medium tracking-wide text-gray-900 mb-2 group-hover:text-[#D4C5B9] transition-colors">
                    Front Desk Coordinator
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-widest mb-4 md:mb-0">
                    Full-Time • Colombo
                  </p>
                </div>
                <a href="mailto:careers@dibimilano.com?subject=Application for Front Desk Coordinator" className="inline-flex items-center text-xs font-semibold tracking-[0.2em] text-gray-900 uppercase hover:text-[#D4C5B9] transition-colors">
                  Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
              <p className="text-gray-600 font-serif mt-4 leading-relaxed">
                The first point of contact for our clients. We are looking for a highly organized, impeccably presented individual with excellent communication skills and a passion for customer service.
              </p>
            </div>
          </div>

          {/* General Application */}
          <div className="mt-20 text-center bg-white p-12 border border-gray-100">
            <Mail className="w-8 h-8 text-[#D4C5B9] mx-auto mb-6" />
            <h3 className="text-2xl font-light tracking-[0.15em] text-gray-900 uppercase mb-4">
              Don't see your role?
            </h3>
            <p className="text-lg font-serif text-gray-600 mb-8 max-w-2xl mx-auto">
              We are always open to meeting exceptional talent. Send us your CV and a cover letter detailing how you can contribute to the DIBI Milano team.
            </p>
            <a 
              href="mailto:careers@dibimilano.com" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1A1A1A] text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#D4C5B9] transition-all duration-300"
            >
              Email Your CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
