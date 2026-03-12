interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-12`}>
      {label && (
        <span
          className={`inline-block text-sm font-bold tracking-widest uppercase mb-3 ${
            light ? "text-accent-light" : "text-accent"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 leading-tight ${
          light ? "text-white" : "text-primary-dark"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${light ? "text-gray-300" : "text-text-secondary"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
