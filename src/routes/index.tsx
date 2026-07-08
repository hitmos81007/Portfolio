import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import {
  About, Academics, Skills, Projects, Certificates, Awards,
  Timeline, Testimonials, Stats, Gallery, Contact, Footer,
} from "@/components/portfolio/sections";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { CursorGlow } from "@/CursorGlow";
import { ClientOnly } from "@/ClientOnly";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohit S — Student Developer, AI Engineer & Builder" },
      { name: "description", content: "Portfolio of Mohit S — student developer, AI engineer and full-stack builder. Projects, certifications, awards and the journey so far." },
      { property: "og:title", content: "Mohit S — Student Developer & AI Engineer" },
      { property: "og:description", content: "Cinematic portfolio: projects, AI work, academic excellence, awards and journey." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ClientOnly fallback={<Page />}>
      <SmoothScroll><Page withCursor /></SmoothScroll>
    </ClientOnly>
  );
}

function Page({ withCursor = false }: { withCursor?: boolean }) {
  return (
    <main className="relative">
      {withCursor && <CursorGlow />}
      <Nav />
      <Hero />
      <About />
      <Academics />
      <Skills />
      <Projects />
      <Certificates />
      <Awards />
      <Timeline />
      <Testimonials />
      <Stats />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
