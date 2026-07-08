import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { ClientOnly } from "@/ClientOnly";
import { HeroScene } from "./HeroScene";
import { TypeCycle } from "./TypeCycle";
import { student } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* 3D scene background */}
      <div className="absolute inset-0 opacity-90">
        <ClientOnly fallback={<div className="h-full w-full bg-aurora" />}>
          <HeroScene />
        </ClientOnly>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_55%,oklch(0.09_0.005_60/0.85),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,var(--background)_92%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] uppercase tracking-[0.28em] text-gold"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)] animate-twinkle" />
          Portfolio · 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
          className="text-gradient-gold text-[clamp(3rem,10vw,8.5rem)] leading-[0.95]"
        >
          {student.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 flex min-h-[2.5rem] items-center justify-center text-lg md:text-2xl text-foreground/85"
        >
          <span className="font-display italic text-muted-foreground mr-3">I am a</span>
          <TypeCycle words={student.titles} className="text-gold font-medium" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 max-w-xl text-sm md:text-base text-muted-foreground"
        >
          {student.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#about" className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-medium text-[color:var(--ink)] shadow-gold-glow transition hover:scale-[1.04]">
            Explore journey
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm text-foreground transition hover:bg-white/[0.06]">
            <Download className="h-4 w-4" /> Download resume
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/30 px-6 py-3 text-sm text-foreground transition hover:bg-white/[0.04]">
            <Mail className="h-4 w-4" /> Contact me
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
      >
        <div className="flex flex-col items-center gap-2">
          <span>Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-[color:var(--gold)] to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
