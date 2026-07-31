import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, ArrowRight, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, FacebookIcon } from './SocialIcons';

export default function Footer() {
  const [logoError, setLogoError] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#141414] border-t border-white/10 pt-16 pb-8 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group inline-block">
              {!logoError ? (
                <img
                  src="/assets/logo_footer.png"
                  alt="Iron Temple"
                  onError={() => setLogoError(true)}
                  className="h-12 sm:h-14 w-auto object-contain filter drop-shadow-[0_0_15px_rgba(200,255,0,0.15)]"
                />
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-[#c8ff00]/40 flex items-center justify-center text-[#c8ff00]">
                    <Dumbbell className="w-5 h-5" />
                  </div>
                  <span className="text-xl font-extrabold tracking-tight text-white uppercase">
                    Iron <span className="text-[#c8ff00]">Temple</span>
                  </span>
                </div>
              )}
            </Link>
            
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Kolkata's premier fitness destination led by IFBB Pro Anik Ghosh. Dedicated to elite bodybuilding, strength conditioning, and total body transformation.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-white hover:text-[#c8ff00] hover:border-[#c8ff00]/50 transition-all duration-200"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-white hover:text-[#c8ff00] hover:border-[#c8ff00]/50 transition-all duration-200"
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-white hover:text-[#c8ff00] hover:border-[#c8ff00]/50 transition-all duration-200"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-[#c8ff00] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#c8ff00] transition-colors">About Anik Ghosh</Link>
              </li>
              <li>
                <Link to="/trainers" className="hover:text-[#c8ff00] transition-colors">Our Trainers</Link>
              </li>
              <li>
                <Link to="/classes" className="hover:text-[#c8ff00] transition-colors">Class Schedule</Link>
              </li>
              <li>
                <Link to="/membership" className="hover:text-[#c8ff00] transition-colors">Membership Plans</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Programs */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wider uppercase">Programs</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/online-coaching" className="hover:text-[#c8ff00] transition-colors">Online Coaching</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#c8ff00] transition-colors">IFBB Contest Prep</Link>
              </li>
              <li>
                <Link to="/classes" className="hover:text-[#c8ff00] transition-colors">Strength & Conditioning</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#c8ff00] transition-colors">Nutrition Blueprint</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#c8ff00] transition-colors">Fitness Articles & Blog</Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wider uppercase">Newsletter</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Get workout tips, nutrition plans, and exclusive updates directly from IFBB Pro Anik Ghosh.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-[#c8ff00]/10 border border-[#c8ff00]/30 rounded-xl text-[#c8ff00] text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed! Welcome to the Iron Temple inner circle.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#0a0a0a] border border-white/10 focus:border-[#c8ff00] text-white text-sm px-4 py-2.5 rounded-full outline-none transition-colors pr-10 placeholder:text-neutral-600"
                  />
                  <button
                    type="submit"
                    aria-label="Submit newsletter subscription"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#c8ff00] text-black flex items-center justify-center hover:bg-[#b2e600] transition-transform hover:scale-105"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© 2026 Iron Temple. Built by Viberage.</p>
          <div className="flex space-x-6">
            <Link to="/contact" className="hover:text-neutral-400">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-neutral-400">Terms of Service</Link>
            <Link to="/contact" className="hover:text-neutral-400">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
