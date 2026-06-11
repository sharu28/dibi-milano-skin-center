import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { trainingWhatsAppUrl } from '../data/contact';

interface Course {
  name: string;
  description: string;
  duration: string;
  price: string;
}

interface CourseGroup {
  title: string;
  subtitle: string;
  courses: Course[];
}

const courseGroups: CourseGroup[] = [
  {
    title: 'Professional Certifications',
    subtitle:
      'Structured, assessment-based programmes that build the clinical foundation for a career in advanced aesthetics.',
    courses: [
      {
        name: 'Foundation Skin Science Certification',
        description:
          'A comprehensive grounding in skin anatomy, the science of skin health, and professional consultation. The essential starting point for advanced practice.',
        duration: '6 weeks',
        price: '95,000+ LKR',
      },
      {
        name: 'Laser Safety & Operation Certification',
        description:
          'Certified training in laser physics, safety protocols, and supervised hands-on operation for hair removal and skin treatments.',
        duration: '4 days',
        price: '75,000+ LKR',
      },
      {
        name: 'Microblading & Semi-Permanent Makeup',
        description:
          'Brow mapping, pigment theory, and microblading technique with live-model practice and aftercare protocols.',
        duration: '5 days',
        price: '120,000+ LKR',
      },
    ],
  },
  {
    title: 'Masterclasses & Workshops',
    subtitle:
      'Focused, hands-on sessions to add a specific in-demand skill to your existing practice.',
    courses: [
      {
        name: 'Advanced Chemical Peels Masterclass',
        description:
          'Master the application of enzymatic, AHA/BHA, and clinical-grade peels for pigmentation, acne, and rejuvenation.',
        duration: '3 days',
        price: '65,000+ LKR',
      },
      {
        name: 'Dermaplaning & Microdermabrasion Workshop',
        description:
          'Hands-on technique training in physical exfoliation methods for instant, visible results.',
        duration: '2 days',
        price: '40,000+ LKR',
      },
      {
        name: 'Injectables Fundamentals',
        description:
          'For doctors and nurses: anti-wrinkle and dermal filler theory, facial anatomy, and supervised practical training. Medical qualification required.',
        duration: '3 days',
        price: '150,000+ LKR',
      },
    ],
  },
];

const faqs: { question: string; answer: string }[] = [
  {
    question: 'Who are these courses for?',
    answer:
      'Our certifications are designed for aspiring and practising aestheticians, beauty therapists, and medical professionals looking to expand their clinical skill set. Medical-only modules require a relevant qualification or licence.',
  },
  {
    question: 'Do I receive a certificate?',
    answer:
      'Yes. Every course concludes with a DIBI Milano Academy certificate of completion, awarded on successful assessment.',
  },
  {
    question: 'Are there prerequisites?',
    answer:
      'Foundation courses have no prerequisites. Advanced and medical modules require prior certification or a relevant medical licence.',
  },
  {
    question: 'How do I enrol?',
    answer:
      'Message us on WhatsApp or call the centre to check upcoming intake dates and reserve your place. Class sizes are limited to ensure hands-on attention.',
  },
  {
    question: 'Important Information',
    answer:
      'Course fees are subject to 18% VAT. Schedules and pricing may vary by intake.',
  },
];

export default function Training() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F9F7]">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
            alt="DIBI Milano Academy training"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-[0.15em] uppercase mb-6"
          >
            DIBI Milano Academy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg md:text-xl text-white/90 font-serif italic max-w-2xl mx-auto"
          >
            Professional training in advanced skin science and aesthetics.
          </motion.p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-semibold tracking-[0.3em] text-gray-400 uppercase mb-8">
            Learn From the Best
          </h2>
          <p className="text-xl md:text-3xl font-serif text-gray-800 leading-relaxed">
            The DIBI Milano Academy brings the rigour of our clinic into the classroom. Our
            programmes pair the science of skin health with hands-on, mentor-led practice, so you
            graduate ready to deliver results with confidence and care.
          </p>
        </div>
      </section>

      {/* Course Groups */}
      {courseGroups.map((group, index) => {
        const isEven = index % 2 === 0;
        return (
          <section
            key={group.title}
            className={`py-16 md:py-24 ${isEven ? 'bg-[#F9F9F7]' : 'bg-white'}`}
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-light tracking-[0.15em] text-gray-900 uppercase mb-6">
                  {group.title}
                </h2>
                <p className="text-lg font-serif text-gray-600 max-w-2xl mx-auto">
                  {group.subtitle}
                </p>
              </div>

              <div className="space-y-6">
                {group.courses.map((course) => (
                  <div
                    key={course.name}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-gray-200 pb-4 group"
                  >
                    <div className="flex-1 pr-4">
                      <h4 className="text-lg md:text-xl font-medium tracking-wide text-gray-900 group-hover:text-[#D4C5B9] transition-colors">
                        {course.name}
                      </h4>
                      <p className="text-sm font-serif text-gray-500 mt-1 italic">
                        {course.description}
                      </p>
                      <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mt-2">
                        {course.duration}
                      </p>
                    </div>
                    <div className="mt-2 sm:mt-0 whitespace-nowrap">
                      <span className="text-lg font-mono text-gray-900 tracking-tight">
                        {course.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* FAQs Accordion */}
      <section className="py-24 bg-[#F9F9F7]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light tracking-[0.15em] text-gray-900 uppercase mb-12 text-center">
            Enrolment Details
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, faqIndex) => (
              <div key={faqIndex} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => setOpenFaq(openFaq === faqIndex ? null : faqIndex)}
                  className="w-full flex justify-between items-center py-4 text-left focus:outline-none group"
                >
                  <span className="text-sm font-semibold tracking-[0.15em] uppercase text-gray-900 group-hover:text-[#D4C5B9] transition-colors">
                    {faq.question}
                  </span>
                  {openFaq === faqIndex ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === faqIndex ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-4 text-base font-serif text-gray-600 leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrolment CTA */}
      <section className="py-32 bg-white text-center px-4">
        <h2 className="text-3xl md:text-4xl font-light tracking-[0.15em] text-gray-900 uppercase mb-6">
          Begin Your Career
        </h2>
        <p className="text-lg font-serif text-gray-600 mb-10 max-w-2xl mx-auto">
          Reserve your place in an upcoming intake, or message us to find the course that's right
          for you.
        </p>
        <a
          href={trainingWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-5 bg-[#1A1A1A] text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#D4C5B9] transition-all duration-300"
        >
          Enquire about Enrolment
        </a>
      </section>
    </div>
  );
}
