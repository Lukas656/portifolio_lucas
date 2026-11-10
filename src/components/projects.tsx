"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import projects from "@/data/projects.json";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type Project = (typeof projects)[number];

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex] as Project;
  const projectCount = projects.length;

  function move(direction: -1 | 1) {
    setActiveIndex((current) => (current + direction + projectCount) % projectCount);
  }

  return (
    <section className="section projects-section" id="projetos" aria-labelledby="projects-title">
      <div className="shell">
        <Reveal>
          <SectionHeading number="05" eyebrow="PROJETOS & TRABALHOS" title="Feitos para sair da tela." description="Uma seleção de espaços e projetos ligados à minha jornada de desenvolvimento." />
        </Reveal>
        {projectCount > 0 ? (
          <Reveal className="project-carousel" delay={100}>
            <div className="project-carousel__stage" aria-live="polite" aria-atomic="true">
              <a className="project-art-link" href={activeProject.url} target="_blank" rel="noreferrer" aria-label={`Abrir imagem do projeto ${activeProject.name}`}>
                <img className="project-art" src={activeProject.image} alt={activeProject.imageAlt} width={960} height={560} />
                <span className="project-art__open"><ExternalLink size={16} /> VISITAR PROJETO</span>
              </a>
              <div className="project-info">
                <div className="project-info__meta"><span>{activeProject.category}</span><span>{String(activeIndex + 1).padStart(2, "0")} / {String(projectCount).padStart(2, "0")}</span></div>
                <h3 id="projects-title">{activeProject.name}</h3>
                <p>{activeProject.description}</p>
                <div className="project-tags">{activeProject.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <a className="project-link" href={activeProject.url} target="_blank" rel="noreferrer">Abrir projeto <ArrowUpRight size={17} /></a>
              </div>
            </div>
            <div className="project-carousel__controls">
              <div className="project-carousel__dots" aria-label="Selecionar projeto">
                {projects.map((project, index) => (
                  <button className={index === activeIndex ? "is-active" : ""} key={project.id} type="button" aria-label={`Mostrar ${project.name}`} aria-pressed={index === activeIndex} onClick={() => setActiveIndex(index)} />
                ))}
              </div>
              <div className="project-carousel__buttons">
                <button type="button" onClick={() => move(-1)} aria-label="Projeto anterior"><ArrowLeft size={18} /></button>
                <button type="button" onClick={() => move(1)} aria-label="Próximo projeto"><ArrowRight size={18} /></button>
              </div>
            </div>
          </Reveal>
        ) : (
          <p className="projects-empty">Os projetos serão adicionados em breve.</p>
        )}
      </div>
    </section>
  );
}
