import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  Users,
  X,
  MessageCircle,
  Flame,
  CheckCircle2,
  Dumbbell,
  HeartPulse,
  Activity,
  Filter,
  Sparkles,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import PlaceholderImage from '../components/PlaceholderImage';
import AnimatedSection from '../components/AnimatedSection';

export default function Classes() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedClass, setSelectedClass] = useState(null);

  const filterCategories = ['All', 'Strength', 'Yoga', 'HIIT', 'Cardio'];

  const classScheduleData = [
    {
      id: 'c1',
      day: 'Monday',
      time: '07:00 AM - 08:30 AM',
      name: 'Hypertrophy Chest & Triceps',
      trainer: 'Anik Ghosh (IFBB Pro)',
      duration: '90 Mins',
      capacity: '12 / 15 Spots',
      category: 'Strength',
      badgeClass: 'bg-red-500/20 text-red-400 border-red-500/30',
      description: 'Master progressive overload for upper body hypertrophy. Focus on incline bench pressing, cable flies, and biomechanically aligned tricep extensions.',
      intensity: 'High',
      whatToBring: 'Lifting Belt, Wrist Wraps, Water Bottle, Sweat Towel',
      trainerBio: 'Anik Ghosh is Kolkata’s premier IFBB Pro athlete specializing in muscle hypertrophy and contest prep.'
    },
    {
      id: 'c2',
      day: 'Monday',
      time: '06:00 PM - 07:00 PM',
      name: 'High Intensity HIIT Blast',
      trainer: 'Vikram Rao',
      duration: '60 Mins',
      capacity: '10 / 12 Spots',
      category: 'HIIT',
      badgeClass: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      description: 'Explosive interval training combining kettlebell swings, battle ropes, and sled pushes to elevate your heart rate and burn maximum calories.',
      intensity: 'Extreme',
      whatToBring: 'Cross-Training Shoes, Water Bottle, Heart Rate Monitor',
      trainerBio: 'Vikram Rao is a CrossFit Level 2 coach focused on athletic endurance and metabolic conditioning.'
    },
    {
      id: 'c3',
      day: 'Tuesday',
      time: '07:00 AM - 08:30 AM',
      name: 'Heavy Deadlift & Back Focus',
      trainer: 'Rajesh Kumar',
      duration: '90 Mins',
      capacity: '8 / 10 Spots',
      category: 'Strength',
      badgeClass: 'bg-red-500/20 text-red-400 border-red-500/30',
      description: 'Build a massive strength foundation with conventional and sumo deadlift breakdowns, chest-supported rows, and lat pulldowns.',
      intensity: 'High',
      whatToBring: 'Deadlift Socks/Straps, Flat Lifting Shoes, Chalk',
      trainerBio: 'Rajesh Kumar is a competitive powerlifter and strength specialist.'
    },
    {
      id: 'c4',
      day: 'Tuesday',
      time: '05:00 PM - 06:00 PM',
      name: 'Mobility & Core Recovery',
      trainer: 'Priya Sharma',
      duration: '60 Mins',
      capacity: '14 / 20 Spots',
      category: 'Yoga',
      badgeClass: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      description: 'Active recovery session focusing on thoracic spine mobility, hip opening, and deep core stability to prevent injury.',
      intensity: 'Moderate',
      whatToBring: 'Comfortable Stretch Wear, Yoga Mat (optional)',
      trainerBio: 'Priya Sharma is a RYT-500 certified yoga & functional mobility expert.'
    },
    {
      id: 'c5',
      day: 'Wednesday',
      time: '07:00 AM - 08:30 AM',
      name: 'Leg Day Destruction',
      trainer: 'Anik Ghosh (IFBB Pro)',
      duration: '90 Mins',
      capacity: '11 / 15 Spots',
      category: 'Strength',
      badgeClass: 'bg-red-500/20 text-red-400 border-red-500/30',
      description: 'Brutal leg hypertrophy session including hack squats, Bulgarian split squats, and hamstrings leg curls with strict tempo controls.',
      intensity: 'Extreme',
      whatToBring: 'Knee Sleeves, Squat Shoes, Intraworkout Electrolytes',
      trainerBio: 'Anik Ghosh is Kolkata’s premier IFBB Pro athlete.'
    },
    {
      id: 'c6',
      day: 'Wednesday',
      time: '06:00 PM - 07:00 PM',
      name: 'Endurance Cardio Sled Sprints',
      trainer: 'Vikram Rao',
      duration: '60 Mins',
      capacity: '9 / 12 Spots',
      category: 'Cardio',
      badgeClass: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
      description: 'Low-impact cardiovascular conditioning utilizing turf sled pushes, rowing ergs, and assault bike sprints for Vo2 max enhancement.',
      intensity: 'High',
      whatToBring: 'Running Shoes, Towel, Hydration Bottle',
      trainerBio: 'Vikram Rao is a CrossFit Level 2 coach and endurance trainer.'
    },
    {
      id: 'c7',
      day: 'Thursday',
      time: '07:00 AM - 08:30 AM',
      name: 'Shoulders & Arm Pump',
      trainer: 'Anik Ghosh (IFBB Pro)',
      duration: '90 Mins',
      capacity: '13 / 15 Spots',
      category: 'Strength',
      badgeClass: 'bg-red-500/20 text-red-400 border-red-500/30',
      description: '3D deltoid hypertrophy and bicep/tricep supersets engineered to maximize blood flow and muscle bell density.',
      intensity: 'High',
      whatToBring: 'Wrist Wraps, Water Bottle, Sweat Towel',
      trainerBio: 'Anik Ghosh is Kolkata’s premier IFBB Pro athlete.'
    },
    {
      id: 'c8',
      day: 'Friday',
      time: '06:00 PM - 07:00 PM',
      name: 'Full Body HIIT Melt',
      trainer: 'Vikram Rao',
      duration: '60 Mins',
      capacity: '10 / 15 Spots',
      category: 'HIIT',
      badgeClass: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      description: 'End-of-week metabolic workout to burn maximum fat heading into the weekend. Dynamic bodyweight and dumbbell circuit combinations.',
      intensity: 'High',
      whatToBring: 'Cross Trainers, Sweat Towel',
      trainerBio: 'Vikram Rao is head of HIIT & conditioning at Iron Temple.'
    }
  ];

  const filteredClasses = activeFilter === 'All'
    ? classScheduleData
    : classScheduleData.filter((item) => item.category.toLowerCase() === activeFilter.toLowerCase());

  // Keyboard listener for Escape key modal close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedClass(null);
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
            icon={Calendar}
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
            <span className="text-[#c8ff00]">Classes</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight">
            Class <span className="text-[#c8ff00]">Schedule</span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Reserve your slot for heavy lifting masterclasses, high-intensity HIIT, and mobility yoga.
          </p>
        </div>
      </section>

      {/* Schedule Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center space-x-2 sm:space-x-3 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-200 shrink-0 ${
                activeFilter === cat
                  ? 'bg-[#c8ff00] text-black shadow-[0_0_20px_rgba(200,255,0,0.3)]'
                  : 'bg-[#141414] border border-white/10 text-neutral-400 hover:text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Desktop Schedule Table (Hidden on Mobile) */}
        <div className="hidden md:block overflow-hidden rounded-3xl border border-white/10 bg-[#141414] shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0a0a0a] border-b border-white/10 text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                <th className="py-4 px-6">Day & Time</th>
                <th className="py-4 px-6">Class Name</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6">Trainer</th>
                <th className="py-4 px-6">Duration</th>
                <th className="py-4 px-6">Capacity</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              <AnimatePresence mode="popLayout">
                {filteredClasses.map((item) => (
                  <motion.tr
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onClick={() => setSelectedClass(item)}
                    className="hover:bg-white/[0.03] transition-colors cursor-pointer group"
                  >
                    <td className="py-5 px-6 font-semibold">
                      <div className="text-white font-bold">{item.day}</div>
                      <div className="text-xs text-neutral-400 flex items-center gap-1 mt-0.5">
                        <Clock className="w-3.5 h-3.5 text-[#c8ff00]" />
                        <span>{item.time}</span>
                      </div>
                    </td>

                    <td className="py-5 px-6 font-bold text-white group-hover:text-[#c8ff00] transition-colors">
                      {item.name}
                    </td>

                    <td className="py-5 px-6">
                      <span className={`inline-block text-xs font-extrabold uppercase px-3 py-1 rounded-full border ${item.badgeClass}`}>
                        {item.category}
                      </span>
                    </td>

                    <td className="py-5 px-6 text-neutral-300 font-medium">
                      {item.trainer}
                    </td>

                    <td className="py-5 px-6 text-neutral-400 font-medium">
                      {item.duration}
                    </td>

                    <td className="py-5 px-6 text-neutral-400 font-medium">
                      {item.capacity}
                    </td>

                    <td className="py-5 px-6 text-right" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => setSelectedClass(item)}
                        className="py-2 px-5 bg-[#c8ff00] text-black font-extrabold text-xs rounded-full hover:bg-[#b2e600] transition-colors shadow-md"
                      >
                        Book Now
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {/* Mobile Stacked Cards (Visible only on Mobile) */}
        <div className="md:hidden space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredClasses.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onClick={() => setSelectedClass(item)}
                className="bg-[#141414] border border-white/10 p-6 rounded-2xl space-y-4 hover:border-[#c8ff00]/50 transition-all cursor-pointer shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase text-[#c8ff00] tracking-wider">
                    {item.day}
                  </span>
                  <span className={`text-xs font-extrabold uppercase px-3 py-1 rounded-full border ${item.badgeClass}`}>
                    {item.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mt-1">
                    <Clock className="w-3.5 h-3.5 text-[#c8ff00]" />
                    <span>{item.time} ({item.duration})</span>
                  </div>
                </div>

                <div className="text-xs text-neutral-300 space-y-1 pt-2 border-t border-white/5">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Coach:</span>
                    <span className="font-semibold">{item.trainer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Capacity:</span>
                    <span className="font-semibold">{item.capacity}</span>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedClass(item);
                  }}
                  className="w-full py-3 bg-[#c8ff00] text-black font-extrabold text-xs rounded-full text-center hover:bg-[#b2e600] transition-colors"
                >
                  Book Now
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </AnimatedSection>

      {/* Class Detail Modal */}
      <AnimatePresence>
        {selectedClass && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8"
            onClick={() => setSelectedClass(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative max-w-2xl w-full bg-[#141414] border border-white/20 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedClass(null)}
                aria-label="Close Modal"
                className="absolute top-4 right-4 p-2 rounded-full bg-[#0a0a0a] border border-white/20 text-white hover:text-[#c8ff00] transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-extrabold uppercase px-3 py-1 rounded-full border ${selectedClass.badgeClass}`}>
                    {selectedClass.category}
                  </span>
                  <span className="text-xs font-bold text-[#c8ff00] bg-[#c8ff00]/10 px-3 py-1 rounded-full border border-[#c8ff00]/30">
                    Intensity: {selectedClass.intensity}
                  </span>
                </div>

                <h2 className="text-3xl font-black text-white">{selectedClass.name}</h2>

                <div className="flex items-center gap-4 text-xs font-bold text-neutral-400">
                  <div className="flex items-center gap-1.5 text-white">
                    <Clock className="w-4 h-4 text-[#c8ff00]" />
                    <span>{selectedClass.day} @ {selectedClass.time}</span>
                  </div>
                  <span>•</span>
                  <span>{selectedClass.duration}</span>
                </div>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed border-y border-white/10 py-4">
                {selectedClass.description}
              </p>

              {/* What to Bring */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
                  What to Bring:
                </span>
                <p className="text-xs text-neutral-300 bg-[#0a0a0a] border border-white/10 p-3 rounded-xl">
                  {selectedClass.whatToBring}
                </p>
              </div>

              {/* Trainer Bio Blurb */}
              <div className="space-y-1 bg-[#0a0a0a]/50 p-4 rounded-xl border border-white/5">
                <span className="text-xs font-bold text-[#c8ff00] uppercase tracking-wider block">
                  Coach Profile: {selectedClass.trainer}
                </span>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {selectedClass.trainerBio}
                </p>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(
                    `Hi Anik Dada! I want to book a spot for the ${selectedClass.name} class on ${selectedClass.day} (${selectedClass.time}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#c8ff00] text-black font-extrabold text-sm py-3.5 rounded-full hover:bg-[#b2e600] transition-all hover:scale-105 shadow-[0_0_20px_rgba(200,255,0,0.3)]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Book This Class on WhatsApp</span>
                </a>
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
