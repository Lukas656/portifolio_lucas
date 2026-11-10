import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { experience } from "@/data/profile";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  return (
    <section className="section experience-section" id="experiencia" aria-labelledby="experience-title">
      <div className="shell">
        <Reveal>
          <SectionHeading number="03" eyebrow="TRAJETÓRIA PROFISSIONAL" title="Experiência que segue em movimento." description="Construindo produtos digitais junto de equipes multidisciplinares." />
        </Reveal>
        <div className="timeline" id="experience-title">
          {experience.map((item, index) => (
            <Reveal className={`timeline-item ${item.current ? "timeline-item--current" : ""}`} key={item.company} delay={index * 100}>
              <div className="timeline-item__rail"><span className="timeline-item__dot" /><span className="timeline-item__line" /></div>
              <article className="timeline-card">
                <div className="timeline-card__top">
                  <div><span className="timeline-card__period">{item.period}</span><span className="timeline-card__location">{item.location}</span></div>
                  {item.current && <span className="timeline-card__current"><span /> ATUAL</span>}
                </div>
                <h3>{item.company}</h3>
                <p className="timeline-card__role"><BriefcaseBusiness size={15} /> {item.role}</p>
                {item.highlights.length > 0 ? (
                  <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                ) : (
                  <p className="timeline-card__note">Atuação em atendimento de retaguarda e participação no programa Jovens Talentos, conforme currículo.</p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="experience-note">
          <span>✳</span>
          <p>Experiência também construída em colaboração: Design, Produto e Desenvolvimento, lado a lado.</p>
          <a href="#contato" aria-label="Ir para contato"><ArrowUpRight size={18} /></a>
        </Reveal>
      </div>
    </section>
  );
}
