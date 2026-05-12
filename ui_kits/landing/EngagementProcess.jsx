// EngagementProcess.jsx — seven-step process band
function EngagementProcess() {
  const steps = [
    { n: "01", title: "Leadership alignment & scope", desc: "A working session to set boundaries, owners, and outcomes." },
    { n: "02", title: "Operational workshops", desc: "We sit with the people doing the work, in their rhythm." },
    { n: "03", title: "Workflow mapping & quantification", desc: "Hours and dollars against every step — before any build." },
    { n: "04", title: "Opportunity assessment", desc: "Where automation creates the largest measured impact." },
    { n: "05", title: "Prioritised roadmap", desc: "Sequenced for risk, not for billing." },
    { n: "06", title: "Investment thesis", desc: "What you spend, what you get back, on what horizon." },
    { n: "07", title: "Build & delivery", desc: "We build what we designed. IP transfers to you at completion." },
  ];

  return (
    <Section tone="navy" id="approach">
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.3fr)", gap: 80, marginBottom: 72, alignItems: "end" }}>
          <div>
            <Eyebrow tone="onDark">The engagement</Eyebrow>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 400,
              fontSize: 56, lineHeight: 1.05, letterSpacing: "-0.02em",
              color: "var(--cream-50)", margin: "20px 0 0", textWrap: "balance",
            }}>
              Seven steps. <span style={{ fontStyle: "italic", color: "var(--blue-400)" }}>We quantify before we build.</span>
            </h2>
          </div>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.65,
            color: "var(--fg-onDark-muted)", margin: 0, paddingBottom: 8, maxWidth: 520,
          }}>
            Most automation projects fail because the roadmap was assembled
            from a vendor's product menu. Ours starts from how decisions
            actually move through your business.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: "1px solid var(--line-dark)" }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              padding: "28px 24px 36px 0",
              borderRight: (i % 4 !== 3) ? "1px solid var(--line-dark)" : "none",
              borderBottom: i < 4 ? "1px solid var(--line-dark)" : "none",
              paddingLeft: (i % 4 === 0) ? 0 : 24,
              minHeight: 180,
            }}>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--blue-400)",
                letterSpacing: "0.14em", marginBottom: 18,
              }}>{s.n}</div>
              <div style={{
                fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1.15,
                letterSpacing: "-0.01em", color: "var(--cream-50)", marginBottom: 10,
              }}>{s.title}</div>
              <div style={{
                fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55,
                color: "var(--fg-onDark-muted)",
              }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

window.EngagementProcess = EngagementProcess;
