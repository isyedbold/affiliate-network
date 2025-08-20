"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/sections/footer";

const faqs = [
  {
    id: "q1",
    question: "What is the core mission of your agency?",
    answer: "We are dedicated to crafting transformative digital experiences that bridge the gap between brands and their audiences through innovative design, strategic thinking, and cutting-edge technology."
  },
  {
    id: "q2", 
    question: "How do you approach new client relationships?",
    answer: "Every relationship begins with deep discovery. We invest time understanding your brand essence, market position, and long-term objectives before proposing any solutions. This ensures alignment and sets the foundation for lasting partnership."
  },
  {
    id: "q3",
    question: "What digital services do you offer?",
    answer: "Our comprehensive service portfolio includes brand strategy, visual identity design, web development, mobile applications, e-commerce solutions, digital marketing campaigns, and data-driven insights."
  },
  {
    id: "q4",
    question: "Can you handle enterprise-level projects?",
    answer: "Absolutely. Our team has extensive experience managing large-scale projects for Fortune 500 companies, handling complex requirements, multi-regional campaigns, and rigorous compliance standards."
  },
  {
    id: "q5",
    question: "What is your typical project timeline?",
    answer: "Timelines vary based on scope and complexity. Brand strategies typically run 4-6 weeks, while full digital platforms can span 3-6 months. We provide detailed project roadmaps during our initial planning phase."
  },
  {
    id: "q6",
    question: "How do you measure project success?",
    answer: "Success is measured through clearly defined KPIs established at project inception. These may include user engagement metrics, conversion rates, brand awareness improvements, or direct revenue impact."
  },
  {
    id: "q7",
    question: "Do you work with startups?",
    answer: "We partner with ambitious startups across all development stages. From pre-seed companies needing MVPs to unicorns requiring comprehensive digital transformations, we tailor our approach to your growth phase."
  },
  {
    id: "q8",
    question: "What technologies do you specialize in?",
    answer: "Our technical expertise spans modern frameworks like React, Next.js, Vue, and Laravel. We also work with mobile technologies including React Native and native iOS/Android development when required."
  },
  {
    id: "q9",
    question: "How do you ensure brand consistency?",
    answer: "We develop comprehensive brand guidelines that encapsulate your visual identity, voice, and values. These serve as living documents that ensure consistency across all digital touchpoints and campaigns."
  },
  {
    id: "q10",
    question: "Can you handle ongoing maintenance and support?",
    answer: "Yes, we offer dedicated support packages including proactive monitoring, security updates, content updates, and performance optimization to ensure your digital properties continually deliver value."
  },
  {
    id: "q11",
    question: "What is your pricing structure?",
    answer: "We offer flexible pricing models including project-based, retainer, and performance-based contracts depending on your needs and project scope. All pricing is transparent and discussed upfront."
  },
  {
    id: "q12",
    question: "How do we get started?",
    answer: "Getting started is simple. Reach out through our contact form, email, or call us directly. We'll schedule an initial consultation to understand your needs and determine if we're the right fit for your goals."
  }
];

const AccordionItem = ({ 
  question, 
  answer, 
  isOpen, 
  onToggle 
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-6 text-left"
    >
      <h3 className="text-lg font-medium text-black pr-8">
        {question}
      </h3>
      <div className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
        <svg 
          className="w-6 h-6 text-black" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
          />
        </svg>
      </div>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64 pb-6' : 'max-h-0'}`}>
      <p className="text-base text-gray-600">
        {answer}
      </p>
    </div>
  </div>
);

const Navigation = () => (
  <nav className="border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <Link href="/" className="text-xl font-bold text-black">
          AGENCY
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/work" className="text-base text-black hover:text-gray-600 transition-colors">
            Work
          </Link>
          <Link href="/about" className="text-base text-black hover:text-gray-600 transition-colors">
            About
          </Link>
          <Link href="/services" className="text-base text-black hover:text-gray-600 transition-colors">
            Services
          </Link>
          <Link href="/contact" className="text-base text-black hover:text-gray-600 transition-colors">
            Contact
          </Link>
        </div>
        <button
          className="px-4 py-2 bg-[#CCFF00] text-black font-medium hover:bg-yellow-100 transition-colors cursor-pointer"
        >
          Let&apos;s Talk
        </button>
      </div>
    </div>
  </nav>
);

export default function FAQPage() {
  const [openStates, setOpenStates] = useState<{[key: string]: boolean}>({});
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAccordion = (id: string) => {
    setOpenStates(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <div id="faq-top"></div>
        
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-5xl md:text-7xl font-black text-black mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get answers to common questions about our services, processes, and how we can help transform your digital presence.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="divide-y divide-gray-200">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openStates[faq.id]}
                  onToggle={() => toggleAccordion(faq.id)}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="faq-cta" className="bg-black py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mx-auto mb-8">
                <div className="flex flex-col sm:flex-row gap-[12px] justify-center">
                  <button
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#CCFF00] text-black font-bold text-base hover:bg-yellow-200 transition-colors"
                    role="button"
                  >
                    Join Community
                  </button>
                  <button
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#CCFF00] text-black font-bold text-base hover:bg-yellow-200 transition-colors cursor-pointer"
                  >
                    Get Started
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  href="/help"
                  className="text-white underline hover:text-gray-300 transition-colors"
                  aria-label="Get help"
                >
                  I need help
                </Link>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-white underline hover:text-gray-300 transition-colors bg-transparent border-0 cursor-pointer"
                  aria-label="Back to top"
                >
                  Back to top
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-black text-white shadow-lg hover:bg-gray-800 transition-colors"
          aria-label="Back to top"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      )}
    </div>
  );
}