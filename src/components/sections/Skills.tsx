"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillCategories } from "@/data/skills";
import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
} from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

const iconMap: Record<string, React.ElementType> = {
  code: Code2,
  layout: Layout,
  server: Server,
  database: Database,
  cloud: Cloud,
  wrench: Wrench,
};

export function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="relative py-16 md:py-24 bg-[#080808]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.05)_0%,transparent_50%)]" />

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
            className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.5em]"
          >
            Capabilities
          </motion.span>
          <h2 className="mt-4 text-3xl md:text-6xl font-black text-white tracking-tighter">
            Tech <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic">Eco-system</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: categoryIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-6 md:p-10 bg-[#0a0a0a] border border-white/5 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:border-cyan-500/30 shadow-2xl shadow-cyan-500/0 hover:shadow-cyan-500/10"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-10">
                    <div className="p-3 md:p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:rotate-6 group-hover:scale-110 transition-transform duration-700">
                      <Icon className="w-6 h-6 md:w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 md:gap-2.5">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut"
                        }}
                        className="px-5 py-2 text-[10px] font-black tracking-widest text-white/40 bg-white/5 border border-white/5 rounded-2xl hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all cursor-default uppercase"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

