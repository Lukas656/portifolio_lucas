import { ArrowDown, ArrowRight } from "lucide-react";
import { SolarSystem } from "@/components/solar-system";

export function Hero() {
  return (
    <section className="hero shell" id="inicio" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="eyebrow"><span className="eyebrow__line" /> DESENVOLVEDOR WEB · SÃO PAULO, BR</p>
        <h1 id="hero-title">Fala DEV 👋<br/> Eu sou <span>Lucas Santos</span></h1>
        <p className="hero__intro">
          Desenvolvedor front-end com foco em criar experiências digitais responsivas, componentes reutilizáveis e interfaces que fazem sentido.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#projetos">Explorar projetos <ArrowRight size={17} /></a>
          <a className="button button--quiet" href="#sobre">Conhecer minha trajetória</a>
        </div>
        <div className="hero__meta">
          <span><span className="hero__meta-dot" /> React · Next.js · TypeScript</span>
          <span>Experiência na SKY Brasil</span>
        </div>
      </div>

      <div className="hero__visual">
        <SolarSystem />
      </div>
      <a className="hero__scroll" href="#sobre" aria-label="Rolar para a seção Sobre mim">
        <span>ROLE PARA EXPLORAR</span><ArrowDown size={14} />
      </a>
    </section>
  );
}
