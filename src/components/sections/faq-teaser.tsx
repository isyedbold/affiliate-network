"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem = ({ item, isOpen, onToggle }: AccordionItemProps) => {
  return (
    <div className="border-b border-[#E5E5E5] last:border-0">
      <button
        className="flex w-full items-center justify-between py-6 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        <h3 className="font-['Urbanist'] font-semibold text-lg text-[#000000]">
          {item.question}
        </h3>
        <div className="ml-4 shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-[#000000]" />
          ) : (
            <ChevronDown className="h-5 w-5 text-[#000000]" />
          )}
        </div>
      </button>
      <div
        id={`faq-answer-${item.id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="font-['Urbanist'] text-base text-[#666666] leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export default function FaqTeaser() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqData: FAQItem[] = [
    {
      id: "1",
      question: "What services does your agency offer?",
      answer:
        "We offer comprehensive brand strategy, creative design, digital marketing, brand activation, and campaign development services across both traditional and digital channels."
    },
    {
      id: "2",
      question: "How do you approach new client projects?",
      answer:
        "We start with an in-depth discovery phase to understand your brand, objectives, and market position. Then we develop a tailored strategy and creative approach based on your specific needs."
    },
    {
      id: "3",
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on scope and complexity. Brand strategy projects typically take 4-6 weeks, while full campaign development can take 8-12 weeks. We'll provide a detailed timeline during our initial consultations."
    },
    {
      id: "4",
      question: "Do you work with businesses of all sizes?",
      answer:
        "Yes, we partner with startups, growing businesses, and established enterprises. We tailor our approach and solutions to fit your specific needs and budget."
    }
  ];

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq-teaser" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-['Urbanist'] font-black text-6xl text-[#000000] mb-4">
            FAQs
          </h2>
          <p className="font-['Urbanist'] text-lg text-[#666666] mb-12">
            Have questions? We've got answers.
          </p>
        </div>

        <div className="space-y-0 bg-white rounded-2xl overflow-hidden border border-[#E5E5E5] shadow-sm">
          {faqData.slice(0, 4).map(item => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openItems.includes(item.id)}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[#CCFF00] text-[#000000] font-medium px-8 py-3 rounded-full hover:bg-[#B8E700] transition-colors duration-200">
            See all FAQs
          </button>
        </div>
      </div>
    </section>
  );
}