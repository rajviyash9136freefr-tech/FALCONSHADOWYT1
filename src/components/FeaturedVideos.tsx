import { motion } from 'motion/react';
import { Play, Calendar, Eye } from 'lucide-react';

const videos = [
  {
    id: 'LjzAO0ZjkJU',
    title: 'I Opened 100+ GIFTS In PLS DONATE! ( Insane Gifts! 😱 )',
    type: 'Viral',
    views: '25K',
    date: 'Recent',
    image: 'https://img.youtube.com/vi/LjzAO0ZjkJU/maxresdefault.jpg',
  },
  {
    id: 'YEeX0KiQ2Y0',
    title: 'How To Get DARK SKY and TEXTURES In Roblox Rivals!',
    type: 'Trending',
    views: '18K',
    date: 'New',
    image: 'https://img.youtube.com/vi/YEeX0KiQ2Y0/maxresdefault.jpg',
  },
  {
    id: '0lnfVacs4qY',
    title: 'I hosted My Birthday Donation MADNESS... 💸😱',
    type: 'Featured',
    views: '32K',
    date: 'New',
    image: 'https://img.youtube.com/vi/0lnfVacs4qY/maxresdefault.jpg',
  },
  {
    id: 'OIW5HwMmRq0',
    title: 'I Played THE FORGE in Roblox!',
    type: 'Strategic',
    views: '15K',
    date: 'Recent',
    image: 'https://img.youtube.com/vi/OIW5HwMmRq0/maxresdefault.jpg',
  },
  {
    id: '6Jb3XLM8NXo',
    title: 'How To Get STRETCHED RESOLUTION In Roblox Rivals',
    type: 'Legendary',
    views: '45K',
    date: 'Classic',
    image: 'https://img.youtube.com/vi/6Jb3XLM8NXo/maxresdefault.jpg',
  },
  {
    id: 'tZeVZHi2ht8',
    title: 'Can We Still Save PLS DONATE?',
    type: 'Achievement',
    views: '12K',
    date: 'Fresh',
    image: 'https://img.youtube.com/vi/tZeVZHi2ht8/maxresdefault.jpg',
  }
];

export default function FeaturedVideos() {
  const openVideo = (id: string) => {
    window.open(`https://www.youtube.com/watch?v=${id}`, '_blank');
  };

  return (
    <section id="videos" className="py-32 overflow-hidden border-t border-white/[0.02]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6 max-w-7xl mx-auto px-4 md:px-0"
        >
          <div className="max-w-2xl relative">
            <h2 className="text-[3rem] sm:text-[4.5rem] md:text-[6rem] leading-[0.9] tracking-[-0.04em] font-display font-light text-white uppercase">
              LATEST <br /> 
              <span className="font-black text-brand-red text-glow-red">TRANSMISSIONS</span>
            </h2>
          </div>
          <a 
            href="https://youtube.com/@FalconShadowYT" 
            target="_blank"
            className="px-8 py-3 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-brand-red hover:border-brand-red hover:text-white transition-all mb-2 shrink-0"
          >
            Protocol Access
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto px-4 md:px-0">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all rounded-[2rem] overflow-hidden"
              onClick={() => openVideo(video.id)}
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/5 transition-all duration-700">
                <img 
                  src={video.image} 
                  alt={video.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 mix-blend-luminosity group-hover:mix-blend-normal"
                />
                
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-[8px] font-bold uppercase tracking-[0.2em] rounded-full text-brand-red">
                    {video.type}
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-brand-red/10 backdrop-blur-[2px]">
                   <div className="w-16 h-16 glossy-red rounded-full flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform shadow-[0_10px_30px_rgba(255,51,51,0.5)]">
                      <Play className="text-white fill-white ml-1" size={24} />
                   </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl mb-4 group-hover:text-brand-red transition-colors line-clamp-2 font-display tracking-tight text-white/90">
                  {video.title}
                </h3>
                <div className="flex items-center gap-6 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                  <span className="flex items-center gap-2"><Eye size={12} className="text-brand-red" /> {video.views}</span>
                  <span className="flex items-center gap-2"><Calendar size={12} className="text-brand-red" /> {video.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
