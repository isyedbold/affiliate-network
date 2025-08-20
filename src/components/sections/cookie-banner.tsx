"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("dusted_cookie_consent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAction = (consentValue: "accepted" | "declined") => {
        localStorage.setItem("dusted_cookie_consent", consentValue);
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div
            className="fixed bottom-0 left-0 right-0 w-full bg-gray-800 text-white z-[100]"
            role="dialog"
            aria-live="polite"
            aria-label="Cookie consent banner"
        >
            <div className="container mx-auto px-5 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-y-3 lg:gap-x-8 py-3">
                    <p className="text-sm font-normal text-center lg:text-left">
                        We use cookies to help improve your experience on our site.{" "}
                        <Link 
                            href="/about/cookies-policy" 
                            className="underline whitespace-nowrap hover:text-[#CCFF00] transition-colors duration-300"
                        >
                            View our cookies policy
                        </Link>
                    </p>
                    <div className="flex items-center gap-x-3 flex-shrink-0">
                        <button
                            onClick={() => handleAction('accepted')}
                            className="px-5 py-1.5 text-sm font-normal border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                        >
                            Accept
                        </button>
                        <button
                            onClick={() => handleAction('declined')}
                             className="px-5 py-1.5 text-sm font-normal border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                        >
                            Decline
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;