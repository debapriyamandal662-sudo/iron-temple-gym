import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  ArrowRight,
  Clock,
  User,
  Sparkles,
  Dumbbell,
  Utensils,
  Trophy
} from 'lucide-react';
import { motion } from 'framer-motion';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import PlaceholderImage from '../components/PlaceholderImage';
import AnimatedSection from '../components/AnimatedSection';

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: '5 Biomechanical Rules for Maximum Hypertrophy',
      category: 'Training Science',
      date: 'July 28, 2026',
      readTime: '5 min read',
      author: 'IFBB Pro Anik Ghosh',
      icon: Dumbbell,
      excerpt: 'Learn how adjusting active muscle length, cable angles, and progressive overload periodization can double your arm and chest growth without joint strain.'
    },
    {
      id: 2,
      title: 'Macro Diet Planning for South Asian Physiques',
      category: 'Nutrition Blueprint',
      date: 'July 15, 2026',
      readTime: '7 min read',
      author: 'IFBB Pro Anik Ghosh',
      icon: Utensils,
      excerpt: 'Struggling with stubborn belly fat on a traditional diet? Here is how to structure protein intake, rice/roti carbs, and healthy fats for sustainable fat loss.'
    },
    {
      id: 3,
      title: 'Peak Week Secrets: How IFBB Pros Condition for Stage',
      category: 'Contest Prep',
      date: 'June 30, 2026',
      readTime: '8 min read',
      author: 'IFBB Pro Anik Ghosh',
      icon: Trophy,
      excerpt: 'An inside look into water manipulation, sodium loading, and carbohydrate front-loading used by competitive bodybuilders in peak week.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <PlaceholderImage
            src="/assets/gym_facility_5.jpg"
            alt="Iron Temple Blog"
            icon={BookOpen}
            aspectRatio="h-full w-full"
            rounded="rounded-none"
            iconSize={120}
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-[#0a0a0a]/40 to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-xs font-semibold text-neutral-400 uppercase tracking-widest">
            <Link to="/" className="hover:text-[#c8ff00] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#c8ff00]">Blog</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            Iron Temple <span className="text-[#c8ff00]">Blog</span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-200 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Science-backed articles on hypertrophy, macro diet planning, and contest prep by IFBB Pro Anik Ghosh.
          </p>
        </div>
      </section>

      {/* 3 Article Cards Grid */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <motion.div
              key={article.id}
              whileHover={{ y: -6 }}
              className="bg-[#141414] border border-white/10 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-[#c8ff00]/50 transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Article Placeholder Image */}
                <div className="overflow-hidden relative">
                  <PlaceholderImage
                    icon={article.icon}
                    aspectRatio="aspect-video"
                    rounded="rounded-none"
                    iconSize={56}
                    label={article.category}
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-[#c8ff00] text-black text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>

                {/* Article Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-xs text-neutral-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#c8ff00]" />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white group-hover:text-[#c8ff00] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="px-6 pb-6 pt-2">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-2 text-xs font-extrabold text-[#c8ff00] uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
