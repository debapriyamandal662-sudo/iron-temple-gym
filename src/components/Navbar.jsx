import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Classes', path: '/classes' },
    { name: 'Membership', path: '/membership' },
    { name: 'Coaching', path: '/online-coaching' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 py-2.5 sm:py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#0a0a0a]/95 via-[#0a0a0a]/60 to-transparent py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Left - Transparent High-Res Logo Mark */}
          <Link to="/" className="flex items-center group py-0.5" aria-label="Iron Temple Home">
            {!logoError ? (
              <img
                src="/assets/logo_navbar.png"
                alt="Iron Temple"
                onError={() => setLogoError(true)}
                className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105 filter drop-shadow-[0_0_15px_rgba(200,255,0,0.15)]"
              />
            ) : (
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#141414] border border-[#c8ff00]/30 flex items-center justify-center text-[#c8ff00] shadow-[0_0_15px_rgba(200,255,0,0.15)] group-hover:border-[#c8ff00]">
                  <Dumbbell className="w-5 h-5 transition-transform group-hover:rotate-45 duration-300" />
                </div>
                <span className="text-xl font-extrabold tracking-tight text-white uppercase">
                  Iron <span className="text-[#c8ff00]">Temple</span>
                </span>
              </div>
            )}
          </Link>

          {/* Desktop Nav Links Center */}
          <nav className="hidden lg:flex items-center space-x-1 bg-[#141414]/60 backdrop-blur-sm border border-white/10 px-4 py-1 rounded-full">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors duration-200 ${
                    isActive ? 'text-[#c8ff00]' : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 bg-white/5 rounded-full -z-10 border border-[#c8ff00]/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Right (Desktop) */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/membership"
              className="inline-flex items-center gap-2 bg-[#c8ff00] text-black font-extrabold text-xs px-5 py-2.5 rounded-full hover:bg-[#b2e600] transition-all duration-200 hover:shadow-[0_0_20px_rgba(200,255,0,0.4)] hover:scale-105 active:scale-95"
            >
              <span>Join Now</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-[#141414] border border-white/10 text-white hover:text-[#c8ff00] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Full Screen Overlay Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto"
          >
            <div className="flex flex-col space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#c8ff00] font-semibold mb-2">
                Navigation
              </span>
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center justify-between text-xl font-bold py-2.5 border-b border-white/5 transition-colors ${
                        isActive ? 'text-[#c8ff00]' : 'text-white hover:text-[#c8ff00]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 text-white/30" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <Link
                to="/membership"
                className="w-full flex items-center justify-center gap-2 bg-[#c8ff00] text-black font-extrabold text-base py-3.5 rounded-full shadow-[0_0_20px_rgba(200,255,0,0.3)]"
              >
                <span>Join Iron Temple Now</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
              <p className="text-center text-xs text-neutral-500">
                Kolkata's Premier IFBB Pro Gym & Training Studio
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
