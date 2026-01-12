"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "@/data/projects";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

export function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="relative py-16 md:py-24 bg-[#050505]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.03)_0%,transparent_60%)]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span 
            initial={{ letterSpacing: "0.2em", opacity: 0 }}
            animate={inView ? { letterSpacing: "0.5em", opacity: 0.5 } : {}}
            className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.5em]"
          >
            Portfolio
          </motion.span>
          <h2 className="mt-4 text-3xl md:text-6xl font-black text-white tracking-tighter">
            Selected <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent italic">Works</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="project-card group relative"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] md:rounded-3xl bg-[#0a0a0a] border border-white/5 shadow-2xl transition-all duration-700 group-hover:border-emerald-500/20 group-hover:shadow-emerald-500/5">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
                
                <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8">
                  <div className="flex flex-wrap gap-2 mb-4 translate-y-4 md:translate-y-4 opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-700 delay-100">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[8px] md:text-[9px] uppercase font-black tracking-widest text-emerald-400 bg-emerald-500/10 backdrop-blur-md px-2.5 py-1 md:px-3 md:py-1.5 rounded-full border border-emerald-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 md:gap-6">
                      <div className="transform transition-transform duration-700 md:group-hover:-translate-y-1">
                        <h3 className="text-xl md:text-3xl font-black text-white tracking-tight mb-1 md:mb-2">{project.title}</h3>
                        <p className="text-[10px] md:text-xs text-white/40 line-clamp-2 max-w-sm">{project.description}</p>
                      </div>
                      
                      <div className="flex items-center gap-2 md:gap-3 shrink-0">
                        <Magnetic>
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            className="flex items-center gap-2.5 px-5 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white hover:bg-white/10 hover:text-emerald-400 transition-all group/link"
                          >
                            <Github className="w-4 h-4 transition-transform group-hover/link:-rotate-12" />
                            <span className="text-[10px] font-black uppercase tracking-widest">GitHub</span>
                          </motion.a>
                        </Magnetic>
                        <Magnetic>
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            className="flex items-center gap-2.5 px-5 py-3 bg-emerald-500 rounded-2xl text-black shadow-xl shadow-emerald-500/20 hover:scale-105 transition-all group/link"
                          >
                            <span className="text-[10px] font-black uppercase tracking-widest">View</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                          </motion.a>
                        </Magnetic>
                      </div>
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <Magnetic>
            <a
              href="https://github.com/Sujoyzz7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/50 border border-white/10 rounded-2xl hover:border-emerald-500/50 hover:text-emerald-400 transition-all bg-white/5 backdrop-blur-md"
            >
              <Github className="w-4 h-4" />
              More on GitHub
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}

