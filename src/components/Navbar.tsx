"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-2 md:top-4 left-0 right-0 z-50 px-4 md:px-6"
    >
      <div className={`max-w-5xl mx-auto transition-all duration-700 rounded-2xl border ${
        scrolled 
          ? "bg-black/60 backdrop-blur-3xl border-white/10 py-2 md:py-2.5 px-4 md:px-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
          : "bg-white/5 backdrop-blur-md border-white/5 py-2.5 md:py-3 px-4 md:px-6"
      }`}>
        <div className="flex items-center justify-between">
          <Magnetic>
            <motion.a
              href="#home"
              className="group flex items-center gap-2 text-lg font-black tracking-tighter"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 flex items-center justify-center text-black text-xs shadow-lg shadow-emerald-500/20">S</div>
              <span className="text-white group-hover:text-emerald-400 transition-colors">SUJOY</span>
            </motion.a>
          </Magnetic>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Magnetic key={item.name}>
                <motion.a
                  href={item.href}
                  className="px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 hover:text-white transition-colors relative group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.div 
                    className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    layoutId="nav-bg"
                  />
                </motion.a>
              </Magnetic>
            ))}
            <Magnetic>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-6 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all shadow-xl shadow-white/10"
              >
                Hire Me
              </motion.a>
            </Magnetic>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden mt-4 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-8 space-y-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-4 text-sm font-bold uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block mt-6 px-4 py-5 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black text-center text-sm font-black uppercase tracking-widest rounded-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
