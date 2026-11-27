import { motion } from "framer-motion";
import { Section } from "./Section";
import { about, academics, awards, certificates, certCategories, education, events, projects, skills, student, timeline } from "@/lib/portfolio-data";
import { ClientOnly } from "@/ClientOnly";
import { SkillsGalaxy } from "./SkillsGalaxy";
import { useState, type FormEvent, type ReactNode } from "react";
import { Download, ExternalLink, Mail, MapPin, Medal, Send, Sparkles, Trophy } from "lucide-react";

// Brand icons — inline SVG (lucide-react v1 dropped brand icons)
const Github = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.2 21.4 23.5 17.1 23.5 12 23.5 5.7 18.3.5 12 .5z"/></svg>
);
const Linkedin = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.3 18.3H5.7V9.7h2.6v8.6zM7 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11.3 9.8h-2.6v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3h-2.6V9.7h2.5v1.2c.4-.7 1.3-1.4 2.6-1.4 2.8 0 3.3 1.8 3.3 4.2v4.6z"/></svg>
);
/* ---------- About ---------- */
export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>The person behind <em className="not-italic text-foreground/80">the code</em></>}
      subtitle={about.intro}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {about.cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 40, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
            whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
            style={{ transformStyle: "preserve-3d" }}
            className="glass group relative overflow-hidden rounded-2xl p-6"
          >
            <div className="absolute inset-x-0 -top-px h-px shimmer-gold" />
            <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-gold text-[color:var(--ink)]">
              <Sparkles className="h-4 w-4" />
            </div>
            <h3 className="text-2xl text-gradient-gold">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Academics ---------- */
export function Academics() {
  return (
    <Section
      id="academics"
      eyebrow="Education"
      title={<>{education.degree} <span className="italic">({education.specialization})</span></>}
      subtitle={education.college}
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {academics.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="glass-strong group relative overflow-hidden rounded-2xl p-6"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[color:var(--gold)]/10 blur-2xl transition group-hover:bg-[color:var(--gold)]/25" />
            <div className="text-4xl md:text-5xl font-display text-gradient-gold">
              {a.value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{a.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Skills ---------- */
export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills Galaxy"
      title={<>Tools I use <span className="italic">in my projects</span></>}
      subtitle="Explore the galaxy or browse the skills by category below."
    >
      <div className="glass-strong overflow-hidden rounded-3xl">
        <ClientOnly fallback={<div className="h-[600px] w-full bg-aurora" />}>
          <SkillsGalaxy />
        </ClientOnly>
      </div>
      <dl className="mt-6 grid gap-3 sm:grid-cols-2">
        {[...new Set(skills.map(({ group }) => group))].map((group) => (
          <div key={group} className="glass rounded-xl p-4">
            <dt className="text-sm font-medium text-gold">{group}</dt>
            <dd className="mt-1 text-sm text-muted-foreground">
              {skills.filter((skill) => skill.group === group).map((skill) => skill.name).join(" · ")}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

/* ---------- Projects ---------- */
export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Project Universe"
      title={<>Selected <span className="italic">projects</span></>}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
            whileHover={{ y: -8 }}
            className="glass group relative overflow-hidden rounded-3xl p-8"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--x,50%)_var(--y,0%),oklch(0.82_0.14_85/0.12),transparent_60%)] opacity-0 transition group-hover:opacity-100" />
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.24em] text-gold">{p.tag}</span>
            </div>
            <h3 className="text-3xl text-gradient-gold">{p.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span key={s} className="rounded-full border border-[color:var(--gold)]/20 bg-white/[0.03] px-2.5 py-1 text-[10px] uppercase tracking-wider text-foreground/80">{s}</span>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-gold hover:underline">
                View repository <Github className="h-3 w-3" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Certificates ---------- */
export function Certificates() {
  const [cat, setCat] = useState<string>("All");
  const list = cat === "All" ? certificates : certificates.filter((c) => c.cat === cat);
  return (
    <Section
      id="certificates"
      eyebrow="Certificates Vault"
      title={<>Training and <span className="italic">credentials</span></>}
      subtitle="Coursework, workshops, and job simulations with links to my LinkedIn posts."
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {certCategories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={cat === c}
            onClick={() => setCat(c)}
            className={`rounded-full px-4 py-1.5 text-xs transition ${
              cat === c
                ? "bg-gradient-gold text-[color:var(--ink)] shadow-gold-glow"
                : "glass text-muted-foreground hover:text-gold"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c, i) => (
          <motion.div
            key={c.name}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            whileHover={{ y: -6, rotateY: 3 }}
            style={{ transformStyle: "preserve-3d" }}
            className="glass-strong group relative overflow-hidden rounded-2xl p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--gold)]/[0.06] to-transparent" />
            <div className="absolute -inset-px rounded-2xl border border-[color:var(--gold)]/20 opacity-0 transition group-hover:opacity-100" />
            <Medal className="h-5 w-5 text-gold" />
            <h3 className="mt-4 text-lg font-medium text-foreground leading-snug">{c.name}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{[c.issuer, c.date].filter(Boolean).join(" · ")}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wider text-gold">{c.cat}</span>
              <a href={c.link} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-gold">LinkedIn post</a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Awards ---------- */
export function Awards() {
  return (
    <Section
      id="awards"
      eyebrow="Recognition Hall"
      title={<>Hackathon <span className="italic">results</span></>}
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {awards.map((a, i) => (
          <motion.div
            key={a.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="glass-strong group relative flex items-start gap-4 overflow-hidden rounded-2xl p-6"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[color:var(--gold)]/30 blur-xl" />
              <div className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-gold text-[color:var(--ink)]">
                <Trophy className="h-6 w-6" />
              </div>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.24em] text-gold">{a.place}</span>
                <span className="text-[10px] text-muted-foreground">· {a.year}</span>
              </div>
              <h3 className="mt-1 text-lg text-foreground">{a.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{a.detail}</p>
              <a href={a.link} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-gold hover:underline">LinkedIn post</a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Timeline ---------- */
export function Timeline() {
  return (
    <Section
      id="timeline"
      eyebrow="Journey"
      title={<>Education and <span className="italic">experience</span></>}
    >
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[color:var(--gold)]/40 to-transparent" />
        <div className="space-y-16">
          {timeline.map((t, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: left ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className={`relative flex items-start gap-6 md:grid md:grid-cols-2 md:gap-16 ${left ? "" : "md:[&>*:first-child]:col-start-2"}`}
              >
                <div className="absolute left-4 md:left-1/2 top-4 -translate-x-1/2 h-3 w-3 rounded-full bg-gradient-gold shadow-gold-glow" />
                <div className={`glass rounded-2xl p-6 ml-12 md:ml-0 ${left ? "md:mr-8 md:text-right" : "md:ml-8"}`}>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-gold">{t.year}</div>
                  <h3 className="mt-1 text-2xl text-gradient-gold">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
                  {t.link && (
                    <a href={t.link} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm text-gold hover:underline">
                      {t.link.includes("linkedin.com") ? "LinkedIn post" : "View repository"} <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
                <div />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Events ---------- */
export function Events() {
  return (
    <Section
      id="events"
      eyebrow="Beyond the classroom"
      title={<>Events and <span className="italic">participation</span></>}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {events.map((event, i) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="glass group relative flex min-h-[155px] flex-col justify-end overflow-hidden rounded-2xl p-5"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 30% 30%, oklch(0.82 0.14 85 / 0.18), transparent 60%),
                  linear-gradient(135deg, oklch(0.2 0.01 70), oklch(0.12 0.005 60))
                `,
              }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),oklch(0.9_0.12_88/0.15),transparent_60%)] opacity-0 transition group-hover:opacity-100" />
              <h3 className="relative text-xl text-gradient-gold">{event.name}</h3>
              <p className="relative mt-2 text-sm text-foreground/90">{event.detail}</p>
              <a href={event.link} target="_blank" rel="noreferrer" className="relative mt-3 text-sm text-gold hover:underline">LinkedIn post</a>
            </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Contact ---------- */
function openEmailDraft(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = String(form.get("name")).trim();
  const email = String(form.get("email")).trim();
  const message = String(form.get("message")).trim();
  const subject = encodeURIComponent("Portfolio inquiry from " + name);
  const body = encodeURIComponent(message + "\n\nFrom " + name + " (" + email + ")");
  window.location.href = "mailto:" + student.email + "?subject=" + subject + "&body=" + body;
}

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let’s <span className="italic">get in touch</span></>}
      subtitle="I’m open to AI/ML and software development internships."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <form
          onSubmit={openEmailDraft}
          className="glass-strong space-y-4 rounded-3xl p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Name</span>
              <input required name="name" autoComplete="name" className="mt-2 w-full rounded-lg border border-[color:var(--gold)]/20 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none focus:border-[color:var(--gold)]/60" />
            </label>
            <label className="block">
              <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Email</span>
              <input required type="email" name="email" autoComplete="email" className="mt-2 w-full rounded-lg border border-[color:var(--gold)]/20 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none focus:border-[color:var(--gold)]/60" />
            </label>
          </div>
          <label className="block">
            <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Message</span>
            <textarea required name="message" rows={5} className="mt-2 w-full resize-none rounded-lg border border-[color:var(--gold)]/20 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none focus:border-[color:var(--gold)]/60" />
          </label>
          <button
            type="submit"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-medium text-[color:var(--ink)] shadow-gold-glow transition hover:scale-[1.03]"
          >
            Open email draft
            <Send className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
          <p className="text-sm text-muted-foreground">Opens a draft in your email app.</p>
        </form>

        <div className="glass rounded-3xl p-8">
          <div className="text-[11px] uppercase tracking-[0.22em] text-gold">Direct</div>
          <a href={`mailto:${student.email}`} className="mt-2 block break-words font-display text-3xl text-gradient-gold hover:opacity-90">
            {student.email}
          </a>
          <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> {student.location}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <SocialLink href={student.socials.github} icon={<Github className="h-4 w-4" />} label="GitHub" />
            <SocialLink href={student.socials.linkedin} icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" />
            <SocialLink href={`mailto:${student.email}`} icon={<Mail className="h-4 w-4" />} label="Email" />
            <SocialLink href={student.resume} icon={<Download className="h-4 w-4" />} label="Résumé" download />
          </div>
        </div>
      </div>
    </Section>
  );
}

function SocialLink({ href, icon, label, download }: { href: string; icon: ReactNode; label: string; download?: boolean }) {
  return (
    <a
      href={href}
      download={download}
      target={href.startsWith("https:") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center gap-3 rounded-xl border border-[color:var(--gold)]/15 bg-white/[0.02] px-4 py-3 text-sm text-foreground transition hover:border-[color:var(--gold)]/50 hover:bg-white/[0.05]"
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-white/5 text-gold transition group-hover:bg-gradient-gold group-hover:text-[color:var(--ink)]">
        {icon}
      </span>
      {label}
    </a>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[color:var(--gold)]/15 py-16">
      <div className="pointer-events-none absolute inset-0 bg-aurora opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-gradient-gold text-[color:var(--ink)] font-display text-xl shadow-gold-glow">
          M
        </div>
        <p className="mx-auto max-w-xl font-display text-2xl md:text-3xl text-gradient-gold">
          {student.tagline}
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.24em] text-muted-foreground">
          © {new Date().getFullYear()} {student.name}
        </p>
      </div>
    </footer>
  );
}
