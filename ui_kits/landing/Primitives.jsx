// Primitives.jsx — shared building blocks for the ClarityWorks landing page.

const { useState, useEffect, useRef } = React;

/* ────────────────────────────────────────────────────────── Eyebrow ── */
function Eyebrow({ children, tone = "muted", style }) {
  const color = tone === "accent" ? "var(--blue-600)"
              : tone === "onDark" ? "var(--fg-onDark-muted)"
              : "var(--ink-500)";
  return (
    <div style={{
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color,
      ...style,
    }}>{children}</div>
  );
}

/* ────────────────────────────────────────────────────────── Container ── */
function Container({ children, width = "base", style, className }) {
  const max = width === "narrow" ? 880 : width === "wide" ? 1320 : 1140;
  return (
    <div className={className} style={{ maxWidth: max, margin: "0 auto", padding: "0 32px", ...style }}>
      {children}
    </div>
  );
}

/* ────────────────────────────────────────────────────────── Section ── */
function Section({ children, tone = "cream", id, style, paddingY = 128 }) {
  const bg = tone === "navy" ? "var(--navy-900)"
           : tone === "paper" ? "#fff"
           : "var(--cream-50)";
  const fg = tone === "navy" ? "var(--fg-onDark)" : "var(--fg)";
  return (
    <section id={id} style={{ background: bg, color: fg, padding: `${paddingY}px 0`, position: "relative", ...style }}>
      {children}
    </section>
  );
}

/* ────────────────────────────────────────────────────────── Button ── */
function Button({ children, variant = "primary", as = "button", href, onClick, style, icon = true }) {
  const base = {
    fontFamily: "var(--font-body)",
    fontSize: 15,
    fontWeight: 500,
    padding: "13px 20px",
    borderRadius: 4,
    border: "1px solid transparent",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    lineHeight: 1,
    letterSpacing: "0.005em",
    textDecoration: "none",
    transition: "background 220ms var(--ease-out), color 220ms var(--ease-out), border-color 220ms var(--ease-out)",
  };
  const variants = {
    primary:    { background: "var(--blue-500)", color: "#fff" },
    primaryDark:{ background: "var(--navy-900)", color: "var(--cream-50)" },
    secondary:  { background: "transparent", color: "var(--ink-900)", borderColor: "var(--ink-900)" },
    secondaryOnDark: { background: "transparent", color: "var(--cream-50)", borderColor: "var(--cream-50)" },
    ghost:      { background: "transparent", color: "var(--ink-900)", padding: "13px 0" },
    pill:       { background: "var(--blue-500)", color: "#fff", borderRadius: 999, padding: "14px 8px 14px 26px", fontSize: 16, gap: 14 },
    pillDark:   { background: "var(--ink-900)", color: "#fff", borderRadius: 999, padding: "14px 8px 14px 26px", fontSize: 16, gap: 14 },
    pillLight:  { background: "#fff", color: "var(--ink-900)", borderRadius: 999, padding: "14px 8px 14px 26px", fontSize: 16, gap: 14 },
  };
  const isPill = variant.startsWith("pill");
  const [hover, setHover] = useState(false);
  const hoverStyle = hover ? {
    primary:    { background: "var(--blue-600)" },
    primaryDark:{ background: "var(--navy-800)" },
    secondary:  { background: "var(--ink-900)", color: "var(--cream-50)" },
    secondaryOnDark: { background: "var(--cream-50)", color: "var(--navy-900)" },
    ghost:      { color: "var(--blue-600)" },
    pill:       { background: "var(--blue-600)" },
    pillDark:   { background: "var(--navy-900)" },
    pillLight:  { background: "var(--cream-100)" },
  }[variant] : {};

  const Tag = as === "a" || href ? "a" : "button";
  return (
    <Tag href={href} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant], ...hoverStyle, ...style }}>
      {children}
      {icon && !isPill && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
        </svg>
      )}
      {icon && isPill && (
        <span style={{
          width: 38, height: 38, borderRadius: 999,
          background: variant === "pillLight" ? "var(--ink-900)" : "#fff",
          color: variant === "pillLight" ? "#fff" : "var(--ink-900)",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </span>
      )}
    </Tag>
  );
}

/* ────────────────────────────────────────────────────────── Card ── */
function Card({ children, style, hoverable = false, onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <div onClick={onClick}
      onMouseEnter={() => hoverable && setHover(true)}
      onMouseLeave={() => hoverable && setHover(false)}
      style={{
        background: "#fff",
        border: "1px solid var(--line-warm)",
        borderRadius: 8,
        padding: 28,
        transition: "transform 220ms var(--ease-out), box-shadow 220ms var(--ease-out)",
        transform: hover ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hover
          ? "0 1px 0 rgba(12,18,32,0.04), 0 6px 16px -8px rgba(12,18,32,0.10)"
          : "0 1px 0 rgba(12,18,32,0.04), 0 1px 2px rgba(12,18,32,0.04)",
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}>
      {children}
    </div>
  );
}

/* ────────────────────────────────────────────────────────── Icon ── */
// Inline Lucide-derived icons at 1.75 stroke
const ICON_PATHS = {
  briefcase: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>,
  workflow: <><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M6 9v3a3 3 0 0 0 3 3h6"/></>,
  layers: <><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>,
  arrowRight: <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
  arrowUpRight: <><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></>,
  check: <polyline points="20 6 9 17 4 12"/>,
  circleCheck: <><circle cx="12" cy="12" r="10"/><polyline points="8 12 11 15 16 9"/></>,
  clock: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
  fileText: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></>,
  gitBranch: <><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></>,
  lineChart: <><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></>,
  target: <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></>,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22 6 12 13 2 6"/></>,
  menu: <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>,
  map: <><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></>,
  building: <><rect x="4" y="2" width="16" height="20" rx="1"/><path d="M10 22V18h4v4"/></>,
};
function Icon({ name, size = 20, stroke = 1.75, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
      style={{ flexShrink: 0, ...style }}>
      {ICON_PATHS[name]}
    </svg>
  );
}

/* ────────────────────────────────────────────────────────── Logo ── */
function Logo({ inverse = false, size = 32 }) {
  const ink = inverse ? "#FBF7ED" : "#0A1735";
  const blue = inverse ? "#4A75FF" : "#2B5BFF";
  return (
    <svg viewBox="0 0 360 64" height={size} style={{ display: "block" }}>
      <g transform="translate(8 8)">
        <circle cx="24" cy="24" r="23" fill="none" stroke={ink} strokeWidth="1.5"/>
        <path d="M 36 14 A 16 16 0 1 0 36 34" fill="none" stroke={ink} strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="36" cy="14" r="2.4" fill={blue}/>
      </g>
      <text x="68" y="42" fontFamily="Instrument Serif, Georgia, serif" fontSize="34" fill={ink} letterSpacing="-0.5">
        Clarity<tspan fontStyle="italic" fill={blue}>Works</tspan>
      </text>
    </svg>
  );
}

Object.assign(window, { Eyebrow, Container, Section, Button, Card, Icon, Logo });
