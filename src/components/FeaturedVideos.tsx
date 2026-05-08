import { motion } from 'framer-motion';
import { Play, Calendar, Eye } from 'lucide-react';
import React, { useRef, useState } from 'react';

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

function VideoCard({ video, index }: { video: any, index: number }) {
  const openVideo = (id: string) => {
    window.open(`https://www.youtube.com/watch?v=${id}`, '_blank');
  };

  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation limits (max 10 degrees)
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      key={video.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
        z: rotateX || rotateY ? 50 : 0
      }}
      transition={{ 
        delay: rotateX || rotateY ? 0 : index * 0.1, 
        duration: rotateX || rotateY ? 0.1 : 0.8,
        ease: rotateX || rotateY ? "linear" : [0.16, 1, 0.3, 1] 
      }}
      style={{ transformStyle: "preserve-3d" }}
      className="group cursor-pointer border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] rounded-[2rem] overflow-hidden drop-shadow-2xl md:hover:shadow-[0_20px_50px_rgba(255,0,21,0.1)]"
      onClick={() => openVideo(video.id)}
    >
      <div 
        className="relative aspect-[16/10] overflow-hidden border-b border-white/5 bg-black"
        style={{ transform: "translateZ(30px)" }}
      >
        <img 
          src={video.image} 
          alt={video.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 mix-blend-luminosity group-hover:mix-blend-normal"
        />
        
        <div className="absolute top-4 left-4" style={{ transform: "translateZ(40px)" }}>
          <span className="px-4 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-[8px] font-bold uppercase tracking-[0.2em] rounded-full text-brand-red">
            {video.type}
          </span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-brand-red/10 backdrop-blur-[2px]">
           <div className="w-16 h-16 glossy-red rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform shadow-[0_10px_30px_rgba(255,51,51,0.5)]" style={{ transform: "translateZ(60px)" }}>
              <Play className="text-white fill-white ml-1" size={24} />
           </div>
        </div>
      </div>
      <div className="p-6" style={{ transform: "translateZ(20px)" }}>
        <h3 className="text-lg md:text-xl mb-4 group-hover:text-brand-red transition-colors line-clamp-2 md:line-clamp-3 font-display tracking-tight text-white/90">
          {video.title}
        </h3>
        <div className="flex items-center gap-4 md:gap-6 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
          <span className="flex items-center gap-2"><Eye size={12} className="text-brand-red" /> {video.views}</span>
          <span className="flex items-center gap-2"><Calendar size={12} className="text-brand-red" /> {video.date}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedVideos() {
  return (
    <section id="videos" className="py-24 md:py-32 overflow-hidden border-t border-white/[0.02]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-6 max-w-7xl mx-auto px-0"
        >
          <div className="max-w-2xl relative">
            <h2 className="text-[12vw] sm:text-[4.5rem] md:text-[6rem] leading-[0.9] tracking-[-0.04em] font-display font-light text-white uppercase">
              LATEST <br className="hidden sm:block" /> 
              <span className="font-black text-brand-red text-glow-red">TRANSMISSIONS</span>
            </h2>
          </div>
          <a 
            href="https://youtube.com/@FalconShadowYT" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-brand-red hover:border-brand-red hover:text-white transition-all mb-2 shrink-0 md:self-end self-start"
          >
            Protocol Access
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto px-0" style={{ perspective: 1000 }}>
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
