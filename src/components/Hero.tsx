import { motion } from 'motion/react';
import { Youtube, ArrowRight, Play, MessageSquare } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-12 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(255,0,21,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] pointer-events-none mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <motion.div 
            style={{ perspective: 2000 }}
            className="mb-8 flex flex-col items-center"
          >
            <h1 className="text-3xl sm:text-6xl md:text-8xl lg:text-9xl font-display leading-[0.85] tracking-[-0.06em] text-center max-w-5xl text-white font-black drop-shadow-2xl px-4">
              FALCON<span className="text-brand-red">SHADOW</span>YT
            </h1>
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-brand-red to-transparent mt-6 opacity-40 shrink-0" />
          </motion.div>

          <p className="max-w-md mx-auto text-white/30 text-[10px] sm:text-xs md:text-sm font-medium mb-12 tracking-[0.2em] leading-relaxed text-center uppercase px-6">
            Specializing in high-impact <span className="text-white">Roblox Rivals</span> and <span className="text-white/60">Pls Donate</span>. <br className="hidden sm:block" />
            The official interface of the Shadow Army.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-10 sm:px-0">
            <motion.a
              href="https://www.youtube.com/@FalconShadowYT/featured"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 glossy-red text-white font-display text-sm uppercase tracking-[0.2em] rounded-xl flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(255,0,21,0.2)]"
            >
              YouTube <Youtube size={18} />
            </motion.a>

            <motion.a
              href="/work-with-me#contact"
              whileHover={{ scale: 1.05 }}
              className="w-full sm:w-auto px-8 py-4 border border-white/10 glass-card text-white font-display text-sm uppercase tracking-[0.2em] rounded-xl backdrop-blur-md text-center"
            >
              BRAND COLLAB
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Stats Quick Look - Desktop/Tablet Only */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10">
        {[
          { label: 'Subscribers', value: '10K+' },
          { label: 'Ratio', value: '14.2%' },
          { label: 'Network', value: '#124' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-lg font-display text-white/80">{stat.value}</div>
            <div className="text-[7px] uppercase tracking-[0.3em] text-white/20 font-bold">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
