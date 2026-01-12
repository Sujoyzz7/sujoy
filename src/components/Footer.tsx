"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/data/socials";
import {
  Heart,
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

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 md:py-16 bg-[#030303] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="space-y-3 text-center md:text-left">
            <motion.a
              href="#home"
              className="text-xl md:text-2xl font-black tracking-tighter inline-block"
            >
              <span className="text-white">SUJOY</span>
              <span className="text-emerald-500">.</span>
            </motion.a>
            <p className="text-white/20 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">Building the future, one pixel at a time.</p>
          </div>
  
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4">
              {socialLinks.map((social, index) => {
              const Icon = socialIcons[social.icon] || SiGithub;
              return (
                <motion.a
                  key={social.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  href={social.url}
                  target="_blank"
                  className="p-3 md:p-4 bg-white/5 border border-white/5 rounded-xl text-white/40 hover:text-emerald-400 hover:border-emerald-400/30 transition-all"
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                </motion.a>
              );
            })}
          </div>


          <div className="text-center md:text-right space-y-2">
            <p className="flex items-center justify-center md:justify-end gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
              Handcrafted with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in BD
            </p>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/10">&copy; {currentYear} All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
