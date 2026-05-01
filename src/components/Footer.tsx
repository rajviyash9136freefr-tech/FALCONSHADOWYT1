import { Link } from 'react-router-dom';
import { Youtube, Mail, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark border-t border-white/[0.03] py-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-xs">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <Youtube className="text-brand-red" size={20} />
              <span className="font-display text-xl tracking-tighter text-white">
                FALCON<span className="text-brand-red">SHADOW</span>YT
              </span>
            </Link>
            <p className="text-white/20 text-xs leading-relaxed mb-6 font-medium">
              High-fidelity digital architect specializing in Roblox ecosystem 
              content and community-driven entertainment.
            </p>
            <a 
              href="mailto:officialfalconshadowyt@gmail.com" 
              className="flex items-center gap-2 text-brand-red font-bold uppercase tracking-widest text-[9px] hover:text-white transition-colors"
            >
              <Mail size={12} /> officialfalconshadowyt@gmail.com
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-display uppercase tracking-widest text-[10px] mb-5 text-white">Directory</h4>
              <ul className="flex flex-col gap-3">
                <li><Link to="/" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-brand-red transition-colors">Nodes</Link></li>
                <li><a href="#videos" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-brand-red transition-colors">Archives</a></li>
                <li><a href="#community" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-brand-red transition-colors">Network</a></li>
                <li><Link to="/about" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-brand-red transition-colors">About</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/[0.02]">
          <p className="text-[8px] text-white/10 font-bold uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} FALCONSHADOWYT // SECURE TRANSMISSION
          </p>
          <button 
            onClick={scrollToTop}
            className="text-[8px] text-white/10 font-bold uppercase tracking-[0.3em] hover:text-white transition-all flex items-center gap-2"
          >
            SCROLL_TO_TOP <ChevronUp size={10} />
          </button>
        </div>
      </div>
    </footer>
  );
}
