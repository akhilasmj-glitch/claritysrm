// CaseStudies.jsx — image-led grid cards (WAC-inspired)
function CaseStudies() {
  const cases = [
    {
      slot: "case-icg", sector: "Construction & fitout", client: "ICG",
      title: "Tender review, days → hours.",
      desc: "An AI workflow that compares quotes, flags exceptions, and drafts the review pack.",
      metric: "days → hrs",
    },
    {
      slot: "case-lender", sector: "Financial services", client: "Tier-2 lender",
      title: "Loan documents, 65–70% auto-drafted.",
      desc: "Human review trimmed to 3–4 hours per file with a full audit trail.",
      metric: "65–70%",
    },
    {
      slot: "case-macq", sector: "Education & enterprise", client: "Macquarie University",
      title: "ClaritySRM pilot for communication intelligence.",
      desc: "Surfacing the patterns that predict where institutional decisions stall.",
      metric: "Active pilot",
    },
  ];

  return (
    <Section tone="cream" id="work">
      <Container>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 56, gap: 40, flexWrap: "wrap" }}>
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 56, lineHeight: 1.05,
              letterSpacing: "-0.02em", color: "var(--ink-900)", margin: "20px 0 0", textWrap: "balance", maxWidth: 760,
            }}>
              Three cases. <span style={{ fontStyle: "italic", color: "var(--blue-500)" }}>Measured outcomes</span>, not slides.
            </h2>
          </div>
          <Button variant="ghost">All case studies</Button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {cases.map(c => (
            <a key={c.slot} href="#" style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", gap: 18, transition: "transform 220ms var(--ease-out)" }}
               onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
               onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
              <div style={{ position: "relative", overflow: "hidden", borderRadius: 12, aspectRatio: "4/3", background: "var(--navy-900)" }}
                   dangerouslySetInnerHTML={{ __html: `<image-slot id="${c.slot}" placeholder="${c.sector} hero image" style="width:100%;height:100%;display:block"></image-slot>` }}/>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-500)" }}>{c.sector}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-900)", letterSpacing: "0.05em" }}>{c.metric}</span>
              </div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 26, lineHeight: 1.18,
                letterSpacing: "-0.01em", color: "var(--ink-900)", margin: 0, textWrap: "balance",
              }}>{c.title}</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.6, color: "var(--ink-500)", margin: 0 }}>{c.desc}</p>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--ink-900)", borderBottom: "1px solid var(--blue-500)", paddingBottom: 3, alignSelf: "flex-start" }}>
                Read the case <Icon name="arrowUpRight" size={13}/>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
window.CaseStudies = CaseStudies;
