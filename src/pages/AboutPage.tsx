import { motion } from 'motion/react';

export default function AboutPage() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 min-h-screen relative overflow-hidden"
    >
      <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-brand-red opacity-[0.03] rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between mb-24 items-end border-b border-white/[0.05] pb-12">
          <div className="max-w-2xl">
            <span className="text-brand-red text-[11px] font-bold uppercase tracking-[0.5em] mb-4 block">
              Strategic_Intel
            </span>
            <h2 className="text-[3.5rem] sm:text-[5rem] md:text-[7rem] leading-[0.85] tracking-[-0.04em] font-display font-light text-white uppercase">
              ABOUT <br /> 
              <span className="font-black text-brand-red text-glow-red">ME</span>
            </h2>
          </div>
          <div className="mt-8 md:mt-0 text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 text-right">
            File_Ref: 0042.8
            <br />
            Status: ACTIVE
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-24">
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] rounded-[3rem] border border-white/10 bg-white/[0.02] overflow-hidden relative">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="p-10 text-[9px] uppercase tracking-[0.4em] text-white/20 absolute bottom-0">
                Visual documentation missing...
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/[0.05]">
              <p className="text-[10px] font-display uppercase tracking-[0.4em] text-brand-red font-bold">
                Created by Jay
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="space-y-8 sm:space-y-12 text-white/50 text-base sm:text-lg md:text-[22px] leading-[1.8] font-light max-w-2xl">
              <p>
                I’m <span className="text-white font-medium">FalconShadowYT</span>, a passionate gaming content creator focused on delivering entertaining, high-energy, and engaging content for gamers and viewers who love great gameplay and real creator personality.
              </p>
              
              <p>
                My channel is built around creating content that people actually enjoy watching—whether it’s gameplay, challenges, reactions, highlights, or community-driven videos. I believe content should be more than just views—it should create a connection with the audience.
              </p>

              <p>
                I focus on consistency, creativity, and building a strong community around my brand. My goal is to grow not just as a YouTuber, but as a creator people recognize, trust, and remember.
              </p>

              <div className="my-16 py-12 px-10 bg-white/[0.02] border-l-[3px] border-brand-red shadow-[inset_0_0_80px_rgba(255,255,255,0.01)] text-white/90 italic font-light text-2xl md:text-3xl tracking-tight leading-[1.4]">
                "This is more than just a channel—this is the beginning of a creator brand."
              </div>
              
              <p>
                Through every upload, I aim to bring better content, stronger entertainment, and a premium creator experience for my audience and future brand collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
