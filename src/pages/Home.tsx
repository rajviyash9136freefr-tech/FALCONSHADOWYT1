import { motion } from 'motion/react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import FeaturedVideos from '../components/FeaturedVideos';
import Community from '../components/Community';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Stats />
      <FeaturedVideos />
      <Community />
    </motion.main>
  );
}
