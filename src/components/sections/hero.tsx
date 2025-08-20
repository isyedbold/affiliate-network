"use client";

import Image from "next/image";
import Link from "next/link";

const cubeImages = [
"https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/next-340121-51e281669cfd95baab1b9a640c2f2745e1f1cdf9-560x560.jpg?",
"https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/next-047467-e455e1cfd2b510a4552fdec01a869a36fb481aed-4167x4167.jpg?",
"https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/next-161980-ad3adf431502ba0c535affe3a94c1ab837da96ea-560x560.png?",
"https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/next-146690-6e88a6055ca2c8f81680a0552c83bd74f7701354-4167x4167.jpg?",
"https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/next-210104-6ec9d185e803d6ac248ab033161d494efa0f9548-4167x4167.jpg?",
"https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/next-129551-d85c647511945162568fd66cb393f873125ce557-4167x4167.jpg?"];


const faceTransforms = [
"rotateY(0deg) translateZ(var(--translate-z))", // front
"rotateY(180deg) translateZ(var(--translate-z))", // back
"rotateY(90deg) translateZ(var(--translate-z))", // right
"rotateY(-90deg) translateZ(var(--translate-z))", // left
"rotateX(90deg) translateZ(var(--translate-z))", // top
"rotateX(-90deg) translateZ(var(--translate-z))" // bottom
];

const HeroSection = () => {
  return (
    <>
      <style jsx global>{`
        @keyframes spin-outer {
          0% { transform: rotateY(0deg) rotateX(10deg); }
          100% { transform: rotateY(360deg) rotateX(10deg); }
        }

        @keyframes spin-inner {
          0% { transform: rotateY(0deg) rotateX(-20deg); }
          100% { transform: rotateY(-360deg) rotateX(-20deg); }
        }
        
        .animate-spin-outer {
          animation: spin-outer 25s infinite linear;
        }
        
        .animate-spin-inner {
          animation: spin-inner 25s infinite linear;
        }

        .cube-container {
          --cube-size: 250px;
          --translate-z: 125px;
        }

        @media (min-width: 768px) {
          .cube-container {
            --cube-size: 300px;
            --translate-z: 150px;
          }
        }

        @media (min-width: 1024px) {
          .cube-container {
            --cube-size: 350px;
            --translate-z: 175px;
          }
        }
        
        @media (min-width: 1280px) {
          .cube-container {
            --cube-size: 400px;
            --translate-z: 200px;
          }
        }
      `}</style>
      <section className="bg-pure-white text-primary-black overflow-hidden">
        <div className="mx-auto max-w-[90rem] px-4 md:px-10 py-16 md:py-32 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 gap-y-20 items-center">
            <div className="text-left !font-normal">
              {/* Promotional Button */}
              <Link
                href="https://form.typeform.com/to/Q4SQ8DCQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-white bg-black rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300">

                <span className="px-2 py-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-full text-xs font-bold">
                  New
                </span>
                Start Your Promotion
              </Link>
              
              <h1 className="text-[clamp(3.5rem,9vw,5.5rem)] leading-[0.9] tracking-[-0.04em] !whitespace-pre-line !italic !font-bold !not-italic">
                Performance Partner Network That<br />
                Maximizes Your{"\n"}
                Traffic
              </h1>
              <h2 className="mt-8 text-[clamp(1.5rem,4vw,2rem)] leading-tight max-w-lg !font-normal">
                We connect experienced media buyers with high‑payout, verified offers. Real‑time tracking, fraud protection, and fast payouts powered by enterprise‑grade platforms.
              </h2>
              <div className="mt-10">
                <div className="flex flex-wrap gap-4 items-center">
                  <button
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-[#CCFF00] hover:bg-[#CCFF00]/80 transition-colors duration-300 border-0 cursor-pointer">
                    Start Now
                  </button>
                  <button
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-black hover:bg-gray-800 transition-colors duration-300">
                    Sign In
                  </button>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center min-h-[300px] lg:min-h-[500px]">
              <div className="cube-container" style={{ perspective: '2000px' }}>
                <div className="animate-spin-outer" style={{ transformStyle: 'preserve-3d' }}>
                  <div
                    className="animate-spin-inner relative"
                    style={{
                      width: 'var(--cube-size)',
                      height: 'var(--cube-size)',
                      transformStyle: 'preserve-3d'
                    }}>

                    {[...Array(6)].map((_, i) =>
                    <div
                      key={i}
                      className="absolute w-full h-full flex items-center justify-center bg-white"
                      style={{ transform: faceTransforms[i] }}>

                        <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1755601324861-b36jheb14s8.png"
                        alt="Black and White Diamond Geometric Pattern"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                        priority={i < 3} />

                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>);

};

export default HeroSection;