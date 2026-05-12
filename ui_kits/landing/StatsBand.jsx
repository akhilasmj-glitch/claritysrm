// StatsBand.jsx — mega-number proof band (WAC-style scale, ClarityWorks restraint)
function StatsBand() {
  const stats = [
    { n: "12–23", u: "hrs", l: "Saved per process,\nafter automation" },
    { n: "0.3–1.2", u: "FTE", l: "Capacity returned\nto the team, monthly" },
    { n: "65–85", u: "%", l: "Document content\ngenerated automatically" },
    { n: "100", u: "%", l: "IP transferred\nto the client" },
  ];
  return (
    <Section tone="cream" paddingY={120}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: "1px solid var(--line-warm)", borderBottom: "1px solid var(--line-warm)" }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: "52px 28px 44px",
              borderRight: i < 3 ? "1px solid var(--line-warm)" : "none",
              display: "flex", flexDirection: "column", gap: 18,
            }}>
              <div style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(48px, 6.2vw, 76px)", lineHeight: 1, letterSpacing: "-0.04em",
                color: "var(--ink-900)", fontFeatureSettings: '"tnum" 1', whiteSpace: "nowrap",
                display: "flex", alignItems: "baseline", gap: 6,
              }}>
                <span>{s.n}</span>
                <span style={{ fontSize: "0.42em", color: "var(--blue-500)", fontStyle: "italic" }}>{s.u}</span>
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.5, color: "var(--ink-500)", whiteSpace: "pre-line" }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
window.StatsBand = StatsBand;
