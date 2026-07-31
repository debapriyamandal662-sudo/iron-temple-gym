import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Utensils,
  Dumbbell,
  Video,
  CheckCircle2,
  Send,
  ArrowRight,
  Sparkles,
  ClipboardList,
  TrendingUp,
  MessageCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import PlaceholderImage from '../components/PlaceholderImage';
import AnimatedSection from '../components/AnimatedSection';

export default function OnlineCoaching() {
  const [selectedProgram, setSelectedProgram] = useState('Personalized Diet Plan (₹1,500)');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', program: 'Personalized Diet Plan (₹1,500)' });
  const [submitted, setSubmitted] = useState(false);

  const programs = [
    {
      id: 'diet',
      title: 'Personalized Diet Plan',
      price: '₹1,500',
      period: 'one-time',
      icon: Utensils,
      description: 'Calculated macro breakdown (Protein, Fats, Carbs), meal timing, and South Asian food choices tailored to your work schedule and fat loss goals.'
    },
    {
      id: 'workout',
      title: 'Customized Workout Plan',
      price: '₹2,000',
      period: 'one-time',
      icon: Dumbbell,
      description: 'Biromechanically sound 4 to 6-day workout split, exercise demo links, progressive overload tracking template, and RPE intensity guidance.'
    },
    {
      id: 'video',
      title: 'Video Consultation & 1-on-1',
      price: '₹1,000',
      period: '/ month',
      icon: Video,
      description: 'Direct 30-min weekly video calls with Anik Dada, video exercise form reviews, macro adjustments, and continuous WhatsApp support.'
    }
  ];

  const handleSelectProgram = (programTitle, price) => {
    const fullProg = `${programTitle} (${price})`;
    setSelectedProgram(fullProg);
    setFormData((prev) => ({ ...prev, program: fullProg }));
    // Scroll to form smoothly
    const formEl = document.getElementById('online-signup-form');
    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
  };

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
            icon={Globe}
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
            <span className="text-[#c8ff00]">Online Coaching</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight">
            Train With Anik — <span className="text-[#c8ff00]">Anywhere in India</span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Get IFBB Pro level physique coaching, custom diet blueprints, and form corrections from the comfort of your home gym.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#c8ff00] font-bold">
            Virtual Coaching Packages
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Online Coaching Programs
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Select the program that matches your transformation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((prog) => (
            <motion.div
              key={prog.id}
              whileHover={{ y: -6 }}
              className="bg-[#141414] border border-white/10 p-8 rounded-3xl flex flex-col justify-between space-y-8 hover:border-[#c8ff00]/50 transition-all duration-300 shadow-xl group"
            >
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-[#c8ff00] group-hover:border-[#c8ff00] transition-colors">
                  <prog.icon className="w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white">{prog.title}</h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-3xl font-black text-[#c8ff00]">{prog.price}</span>
                    <span className="text-xs text-neutral-400 font-semibold">{prog.period}</span>
                  </div>
                </div>

                <p className="text-sm text-neutral-400 leading-relaxed">
                  {prog.description}
                </p>
              </div>

              <button
                onClick={() => handleSelectProgram(prog.title, prog.price)}
                className="w-full py-3.5 bg-[#0a0a0a] border border-white/20 text-white font-extrabold text-xs rounded-full hover:border-[#c8ff00] hover:text-[#c8ff00] transition-colors"
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* How It Works Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#c8ff00] font-bold">
            Step-By-Step Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            How It Works
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Simple 3-step system to start your online coaching journey with Anik Dada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-[#c8ff00]/30 via-[#c8ff00] to-[#c8ff00]/30 -z-0" />

          {[
            {
              step: '01',
              title: 'Sign Up',
              desc: 'Fill out the form below with your current height, weight, diet preferences, and fitness goals.',
              icon: ClipboardList
            },
            {
              step: '02',
              title: 'Get Plan',
              desc: 'Receive your custom macro blueprint, workout PDF, and exercise video breakdown within 24-48 hours.',
              icon: Utensils
            },
            {
              step: '03',
              title: 'Track Progress',
              desc: 'Log your weekly weights, send form check videos on WhatsApp, and adjust macros during weekly check-ins.',
              icon: TrendingUp
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-[#141414] border border-white/10 p-8 rounded-3xl relative z-10 flex flex-col justify-between space-y-6 hover:border-[#c8ff00]/40 transition-all shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-[#c8ff00]">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-neutral-600">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white">{item.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Online Coaching Signup Form */}
      <AnimatedSection id="online-signup-form" className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto border-t border-white/5">
        <div className="bg-[#141414] border border-white/15 p-8 sm:p-12 rounded-3xl space-y-6 shadow-2xl">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#c8ff00] font-bold">
              Enrollment Form
            </span>
            <h2 className="text-3xl font-black uppercase text-white">
              Start Online Coaching
            </h2>
            <p className="text-xs text-neutral-400">
              Submit your info to enroll in Anik Dada's online coaching program.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-[#c8ff00]/10 border border-[#c8ff00]/30 rounded-2xl text-center space-y-4">
              <CheckCircle2 className="w-14 h-14 text-[#c8ff00] mx-auto" />
              <h3 className="text-2xl font-bold text-white">Online Application Received!</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Thanks! Anik Dada's online team will reach out on WhatsApp within 2 hours to confirm your plan details.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-[#c8ff00] text-black font-extrabold text-xs rounded-full"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Das"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0a0a0a] border border-white/15 focus:border-[#c8ff00] text-white text-sm px-4 py-3 rounded-xl outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                    WhatsApp Number
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

                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-white/15 focus:border-[#c8ff00] text-white text-sm px-4 py-3 rounded-xl outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Select Program
                </label>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full bg-[#0a0a0a] border border-white/15 focus:border-[#c8ff00] text-white text-sm px-4 py-3 rounded-xl outline-none transition-colors"
                >
                  <option value="Personalized Diet Plan (₹1,500)">Personalized Diet Plan (₹1,500 - one time)</option>
                  <option value="Customized Workout Plan (₹2,000)">Customized Workout Plan (₹2,000 - one time)</option>
                  <option value="Video Consultation & 1-on-1 (₹1,000/month)">Video Consultation & 1-on-1 (₹1,000 / month)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#c8ff00] text-black font-extrabold text-sm rounded-full hover:bg-[#b2e600] transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(200,255,0,0.3)] flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Application</span>
              </button>
            </form>
          )}
        </div>
      </AnimatedSection>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
