import { Link } from 'react-router-dom';
import { Youtube, Mail, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark border-t border-white/[0.03] py-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-brand-red/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-md">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <Youtube className="text-brand-red" size={32} />
              <span className="font-display font-light text-3xl tracking-[-0.04em] text-white">
                FALCON<span className="text-brand-red font-black text-glow-red">SHADOWYT</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-8 font-light">
              High-fidelity digital architect specializing in Roblox ecosystem 
              content and community-driven entertainment.
            </p>
            <a 
              href="mailto:officialfalconshadowyt@gmail.com" 
              className="inline-flex items-center gap-3 bg-white/[0.02] border border-white/10 px-6 py-3 rounded-full text-brand-red font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-black transition-all"
            >
              <Mail size={14} /> officialfalconshadowyt@gmail.com
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div>
              <h4 className="font-display uppercase tracking-[0.3em] font-bold text-[10px] mb-8 text-white/50">Directory</h4>
              <ul className="flex flex-col gap-5">
                <li><Link to="/" className="text-[11px] uppercase tracking-[0.2em] text-white/70 hover:text-brand-red transition-colors font-medium">Nodes</Link></li>
                <li><a href="/#videos" className="text-[11px] uppercase tracking-[0.2em] text-white/70 hover:text-brand-red transition-colors font-medium">Archives</a></li>
                <li><a href="/#community" className="text-[11px] uppercase tracking-[0.2em] text-white/70 hover:text-brand-red transition-colors font-medium">Network</a></li>
                <li><Link to="/about" className="text-[11px] uppercase tracking-[0.2em] text-white/70 hover:text-brand-red transition-colors font-medium">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display uppercase tracking-[0.3em] font-bold text-[10px] mb-8 text-white/50">Legal</h4>
              <ul className="flex flex-col gap-5">
                <li><span className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-medium">Privacy Data</span></li>
                <li><span className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-medium">Terms of Service</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/[0.05]">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <p className="text-[9px] text-white/30 font-bold uppercase tracking-[0.4em]">
              © {new Date().getFullYear()} FALCONSHADOWYT // SECURE TRANSMISSION
            </p>
            <p className="text-[9px] text-brand-red font-bold uppercase tracking-[0.4em]">
              Created by Jay
            </p>
          </div>
          <button 
            onClick={scrollToTop}
            className="text-[9px] text-white/30 font-bold uppercase tracking-[0.4em] hover:text-white transition-all flex items-center gap-2"
          >
            SCROLL_TO_TOP <ChevronUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
