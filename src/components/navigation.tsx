"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, Orbit, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav aria-label="Navegação principal" className="navigation shell">
        <a className="brand" href="#inicio" aria-label="Lucas Santos — início">
          <span className="brand__mark"><Orbit size={19} strokeWidth={1.8} /></span>
          <span>Lucas<span className="brand__dot">.</span>dev</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <div className={`navigation__links ${menuOpen ? "is-open" : ""}`}>
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="navigation__contact" href="#contato" onClick={() => setMenuOpen(false)}>
            Vamos conversar <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>
    </header>
  );
}
