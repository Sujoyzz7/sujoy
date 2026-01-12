"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { socialLinks, contactInfo } from "@/data/socials";
import {
  Mail,
  MapPin,
  Send,
  Check,
  Loader2,
} from "lucide-react";
import { 
  SiGithub, 
  SiLinkedin, 
  SiX, 
  SiYoutube, 
  SiFacebook, 
  SiInstagram, 
  SiMedium, 
  SiStackoverflow 
} from "react-icons/si";
import Magnetic from "@/components/ui/Magnetic";

const socialIcons: Record<string, React.ElementType> = {
  github: SiGithub,
  linkedin: SiLinkedin,
  twitter: SiX,
  youtube: SiYoutube,
  facebook: SiFacebook,
  instagram: SiInstagram,
  medium: SiMedium,
  stackoverflow: SiStackoverflow,
};

export function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setFormState({ name: "", email: "", message: "" });
    
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-[#050505]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.06)_0%,transparent_60%)]" />

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
            className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.5em]"
          >
            Engagement
          </motion.span>
          <h2 className="mt-4 text-3xl md:text-6xl font-black text-white tracking-tighter">
            Let's Build <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent italic">Together</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 md:space-y-12"
          >
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-2xl md:text-4xl font-black text-white leading-tight">
                Have a Vision? <br />
                <span className="text-white/20">Let's turn it into reality.</span>
              </h3>
              <p className="text-xs md:text-base text-white/40 leading-relaxed font-outfit max-w-md">
                I'm currently available for high-impact collaborations. If you value precision, performance, and modern aesthetics, let's talk.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
                <Magnetic>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-4 md:gap-6 p-5 md:p-8 bg-white/5 border border-white/5 rounded-[1.5rem] md:rounded-[2rem] hover:border-emerald-500/30 transition-all group backdrop-blur-3xl"
                  >
                    <div className="p-3 md:p-5 bg-emerald-500 rounded-xl md:rounded-2xl group-hover:rotate-12 transition-transform shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-black" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[8px] md:text-[10px] text-white/30 font-black uppercase tracking-[0.2em] mb-0.5 md:mb-1">Direct Communication</p>
                      <p className="text-base md:text-2xl font-black text-white group-hover:text-emerald-400 transition-colors truncate">{contactInfo.email}</p>
                    </div>
                  </motion.a>
                </Magnetic>

                <Magnetic>
                  <div className="flex items-center gap-4 md:gap-6 p-5 md:p-8 bg-white/5 border border-white/5 rounded-[1.5rem] md:rounded-[2rem] backdrop-blur-3xl">
                    <div className="p-3 md:p-5 bg-cyan-500 rounded-xl md:rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-black" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[8px] md:text-[10px] text-white/30 font-black uppercase tracking-[0.2em] mb-0.5 md:mb-1">Current Base</p>
                      <p className="text-base md:text-2xl font-black text-white truncate">{contactInfo.location}</p>
                    </div>
                  </div>
                </Magnetic>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.icon] || SiGithub;
                return (
                  <Magnetic key={link.name}>
                    <motion.a
                      href={link.url}
                      target="_blank"
                      className="p-3.5 md:p-5 bg-white/5 border border-white/5 rounded-xl md:rounded-2xl text-white/40 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all backdrop-blur-md"
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5" />
                    </motion.a>
                  </Magnetic>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative p-6 md:p-10 bg-[#0a0a0a] border border-white/5 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10">
              <div className="space-y-4 md:space-y-8">
                <div className="group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1 md:mb-2 block">Identity</label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="w-full px-0 py-3 md:py-4 bg-transparent border-b border-white/10 text-lg md:text-xl font-black text-white placeholder:text-white/5 focus:outline-none focus:border-emerald-500 transition-all"
                    placeholder="ENTER YOUR NAME"
                  />
                </div>

                <div className="group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1 md:mb-2 block">Communication</label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="w-full px-0 py-3 md:py-4 bg-transparent border-b border-white/10 text-lg md:text-xl font-black text-white placeholder:text-white/5 focus:outline-none focus:border-emerald-500 transition-all"
                    placeholder="ENTER YOUR EMAIL"
                  />
                </div>

                <div className="group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1 md:mb-2 block">Vision</label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-0 py-3 md:py-4 bg-transparent border-b border-white/10 text-lg md:text-xl font-black text-white placeholder:text-white/5 focus:outline-none focus:border-emerald-500 transition-all resize-none"
                    placeholder="DESCRIBE YOUR PROJECT"
                  />
                </div>
              </div>

              <Magnetic>
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="w-full group flex items-center justify-center gap-4 px-6 md:px-10 py-4 md:py-5 bg-white text-black font-black text-[9px] md:text-[10px] uppercase tracking-[0.4em] rounded-xl md:rounded-2xl hover:bg-emerald-400 transition-all duration-700 disabled:opacity-50 shadow-xl shadow-white/5"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-5 h-5 md:w-6 md:h-6 animate-spin" />
                  ) : status === "success" ? (
                    <Check className="w-5 h-5 md:w-6 md:h-6" />
                  ) : (
                    <>
                      <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                      Initiate Contact
                    </>
                  )}
                </button>
              </Magnetic>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

