'use client';

import { useState, useEffect } from 'react';
import { FaCookie } from 'react-icons/fa';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    
    // Initialize Google Analytics or other tracking here if needed
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
    
    // Disable tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50 animate-slide-up">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          <FaCookie className="text-yellow-400 text-2xl flex-shrink-0 mt-1" />
          <div className="text-sm">
            <p className="mb-2">
              We use cookies to enhance your experience, serve personalized ads, and analyze our traffic. 
              By clicking Accept All, you consent to our use of cookies.
            </p>
            <a 
              href="/privacy" 
              className="text-blue-400 hover:text-blue-300 underline text-xs"
            >
              Learn more in our Privacy Policy
            </a>
          </div>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}

