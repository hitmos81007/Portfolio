import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import {
  About, Academics, Skills, Projects, Certificates, Awards,
  Timeline, Events, Contact, Footer,
} from "@/components/portfolio/sections";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { CursorGlow } from "@/CursorGlow";
import { ClientOnly } from "@/ClientOnly";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohit S | AI/ML and Software Development" },
      { name: "description", content: "Mohit S is a computer science engineering student in Chennai. Explore his AI and software projects, training, and hackathon results." },
      { property: "og:title", content: "Mohit S | AI/ML and Software Development" },
      { property: "og:description", content: "Projects, education, experience, and credentials in AI/ML and software development." },
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
    <main className="relative overflow-x-clip">
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
      <Events />
      <Contact />
      <Footer />
    </main>
  );
}
