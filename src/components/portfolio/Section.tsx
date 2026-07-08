import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function Section({ id, eyebrow, title, subtitle, children, className = "" }: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  return (
    <section id={id} ref={ref} className={`relative mx-auto w-full max-w-7xl px-6 py-28 md:py-36 ${className}`}>
      {(eyebrow || title || subtitle) && (
        <motion.header
          style={{ y }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
          className="mb-14 max-w-3xl"
        >
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/20 bg-white/[0.02] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)] shadow-gold-glow" />
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="text-4xl md:text-6xl leading-[1.05] text-gradient-gold">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground">{subtitle}</p>
          )}
        </motion.header>
      )}
      {children}
    </section>
  );
}
