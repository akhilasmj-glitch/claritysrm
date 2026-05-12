// Differentiators.jsx
function Differentiators() {
  const points = [
    { n: "01", h: "We start from business function, not tooling.", d: "The map comes from how decisions actually move. Software comes later, if it's the right answer." },
    { n: "02", h: "We quantify before we build.", d: "Hours, dollars, and risk against every step — so you know what an automation is worth before a line of code." },
    { n: "03", h: "We build what we design. No handoff.", d: "The team that mapped your operations also ships the software. Continuity of context, single owner." },
    { n: "04", h: "We phase for risk, not for billing.", d: "Sequenced around the changes most likely to compound. We can stop when the case stops making sense." },
    { n: "05", h: "IP transfers to the client at completion.", d: "What we build for you is yours. No lock-in, no escrow, no platform tax." },
  ];

  return (
    <Section tone="cream" id="about">
      <Container width="narrow">
        <Eyebrow>How we work, differently</Eyebrow>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 400,
          fontSize: 56, lineHeight: 1.05, letterSpacing: "-0.02em",
          color: "var(--ink-900)", margin: "20px 0 64px", textWrap: "balance",
        }}>
          Five things we won't <span style={{ fontStyle: "italic", color: "var(--blue-500)" }}>compromise on</span>.
        </h2>

        <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid var(--line-warm)" }}>
          {points.map(p => (
            <div key={p.n} style={{
              display: "grid", gridTemplateColumns: "80px minmax(0,1fr)",
              gap: 32, padding: "28px 0", borderBottom: "1px solid var(--line-warm)", alignItems: "start",
            }}>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--blue-500)",
                letterSpacing: "0.1em", paddingTop: 4,
              }}>{p.n}</div>
              <div>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 28,
                  lineHeight: 1.15, letterSpacing: "-0.01em", color: "var(--ink-900)",
                  margin: "0 0 10px", textWrap: "balance",
                }}>{p.h}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.6, color: "var(--ink-500)", margin: 0, maxWidth: 620 }}>
                  {p.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

window.Differentiators = Differentiators;
