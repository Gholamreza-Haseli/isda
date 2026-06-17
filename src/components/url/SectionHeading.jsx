import React from "react";

export default function SectionHeading({ eyebrow, title, description, align = "center", light = false }) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl mb-12 ${alignClass}`}>
      {eyebrow && (
        <span className={`inline-block text-xs font-body font-semibold uppercase tracking-[0.2em] mb-3 ${light ? "text-accent" : "text-accent"}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base font-body leading-relaxed ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
