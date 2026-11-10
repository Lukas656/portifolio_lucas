"use client";

import { useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";
import { Sparkles } from "lucide-react";
import { orbitSkills } from "@/data/profile";

const orbits = [
  { width: "42%", height: "37%", duration: "24s", skill: orbitSkills[0] },
  { width: "54%", height: "46%", duration: "30s", skill: orbitSkills[1] },
  { width: "66%", height: "55%", duration: "36s", skill: orbitSkills[2] },
  { width: "78%", height: "64%", duration: "42s", skill: orbitSkills[3] },
  { width: "90%", height: "73%", duration: "48s", skill: orbitSkills[4] },
  { width: "102%", height: "82%", duration: "54s", skill: orbitSkills[5] },
  { width: "114%", height: "91%", duration: "60s", skill: orbitSkills[6] },
];

const skillDescriptions: Record<string, string> = {
  "React.js": "Interfaces e componentes reutilizáveis.",
  "Next.js": "Aplicações web com renderização moderna.",
  TypeScript: "Código mais previsível e seguro.",
  Storybook: "Desenvolvimento e documentação de componentes.",
  "Design Systems": "Interfaces consistentes e reutilizáveis.",
  "APIs REST": "Integração de dados e serviços web.",
  "Liferay 7.4": "Desenvolvimento em portal e CMS corporativo.",
};

export function SolarSystem() {
  const [highlightedSkill, setHighlightedSkill] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const activeSkill = highlightedSkill ?? selectedSkill;

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    event.currentTarget.style.setProperty("--solar-tilt-x", `${((0.5 - y) * 7).toFixed(2)}deg`);
    event.currentTarget.style.setProperty("--solar-tilt-y", `${((x - 0.5) * 7).toFixed(2)}deg`);
    event.currentTarget.style.setProperty("--solar-glow-x", `${(x * 100).toFixed(1)}%`);
    event.currentTarget.style.setProperty("--solar-glow-y", `${(y * 100).toFixed(1)}%`);
  }

  function resetPointer(event: ReactPointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--solar-tilt-x", "0deg");
    event.currentTarget.style.setProperty("--solar-tilt-y", "0deg");
    event.currentTarget.style.setProperty("--solar-glow-x", "50%");
    event.currentTarget.style.setProperty("--solar-glow-y", "50%");
  }

  return (
    <div
      className={`solar${activeSkill ? " solar--engaged" : ""}${selectedSkill ? " solar--selected" : ""}`}
      role="group"
      aria-label={`Sistema solar interativo de habilidades: ${orbitSkills.join(", ")}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="solar__stars" aria-hidden="true" />
      {orbits.map((orbit, index) => (
        <div
          className={`orbit-path orbit-path--${index + 1}${activeSkill === orbit.skill ? " orbit-path--active" : ""}`}
          key={orbit.skill}
          style={{ "--orbit-width": orbit.width, "--orbit-height": orbit.height, "--orbit-duration": orbit.duration, "--orbit-delay": `${(-(index / orbits.length) * Number.parseFloat(orbit.duration)).toFixed(2)}s` } as CSSProperties}
        >
          <span className="orbit-path__planet">
            <button
              className="orbit-skill"
              type="button"
              aria-label={`${orbit.skill}. ${skillDescriptions[orbit.skill]}`}
              aria-pressed={selectedSkill === orbit.skill}
              title={skillDescriptions[orbit.skill]}
              onClick={() => setSelectedSkill((current) => current === orbit.skill ? null : orbit.skill)}
              onPointerEnter={() => setHighlightedSkill(orbit.skill)}
              onPointerLeave={() => setHighlightedSkill(null)}
              onFocus={() => setHighlightedSkill(orbit.skill)}
              onBlur={() => setHighlightedSkill(null)}
            >
              {orbit.skill}
            </button>
          </span>
        </div>
      ))}
      <div className="solar__sun" aria-hidden="true">
        <span className="solar__sun-core">LS</span>
        <span className="solar__sun-caption">{activeSkill ?? "FRONT-END"}</span>
      </div>
      <span className="solar__hint" aria-hidden="true">
        <Sparkles size={13} />
        {selectedSkill ? "CLIQUE DE NOVO PARA RETOMAR" : activeSkill ? "CLIQUE PARA FIXAR" : "MOUSE · CLIQUE · TOQUE"}
      </span>
      <span className="solar__sr-only" aria-live="polite" aria-atomic="true">
        {selectedSkill ? `Tecnologia selecionada: ${selectedSkill}. ${skillDescriptions[selectedSkill]}` : "Nenhuma tecnologia selecionada."}
      </span>
    </div>
  );
}
