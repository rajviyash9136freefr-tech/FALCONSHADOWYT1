import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, BarChart3, PieChart, Users, Globe } from 'lucide-react';
import { cn } from '../lib/utils';

export default function WorkWithMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const demographics = [
    { label: 'Primary Market', value: 'INDIA', icon: Globe },
    { label: 'Core Age', value: '14 YEARS', icon: Users },
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate a system processing the transmission
    setTimeout(() => {
      const subject = `[BRAND COLLAB] Inquiry from ${formData.name}`;
      const body = `Brand Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoUrl = `mailto:officialfalconshadowyt@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // We still use mailto as the 'transmitter' to ensure delivery without a backend
      window.location.href = mailtoUrl;
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after some time
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 relative overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-brand-red opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 pb-12 border-b border-white/[0.05]"
        >
          <span className="text-brand-red text-[11px] font-bold uppercase tracking-[0.5em] mb-4 block">
            Strategic Alliances
          </span>
          <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[7.5rem] leading-[0.8] tracking-[-0.04em] font-display font-black text-white uppercase mb-8">
            IGNITE YOUR <br />
            <span className="text-brand-red text-glow-red">BRAND</span>
          </h1>
          <p className="text-base md:text-xl text-white/40 leading-[1.8] font-light max-w-2xl">
            Leverage a unique community in the Roblox ecosystem. We specialize in 
            organic integration that drives high conversion.
          </p>
        </motion.div>

        {/* Media Kit Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 max-w-5xl">
          {demographics.map((demo, index) => (
            <motion.div 
              key={demo.label} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="p-10 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] rounded-[2rem] group hover:border-brand-red/30 transition-all text-left relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/[0.02] rounded-full blur-[40px] pointer-events-none group-hover:bg-brand-red/[0.05] transition-colors" />
              <div className="flex items-center gap-4 text-brand-red mb-8 uppercase tracking-[0.4em] text-[10px] font-bold">
                <span className="w-8 h-[1px] bg-brand-red/50" />
                <demo.icon size={14} /> {demo.label}
              </div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-display font-light tracking-[-0.04em] group-hover:text-glow-red transition-all text-white">
                {demo.value}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Showcase - Exclusive Roblox Focus */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-32 py-20 border-y border-white/[0.03] bg-white/[0.01] relative overflow-hidden flex justify-center"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-display text-[4rem] sm:text-[6rem] md:text-[8rem] tracking-[-0.06em] font-black text-white/5 uppercase"
          >
            ROBLOX
          </motion.div>
        </motion.div>

        {/* Contact Section - 3D Interactive Layout */}
        <div id="contact" className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center lg:col-span-5"
          >
            <h2 className="text-[3rem] sm:text-[4rem] md:text-[5rem] mb-8 font-display leading-[0.85] tracking-[-0.04em] font-light">
              SECURE <br />
              <span className="text-brand-red text-glow-red font-black">IDENTITY</span>
            </h2>
            <p className="text-white/40 text-sm md:text-base leading-[1.8] mb-12 max-w-sm font-light">
              For priority high-stakes collaborations and business-critical inquiries. 
              Encrypted response within 24 hours.
            </p>
            
            <div className="space-y-6">
              <a 
                href="mailto:officialfalconshadowyt@gmail.com" 
                className="group block p-8 border border-white/10 bg-white/[0.02] rounded-[1.5rem] hover:border-brand-red/50 hover:bg-white/[0.04] transition-all duration-500"
              >
                <div className="text-white/30 text-[9px] uppercase font-bold tracking-[0.4em] mb-4">BRAND_COLLAB_UPLINK</div>
                <div className="text-sm sm:text-lg md:text-xl font-medium tracking-tight flex items-center justify-between gap-4 text-white/90 group-hover:text-brand-red transition-colors">
                  <span className="truncate">officialfalconshadowyt@gmail.com</span>
                  <Send size={18} className="text-brand-red opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 shrink-0" />
                </div>
              </a>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 border border-white/5 bg-white/[0.01] rounded-[1.2rem]">
                  <div className="text-[8px] text-white/30 uppercase font-bold tracking-[0.3em] mb-2">Timezone</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/70">IST / UTC+5:30</div>
                </div>
                <div className="p-6 border border-white/5 bg-white/[0.01] rounded-[1.2rem]">
                  <div className="text-[8px] text-white/30 uppercase font-bold tracking-[0.3em] mb-2">Availability</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-red">Active //</div>
                </div>
              </div>

              <div className="pt-12 border-t border-white/[0.05]">
                <p className="text-[10px] font-display uppercase tracking-[0.4em] text-brand-red font-bold">
                  Created by Jay
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 border border-white/10 bg-white/[0.02] p-8 sm:p-12 md:p-16 rounded-[2.5rem] sm:rounded-[3rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/[0.02] rounded-full blur-[80px] pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 block">BRAND_IDENTIFIER</label>
                  <input 
                    type="text" 
                    required
                    disabled={isSubmitting || isSuccess}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 pb-4 text-base focus:border-brand-red outline-none transition-all placeholder:text-white/10 disabled:opacity-50 text-white font-medium" 
                    placeholder="BRAND NAME" 
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 block">CONTACT_UPLINK</label>
                  <input 
                    type="email" 
                    required
                    disabled={isSubmitting || isSuccess}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 pb-4 text-base focus:border-brand-red outline-none transition-all placeholder:text-white/10 disabled:opacity-50 text-white font-medium" 
                    placeholder="BRAND@EMAIL.COM" 
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 block">COLLABORATION_DETAILS</label>
                <textarea 
                  rows={4} 
                  required
                  disabled={isSubmitting || isSuccess}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-base focus:border-brand-red outline-none transition-all resize-none placeholder:text-white/10 disabled:opacity-50 text-white font-medium leading-[1.8]" 
                  placeholder="Tell us about the project, budget, and timeline..."
                ></textarea>
              </div>

              <motion.button 
                type="submit"
                disabled={isSubmitting || isSuccess}
                whileHover={!isSubmitting && !isSuccess ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting && !isSuccess ? { scale: 0.98 } : {}}
                className={cn(
                  "w-full py-6 mt-8 sm:py-8 text-white font-display text-sm sm:text-base font-bold uppercase tracking-[0.4em] flex items-center justify-center gap-4 rounded-full transition-all duration-500",
                  isSuccess ? "bg-green-600/20 text-green-400 border border-green-500/30" : "glossy-red border border-brand-red/50",
                  (isSubmitting || isSuccess) && "cursor-default"
                )}
              >
                {isSubmitting ? (
                  <>TRANSMITTING... <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}><Send size={16} className="opacity-60" /></motion.div></>
                ) : isSuccess ? (
                  <>TRANSMITTED SUCCESSFULLY</>
                ) : (
                  <>SEND TRANSMISSION <Send size={16} className="opacity-60" /></>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}
