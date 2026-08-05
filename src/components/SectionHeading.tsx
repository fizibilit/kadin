export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <span
        className={`text-xs font-semibold uppercase tracking-[0.25em] ${
          light ? "text-gold-light" : "text-gold"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-3 font-display text-3xl sm:text-4xl font-semibold text-balance ${
          light ? "text-parchment" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-parchment-dark/85" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
