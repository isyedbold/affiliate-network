"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const SiteLogo = () => (
  <div className="text-2xl font-black tracking-tight">
    <span className="text-white">NXT</span>
    <span className="text-[#CCFF00]">GEN</span>
  </div>
);

export const SignUpModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const updateUrl = useCallback((open: boolean) => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (open) {
        url.searchParams.set('signup', '1');
      } else {
        url.searchParams.delete('signup');
      }
      window.history.pushState({}, '', url.toString());
    }
  }, []);

  const openModal = useCallback(() => {
    setIsOpen(true);
    setAgreed(false);
    document.body.style.overflow = "hidden";
    updateUrl(true);
    
    // Focus first input after modal renders
    setTimeout(() => {
      firstInputRef.current?.focus();
    }, 100);
  }, [updateUrl]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
    updateUrl(false);
  }, [updateUrl]);

  const navigateToSignIn = useCallback(() => {
    closeModal();
    // Use setTimeout to allow modal to close before navigation
    setTimeout(() => {
      router.push('/sign-in');
    }, 100);
  }, [closeModal, router]);

  useEffect(() => {
    // @ts-ignore
    window.openSignUpModal = openModal;
    // @ts-ignore
    window.closeSignUpModal = closeModal;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openModal, closeModal, isOpen]);

  // Deep link support - check URL on mount
  useEffect(() => {
    const checkDeepLink = () => {
      const url = new URL(window.location.href);
      const hasSignupParam = url.searchParams.has('signup');
      const hasSignupHash = window.location.hash === '#signup';
      
      if (hasSignupParam || hasSignupHash) {
        openModal();
      }
    };

    checkDeepLink();

    // Listen for popstate events (back/forward navigation)
    const handlePopState = () => {
      const url = new URL(window.location.href);
      const hasSignupParam = url.searchParams.has('signup');
      setIsOpen(hasSignupParam);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [openModal]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="signup-title"
      aria-describedby="signup-description"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm transition-opacity duration-300"
      onClick={(e) => e.target === e.currentTarget && closeModal()}
    >
      <div className="relative w-full max-w-md mx-4 sm:mx-6 md:mx-8">
        <div className="relative bg-[#1A1A1A] rounded-xl p-6 sm:p-8 md:p-10 shadow-2xl border border-[#CCFF00]/20 max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <SiteLogo />
            <button
              onClick={closeModal}
              className="p-2 text-white hover:text-[#CCFF00] transition-colors rounded-lg hover:bg-white/10"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h1 id="signup-title" className="text-[2rem] sm:text-[2.5rem] font-black text-[#CCFF00] mb-3 leading-tight">
                Create your account
              </h1>
              <p id="signup-description" className="text-sm text-gray-300">
                Join thousands of creators already using our platform
              </p>
            </div>

            <form className="space-y-4">
              <input
                ref={firstInputRef}
                type="text"
                placeholder="Username"
                required
                className="w-full px-4 py-3 bg-black border border-[#666666] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#CCFF00] transition-colors"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  required
                  className="w-full px-4 py-3 bg-black border border-[#666666] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#CCFF00] transition-colors"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  required
                  className="w-full px-4 py-3 bg-black border border-[#666666] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#CCFF00] transition-colors"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 bg-black border border-[#666666] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#CCFF00] transition-colors"
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full px-4 py-3 bg-black border border-[#666666] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#CCFF00] transition-colors"
              />
              <input
                type="password"
                placeholder="Confirm password"
                required
                className="w-full px-4 py-3 bg-black border border-[#666666] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#CCFF00] transition-colors"
              />

              <div className="space-y-4">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 w-4 h-4 bg-black border-[#666666] text-[#CCFF00] focus:ring-[#CCFF00] rounded cursor-pointer"
                  />
                  <span className="text-sm text-gray-300">
                    I agree to{" "}
                    <a href="/terms" className="text-[#CCFF00] hover:underline">
                      terms
                    </a>
                    ,{" "}
                    <a href="/conditions" className="text-[#CCFF00] hover:underline">
                      conditions
                    </a>
                    , and{" "}
                    <a href="/privacy" className="text-[#CCFF00] hover:underline"
                    >
                      privacy policy
                    </a>
                  </span>
                </label>

                <div
                  id="recaptcha-slot"
                  className="w-full h-[74px] border border-[#666666] rounded-lg bg-black/50 flex items-center justify-center"
                >
                  <span className="text-sm text-[#666666]">reCAPTCHA</span>
                </div>

                <button
                  type="submit"
                  disabled={!agreed}
                  className="w-full py-3 bg-[#CCFF00] text-black font-bold rounded-lg hover:bg-[#CCFF00]/80 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-200 disabled:opacity-50"
                >
                  Create account
                </button>
              </div>
            </form>

            <p className="text-center text-sm">
              <button
                type="button"
                onClick={navigateToSignIn}
                className="text-[#CCFF00] hover:underline bg-transparent border-none cursor-pointer"
              >
                Already have an account
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;