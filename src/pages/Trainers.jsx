import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Trophy,
  Dumbbell,
  Flame,
  HeartPulse,
  X,
  MessageCircle,
  Award,
  Users,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import PlaceholderImage from '../components/PlaceholderImage';
import AnimatedSection from '../components/AnimatedSection';

export default function Trainers() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const trainersList = [
    {
      id: 'anik-ghosh',
      name: 'Anik Ghosh',
      role: 'Head Coach & IFBB Pro',
      shortBio: 'IFBB Pro athlete with 10+ years of elite contest prep experience. Dedicated to science-backed hypertrophy and South Asian physique transformation.',
      fullBio: 'Anik Ghosh is Kolkata’s premier IFBB Pro athlete and head coach. Over the past decade, Anik has trained over 5,000+ individuals, ranging from working professionals aiming for fat loss to competitive bodybuilders preparing for national and international stages. His coaching methodology blends bio-mechanical precision, progressive overload periodization, and customized South Asian macro nutrition.',
      certifications: ['IFBB Pro Certified', 'ACE Master Trainer', 'CSCS Specialist'],
      specialties: ['Bodybuilding', 'Contest Prep', 'Macro Nutrition', 'Biomechanics'],
      stat: '5,000+ Clients Trained',
      experience: '10+ Years Pro Experience',
      icon: Trophy,
      photo: '/assets/anik_portrait_real.jpg',
      isHead: true,
      whatsappMsg: 'Hi Anik Dada! I want to book a personal coaching session with IFBB Pro Anik Ghosh.'
    },
    {
      id: 'rajesh-kumar',
      name: 'Rajesh Kumar',
      role: 'Senior Strength Coach',
      shortBio: 'Competitive powerlifter specializing in max-effort strength, squat mechanics, and heavy deadlift technique refinement.',
      fullBio: 'Rajesh Kumar is a veteran powerlifting competitor and strength specialist. Known for diagnosing form breakdowns and mobility restrictions, Rajesh has coached powerlifters to state-level records and helped everyday lifters safely build a massive strength baseline.',
      certifications: ['NSCA-CPT', 'Powerlifting India Level 2'],
      specialties: ['Heavy Powerlifting', 'Strength Base', 'Form Repair', 'Deadlift Lockouts'],
      stat: '1,200+ Athletes Coached',
      experience: '8+ Years Strength Coaching',
      icon: Dumbbell,
      photo: '/assets/trainer_rajesh.jpg',
      isHead: false,
      whatsappMsg: 'Hi Anik Dada! I want to book a strength coaching session with Coach Rajesh Kumar.'
    },
    {
      id: 'priya-sharma',
      name: 'Priya Sharma',
      role: 'Mobility & Yoga Specialist',
      shortBio: 'Expert in active recovery, joint longevity, and pelvic stability designed to complement heavy weight training.',
      fullBio: 'Priya Sharma specializes in functional mobility and athletic recovery. Her custom mobility sessions help heavy lifters unlock hip depth, fix shoulder impingements, and maintain bulletproof joints while training heavy.',
      certifications: ['RYT-500 Yoga Alliance', 'FMS Certified'],
      specialties: ['Mobility Yoga', 'Injury Prevention', 'Posture Alignment', 'Active Recovery'],
      stat: '800+ Students Coached',
      experience: '6+ Years Mobility Exp',
      icon: HeartPulse,
      photo: '/assets/trainer_priya.jpg',
      isHead: false,
      whatsappMsg: 'Hi Anik Dada! I want to book a mobility session with Coach Priya Sharma.'
    },
    {
      id: 'vikram-rao',
      name: 'Vikram Rao',
      role: 'Head of HIIT & Conditioning',
      shortBio: 'CrossFit Level 2 coach focused on cardiovascular endurance, metabolic conditioning, and rapid fat loss.',
      fullBio: 'Vikram Rao leads the high-intensity conditioning department at Iron Temple. His metabolic conditioning protocols combine kettlebell work, sled pushes, and interval sprints engineered for maximum calorie burn and cardiovascular stamina.',
      certifications: ['CrossFit Level 2', 'EXOS Performance Coach'],
      specialties: ['HIIT Blast', 'Endurance', 'Metabolic Conditioning', 'Sled Sprints'],
      stat: '1,500+ HIIT Participants',
      experience: '7+ Years HIIT Coaching',
      icon: Flame,
      photo: '/assets/trainer_vikram.jpg',
      isHead: false,
      whatsappMsg: 'Hi Anik Dada! I want to book a HIIT session with Coach Vikram Rao.'
    }
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedTrainer(null);
      }
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
            src="/assets/anik_hero.jpg"
            alt="Iron Temple Coaches"
            icon={Users}
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
            <span className="text-[#c8ff00]">Trainers</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight">
            Meet Our <span className="text-[#c8ff00]">Coaches</span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            World-class instruction by IFBB Pro Anik Ghosh and certified strength & mobility specialists.
          </p>
        </div>
      </section>

      {/* Trainers Grid Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainersList.map((trainer) => (
            <motion.div
              key={trainer.id}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedTrainer(trainer)}
              className={`cursor-pointer bg-[#141414] border p-8 rounded-3xl flex flex-col sm:flex-row gap-6 items-start hover:border-[#c8ff00]/60 transition-all duration-300 shadow-xl group ${
                trainer.isHead ? 'border-2 border-[#c8ff00] shadow-[0_0_30px_rgba(200,255,0,0.12)]' : 'border-white/10'
              }`}
            >
              {/* Avatar Photo */}
              <div className="w-32 h-32 shrink-0 rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#c8ff00] transition-colors relative">
                <PlaceholderImage
                  src={trainer.photo}
                  alt={trainer.name}
                  icon={trainer.icon}
                  aspectRatio="w-full h-full"
                  rounded="rounded-2xl"
                  iconSize={48}
                  className="w-full h-full"
                />
                {trainer.isHead && (
                  <span className="absolute bottom-1 right-1 bg-[#c8ff00] text-black text-[9px] font-black px-1.5 py-0.5 rounded">
                    IFBB PRO
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="space-y-4 flex-1">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-black text-white group-hover:text-[#c8ff00] transition-colors">
                      {trainer.name}
                    </h3>
                    <span className="text-xs font-bold text-[#c8ff00] group-hover:translate-x-1 transition-transform">
                      View Profile →
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#c8ff00] uppercase tracking-wider block mt-0.5">
                    {trainer.role}
                  </span>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {trainer.shortBio}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {trainer.specialties.map((spec, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-[#c8ff00]/10 border border-[#c8ff00]/30 text-[#c8ff00] font-bold px-2.5 py-1 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Trainer Detail Modal */}
      <AnimatePresence>
        {selectedTrainer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8"
            onClick={() => setSelectedTrainer(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative max-w-4xl w-full bg-[#141414] border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTrainer(null)}
                aria-label="Close Modal"
                className="absolute top-4 right-4 p-2 rounded-full bg-[#0a0a0a] border border-white/20 text-white hover:text-[#c8ff00] transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Left Side: Photo */}
              <div className="md:w-5/12 bg-[#0d0d0d] p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
                <PlaceholderImage
                  src={selectedTrainer.photo}
                  alt={selectedTrainer.name}
                  icon={selectedTrainer.icon}
                  aspectRatio="aspect-square"
                  rounded="rounded-2xl"
                  iconSize={80}
                  label={selectedTrainer.name}
                  className="w-full max-w-xs shadow-2xl border-white/10"
                />
              </div>

              {/* Right Side: Details */}
              <div className="md:w-7/12 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#c8ff00] px-3 py-1 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/30 inline-block mb-2">
                      {selectedTrainer.role}
                    </span>
                    <h2 className="text-3xl font-black text-white">{selectedTrainer.name}</h2>
                  </div>

                  {/* Stats Row */}
                  <div className="flex items-center gap-4 text-xs font-bold text-neutral-300 border-y border-white/10 py-3">
                    <div className="flex items-center gap-1.5 text-[#c8ff00]">
                      <Users className="w-4 h-4" />
                      <span>{selectedTrainer.stat}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <Award className="w-4 h-4 text-[#c8ff00]" />
                      <span>{selectedTrainer.experience}</span>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {selectedTrainer.fullBio}
                  </p>

                  {/* Certifications */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
                      Certifications:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedTrainer.certifications.map((cert, i) => (
                        <span key={i} className="text-xs bg-[#0a0a0a] border border-white/15 text-white px-3 py-1 rounded-lg flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#c8ff00]" />
                          <span>{cert}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
                      Specialties:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedTrainer.specialties.map((spec, i) => (
                        <span key={i} className="text-xs bg-[#c8ff00]/10 border border-[#c8ff00]/30 text-[#c8ff00] font-bold px-3 py-1 rounded-full">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Book Session CTA */}
                <div className="pt-4 border-t border-white/10">
                  <a
                    href={`https://wa.me/919876543210?text=${encodeURIComponent(selectedTrainer.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#c8ff00] text-black font-extrabold text-sm py-3.5 rounded-full hover:bg-[#b2e600] transition-all hover:scale-105 shadow-[0_0_20px_rgba(200,255,0,0.3)]"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Book Session with {selectedTrainer.name.split(' ')[0]}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
