import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const PromiseSection = () => {
  return (
    <section className="bg-pure-white text-primary-black py-24 sm:py-32">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <div className="flex justify-center lg:justify-start items-center lg:pt-10">
            <div className="transform-gpu -rotate-[15deg]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1753833447986-3ox2ci9m6mc.png"
                alt="Custom black logo with white geometric design"
                width={560}
                height={560}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto" />

            </div>
          </div>

          <div className="text-left">
            <p className="text-sm font-medium tracking-[0.2em] uppercase mb-6 text-primary-black !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">[OUR COMMITMENT]

            </p>
            <h3 className="font-black leading-none tracking-tight text-[3rem] sm:text-5xl lg:text-6xl !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">Why Refylo Exists

            </h3>
            <div className="mt-8 space-y-6 text-xl md:text-2xl font-medium text-primary-black">
              <p className="leading-snug !whitespace-pre-line !text-xl !whitespace-pre-line">We're the platform that connects advertisers and affiliates worldwide.

              </p>
              <p className="leading-snug !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !text-xl !whitespace-pre-line">Simple onboarding, reliable tracking, and payouts you can count on.

              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-12">
              <button
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary-black border border-primary-black bg-transparent hover:bg-black hover:text-white transition-colors duration-300">
                <span className="!whitespace-pre-line">For  Advertisers</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary-black border border-primary-black bg-transparent hover:bg-black hover:text-white transition-colors duration-300">
                <span className="!whitespace-pre-line">For Affiliates</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default PromiseSection;