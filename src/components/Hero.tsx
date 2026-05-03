import { motion } from 'motion/react';
import { Youtube, ArrowRight, Play, MessageSquare } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-red opacity-[0.06] rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] pointer-events-none mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center text-center max-w-7xl mx-auto"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-brand-red opacity-50" />
            <span className="text-[10px] md:text-sm uppercase tracking-[0.4em] font-black text-brand-red">Creator / Architect</span>
            <span className="w-12 h-[1px] bg-brand-red opacity-50" />
          </div>

          <motion.div 
            style={{ perspective: 1000 }}
            className="flex flex-col items-center justify-center mb-10 w-full"
          >
            <h1 className="text-[12vw] leading-[0.8] tracking-[-0.08em] uppercase font-display font-black text-white drop-shadow-2xl">
              FALCON
            </h1>
            <h1 className="text-[12vw] leading-[0.8] tracking-[-0.08em] uppercase font-display font-black text-brand-red text-glow-red mt-[-2vw]">
              SHADOWYT
            </h1>
          </motion.div>

          <p className="max-w-xl mx-auto text-white/50 text-xs md:text-base font-light mb-14 tracking-[0.1em] leading-relaxed uppercase px-4 border-l border-white/10 pl-6 text-left">
            The architect behind premium Roblox integration. <br className="hidden sm:block" />
            Specializing in high-impact <span className="text-white font-medium">Roblox Rivals</span> and <span className="text-white/80">Pls Donate</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto px-10 sm:px-0">
            <motion.a
              href="https://www.youtube.com/@FalconShadowYT/featured"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 py-5 glossy-red text-white font-display text-sm uppercase tracking-[0.2em] rounded-full flex items-center justify-center gap-3"
            >
              Enter The Network <Youtube size={18} />
            </motion.a>

            <motion.a
              href="/work-with-me#contact"
              whileHover={{ scale: 1.05 }}
              className="w-full sm:w-auto px-10 py-5 border border-white/20 hover:bg-white inset-0 hover:text-black transition-colors text-white font-display text-sm uppercase tracking-[0.2em] rounded-full text-center"
            >
              Collaborate
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Stats Quick Look - Desktop/Tablet Only */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-5xl px-12 hidden md:flex items-center justify-between border-t border-white/5 pt-8">
        {[
          { label: 'Subscribers', value: '10K+' },
          { label: 'Ratio', value: '14.2%' },
          { label: 'Network', value: '#124' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl font-display font-light text-white mb-1">{stat.value}</div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
