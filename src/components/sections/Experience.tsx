"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences } from "@/data/experience";
import { Briefcase, Code2, Sparkles } from "lucide-react";

const typeIcons: Record<string, React.ElementType> = {
  freelance: Briefcase,
  opensource: Code2,
  personal: Sparkles,
};

const typeColors: Record<string, string> = {
  freelance: "from-emerald-500 to-cyan-500",
  opensource: "from-violet-500 to-purple-500",
  personal: "from-amber-500 to-orange-500",
};

export function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="relative py-16 md:py-24 bg-[#080808]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.04)_0%,transparent_50%)]" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6">
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
              The Timeline
            </motion.span>
            <h2 className="mt-4 md:mt-6 text-3xl md:text-6xl font-black text-white tracking-tighter">
              Professional <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent italic">Odyssey</span>
            </h2>
          </motion.div>
    
          <div className="relative">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-6 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-emerald-500 via-cyan-500 to-transparent origin-top shadow-[0_0_15px_rgba(16,185,129,0.5)]"
            />
    
            <div className="space-y-12 md:space-y-16">
              {experiences.map((exp, index) => {
                const Icon = typeIcons[exp.type] || Briefcase;
                const gradientColor = typeColors[exp.type] || "from-emerald-500 to-cyan-500";
                const isEven = index % 2 === 0;
    
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative flex items-center gap-6 md:gap-8 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="hidden md:block flex-1">
                      <motion.div
                        whileHover={{ y: -10, scale: 1.02 }}
                        className={`p-8 glass-morphism rounded-3xl border border-white/5 transition-all duration-500 hover:border-emerald-500/30 shadow-2xl ${
                          isEven ? "text-right" : "text-left"
                        }`}
                      >
                        <span className="text-[10px] font-black tracking-[0.3em] text-emerald-400 uppercase mb-4 block">
                          {exp.duration}
                        </span>
                        <h3 className="text-2xl font-black text-white mb-2 tracking-tight">{exp.role}</h3>
                        <p className={`text-white/40 font-bold mb-6 flex items-center gap-2 ${isEven ? "justify-end" : "justify-start"}`}>
                           <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                           {exp.company}
                        </p>
                        <p className="text-base text-white/50 leading-relaxed mb-8 font-outfit">
                          {exp.description}
                        </p>
                        <div className={`flex flex-wrap gap-3 ${isEven ? "justify-end" : "justify-start"}`}>
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-white/30 bg-white/5 rounded-xl border border-white/5 hover:text-emerald-400 hover:border-emerald-400/30 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
    
                    <div className="relative z-10 flex-shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        className={`w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-gradient-to-br ${gradientColor} rounded-xl md:rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.4)] text-black`}
                      >
                        <Icon className="w-5 h-5 md:w-6 md:h-6" />
                      </motion.div>
                    </div>
    
                    <div className="flex-1">
                      <motion.div
                        whileHover={{ y: -10 }}
                        className="md:hidden p-5 md:p-6 glass-morphism rounded-2xl border border-white/5 transition-all duration-500"
                      >
                        <span className="text-[9px] font-black tracking-[0.3em] text-emerald-400 uppercase mb-3 block">
                          {exp.duration}
                        </span>
                        <h3 className="text-lg font-black text-white mb-1.5">{exp.role}</h3>
                        <p className="text-[11px] text-white/40 font-bold mb-3">{exp.company}</p>
                        <p className="text-[13px] text-white/50 leading-relaxed mb-5 font-outfit">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-white/30 bg-white/5 rounded-lg border border-white/5"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                );
              })}
            </div>
          </div>

      </div>
    </section>
  );
}
