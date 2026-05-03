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
    <section id="community" className="py-32 bg-brand-dark/30 border-t border-white/[0.02]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 max-w-5xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-brand-red opacity-50" />
            <span className="text-brand-red text-[11px] font-bold uppercase tracking-[0.5em] block">
              Infrastructure
            </span>
            <span className="w-12 h-[1px] bg-brand-red opacity-50" />
          </div>
          <h2 className="text-[3rem] sm:text-[4.5rem] md:text-[6rem] leading-[0.9] tracking-[-0.04em] font-display font-light text-white uppercase">
            THE <br className="md:hidden" /><span className="font-black text-brand-red text-glow-red">NETWORK</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto px-4 md:px-0">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                y: -10,
                scale: 1.02 
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-40 md:h-56 flex flex-col items-center justify-center border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all rounded-[2.5rem] overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <social.icon size={40} strokeWidth={1.5} className={cn("transition-all duration-700 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]", social.color)} />
              <span className="mt-6 font-display text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors text-center px-4">
                {social.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
