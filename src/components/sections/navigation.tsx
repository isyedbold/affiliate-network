"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from 'next/navigation';

const navLinks = [
{ href: "/faq", label: "FAQ" },
{ href: "/success", label: "Community Wins" }];


const Navigation = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const HoverTag = () => {
    if (!hoveredLink || isMenuOpen) return null;
    return (
      <div className="hidden lg:block fixed top-6 left-6 bg-[#CCFF00] text-black px-3 py-1 text-sm font-bold z-50">
        {hoveredLink.toLowerCase()}
      </div>);

  };

  return (
    <>
      <HoverTag />
      <header
        className={`fixed top-0 left-0 right-0 z-40 bg-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-sm' : 'shadow-none'}`
        }>

        <div className="mx-auto flex h-24 max-w-[1728px] items-center justify-between px-6 md:px-10">
          <Link href="/" className="z-50 flex items-center gap-3" aria-label="Refylo home page">
            <div className="w-16 h-16 flex items-center justify-center">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1753832429312-bilk265un9f.png"
                alt="Refylo Logo"
                width={64}
                height={64}
                className="w-full h-full object-contain" />

            </div>
            <span className="text-2xl font-bold text-black">Refylo</span>
          </Link>

          <div className="hidden lg:flex items-center gap-4">
            <nav className="flex items-center gap-10">
              {navLinks.map((link) =>
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.label)}
                onMouseLeave={() => setHoveredLink(null)}
                className="text-base font-medium text-black tracking-wide hover:text-gray-600 transition-colors duration-200">

                  {link.label}
                </Link>
              )}
              <Link
                href="https://form.typeform.com/to/ZcmzC69L"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#CCFF00] text-black font-bold text-base hover:bg-yellow-200 transition-colors !whitespace-pre-line">For Advertisers


              </Link>
              <button
                className="inline-flex items-center justify-center px-8 py-4 bg-[#CCFF00] text-black text-base hover:bg-yellow-200 transition-colors mr-2 !whitespace-pre-line !font-bold !whitespace-pre-line">Apply as Affiliate


              </button>
            </nav>
            
            <div className="flex items-center gap-3" role="group" aria-label="Authentication actions">
              <button
                className="bg-black text-white font-medium text-base px-6 py-3 hover:bg-gray-800 transition-colors cursor-pointer">
                Sign In
              </button>
              <button
                className="bg-[#CCFF00] text-black font-medium text-base px-6 py-3 hover:bg-yellow-200 transition-colors cursor-pointer">
                Start Now
              </button>
            </div>
          </div>
          
          <button
            className="lg:hidden text-black z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}>

            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-30 bg-white lg:hidden transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`
        }>

        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) =>
            <Link
              key={link.href}
              href={link.href}
              className="text-4xl font-medium text-black"
              onClick={() => setIsMenuOpen(false)}>

                {link.label}
              </Link>
            )}
            <button
              className="inline-flex items-center justify-center px-8 py-4 bg-[#CCFF00] text-black font-bold text-lg hover:bg-yellow-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}>
              Create Affiliate Program
            </button>
            <button
              className="inline-flex items-center justify-center px-8 py-4 bg-[#CCFF00] text-black font-bold text-lg hover:bg-yellow-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}>
              Join the Team
            </button>
            <div className="flex flex-col gap-4 mt-12 space-y-4">
              <button
                className="bg-black text-white font-medium text-lg px-8 py-4 hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}>
                Sign In
              </button>
              <button
                className="bg-[#CCFF00] text-black font-medium text-lg px-8 py-4 hover:bg-yellow-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}>
                Start Now
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>);

};

export default Navigation;