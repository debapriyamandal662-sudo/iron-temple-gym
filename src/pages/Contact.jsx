import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { motion } from 'framer-motion';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import PlaceholderImage from '../components/PlaceholderImage';
import AnimatedSection from '../components/AnimatedSection';
import { InstagramIcon, YoutubeIcon, FacebookIcon } from '../components/SocialIcons';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <PlaceholderImage
            icon={Mail}
            aspectRatio="h-full w-full"
            rounded="rounded-none"
            iconSize={120}
            className="w-full h-full filter brightness-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/80 to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-xs font-semibold text-neutral-400 uppercase tracking-widest">
            <Link to="/" className="hover:text-[#c8ff00] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#c8ff00]">Contact</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight">
            Contact <span className="text-[#c8ff00]">Iron Temple</span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Have questions about personal training, membership, or contest prep? Reach out to Anik Dada and our front desk.
          </p>
        </div>
      </section>

      {/* Main 2-Column Content */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Form */}
          <div className="bg-[#141414] border border-white/10 p-8 sm:p-10 rounded-3xl space-y-6 shadow-2xl">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#c8ff00] font-bold">
                Direct Message
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white mt-1">
                Send Us a Message
              </h2>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#c8ff00]/10 border border-[#c8ff00]/30 rounded-2xl text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#c8ff00] mx-auto" />
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Thanks for reaching out! Anik Dada's team will get back to you shortly on WhatsApp or email.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', message: '' });
                  }}
                  className="px-6 py-2.5 bg-[#c8ff00] text-black font-extrabold text-xs rounded-full"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sourav Ganguly"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-white/15 focus:border-[#c8ff00] text-white text-sm px-4 py-3 rounded-xl outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sourav@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-white/15 focus:border-[#c8ff00] text-white text-sm px-4 py-3 rounded-xl outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="98300XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-white/15 focus:border-[#c8ff00] text-white text-sm px-4 py-3 rounded-xl outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your fitness goals or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-white/15 focus:border-[#c8ff00] text-white text-sm p-4 rounded-xl outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#c8ff00] text-black font-extrabold text-sm rounded-full hover:bg-[#b2e600] transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(200,255,0,0.3)] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Info Cards & Map Placeholder */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Info Card 1 */}
              <div className="bg-[#141414] border border-white/10 p-6 rounded-2xl space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-[#c8ff00]">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Gym Address</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Block EP & GP, Sector V, Salt Lake City, Kolkata, West Bengal 700091
                </p>
              </div>

              {/* Info Card 2 */}
              <div className="bg-[#141414] border border-white/10 p-6 rounded-2xl space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-[#c8ff00]">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Phone & WhatsApp</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Front Desk: +91 98765 43210<br />
                  WhatsApp: +91 98765 43210
                </p>
              </div>

              {/* Info Card 3 */}
              <div className="bg-[#141414] border border-white/10 p-6 rounded-2xl space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-[#c8ff00]">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Email Address</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  info@irontemplekolkata.com<br />
                  anikpro@irontemplekolkata.com
                </p>
              </div>

              {/* Info Card 4 */}
              <div className="bg-[#141414] border border-white/10 p-6 rounded-2xl space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-[#c8ff00]">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Operating Hours</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Mon – Sat: 06:00 AM – 10:00 PM<br />
                  Sunday: 08:00 AM – 02:00 PM
                </p>
              </div>
            </div>

            {/* Map Placeholder (Muted gray-ish tone, visually reads as map) */}
            <div className="relative group overflow-hidden rounded-2xl border border-white/10 shadow-xl">
              <PlaceholderImage
                icon={MapPin}
                aspectRatio="aspect-video"
                rounded="rounded-2xl"
                iconSize={48}
                label="Interactive Kolkata Location Map"
                className="w-full bg-[#1c1c1c] filter grayscale contrast-125"
              />
              <div className="absolute bottom-3 left-3 bg-[#0a0a0a]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs text-[#c8ff00] font-bold">
                📍 Salt Lake Sector V, Kolkata
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Row Below Both Columns */}
        <div className="mt-16 pt-10 border-t border-white/10 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#c8ff00] font-bold">
            Connect On Social Media
          </span>
          <div className="flex items-center justify-center space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#141414] border border-white/10 text-white hover:text-[#c8ff00] hover:border-[#c8ff00]/50 transition-all text-xs font-bold"
            >
              <InstagramIcon className="w-4 h-4 text-[#c8ff00]" />
              <span>Instagram (@ifbb_pro_anik)</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#141414] border border-white/10 text-white hover:text-[#c8ff00] hover:border-[#c8ff00]/50 transition-all text-xs font-bold"
            >
              <YoutubeIcon className="w-4 h-4 text-red-500" />
              <span>YouTube Channel</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#141414] border border-white/10 text-white hover:text-[#c8ff00] hover:border-[#c8ff00]/50 transition-all text-xs font-bold"
            >
              <FacebookIcon className="w-4 h-4 text-blue-500" />
              <span>Facebook Page</span>
            </a>
          </div>
        </div>
      </AnimatedSection>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
