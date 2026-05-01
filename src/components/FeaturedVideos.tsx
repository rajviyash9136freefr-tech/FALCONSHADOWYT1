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
    <section id="videos" className="py-20 bg-brand-dark/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 max-w-6xl mx-auto px-4 md:px-0"
        >
          <div className="max-w-lg">
            <span className="text-brand-red text-[10px] font-bold uppercase tracking-[0.5em] mb-3 block">
              Digital Artifacts
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl tracking-[-0.05em] font-display text-white font-black uppercase">
              LATEST <br /> <span className="text-white/10">TRANSMISSIONS</span>
            </h2>
          </div>
          <a 
            href="https://youtube.com/@FalconShadowYT" 
            target="_blank"
            className="px-6 py-2 rounded-full border border-white/10 text-[9px] font-bold uppercase tracking-[0.3em] hover:bg-white/5 transition-all mb-2 shrink-0"
          >
            Protocol Access
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto px-4 md:px-0">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
              onClick={() => openVideo(video.id)}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] glass-card border-white/5 transition-all duration-700">
                <img 
                  src={video.image} 
                  alt={video.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 opacity-40 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[8px] font-bold uppercase tracking-widest rounded-full">
                    {video.type}
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-12 h-12 glossy-red rounded-full flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform">
                      <Play className="text-white fill-white ml-1" size={20} />
                   </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-base mb-1 group-hover:text-brand-red transition-colors line-clamp-1 font-display tracking-tight uppercase">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-4 text-[8px] font-bold uppercase tracking-[0.2em] text-white/20">
                    <span className="flex items-center gap-1"><Eye size={8} className="text-brand-red" /> {video.views}</span>
                    <span className="flex items-center gap-1"><Calendar size={8} className="text-brand-red" /> {video.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
