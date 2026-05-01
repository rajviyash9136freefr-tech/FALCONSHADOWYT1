import { motion } from 'motion/react';
import { Users, Eye, TrendingUp, Award } from 'lucide-react';

const stats = [
  { label: 'Subscribers', value: '10.2K', icon: Users, color: 'text-brand-red' },
  { label: 'Total Views', value: '4,041,139', icon: Eye, color: 'text-white' },
  { label: 'Avg Engagement', value: '14.2%', icon: TrendingUp, color: 'text-white' },
  { label: 'Strategic Intel', value: 'ACTIVE', icon: Award, color: 'text-brand-red' },
];

export default function Stats() {
  return (
    <section className="py-12 border-y border-white/[0.05] bg-black/40 backdrop-blur-3xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center lg:items-start group p-4 rounded-2xl transition-all hover:bg-white/[0.02]"
            >
              <div className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20 mb-2 flex items-center gap-2 group-hover:text-brand-red transition-colors">
                <stat.icon size={10} /> {stat.label}
              </div>
              <div className="text-3xl md:text-4xl font-display font-black tracking-tighter group-hover:text-glow-red transition-all text-white">
                {stat.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
