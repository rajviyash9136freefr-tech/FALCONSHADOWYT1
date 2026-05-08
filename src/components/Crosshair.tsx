import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Crosshair() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      animate={{
        x: mousePos.x - 16,
        y: mousePos.y - 16,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.2 }}
    >
      <div className="relative w-8 h-8 flex items-center justify-center">
        {/* Center dot */}
        <div className={`w-1 h-1 rounded-full bg-white transition-all duration-300 ${isHovering ? 'scale-0' : 'scale-100'}`} />
        
        {/* Crosshair lines */}
        <div className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/50 transition-all duration-300 ${isHovering ? 'h-full bg-white' : 'h-0'}`} />
        <div className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-white/50 transition-all duration-300 ${isHovering ? 'w-full bg-white' : 'w-0'}`} />
        
        {/* Circle surround */}
        <div className={`absolute inset-0 border border-white/30 rounded-full transition-all duration-300 ${isHovering ? 'scale-125 border-white/80' : 'scale-100 opacity-50'}`} />
      </div>
    </motion.div>
  );
}
