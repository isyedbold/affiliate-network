"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useRef, useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type InsightCardProps = {
  imageSrc: string
  alt: string
  title: string
  description: string
  readTime: string
  link: string
}

const insightsData: InsightCardProps[] = [
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1755656249107-omm6q85i33t.jpg",
    alt: "Abstract purple geometric pattern with intersecting lines and shapes creating a dynamic visual texture.",
    title: "The new rules of contemporary logo design.",
    description: "Once a stamp of ownership, now a dynamic expression of identity. In a world of fluid interfaces and fast-moving feeds, leading brands are pushing the limits of logo design. What logos can do and how…",
    readTime: "6 min read",
    link: "https://dusted.com/insights/contemporary-logo-design"
  },
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1755656252053-iqsd8nq2d6q.jpg",
    alt: "Abstract red geometric pattern with interwoven angular shapes creating depth and movement.",
    title: "Introducing WAVE. The creative industry trends shaping brand & activation.",
    description: "Introducing WAVE: our new series tracking what's now and next in branding and activation. Each edition will explore a hot topic through the lens of emerging creative trends, the digital innovation…",
    readTime: "4 min read",
    link: "https://dusted.com/insights/creative-industry-trends"
  },
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1755656255922-9req0zi1pda.jpg",
    alt: "Vibrant blue and purple abstract geometric pattern with intersecting lines and shapes in multiple tones.",
    title: "Trust in fintech. The biggest differentiator in the age of AI.",
    description: "This month, London Tech Week and TNW shine a spotlight on the pace and promise of AI in the financial industry. But beneath the surface of innovation lies a fundamental truth: AI might move fast,…",
    readTime: "5 min read",
    link: "https://dusted.com/insights/trust-in-fintech"
  }
];

const InsightCard: React.FC<InsightCardProps> = ({ imageSrc, alt, title, description, readTime, link }) => (
  <div className="group block flex-shrink-0 w-[90vw] sm:w-[455px]">
    <div className="overflow-hidden">
      <Image
        src={imageSrc}
        alt={alt}
        width={455}
        height={481}
        className="w-full h-auto object-cover"
      />
    </div>
    <h3 className="text-3xl font-bold mt-6 text-primary-black">{title}</h3>
    <p className="text-lg text-medium-gray mt-4">{description.replace(/\n\n/g, ' ')}</p>
    <p className="text-base text-medium-gray mt-8">{readTime}</p>
  </div>
);

export default function InsightsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const checkButtons = useCallback(() => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollLeft = el.scrollLeft;
      const scrollWidth = el.scrollWidth;
      const clientWidth = el.clientWidth;
      setCanScrollPrev(scrollLeft > 0);
      setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 1); // -1 for floating point precision
    }
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      checkButtons();
      el.addEventListener("scroll", checkButtons, { passive: true });
      window.addEventListener("resize", checkButtons);
    }
    return () => {
      if (el) {
        el.removeEventListener("scroll", checkButtons);
        window.removeEventListener("resize", checkButtons);
      }
    };
  }, [checkButtons]);

  const scroll = (direction: "prev" | "next") => {
    const el = scrollContainerRef.current;
    if (el) {
      const card = el.querySelector("div");
      if (card) {
        const scrollAmount = card.offsetWidth + 24; // 24px is for gap-6
        el.scrollBy({ left: direction === "next" ? scrollAmount : -scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="bg-white text-primary-black py-16 md:py-24 lg:py-32 px-5 lg:px-[60px]">
      <div className="max-w-[1700px] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-sm text-medium-gray font-medium tracking-[0.2em] uppercase">[INSIGHTS]</p>
            <h2 className="text-5xl md:text-6xl font-black leading-[1.1] mt-2">News & views</h2>
          </div>
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scroll("prev")}
              disabled={!canScrollPrev}
              className="w-16 h-16 border rounded-full flex items-center justify-center transition-colors text-black border-black/20 disabled:text-gray-300 disabled:border-gray-200 disabled:cursor-not-allowed hover:bg-gray-50"
              aria-label="Previous insight"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("next")}
              disabled={!canScrollNext}
              className="w-16 h-16 border rounded-full flex items-center justify-center ml-2 transition-colors text-black border-black disabled:text-gray-300 disabled:border-gray-200 disabled:cursor-not-allowed hover:bg-gray-50"
              aria-label="Next insight"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scroll-smooth scrollbar-hide -mx-5 px-5 lg:-mx-[60px] lg:px-[60px]"
        >
          <div className="flex gap-6">
            {insightsData.map((insight, index) => (
              <InsightCard key={index} {...insight} />
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <button className="text-xl font-medium text-primary-black hover:underline">
            All insights
          </button>
        </div>
      </div>
    </section>
  );
}