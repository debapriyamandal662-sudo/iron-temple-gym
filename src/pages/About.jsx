import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Trophy,
  Dumbbell,
  Flame,
  CheckCircle2,
  Users,
  UserCheck,
  Utensils,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  HeartPulse
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import PlaceholderImage from '../components/PlaceholderImage';
import AnimatedSection from '../components/AnimatedSection';
import { InstagramIcon } from '../components/SocialIcons';

export default function About() {
  const whatsappUrl = "https://wa.me/919876543210?text=Hi%20Anik%20Dada";

  // Lightbox State for Facility Tour
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryImages = [
    { title: "Heavy Dumbbell & Power Zone", category: "Free Weights Area", icon: Dumbbell, photo: "/assets/gym_facility_1.jpg" },
    { title: "Plate-Loaded Leg Press & Hack Squats", category: "Leg Chamber", icon: Flame, photo: "/assets/gym_facility_2.jpg" },
    { title: "Competition Powerlifting Racks", category: "Olympic Platform", icon: Trophy, photo: "/assets/gym_facility_3.jpg" },
    { title: "Cardio Deck & Sled Track", category: "Endurance Zone", icon: HeartPulse, photo: "/assets/gym_facility_4.jpg" },
    { title: "Posing Studio & Full-Length Mirrors", category: "Posing Room", icon: Sparkles, photo: "/assets/gym_facility_5.jpg" },
    { title: "Recovery Lounge & Protein Bar", category: "Nutrition Hub", icon: Utensils, photo: "/assets/gym_facility_6.jpg" }
  ];

  const handleNextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNextLightbox();
      if (e.key === 'ArrowLeft') handlePrevLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  // Trainers Data
  const teamTrainers = [
    {
      name: "Anik Ghosh",
      role: "Head Coach & IFBB Pro",
      bio: "IFBB Pro athlete with 10+ years of elite contest prep experience. Dedicated to science-backed hypertrophy and South Asian physique transformation.",
      certifications: ["IFBB Pro Certified", "ACE Master Trainer", "CSCS Specialist"],
      specialties: ["Bodybuilding", "Contest Prep", "Macro Nutrition"],
      icon: Trophy,
      photo: "/assets/anik_portrait_real.jpg",
      isHead: true
    },
    {
      name: "Rajesh Kumar",
      role: "Senior Strength Coach",
      bio: "Competitive powerlifter specializing in max-effort strength, squat mechanics, and heavy deadlift technique refinement.",
      certifications: ["NSCA-CPT", "Powerlifting India Level 2"],
      specialties: ["Heavy Powerlifting", "Strength Base", "Form Repair"],
      icon: Dumbbell,
      photo: "/assets/trainer_rajesh.jpg",
      isHead: false
    },
    {
      name: "Priya Sharma",
      role: "Mobility & Yoga Specialist",
      bio: "Expert in active recovery, joint longevity, and pelvic stability designed to complement heavy weight training.",
      certifications: ["RYT-500 Yoga Alliance", "FMS Certified"],
      specialties: ["Mobility Yoga", "Injury Prevention", "Posture Alignment"],
      icon: HeartPulse,
      photo: "/assets/trainer_priya.jpg",
      isHead: false
    },
    {
      name: "Vikram Rao",
      role: "Head of HIIT & Conditioning",
      bio: "CrossFit Level 2 coach focused on cardiovascular endurance, metabolic conditioning, and rapid fat loss.",
      certifications: ["CrossFit Level 2", "EXOS Performance Coach"],
      specialties: ["HIIT Blast", "Endurance", "Metabolic Conditioning"],
      icon: Flame,
      photo: "/assets/trainer_vikram.jpg",
      isHead: false
    }
  ];

  const whyChooseUsList = [
    {
      icon: Trophy,
      title: "IFBB Pro Guidance",
      desc: "Train directly under Anik Ghosh, Kolkata's top IFBB Pro athlete with proven international stage experience."
    },
    {
      icon: CheckCircle2,
      title: "Proven Transformations",
      desc: "Over 5,000+ verified fat loss, muscle gain, and contest prep success stories across West Bengal."
    },
    {
      icon: Dumbbell,
      title: "Imported Equipment",
      desc: "Custom plate-loaded machinery, heavy dumbbells up to 60kg, and competition-grade deadlift platforms."
    },
    {
      icon: UserCheck,
      title: "Personalized Plans",
      desc: "No generic templates — every workout split and macro breakdown is customized to your exact genetics."
    },
    {
      icon: Utensils,
      title: "Nutrition Blueprint",
      desc: "Comprehensive macro diet guidance, meal timing strategies, and supplement protocols."
    },
    {
      icon: Users,
      title: "Serious Lifting Culture",
      desc: "A focused, respectful environment built for people who are truly committed to hard work and growth."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <PlaceholderImage
            src="/assets/anik_hero.jpg"
            alt="Iron Temple"
            icon={Dumbbell}
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
            <span className="text-[#c8ff00]">About Us</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight">
            Our <span className="text-[#c8ff00]">Story</span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            The passion, vision, and relentless work ethic that built Kolkata's premier IFBB Pro training facility.
          </p>
        </div>
      </section>

      {/* 2. ANIK'S JOURNEY TIMELINE */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#c8ff00] font-bold">
            Legacy & Evolution
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Anik Ghosh's Journey
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            From humble beginnings in Kolkata to earning the prestigious IFBB Pro Card and founding Iron Temple.
          </p>
        </div>

        {/* 3-Point Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-28 left-12 right-12 h-0.5 bg-gradient-to-r from-[#c8ff00]/20 via-[#c8ff00] to-[#c8ff00]/20 -z-0" />

          {[
            {
              step: "01",
              year: "2012",
              title: "Started Training",
              desc: "Began strength training in Kolkata, dedicating years to mastering natural hypertrophy, biomechanics, and diet discipline.",
              icon: Dumbbell,
              photo: "/assets/anik_gym_workout.jpg"
            },
            {
              step: "02",
              year: "2019",
              title: "Won IFBB Pro Card",
              desc: "Earned the coveted IFBB Pro status after dominating national & international bodybuilding stages, putting Kolkata on the global map.",
              icon: Trophy,
              photo: "/assets/anik_olympia_stage.jpg"
            },
            {
              step: "03",
              year: "2022",
              title: "Opened Iron Temple",
              desc: "Established Iron Temple as Kolkata's flagship training studio to provide athletes with elite equipment and authentic pro coaching.",
              icon: Flame,
              photo: "/assets/anik_portrait_real.jpg"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-[#141414] border border-white/10 p-6 rounded-2xl relative z-10 flex flex-col justify-between space-y-6 hover:border-[#c8ff00]/50 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-black bg-[#c8ff00] px-3 py-1 rounded-full uppercase">
                    {item.year}
                  </span>
                  <span className="text-3xl font-black text-neutral-600">
                    {item.step}
                  </span>
                </div>

                <div className="overflow-hidden rounded-xl">
                  <PlaceholderImage
                    src={item.photo}
                    alt={item.title}
                    icon={item.icon}
                    aspectRatio="aspect-video"
                    rounded="rounded-xl"
                    iconSize={40}
                    label={item.title}
                    className="w-full"
                  />
                </div>

                <h3 className="text-xl font-extrabold text-white">{item.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>

              <div className="pt-2 text-xs font-bold text-[#c8ff00] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Milestone Achieved</span>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* 3. FACILITY TOUR (LIGHTBOX GALLERY WITH REAL PHOTOS) */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#c8ff00] font-bold">
            World-Class Infrastructure
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Facility Tour
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Click on any image to inspect our specialized lifting platforms, recovery zones, and posing studio.
          </p>
        </div>

        {/* 3x2 Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              onClick={() => setLightboxIndex(idx)}
              className="cursor-pointer group relative overflow-hidden rounded-2xl border border-white/10 bg-[#141414] hover:border-[#c8ff00]/60 transition-all duration-300 shadow-lg"
            >
              <PlaceholderImage
                src={img.photo}
                alt={img.title}
                icon={img.icon}
                aspectRatio="aspect-video"
                rounded="rounded-none"
                iconSize={48}
                label={img.category}
                className="w-full"
              />
              <div className="p-4 bg-[#141414] flex items-center justify-between border-t border-white/5">
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#c8ff00] transition-colors">
                    {img.title}
                  </h4>
                  <span className="text-xs text-neutral-500">{img.category}</span>
                </div>
                <span className="text-xs font-semibold text-[#c8ff00] opacity-0 group-hover:opacity-100 transition-opacity">
                  View →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#141414] border border-white/20 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxIndex(null)}
                aria-label="Close Lightbox"
                className="absolute top-4 right-4 p-2 rounded-full bg-[#0a0a0a] border border-white/20 text-white hover:text-[#c8ff00] transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full mb-4">
                <span className="text-xs uppercase tracking-widest text-[#c8ff00] font-bold">
                  Iron Temple Gallery ({lightboxIndex + 1} of {galleryImages.length})
                </span>
                <h3 className="text-2xl font-black uppercase text-white mt-1">
                  {galleryImages[lightboxIndex].title}
                </h3>
              </div>

              {/* Large Image View */}
              <div className="w-full relative">
                <PlaceholderImage
                  src={galleryImages[lightboxIndex].photo}
                  alt={galleryImages[lightboxIndex].title}
                  icon={galleryImages[lightboxIndex].icon}
                  aspectRatio="aspect-video"
                  rounded="rounded-2xl"
                  iconSize={80}
                  label={galleryImages[lightboxIndex].category}
                  className="w-full max-h-[60vh] object-cover"
                />

                <button
                  onClick={handlePrevLightbox}
                  aria-label="Previous Image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#0a0a0a]/80 border border-white/20 text-white hover:text-[#c8ff00] hover:border-[#c8ff00] transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={handleNextLightbox}
                  aria-label="Next Image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#0a0a0a]/80 border border-white/20 text-white hover:text-[#c8ff00] hover:border-[#c8ff00] transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. OUR TEAM SECTION */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#c8ff00] font-bold">
            Coaching Excellence
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Our Elite Team
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Train under certified professionals who practice what they preach every single day.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamTrainers.map((trainer, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className={`bg-[#141414] border p-8 rounded-3xl flex flex-col sm:flex-row gap-6 items-start hover:border-[#c8ff00]/50 transition-all duration-300 shadow-xl ${
                trainer.isHead ? 'border-2 border-[#c8ff00] shadow-[0_0_30px_rgba(200,255,0,0.1)]' : 'border-white/10'
              }`}
            >
              {/* Trainer Image */}
              <div className="w-28 h-28 shrink-0 rounded-2xl overflow-hidden border border-white/10 relative">
                <PlaceholderImage
                  src={trainer.photo}
                  alt={trainer.name}
                  icon={trainer.icon}
                  aspectRatio="w-full h-full"
                  rounded="rounded-2xl"
                  iconSize={40}
                  className="w-full h-full"
                />
                {trainer.isHead && (
                  <span className="absolute bottom-1 right-1 bg-[#c8ff00] text-black text-[9px] font-black px-1.5 py-0.5 rounded">
                    PRO
                  </span>
                )}
              </div>

              {/* Trainer Details */}
              <div className="space-y-4 flex-1">
                <div>
                  <h3 className="text-2xl font-black text-white">{trainer.name}</h3>
                  <span className="text-xs font-bold text-[#c8ff00] uppercase tracking-wider">
                    {trainer.role}
                  </span>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {trainer.bio}
                </p>

                {/* Certifications */}
                <div>
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-1.5">
                    Certifications:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {trainer.certifications.map((cert, i) => (
                      <span key={i} className="text-[11px] bg-[#0a0a0a] border border-white/10 text-neutral-300 px-2.5 py-1 rounded-md">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specialties */}
                <div>
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-1.5">
                    Specialties:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {trainer.specialties.map((spec, i) => (
                      <span key={i} className="text-[11px] bg-[#c8ff00]/10 border border-[#c8ff00]/30 text-[#c8ff00] font-bold px-2.5 py-1 rounded-full">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Icon Link */}
                <div className="pt-2">
                  <a
                    href="https://www.instagram.com/ifbb_pro_anik/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-neutral-400 hover:text-[#c8ff00] transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4 text-[#c8ff00]" />
                    <span>Follow @{trainer.name.toLowerCase().replace(' ', '_')}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* 5. WHY CHOOSE US */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#c8ff00] font-bold">
            The Iron Temple Advantage
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Why Choose Us?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            We offer more than just gym access — we offer a complete, science-driven transformation system.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsList.map((box, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-[#141414] border border-white/10 p-8 rounded-2xl space-y-4 hover:border-[#c8ff00]/40 transition-all duration-300 group shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-[#c8ff00] group-hover:border-[#c8ff00] group-hover:bg-[#c8ff00]/10 transition-all">
                <box.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#c8ff00] transition-colors">
                {box.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {box.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
