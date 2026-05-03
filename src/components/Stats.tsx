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
    <section className="py-24 relative overflow-hidden bg-brand-dark border-y border-white/[0.03]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group p-8 border border-white/5 rounded-[24px] hover:border-brand-red/30 hover:bg-white/[0.02] transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/[0.03] rounded-full blur-[40px] pointer-events-none group-hover:bg-brand-red/[0.08] transition-colors" />
              
              <div className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/30 mb-8 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-white/20 group-hover:bg-brand-red transition-colors" />
                {stat.label}
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-[-0.04em] text-white group-hover:text-glow-red transition-all">
                {stat.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
