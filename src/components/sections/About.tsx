"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Code", value: "Best Practices" },
  { icon: Rocket, label: "Performance", value: "Optimized" },
  { icon: Users, label: "Collaboration", value: "Team Player" },
  { icon: Lightbulb, label: "Innovation", value: "Creative" },
];

export function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="relative py-16 md:py-24 bg-[#050505]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.05)_0%,transparent_50%)]" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.span 
              initial={{ letterSpacing: "0.2em", opacity: 0 }}
              animate={inView ? { letterSpacing: "0.5em", opacity: 0.5 } : {}}
              className="text-emerald-400 text-[10px] md:text-xs font-black uppercase"
            >
              The Story
            </motion.span>
            <h2 className="mt-4 md:mt-6 text-3xl md:text-6xl font-black text-white tracking-tighter">
              A Bit <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent italic">About Me</span>
            </h2>
          </motion.div>
  
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative group"
            >
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=faces"
                    alt="Sujoy Roy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Badge */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 p-4 md:p-6 bg-white text-black rounded-2xl shadow-2xl z-20"
                  >
                    <p className="text-2xl md:text-3xl font-black leading-none tracking-tighter">2+</p>
                    <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest mt-1">Years Exp.</p>
                  </motion.div>
                </div>
              </motion.div>
  
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 space-y-8"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-white">Engineering Digital Excellence</h3>
                  <p className="text-lg text-white/50 leading-relaxed font-outfit">
                    I'm <span className="text-white font-bold">Sujoy Roy</span>, a software architect focused on building high-performance systems. Based in Bangladesh, I bridge the gap between complex backend logic and intuitive frontend experiences.
                  </p>
                  <p className="text-base text-white/40 leading-relaxed font-outfit">
                    My approach is simple: clean architecture, relentless optimization, and a user-first mindset. I don't just write code; I build solutions that scale.
                  </p>
                </div>
  
                <div className="grid sm:grid-cols-2 gap-6">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                      className="p-6 glass-morphism rounded-2xl group hover:border-emerald-500/30 transition-all"
                    >
                      <item.icon className="w-8 h-8 text-emerald-400 mb-6 group-hover:rotate-12 transition-transform" />
                      <p className="text-lg font-black text-white mb-2">{item.label}</p>
                      <p className="text-sm text-white/40 font-outfit">{item.value}</p>
                    </motion.div>
                  ))}
                </div>
  
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="pt-6 border-t border-white/5 flex flex-wrap gap-8"
                >
                  <div>
                    <p className="text-2xl font-black text-white tracking-tighter">50+</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Projects Done</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-white tracking-tighter">15+</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Tech Stack</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-white tracking-tighter">100%</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Commitment</p>
                  </div>
                </motion.div>

            </motion.div>
          </div>

      </div>
    </section>
  );
}
