import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, ArrowLeft, Sparkles, MessageSquare } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import PlaceholderImage from './PlaceholderImage';
import AnimatedSection from './AnimatedSection';

export default function ComingSoonPage({ title, description, icon: Icon = Dumbbell }) {
  const whatsappUrl = "https://wa.me/919876543210?text=Hi%20Anik%20Dada";

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto w-full text-center">
          {/* Neon Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/30 text-[#c8ff00] text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Coming Soon — Iron Temple Kolkata</span>
          </div>

          {/* Placeholder visual */}
          <div className="max-w-md mx-auto mb-8">
            <PlaceholderImage
              icon={Icon}
              aspectRatio="aspect-[16/9]"
              rounded="rounded-2xl"
              iconSize={56}
              className="border-white/10 shadow-2xl"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            {title}
          </h1>

          <p className="text-lg text-neutral-400 max-w-xl mx-auto mb-8 leading-relaxed">
            {description || `We are crafting the ultimate ${title} experience for Iron Temple Kolkata under IFBB Pro Anik Ghosh. Stay tuned!`}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c8ff00] text-black font-extrabold text-sm px-8 py-3.5 rounded-full hover:bg-[#b2e600] transition-all hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#141414] border border-white/15 text-white font-semibold text-sm px-8 py-3.5 rounded-full hover:border-[#c8ff00] hover:text-[#c8ff00] transition-all"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Ask Anik Dada on WhatsApp</span>
            </a>
          </div>
        </AnimatedSection>
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
