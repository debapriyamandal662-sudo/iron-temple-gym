import React from 'react';
import { MessageCircle } from 'lucide-react';

/**
 * Floating WhatsApp CTA button fixed at bottom right.
 * Links directly to Anik Dada on WhatsApp.
 * Replace `9876543210` with the actual phone number before deployment.
 */
export default function FloatingWhatsApp() {
  // Placeholder phone number - replace 9876543210 with actual WhatsApp number
  const phoneNumber = '9876543210'; 
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=Hi%20Anik%20Dada`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with IFBB Pro Anik Ghosh on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-center p-3.5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] transition-all duration-300 hover:scale-110 active:scale-95"
    >
      {/* Pulse effect ring */}
      <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

      {/* Icon */}
      <MessageCircle className="w-7 h-7 relative z-10 fill-current" />

      {/* Tooltip on hover (desktop) */}
      <span className="absolute right-full mr-3 whitespace-nowrap bg-[#141414] text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block">
        Chat with Anik Dada
      </span>
    </a>
  );
}
