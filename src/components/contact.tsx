import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { contact, education } from "@/data/profile";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const socialLinks = [
  { label: "LinkedIn", href: contact.linkedin, icon: Linkedin },
  { label: "GitHub", href: contact.github, icon: Github },
];

export function Contact() {
  return (
    <>
      <section className="section education-section" aria-label="Formação e cursos complementares">
        <div className="shell education-layout">
          <Reveal>
            <SectionHeading number="04" eyebrow="FORMAÇÃO & CURIOSIDADE" title="Aprender faz parte do caminho." description="Uma base em desenvolvimento de sistemas, complementada por estudos e prática contínua." />
          </Reveal>
          <Reveal className="education-list" delay={100}>
            {education.map((item) => (
              <div className="education-row" key={item.school}>
                <span className="education-row__year">{item.period}</span>
                <div><strong>{item.school}</strong><span>{item.course}</span></div>
                <ArrowUpRight size={17} />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="contact-section" id="contato" aria-labelledby="contact-title">
        <div className="contact-section__glow" aria-hidden="true" />
        <div className="shell contact-layout">
          <Reveal className="contact-copy">
            <p className="eyebrow"><span className="eyebrow__line" /> PRÓXIMO PASSO</p>
            <h2 id="contact-title">Vamos criar algo <span>que faça a diferença?</span></h2>
            <p>Se você quer conversar sobre desenvolvimento web, produto ou uma nova oportunidade, me mande uma mensagem.</p>
            <a className="button button--primary contact-cta" href={`mailto:${contact.email}`}>Escreva para mim <ArrowUpRight size={17} /></a>
          </Reveal>
          <Reveal className="contact-details" delay={120}>
            <div className="contact-detail"><span className="contact-detail__icon"><Mail size={18} /></span><div><span>E-MAIL</span><a href={`mailto:${contact.email}`}>{contact.email}</a></div><ArrowUpRight size={15} /></div>
            <div className="contact-detail"><span className="contact-detail__icon"><Phone size={18} /></span><div><span>TELEFONE</span><a href={`tel:${contact.phoneHref}`}>{contact.phone}</a></div><ArrowUpRight size={15} /></div>
            <div className="contact-detail"><span className="contact-detail__icon"><MapPin size={18} /></span><div><span>LOCALIZAÇÃO</span><p>{contact.location}</p></div></div>
            <div className="contact-socials">
              {socialLinks.map(({ label, href, icon: Icon }) => <a href={href} target="_blank" rel="noreferrer" key={label}><Icon size={16} /> {label} <ArrowUpRight size={13} /></a>)}
            </div>
          </Reveal>
        </div>
        <div className="contact-orbit contact-orbit--one" aria-hidden="true" />
        <div className="contact-orbit contact-orbit--two" aria-hidden="true" />
      </section>

      <footer className="site-footer">
        <div className="shell site-footer__inner">
          <a className="brand" href="#inicio"><span className="brand__mark"><span className="brand__letters">LS</span></span><span>lucas<span className="brand__dot">.</span>dev</span></a>
          <p>Feito com intenção, código e café.</p>
          <a href="#inicio" className="back-to-top">VOLTAR AO TOPO <ArrowDownRight size={14} /></a>
          <span className="site-footer__copy">© {new Date().getFullYear()} Lucas Santos Nascimento</span>
        </div>
      </footer>
    </>
  );
}
