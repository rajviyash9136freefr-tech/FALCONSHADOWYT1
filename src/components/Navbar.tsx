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
    { name: 'Contact Me', path: '/work-with-me', highlight: true },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 w-[92%] sm:w-[95%] max-w-5xl z-50 transition-all duration-700 px-6 py-3 rounded-2xl sm:rounded-full",
        isScrolled 
          ? "bg-black/60 backdrop-blur-3xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-2" 
          : "bg-transparent",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
      )}
    >
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="w-8 h-8 relative shrink-0">
            <div className="absolute inset-0 bg-brand-red blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
            <Youtube className="text-brand-red relative z-10" size={24} />
          </div>
          <span className="font-display text-lg sm:text-xl tracking-[-0.03em] font-black text-white">
            FALCON<span className="text-brand-red">SHADOW</span>YT
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.name}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] font-bold uppercase tracking-[0.25em] transition-all text-white/30 hover:text-white"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-[9px] font-bold uppercase tracking-[0.25em] transition-all",
                  link.highlight 
                    ? "glossy-red text-white px-4 py-1.5 rounded-full hover:scale-105" 
                    : "text-white/30 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

        {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-[110%] left-0 w-full bg-black/90 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-8 md:hidden flex flex-col gap-6 shadow-2xl z-[100]"
          >
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-display font-black uppercase tracking-tight text-white/40 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-display font-black uppercase tracking-tight transition-colors",
                    link.highlight ? "text-brand-red hover:text-brand-red/80" : "text-white/40 hover:text-white"
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
