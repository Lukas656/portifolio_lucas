import { ArrowUpRight } from "lucide-react";
import { skillGroups } from "@/data/profile";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return (
    <section className="section skills-section" id="habilidades" aria-label="Habilidades e tecnologias">
      <div className="shell">
        <Reveal>
          <SectionHeading number="02" eyebrow="FERRAMENTAS DO DIA A DIA" title="Meu universo de habilidades." description="Tecnologias e práticas que uso para tirar ideias do papel e cuidar de cada detalhe da experiência." />
        </Reveal>
        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <Reveal className={`skill-card skill-card--${index + 1}`} delay={index * 100} key={group.title}>
              <span className="skill-card__number">0{index + 1} / 03</span>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="skill-tags">
                {group.skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
              </div>
              <ArrowUpRight className="skill-card__arrow" size={19} aria-hidden="true" />
            </Reveal>
          ))}
        </div>
        <Reveal className="skills-footnote">
          <span className="skills-footnote__icon">+</span>
          <p>Em aprofundamento: <strong>Angular.js, arquitetura front-end, testes automatizados e performance web.</strong> Inglês — nível elementar.</p>
        </Reveal>
      </div>
    </section>
  );
}
