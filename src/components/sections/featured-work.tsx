"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Slide {
  id: number;
  href: string;
  imageSrc: string;
  title: React.ReactNode;
  subtitle?: string;
  description: string;
  tags: string[];
  titleClassName: string;
}

const slidesData: Slide[] = [
{
  id: 0,
  href: "#",
  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1755599179663-ozz34eyj10e.png",
  title: "Quality Offers Only",
  description: "Vetted CPL/CPA/RevShare across top verticals",
  tags: [],
  titleClassName:
  "text-7xl sm:text-8xl md:text-[100px] xl:text-[120px] leading-[0.9]"
},
{
  id: 1,
  href: "/work/cubic3",
  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1755597966607-lp7tg8ejf0r.png",
  title:
  <>
        Cubic
        <sup className="text-[0.6em] -top-[0.4em]">3</sup>
      </>,

  description: "Net-7 Standard, Faster Tiers For Consistent Partners",
  tags: [],
  titleClassName:
  "text-7xl sm:text-8xl md:text-[140px] xl:text-[150px] leading-[0.8]"
},
{
  id: 2,
  href: "/work/mahindra-ev",
  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1755598152570-p9nofyx3h5e.png",
  title: "",
  subtitle: "Transparent Terms",
  description: "No Hidden Logics. Clear Rules, Clear Reporting",
  tags: [],
  titleClassName:
  "text-7xl sm:text-8xl md:text-[120px] xl:text-[130px] leading-[0.9]"
},
{
  id: 3,
  href: "/work/intralinks",
  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1755598201693-kvzy0yvfd2.png",
  title: "",
  subtitle: "Enterprise Tracking",
  description: "Link & Postback Accuracy With Anti-Fraud Layered In",
  tags: [],
  titleClassName:
  "text-7xl sm:text-8xl md:text-[120px] xl:text-[130px] leading-[0.9]"
}];


const FeaturedWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-loop effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-primary-black text-pure-white w-full overflow-hidden">
      <div className="relative h-[80vh] min-h-[550px] md:min-h-[650px] max-h-[850px]">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>

          {slidesData.map((slide) =>
          <div
            key={slide.id}
            className="relative h-full w-full flex-shrink-0">

              <Link
              href={slide.href}
              className="block h-full w-full group"
              aria-label={`View project: ${slide.subtitle || ""} ${slide.title}`}>

                <Image
                src={slide.imageSrc}
                alt={``}
                fill
                className="object-cover"
                priority={slide.id === 0}
                quality={85} />

                <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50" />
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-12 md:p-20 xl:p-24">
                  <div className="max-w-5xl">
                    {slide.subtitle &&
                  <h3 className="font-medium text-4xl sm:text-5xl md:text-6xl mb-1 md:mb-2 !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">
                        {slide.subtitle}
                      </h3>
                  }
                    <h2
                    className="!whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">

                      {slide.title}
                    </h2>
                    <p className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-[28px] md:leading-tight max-w-xl font-light !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">
                      {slide.description}
                    </p>
                    {slide.tags.length > 0 &&
                  <div className="mt-6 sm:mt-8 flex flex-wrap gap-x-2 gap-y-2">
                        {slide.tags.map((tag) =>
                    <span
                      key={tag}
                      className="border border-white/50 rounded-full px-4 py-[3px] text-xs sm:text-sm tracking-widest uppercase font-medium">

                            {tag}
                          </span>
                    )}
                      </div>
                  }
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>

        <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col space-y-5 z-20">
          {slidesData.map((_, index) =>
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="group"
            aria-label={`Go to slide ${index + 1}`}>

              <span
              className={cn(
                "block w-[9px] h-[9px] transition-all duration-300",
                currentIndex === index ?
                "bg-accent-yellow scale-110" :
                "bg-transparent border border-neutral-500 group-hover:border-pure-white"
              )} />

            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;