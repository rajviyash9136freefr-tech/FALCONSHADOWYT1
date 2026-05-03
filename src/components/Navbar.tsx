import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Youtube, Monitor, MessageSquare, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Blur when scrolled
      setIsScrolled(currentScrollY > 50);

      // Fade away when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Fade away
      } else {
        setIsVisible(true); // Blur/Fade back in
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Videos', path: '/#videos' },
    { name: 'Community', path: '/#community' },
    { name: 'About', path: '/about' },
    { name: 'Donate', path: 'https://www.paypal.com/paypalme/FalconShadowYT', external: true },
    { name: 'Contact', path: '/work-with-me', highlight: true },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-700 rounded-full",
        isScrolled 
          ? "bg-black/80 backdrop-blur-3xl border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.8)] py-3 px-6" 
          : "bg-transparent py-4 px-6",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
      )}
    >
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="w-10 h-10 relative shrink-0 flex items-center justify-center bg-white/[0.02] border border-white/10 rounded-full group-hover:border-brand-red/50 transition-colors">
            <div className="absolute inset-0 bg-brand-red blur-xl opacity-0 group-hover:opacity-30 transition-opacity rounded-full" />
            <Youtube className="text-brand-red relative z-10" size={20} />
          </div>
          <span className="font-display text-xl sm:text-2xl tracking-[-0.04em] font-light text-white uppercase hidden sm:block">
            FALCON<span className="text-brand-red font-black">SHADOWYT</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.name}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.2em] transition-all text-white/50 hover:text-white rounded-full hover:bg-white/[0.03]"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.2em] transition-all rounded-full",
                  link.highlight 
                    ? "bg-white text-black hover:bg-brand-red hover:text-white" 
                    : "text-white/50 hover:text-white hover:bg-white/[0.03]"
                )}
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 rounded-full hover:bg-white/5 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

        {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-[120%] left-0 w-full bg-black/95 backdrop-blur-3xl border border-white/5 rounded-[2rem] p-8 md:hidden flex flex-col gap-6 shadow-[0_40px_80px_rgba(0,0,0,0.8)] z-[100]"
          >
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-display font-light uppercase tracking-widest text-white/50 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-xl font-display uppercase tracking-widest transition-colors",
                    link.highlight ? "text-brand-red font-black text-glow-red" : "text-white/50 hover:text-white font-light"
                  )}
                >
                  {link.name}
                </Link>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
