import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  Check,
  Minus,
  ChevronDown,
  X,
  Send,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import PlaceholderImage from '../components/PlaceholderImage';
import AnimatedSection from '../components/AnimatedSection';

export default function Membership() {
  // Modal state
  const [selectedPlanForModal, setSelectedPlanForModal] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', plan: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ State (only one open at a time)
  const [openFaq, setOpenFaq] = useState(0);

  const plans = [
    {
      id: 'monthly',
      name: 'Monthly Tier',
      price: '₹2,000',
      period: '/ month',
      popular: false,
      tagline: 'Ideal for short-term commitment & routine training.',
      features: [
        'Full Gym Floor Access',
        'Basic Group Classes',
        'Locker & Shower Access',
        'Standard Workout Template'
      ]
    },
    {
      id: 'quarterly',
      name: 'Quarterly Tier',
      price: '₹5,500',
      period: '/ 3 months',
      popular: true,
      tagline: 'Best value for serious physique transformation.',
      features: [
        'Unlimited Gym Floor Access',
        'All Group Classes Included',
        '1 Personal Training Session with Coach',
        'Custom Nutrition Consultation',
        'Custom Macro Diet Blueprint',
        'Free Guest Pass Every Month'
      ]
    },
    {
      id: 'yearly',
      name: 'Yearly Tier',
      price: '₹20,000',
      period: '/ year',
      popular: false,
      tagline: 'The ultimate VIP commitment for dedicated lifters.',
      features: [
        'VIP All-Access Pass',
        'Unlimited Group Classes',
        'Monthly Progress & Form Check-ins',
        'Online Coaching Portal Access',
        'Priority Class & Rack Booking',
        'Official Iron Temple Apparel Kit',
        '15% Merchandise Discount'
      ]
    }
  ];

  const comparisonFeatures = [
    { name: 'Gym Floor Access', monthly: true, quarterly: true, yearly: true },
    { name: 'Locker & Shower', monthly: true, quarterly: true, yearly: true },
    { name: 'Basic Group Classes', monthly: true, quarterly: true, yearly: true },
    { name: '1-on-1 PT Session', monthly: false, quarterly: true, yearly: true },
    { name: 'Nutrition Consultation', monthly: false, quarterly: true, yearly: true },
    { name: 'Custom Macro Blueprint', monthly: false, quarterly: true, yearly: true },
    { name: 'Online Coaching Access', monthly: false, quarterly: false, yearly: true },
    { name: 'Priority Class Booking', monthly: false, quarterly: false, yearly: true },
    { name: 'Merchandise Discount', monthly: false, quarterly: false, yearly: true }
  ];

  const faqs = [
    {
      q: 'How do I join Iron Temple?',
      a: 'You can sign up online by selecting your preferred plan above or visit our Kolkata facility in person. Once submitted, our team will confirm your slot and send welcome details on WhatsApp.'
    },
    {
      q: 'Can I freeze or pause my membership?',
      a: 'Yes! Quarterly plans can be paused for up to 14 days, and Yearly plans can be frozen for up to 45 days in case of travel, exams, or medical recovery.'
    },
    {
      q: 'Is there a trial period before committing?',
      a: 'We offer a complimentary 1-day pass so you can experience our equipment, lifting platforms, and coaching environment before choosing a tier.'
    },
    {
      q: 'What is included in the nutrition coaching?',
      a: 'In Quarterly and Yearly tiers, IFBB Pro Anik Ghosh and our team provide a calculated macro breakdown (Protein, Fats, Carbs), meal timing, and South Asian food alternatives tailored to your goals.'
    },
    {
      q: 'Can I switch or upgrade my plan later?',
      a: 'Absolutely. You can upgrade from Monthly to Quarterly or Yearly at any point by paying the prorated difference.'
    }
  ];

  const handleOpenModal = (planName) => {
    setFormData((prev) => ({ ...prev, plan: planName }));
    setSelectedPlanForModal(planName);
    setFormSubmitted(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Keyboard navigation for escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedPlanForModal(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <PlaceholderImage
            icon={Award}
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
            <span className="text-[#c8ff00]">Membership</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight">
            Membership <span className="text-[#c8ff00]">Plans</span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Transparent pricing with zero hidden fees. Choose your commitment level and transform under IFBB Pro Anik Ghosh.
          </p>
        </div>
      </section>

      {/* 3 Detailed Pricing Cards */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              whileHover={{ y: -6 }}
              className={`bg-[#141414] p-8 rounded-3xl flex flex-col justify-between space-y-8 relative transition-all duration-300 shadow-xl ${
                plan.popular
                  ? 'border-2 border-[#c8ff00] shadow-[0_0_40px_rgba(200,255,0,0.18)] transform md:-translate-y-3'
                  : 'border border-white/10 hover:border-white/25'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c8ff00] text-black text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Most Popular</span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span className={`text-xs font-extrabold uppercase tracking-wider ${plan.popular ? 'text-[#c8ff00]' : 'text-neutral-400'}`}>
                    {plan.name}
                  </span>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-4xl sm:text-5xl font-black text-white">{plan.price}</span>
                    <span className="text-sm text-neutral-400 font-semibold">{plan.period}</span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    {plan.tagline}
                  </p>
                </div>

                <ul className="space-y-3.5 text-sm text-neutral-200 pt-4 border-t border-white/10">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#c8ff00] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleOpenModal(plan.name)}
                className={`w-full py-4 rounded-full font-extrabold text-sm text-center transition-all duration-200 ${
                  plan.popular
                    ? 'bg-[#c8ff00] text-black hover:bg-[#b2e600] shadow-[0_0_20px_rgba(200,255,0,0.3)] hover:scale-105'
                    : 'bg-[#0a0a0a] border border-white/20 text-white hover:border-[#c8ff00] hover:text-[#c8ff00]'
                }`}
              >
                Join Now
              </button>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Comparison Table */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#c8ff00] font-bold">
            Full Breakdown
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Compare Features
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            See exactly what is included in each membership tier.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#141414] shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-[#0a0a0a] border-b border-white/10 text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                <th className="py-5 px-6">Feature</th>
                <th className="py-5 px-6 text-center">Monthly</th>
                <th className="py-5 px-6 text-center text-[#c8ff00]">Quarterly</th>
                <th className="py-5 px-6 text-center">Yearly</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {comparisonFeatures.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">{row.name}</td>
                  <td className="py-4 px-6 text-center">
                    {row.monthly ? (
                      <Check className="w-5 h-5 text-[#c8ff00] mx-auto" />
                    ) : (
                      <Minus className="w-4 h-4 text-neutral-600 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center bg-[#c8ff00]/5">
                    {row.quarterly ? (
                      <Check className="w-5 h-5 text-[#c8ff00] mx-auto" />
                    ) : (
                      <Minus className="w-4 h-4 text-neutral-600 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {row.yearly ? (
                      <Check className="w-5 h-5 text-[#c8ff00] mx-auto" />
                    ) : (
                      <Minus className="w-4 h-4 text-neutral-600 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedSection>

      {/* FAQ Accordion */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/5">
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c8ff00] font-bold">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-[#141414] border border-white/10 rounded-2xl overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-lg font-bold text-white">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#c8ff00] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </AnimatedSection>

      {/* Signup Modal */}
      <AnimatePresence>
        {selectedPlanForModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedPlanForModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative max-w-lg w-full bg-[#141414] border border-white/20 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedPlanForModal(null)}
                aria-label="Close Modal"
                className="absolute top-4 right-4 p-2 rounded-full bg-[#0a0a0a] border border-white/20 text-white hover:text-[#c8ff00] transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#c8ff00] font-bold">
                  Iron Temple Enrollment
                </span>
                <h2 className="text-2xl font-black uppercase text-white">
                  Join {selectedPlanForModal}
                </h2>
                <p className="text-xs text-neutral-400">
                  Fill in your details below and Coach Anik's team will contact you directly on WhatsApp.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 bg-[#c8ff00]/10 border border-[#c8ff00]/30 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#c8ff00] mx-auto" />
                  <h3 className="text-xl font-bold text-white">Enrollment Request Received!</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Thanks! We'll reach out on WhatsApp shortly with your welcome pass and registration code.
                  </p>
                  <button
                    onClick={() => setSelectedPlanForModal(null)}
                    className="mt-4 px-6 py-2 bg-[#c8ff00] text-black font-extrabold text-xs rounded-full"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anish Chakraborty"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-white/15 focus:border-[#c8ff00] text-white text-sm px-4 py-3 rounded-xl outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp
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
                        placeholder="anish@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0a0a0a] border border-white/15 focus:border-[#c8ff00] text-white text-sm px-4 py-3 rounded-xl outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Selected Plan
                    </label>
                    <select
                      value={formData.plan}
                      onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-white/15 focus:border-[#c8ff00] text-white text-sm px-4 py-3 rounded-xl outline-none transition-colors"
                    >
                      <option value="Monthly Tier">Monthly Tier (₹2,000 / month)</option>
                      <option value="Quarterly Tier">Quarterly Tier (₹5,500 / 3 months)</option>
                      <option value="Yearly Tier">Yearly Tier (₹20,000 / year)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#c8ff00] text-black font-extrabold text-sm rounded-full hover:bg-[#b2e600] transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(200,255,0,0.3)] mt-2"
                  >
                    Submit Enrollment Request
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
