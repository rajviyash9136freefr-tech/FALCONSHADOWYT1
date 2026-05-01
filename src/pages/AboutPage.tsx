import { motion } from 'motion/react';

export default function AboutPage() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 min-h-screen"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 sm:p-14 md:p-20 rounded-[2.5rem] sm:rounded-[3rem] relative overflow-hidden"
          >
            {/* Ambient Background Glows */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10">
              <span className="text-brand-red text-[10px] font-bold uppercase tracking-[0.6em] mb-8 block text-glow-red text-center sm:text-left">
                STRATEGIC_INTEL
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-display mb-8 sm:mb-12 leading-tight uppercase tracking-tighter text-center sm:text-left">
                ABOUT <span className="text-brand-red">ME</span>
              </h2>
              
              <div className="space-y-6 sm:space-y-8 text-white/50 text-sm sm:text-base md:text-xl leading-relaxed font-light">
                <p>
                  I’m <span className="text-white font-medium">FalconShadowYT</span>, a passionate gaming content creator focused on delivering entertaining, high-energy, and engaging content for gamers and viewers who love great gameplay and real creator personality.
                </p>
                
                <p>
                  My channel is built around creating content that people actually enjoy watching—whether it’s gameplay, challenges, reactions, highlights, or community-driven videos. I believe content should be more than just views—it should create a connection with the audience.
                </p>

                <p>
                  I focus on consistency, creativity, and building a strong community around my brand. My goal is to grow not just as a YouTuber, but as a creator people recognize, trust, and remember.
                </p>

                <div className="py-8 px-6 bg-white/[0.02] border-l-4 border-brand-red rounded-r-xl text-white/90 italic font-medium text-lg md:text-2xl tracking-tight">
                  "This is more than just a channel—this is the beginning of a creator brand."
                </div>
                
                <p>
                  Through every upload, I aim to bring better content, stronger entertainment, and a premium creator experience for my audience and future brand collaborations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}
