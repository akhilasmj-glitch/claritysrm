// ClientsBand.jsx — sectors served, navy band with placeholder marks
function ClientsBand() {
  const sectors = [
    "ICG Construction", "Macquarie University", "Tier-2 Lender",
    "Pro. Services", "Education NSW", "FinServ", "Construction QLD", "ASX-listed",
  ];
  return (
    <Section tone="navy" paddingY={112}>
      <Container>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
          <div>
            <Eyebrow tone="onDark">Sectors we serve</Eyebrow>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 48, lineHeight: 1.05,
              letterSpacing: "-0.02em", color: "var(--cream-50)", margin: "20px 0 0", maxWidth: 780, textWrap: "balance",
            }}>
              Australian operators in construction, financial services, professional services, and <span style={{ fontStyle: "italic", color: "var(--blue-400)" }}>education</span>.
            </h2>
          </div>
        </div>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          borderTop: "1px solid var(--line-dark)", borderLeft: "1px solid var(--line-dark)",
        }}>
          {sectors.map(s => (
            <div key={s} style={{
              borderRight: "1px solid var(--line-dark)", borderBottom: "1px solid var(--line-dark)",
              padding: "44px 28px", display: "flex", alignItems: "center", justifyContent: "center",
              minHeight: 120,
            }}>
              <span style={{
                fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 24,
                color: "var(--fg-onDark-muted)", letterSpacing: "-0.01em", textAlign: "center",
              }}>{s}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40, fontFamily: "var(--font-body)", fontSize: 14, color: "var(--fg-onDark-muted)" }}>
          Engagements typically run 6–14 weeks. Active pilot with Macquarie University CTO.
        </div>
      </Container>
    </Section>
  );
}
window.ClientsBand = ClientsBand;
