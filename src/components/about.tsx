import { ArrowUpRight, Code2, Layers3, WandSparkles } from "lucide-react";
import { contact } from "@/data/profile";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const highlights = [
  { icon: Code2, title: "Código com propósito", text: "Interfaces bem estruturadas, responsivas e pensadas para evoluir." },
  { icon: Layers3, title: "Componentes reutilizáveis", text: "Design Systems documentados para dar consistência aos produtos." },
  { icon: WandSparkles, title: "Aprendizado na prática", text: "Curiosidade e projetos pessoais como parte do meu crescimento." },
];

export function About() {
  return (
    <section className="section about-section" id="sobre" aria-labelledby="about-title">
      <div className="shell">
        <Reveal>
          <SectionHeading number="01" eyebrow="UM POUCO SOBRE MIM" title="Tecnologia com atenção aos detalhes." description="Uma visão de produto que começa na interface e continua em cada componente." />
        </Reveal>
        <div className="about-layout">
          <Reveal className="about-copy">
            <span className="about-copy__label">MINHA JORNADA</span>
            <h3 id="about-title">Transformo necessidades em experiências digitais claras.</h3>
            <p>
              Sou desenvolvedor Front-end na SKY Brasil, onde trabalho na criação e evolução de aplicações web com React, Next.js e TypeScript. No dia a dia, desenvolvo componentes reutilizáveis para Design Systems, documento soluções no Storybook e integro interfaces a APIs REST e serviços Headless.
            </p>
            <p>
              Minha atuação também envolve Liferay 7.4, páginas responsivas e colaboração com times de Design, Produto e Desenvolvimento. Gosto de unir cuidado visual, qualidade de código e facilidade de manutenção para entregar experiências consistentes.
            </p>
            <p>
              Sou autodidata e aprendo fazendo: exploro novas tecnologias e desenvolvo projetos pessoais para colocar ideias em prática e ampliar minhas habilidades.
            </p>
            <a className="text-link" href={contact.linkedin} target="_blank" rel="noreferrer">Conecte-se comigo no LinkedIn <ArrowUpRight size={16} /></a>
          </Reveal>
          <div className="about-highlights">
            {highlights.map(({ icon: Icon, title, text }, index) => (
              <Reveal className="about-card" delay={index * 90} key={title}>
                <span className="about-card__icon"><Icon size={19} /></span>
                <div><h4>{title}</h4><p>{text}</p></div>
                <span className="about-card__index">0{index + 1}</span>
              </Reveal>
            ))}
            <Reveal className="about-education" delay={180}>
              <span className="about-education__label">FORMAÇÃO</span>
              <div><strong>Análise e Desenvolvimento de Sistemas</strong><span>Universidade Cruzeiro do Sul · 2024–2026</span></div>
              <span className="about-education__orb" aria-hidden="true" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
