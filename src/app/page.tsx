import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
