import { motion } from 'motion/react';
import { Youtube, Instagram, Twitter, Send, MessageSquare, CreditCard, Gamepad2 } from 'lucide-react';
import { cn } from '../lib/utils';

const socials = [
  { name: 'YouTube', icon: Youtube, link: 'https://www.youtube.com/@FalconShadowYT', color: 'hover:text-[#FF0000]' },
  { name: 'Discord Server', icon: MessageSquare, link: 'https://discord.gg/KSfVskGH', color: 'hover:text-[#5865F2]' },
  { name: 'Donations', icon: CreditCard, link: 'https://www.paypal.com/paypalme/FalconShadowYT', color: 'hover:text-brand-red' },
  { name: 'Roblox Profile', icon: Gamepad2, link: 'https://www.roblox.com/users/3650015750/profile', color: 'hover:text-[#00A2FF]' },
  { name: 'Owner Profile', icon: Send, link: 'https://discord.com/users/1040666940689104918', color: 'hover:text-white' },
];

export default function Community() {
  return (
    <section id="community" className="py-20 bg-brand-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-red text-[11px] font-bold uppercase tracking-[0.5em] mb-4 block">
            Infrastructure
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white uppercase tracking-[-0.04em]">
            THE <span className="text-brand-red">NETWORK</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 max-w-6xl mx-auto px-4 md:px-0">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                y: -10,
                scale: 1.02 
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-36 md:h-44 flex flex-col items-center justify-center glass-card hover:border-white/20 transition-all rounded-[2.5rem]"
            >
              <div className="absolute inset-x-4 top-4 bottom-4 rounded-[2rem] bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <social.icon size={36} className={cn("transition-all duration-700 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]", social.color)} />
              <span className="mt-4 font-display text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/30 group-hover:text-white transition-colors">
                {social.name}
              </span>
            </motion.a>
          ))}
        </div>


      </div>
    </section>
  );
}
