type SectionHeadingProps = {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "right";
};

export function SectionHeading({ number, eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <div className="section-heading__top"><span>{number}</span><span>{eyebrow}</span></div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
