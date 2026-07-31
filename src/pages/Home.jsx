import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Dumbbell,
  Users,
  Utensils,
  Globe,
  Trophy,
  Check,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Flame,
  Activity,
  HeartPulse,
  Clock,
  User,
  Star,
  Heart,
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import PlaceholderImage from '../components/PlaceholderImage';
import AnimatedSection from '../components/AnimatedSection';
import { InstagramIcon } from '../components/SocialIcons';

export default function Home() {
  const whatsappUrl = "https://wa.me/919876543210?text=Hi%20Anik%20Dada";
  const instagramProfileUrl = "https://www.instagram.com/ifbb_pro_anik/";

  // Testimonial State
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rahul Mukhopadhyay",
      role: "IT Executive, Salt Lake",
      avatarImage: "/assets/ig_post_4.jpg",
      story: "Training under Anik Dada transformed not just my physique, but my entire mindset. In 6 months, I dropped 14kg of fat and gained clean muscularity. The environment at Iron Temple is unmatched in Kolkata!",
      results: "-14kg Fat / +4kg Muscle"
    },
    {
      name: "Sneha Sen",
      role: "Architect & Fitness Enthusiast",
      avatarImage: "/assets/trainer_priya.jpg",
      story: "The personal attention to form and nutrition planning at Iron Temple is world-class. Being coached by an actual IFBB Pro means no generic routines — everything is targeted for peak results.",
      results: "Complete Body Recomp"
    },
    {
      name: "Debashis Banerjee",
      role: "Competitive Powerlifter",
      avatarImage: "/assets/trainer_rajesh.jpg",
      story: "Iron Temple has the best heavy machinery and serious lifting culture in West Bengal. Anik Dada helped me correct my deadlift lockouts and add 35kg to my total in one prep cycle.",
      results: "+35kg Powerlifting Total"
    }
  ];

  const instagramPosts = [
    {
      id: 1,
      image: '/assets/ig_post_1.jpg',
      caption: 'IFBB Pro stage conditioning check. Hard work & science always win! #IFBBPro #AnikGhosh',
      likes: '4.2k',
      comments: '312'
    },
    {
      id: 2,
      image: '/assets/ig_post_2.jpg',
      caption: '260kg deadlift lockouts at Iron Temple Kolkata. Serious work only! #Powerlifting',
      likes: '3.8k',
      comments: '245'
    },
    {
      id: 3,
      image: '/assets/ig_post_3.jpg',
      caption: 'Macro prep for client contest week. Fuel your gains correctly. #NutritionBlueprint',
      likes: '2.9k',
      comments: '188'
    },
    {
      id: 4,
      image: '/assets/ig_post_4.jpg',
      caption: '6-month transformation spotlight! 14kg fat loss down. Proud of you @rahul_m #IronTemple',
      likes: '5.1k',
      comments: '402'
    },
    {
      id: 5,
      image: '/assets/ig_post_5.jpg',
      caption: 'Arm hypertrophy superset protocol breakdown. Save this workout! #GymMotivation',
      likes: '3.5k',
      comments: '210'
    },
    {
      id: 6,
      image: '/assets/ig_post_6.jpg',
      caption: 'Team Iron Temple Kolkata morning crew after leg day destruction! #KolkataGym',
      likes: '4.9k',
      comments: '350'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0a0a0a]">
        {/* Uncropped High-Res Hero Background - Anik Ghosh Olympia Stage */}
        <div className="absolute inset-0 z-0 overflow-hidden flex justify-center lg:justify-end">
          {/* Desktop & Laptop: Right-aligned portrait framing so face & upper body fit 100% within screen height */}
          <div className="relative w-full lg:w-7/12 h-full">
            <PlaceholderImage
              src="/assets/anik_olympia_stage.jpg"
              alt="IFBB Pro Anik Ghosh Olympia Stage"
              icon={Dumbbell}
              aspectRatio="h-full w-full"
              rounded="rounded-none"
              iconSize={140}
              className="w-full h-full object-cover object-top filter brightness-[0.88] contrast-110"
            />
            {/* Horizontal Dark Gradient Fade from Left to Right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent hidden lg:block" />
            {/* Top & Bottom Subtle Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/40 to-[#0a0a0a]" />
          </div>

          {/* Radial Neon Glow Accent */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,255,0,0.08)_0%,transparent_65%)] pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141414]/90 border border-[#c8ff00]/40 text-[#c8ff00] text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-[0_0_25px_rgba(200,255,0,0.15)] backdrop-blur-md"
          >
            <Trophy className="w-4 h-4 text-[#c8ff00]" />
            <span>Kolkata's premier IFBB Pro Destination</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.08] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]"
          >
            Train Like a Pro. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#c8ff00] to-[#b2e600]">
              Transform Your Life.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-neutral-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
          >
            Kolkata's premier fitness destination by IFBB Pro Anik Ghosh. Science-based hypertrophy, strength conditioning, and elite contest prep.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <Link
              to="/membership"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#c8ff00] text-black font-extrabold text-base px-8 py-4 rounded-full hover:bg-[#b2e600] transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(200,255,0,0.4)] active:scale-95"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#141414]/90 border border-white/20 text-white font-bold text-base px-8 py-4 rounded-full hover:border-[#c8ff00] hover:text-[#c8ff00] transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { label: 'Years Experience', val: '10+' },
              { label: 'Transformations', val: '5000+' },
              { label: 'Certifications', val: 'IFBB Pro' },
              { label: 'Pro Competitors', val: '50+' },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-[#141414]/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl text-center group hover:border-[#c8ff00]/40 transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl font-black text-[#c8ff00] group-hover:scale-105 transition-transform">
                  {stat.val}
                </div>
                <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT SNIPPET SECTION */}
      <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Real Anik Portrait Photo */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#c8ff00]/20 to-emerald-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-500" />
            <PlaceholderImage
              src="/assets/anik_gym_workout.jpg"
              alt="IFBB Pro Anik Ghosh Training"
              icon={Trophy}
              aspectRatio="aspect-[4/5]"
              rounded="rounded-3xl"
              iconSize={72}
              label="IFBB Pro Anik Ghosh"
              className="w-full relative z-10 border-white/10 shadow-2xl object-top"
            />
            <div className="absolute bottom-4 left-4 z-20 bg-[#141414]/90 border border-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-xs text-[#c8ff00] font-bold">
              ★ Head Coach & Founder
            </div>
          </div>

          {/* Right Column: Text & CTA */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-white/10 text-xs font-semibold text-[#c8ff00]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Master Coach Profile</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight">
              Meet <span className="text-[#c8ff00]">Anik Ghosh</span>
            </h2>

            <p className="text-neutral-300 leading-relaxed text-base sm:text-lg">
              Anik Ghosh is Kolkata’s premier IFBB Pro Athlete and Head Strength Coach, bringing over a decade of elite competitive bodybuilding and body transformation expertise.
            </p>

            <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
              At Iron Temple, Anik Dada personally designs biomechanically sound workout regimes and precise macro nutrition frameworks tailored specifically to South Asian physiques for sustainable peak condition.
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#c8ff00] font-bold text-base hover:text-white transition-colors group"
              >
                <span>Know More About Anik's Journey</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 3. SERVICES SECTION */}
      <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 bg-[#0a0a0a]">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#c8ff00] font-bold">
            World-Class Training Modules
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Our Elite Services
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            From beginner strength foundations to IFBB Pro stage conditioning, explore our tailored programs.
          </p>
        </div>

        {/* 4 Cards in a row (stacks on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Dumbbell,
              title: "Personal Training",
              desc: "One-on-one direct coaching with custom progressive overload tracking and form correction."
            },
            {
              icon: Users,
              title: "Group Classes",
              desc: "High-intensity group sessions designed to burn fat, build stamina, and boost camaraderie."
            },
            {
              icon: Utensils,
              title: "Nutrition Coaching",
              desc: "Customized macro breakdowns, meal timing, and supplementation plans tailored to your goals."
            },
            {
              icon: Globe,
              title: "Online Coaching",
              desc: "Global 1-on-1 virtual training under Anik Dada with weekly video check-ins and form reviews."
            }
          ].map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="group relative bg-[#141414] border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:border-[#c8ff00]/40 transition-all duration-300 shadow-xl overflow-hidden"
            >
              <div className="space-y-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-[#c8ff00] group-hover:border-[#c8ff00] group-hover:bg-[#c8ff00]/10 transition-all duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#c8ff00] transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Animated Lime Accent Underline */}
              <div className="mt-8 pt-4 border-t border-white/5 relative">
                <div className="h-0.5 w-0 bg-[#c8ff00] group-hover:w-full transition-all duration-300 ease-out rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* 4. TRAINERS PREVIEW */}
      <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#c8ff00] font-bold">
            Certified Coaching Staff
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Meet the Masters
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Guided by IFBB Pro Anik Ghosh, our coaching staff brings unmatched experience in strength, movement, and mobility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Anik Ghosh - Highlighted Card with Real Photo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="lg:col-span-1 bg-[#141414] border-2 border-[#c8ff00] p-6 rounded-2xl shadow-[0_0_30px_rgba(200,255,0,0.15)] flex flex-col items-center text-center relative overflow-hidden group"
          >
            <div className="absolute top-3 right-3 bg-[#c8ff00] text-black text-[10px] font-black uppercase px-2.5 py-1 rounded-full">
              Head Coach
            </div>

            <div className="w-24 h-24 mb-4 rounded-full p-1 bg-gradient-to-tr from-[#c8ff00] to-emerald-400">
              <PlaceholderImage
                src="/assets/anik_portrait_real.jpg"
                alt="Anik Ghosh"
                icon={Trophy}
                aspectRatio="w-full h-full"
                rounded="rounded-full"
                iconSize={36}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-extrabold text-white">Anik Ghosh</h3>
            <span className="text-xs font-bold text-[#c8ff00] uppercase tracking-wider mb-2">
              IFBB Pro & Head Coach
            </span>
            <p className="text-xs text-neutral-400 mb-4">
              10+ Yrs Exp • Bodybuilding & Contest Prep
            </p>

            <Link
              to="/trainers"
              className="mt-auto w-full py-2 bg-[#c8ff00] text-black font-extrabold text-xs rounded-full hover:bg-[#b2e600] transition-colors text-center"
            >
              Book Session
            </Link>
          </motion.div>

          {/* Trainer Cards with Real Photos */}
          {[
            { name: "Rajesh Kumar", role: "Strength & Powerlifting", exp: "8+ Yrs Experience", icon: Dumbbell, photo: "/assets/trainer_rajesh.jpg" },
            { name: "Priya Sharma", role: "Mobility & Yoga", exp: "6+ Yrs Experience", icon: HeartPulse, photo: "/assets/trainer_priya.jpg" },
            { name: "Vikram Rao", role: "CrossFit & Conditioning", exp: "7+ Yrs Experience", icon: Flame, photo: "/assets/trainer_vikram.jpg" }
          ].map((trainer, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-[#141414] border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center hover:border-white/20 transition-all duration-300 group"
            >
              <div className="w-20 h-20 mb-4 rounded-full overflow-hidden border border-white/10 group-hover:border-[#c8ff00]/50 transition-colors">
                <PlaceholderImage
                  src={trainer.photo}
                  alt={trainer.name}
                  icon={trainer.icon}
                  aspectRatio="w-full h-full"
                  rounded="rounded-full"
                  iconSize={32}
                  className="w-full h-full"
                />
              </div>

              <h3 className="text-lg font-bold text-white">{trainer.name}</h3>
              <span className="text-xs font-semibold text-neutral-400 mb-1">
                {trainer.role}
              </span>
              <p className="text-xs text-neutral-500 mb-4">
                {trainer.exp}
              </p>

              <Link
                to="/trainers"
                className="mt-auto w-full py-2 bg-[#0a0a0a] border border-white/10 text-white font-semibold text-xs rounded-full hover:border-[#c8ff00] hover:text-[#c8ff00] transition-all text-center"
              >
                View Profile
              </Link>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* 5. CLASS SCHEDULE PREVIEW */}
      <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#c8ff00] font-bold">
              Upcoming Sessions
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mt-1">
              Class Schedule
            </h2>
          </div>
          <Link
            to="/classes"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#c8ff00] hover:underline"
          >
            <span>View Full Weekly Calendar</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Horizontal Scroll Cards for Next 3 Days */}
        <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-neutral-800 snap-x">
          {[
            {
              day: "Today",
              name: "Hypertrophy Chest & Arms",
              time: "07:00 AM - 08:30 AM",
              trainer: "Anik Ghosh (IFBB Pro)",
              duration: "90 Mins",
              tag: "Strength",
              tagClass: "bg-red-500/10 text-red-400 border-red-500/30"
            },
            {
              day: "Today",
              name: "High Intensity HIIT Blast",
              time: "06:00 PM - 07:00 PM",
              trainer: "Vikram Rao",
              duration: "60 Mins",
              tag: "HIIT",
              tagClass: "bg-orange-500/10 text-orange-400 border-orange-500/30"
            },
            {
              day: "Tomorrow",
              name: "Heavy Deadlift & Back Focus",
              time: "07:00 AM - 08:30 AM",
              trainer: "Rajesh Kumar",
              duration: "90 Mins",
              tag: "Strength",
              tagClass: "bg-red-500/10 text-red-400 border-red-500/30"
            },
            {
              day: "Tomorrow",
              name: "Mobility & Core Recovery",
              time: "05:00 PM - 06:00 PM",
              trainer: "Priya Sharma",
              duration: "60 Mins",
              tag: "Yoga",
              tagClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
            },
            {
              day: "Day 3",
              name: "Leg Day Destruction",
              time: "07:00 AM - 08:30 AM",
              trainer: "Anik Ghosh (IFBB Pro)",
              duration: "90 Mins",
              tag: "Strength",
              tagClass: "bg-red-500/10 text-red-400 border-red-500/30"
            }
          ].map((cls, idx) => (
            <div
              key={idx}
              className="snap-start shrink-0 w-80 sm:w-96 bg-[#141414] border border-white/10 p-6 rounded-2xl flex flex-col justify-between space-y-6 hover:border-[#c8ff00]/40 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    {cls.day}
                  </span>
                  <span className={`text-xs font-extrabold uppercase px-3 py-1 rounded-full border ${cls.tagClass}`}>
                    {cls.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">{cls.name}</h3>

                <div className="space-y-2 text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#c8ff00]" />
                    <span>{cls.time} ({cls.duration})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#c8ff00]" />
                    <span>Coach: {cls.trainer}</span>
                  </div>
                </div>
              </div>

              <Link
                to="/classes"
                className="w-full py-2.5 bg-[#c8ff00] text-black font-extrabold text-xs rounded-full text-center hover:bg-[#b2e600] transition-colors"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* 6. MEMBERSHIP TEASER */}
      <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#c8ff00] font-bold">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Membership Plans
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            No hidden fees. Pick the commitment level that fits your goals and start training at Iron Temple today.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Monthly Plan */}
          <div className="bg-[#141414] border border-white/10 p-8 rounded-2xl flex flex-col justify-between space-y-8 hover:border-white/20 transition-all">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase text-neutral-400 tracking-wider">
                Monthly Tier
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-black text-white">₹2,000</span>
                <span className="text-sm text-neutral-400">/ month</span>
              </div>

              <ul className="space-y-3.5 text-sm text-neutral-300 pt-4 border-t border-white/10">
                {['Full Gym Floor Access', 'Locker & Shower Facility', 'Initial Fitness Assessment', 'Standard Workout Template'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#c8ff00] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/membership"
              className="w-full py-3.5 bg-[#0a0a0a] border border-white/20 text-white font-extrabold text-sm rounded-full text-center hover:border-[#c8ff00] hover:text-[#c8ff00] transition-colors"
            >
              Join Now
            </Link>
          </div>

          {/* Quarterly Plan - Highlighted "Most Popular" */}
          <div className="bg-[#141414] border-2 border-[#c8ff00] p-8 rounded-2xl flex flex-col justify-between space-y-8 relative shadow-[0_0_40px_rgba(200,255,0,0.15)] transform md:-translate-y-3">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c8ff00] text-black text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
              Most Popular
            </div>

            <div className="space-y-6">
              <span className="text-xs font-bold uppercase text-[#c8ff00] tracking-wider">
                Quarterly Tier
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-black text-white">₹5,500</span>
                <span className="text-sm text-neutral-400">/ 3 months</span>
              </div>

              <ul className="space-y-3.5 text-sm text-neutral-200 pt-4 border-t border-white/10">
                {[
                  'Unlimited Gym Access',
                  '1 Personal Training Session',
                  'Macro Nutrition Blueprint',
                  'Free Guest Pass Every Month',
                  'Locker & Steam Access'
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#c8ff00] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/membership"
              className="w-full py-3.5 bg-[#c8ff00] text-black font-extrabold text-sm rounded-full text-center hover:bg-[#b2e600] transition-all hover:shadow-[0_0_20px_rgba(200,255,0,0.4)]"
            >
              Join Now
            </Link>
          </div>

          {/* Yearly Plan */}
          <div className="bg-[#141414] border border-white/10 p-8 rounded-2xl flex flex-col justify-between space-y-8 hover:border-white/20 transition-all">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase text-neutral-400 tracking-wider">
                Yearly Tier
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-black text-white">₹20,000</span>
                <span className="text-sm text-neutral-400">/ year</span>
              </div>

              <ul className="space-y-3.5 text-sm text-neutral-300 pt-4 border-t border-white/10">
                {[
                  'VIP All-Access Pass',
                  'Monthly Progress Check-ins',
                  'Custom Diet & Supplement Plan',
                  'Free Official Iron Temple Tee',
                  'Priority Class Booking'
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#c8ff00] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/membership"
              className="w-full py-3.5 bg-[#0a0a0a] border border-white/20 text-white font-extrabold text-sm rounded-full text-center hover:border-[#c8ff00] hover:text-[#c8ff00] transition-colors"
            >
              Join Now
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* 7. TESTIMONIALS SECTION */}
      <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/5">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#c8ff00] font-bold">
            Real Transformations
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Client Stories
          </h2>
        </div>

        <div className="relative bg-[#141414] border border-white/10 p-8 sm:p-12 rounded-3xl shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
            {/* Avatar Photo */}
            <div className="w-20 h-20 shrink-0 rounded-full border-2 border-[#c8ff00] overflow-hidden">
              <PlaceholderImage
                src={testimonials[currentTestimonial].avatarImage}
                alt={testimonials[currentTestimonial].name}
                icon={User}
                aspectRatio="w-full h-full"
                rounded="rounded-full"
                iconSize={36}
                className="w-full h-full"
              />
            </div>
            
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-white">
                {testimonials[currentTestimonial].name}
              </h3>
              <p className="text-xs text-neutral-400">
                {testimonials[currentTestimonial].role}
              </p>
              <div className="inline-block mt-2 px-3 py-1 bg-[#c8ff00]/10 border border-[#c8ff00]/30 rounded-full text-xs font-bold text-[#c8ff00]">
                {testimonials[currentTestimonial].results}
              </div>
            </div>
          </div>

          <p className="text-lg text-neutral-300 italic leading-relaxed text-center sm:text-left">
            "{testimonials[currentTestimonial].story}"
          </p>

          {/* Controls */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-white/5">
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentTestimonial === i ? 'bg-[#c8ff00] w-8' : 'bg-white/20'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex space-x-3">
              <button
                onClick={prevTestimonial}
                aria-label="Previous Testimonial"
                className="p-3 rounded-full bg-[#0a0a0a] border border-white/10 text-white hover:text-[#c8ff00] hover:border-[#c8ff00] transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Next Testimonial"
                className="p-3 rounded-full bg-[#0a0a0a] border border-white/10 text-white hover:text-[#c8ff00] hover:border-[#c8ff00] transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 8. INSTAGRAM FEED INTEGRATION */}
      <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c8ff00]">
              <InstagramIcon className="w-4 h-4" />
              <span>Live Instagram Feed</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
              @ifbb_pro_anik
            </h2>
          </div>

          <a
            href={instagramProfileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#141414] border border-[#c8ff00]/40 text-[#c8ff00] font-bold text-xs hover:bg-[#c8ff00] hover:text-black transition-all duration-300"
          >
            <span>Follow Anik Dada on Instagram</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* 6 Real Instagram Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={instagramProfileUrl}
              target="_blank"
              rel="noreferrer"
              className="group bg-[#141414] border border-white/10 rounded-2xl overflow-hidden hover:border-[#c8ff00]/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div className="relative overflow-hidden aspect-square">
                <PlaceholderImage
                  src={post.image}
                  alt={post.caption}
                  aspectRatio="w-full h-full"
                  rounded="rounded-none"
                  className="w-full h-full"
                />

                {/* Hover overlay with likes and comments */}
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center space-y-4">
                  <InstagramIcon className="w-8 h-8 text-[#c8ff00]" />
                  <div className="flex items-center gap-6 text-white font-bold text-sm">
                    <span className="flex items-center gap-1.5">
                      <Heart className="w-4 h-4 text-red-500 fill-current" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="w-4 h-4 text-[#c8ff00]" />
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#141414] border-t border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#c8ff00]">
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>@ifbb_pro_anik</span>
                </div>
                <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </AnimatedSection>

      {/* 9. CTA BANNER */}
      <section className="bg-[#c8ff00] text-black py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-base sm:text-xl font-bold max-w-xl mx-auto text-black/80">
            Join Iron Temple today and get coached by IFBB Pro Anik Ghosh. Limited slots available for personal coaching!
          </p>

          <div className="pt-4">
            <Link
              to="/membership"
              className="inline-flex items-center gap-3 bg-black text-[#c8ff00] font-black text-base px-10 py-4 rounded-full hover:bg-neutral-900 transition-all duration-300 hover:scale-105 shadow-2xl active:scale-95"
            >
              <span>Join Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
