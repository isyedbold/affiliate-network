"use client";

import Link from "next/link";
import { ArrowRight, Linkedin, Instagram, Twitter, Music2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "X", href: "#", icon: Twitter },
  { name: "TikTok", href: "#", icon: Music2 },
];

const policyLinks = [
    { name: "Privacy policy", href: "/privacy-policy"},
    { name: "Cookies policy", href: "/about/cookies-policy"}
];

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 flex items-center justify-start pointer-events-none"
      >
        <p className="font-black text-gray-800 leading-[0.7] select-none text-[24rem] sm:text-[38rem] -translate-x-[10%] opacity-70 whitespace-nowrap">
          Refylo
        </p>
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 sm:px-10 xl:px-16 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 mb-16 lg:mb-20">
          <nav>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://form.typeform.com/to/Q4SQ8DCQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-5xl lg:text-6xl font-black hover:text-opacity-80 transition-opacity duration-300"
                >
                  Partner With Refylo
                </Link>
              </li>
            </ul>
            <ul className="mt-4">
              <li>
                <Link href="/help" className="text-5xl lg:text-6xl font-black hover:text-opacity-80 transition-opacity duration-300">
                  I Need Help
                </Link>
              </li>
              <li className="pt-6">
                <button 
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#CCFF00] text-black font-bold text-base hover:bg-yellow-200 transition-colors"
                >
                  Join the Team
                </button>
              </li>
            </ul>
          </nav>

          <div className="lg:max-w-md lg:justify-self-end w-full">
            <h3 className="text-xl font-medium">Subscribe to our newsletter</h3>
            <form className="mt-6 flex">
              <label htmlFor="footer-email" className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                id="footer-email"
                name="email"
                placeholder="email@address.com"
                className="w-full h-14 bg-gray-800 text-white placeholder:text-gray-400 px-6 rounded-l-md border-0 focus:ring-2 focus:ring-inset focus:ring-[#CCFF00] transition-all text-base font-medium"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="w-14 h-14 bg-[#CCFF00] text-black flex-shrink-0 flex items-center justify-center rounded-r-md hover:opacity-90 transition-opacity"
              >
                <ArrowRight size={24} strokeWidth={3}/>
              </button>
            </form>
            <div className="flex items-center mt-6 space-x-3">
              <Checkbox id="terms" className="size-4 rounded-[2px] border-white data-[state=checked]:bg-white data-[state=checked]:text-black focus-visible:ring-[#CCFF00]" />
              <Label htmlFor="terms" className="text-xs text-gray-400 font-normal cursor-pointer">
                I agree to receiving communications from Refylo.*
              </Label>
            </div>
            <div className="mt-12">
              <button 
                className="inline-block bg-[#CCFF00] text-black font-medium text-lg px-8 py-4 cursor-pointer"
              >
                Start Now
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 mt-8">
            <div>
                <div className="flex items-center gap-2">
                    {socialLinks.map((social) => (
                        <button key={social.name} aria-label={social.name}
                            className="bg-gray-800 p-3 rounded-md inline-block hover:opacity-80 transition-opacity">
                            <social.icon className="h-5 w-5" />
                        </button>
                    ))}
                </div>
            </div>

            <div className="text-xs text-gray-400 lg:max-w-md">
                 <p className="mb-4">
                    Copyright © 2023-2025. Refylo Group is a division of BoldMoon LLC. The name Refylo, the Refylo logo and all associated domain names are registered trademarks of Refylo Group and BoldMoon LLC. All rights reserved.
                 </p>
                 <div className="flex items-center gap-6">
                    {policyLinks.map((link) => (
                        <Link href={link.href} key={link.name} className="hover:text-white transition-colors">
                            {link.name}
                        </Link>
                    ))}
                 </div>
            </div>
        </div>
      </div>
    </footer>
  );
}