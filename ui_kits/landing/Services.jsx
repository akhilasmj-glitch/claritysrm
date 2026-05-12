// Services.jsx — WAC-style image-led "What We Do" rows
function Services() {
  const services = [
    {
      slot: "svc-coo",
      tag: "01 / Fractional COO",
      title: "Embed with leadership. Map how the work actually moves.",
      desc: "We sit with you weekly — operator to operator — to find where decisions stall and capacity is lost. The output is a roadmap that names the work, the cost, and what to fix first.",
    },
    {
      slot: "svc-auto",
      tag: "02 / Workflow Automation",
      title: "Tender reviews, loan docs, approval flows — automated.",
      desc: "We identify the manual work that compounds and build AI-powered systems that remove it. Document generation, approval routing, data entry, reporting. Quantified before build.",
    },
    {
      slot: "svc-build",
      tag: "03 / Custom Software Build",
      title: "We design it, we build it. IP transfers to you.",
      desc: "Where off-the-shelf tools fall short, we design and build the internal software. We build what we design — no handoff to another team. IP transfers to the client at completion.",
    },
  ];

  return (
    <Section tone="paper" id="services" paddingY={140}>
      <Container>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 96, flexWrap: "wrap", gap: 40 }}>
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 400,
              fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.025em",
              color: "var(--ink-900)", margin: "20px 0 0", textWrap: "balance", maxWidth: 880,
            }}>
              Three engagement shapes. Often <span style={{ fontStyle: "italic", color: "var(--blue-500)" }}>layered</span>. Each starts from how your business runs today.
            </h2>
          </div>
          <Button variant="pill">Explore what we do</Button>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {services.map((s, idx) => (
            <a key={s.slot} href="#" style={{
              display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.4fr)", gap: 64,
              padding: "44px 0", borderTop: "1px solid var(--line-warm)",
              borderBottom: idx === services.length - 1 ? "1px solid var(--line-warm)" : "none",
              textDecoration: "none", color: "inherit",
              alignItems: "center",
            }}>
              <div style={{ aspectRatio: "5/4", overflow: "hidden", borderRadius: 8, background: "var(--ink-900)" }}
                   dangerouslySetInnerHTML={{ __html: `<image-slot id="${s.slot}" placeholder="${s.tag} hero" style="width:100%;height:100%;display:block"></image-slot>` }}/>
              <div style={{ display: "flex", flexDirection: "column", gap: 18, paddingRight: 20 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-500)" }}>{s.tag}</span>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(28px, 3vw, 40px)",
                  lineHeight: 1.12, letterSpacing: "-0.02em", color: "var(--ink-900)", margin: 0, textWrap: "balance",
                }}>{s.title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.6, color: "var(--ink-500)", margin: 0, maxWidth: 560 }}>{s.desc}</p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-body)", fontSize: 14, color: "var(--ink-900)", marginTop: 4 }}>
                  <span style={{
                    width: 36, height: 36, borderRadius: 999, border: "1px solid var(--ink-900)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon name="arrowUpRight" size={14}/>
                  </span>
                  Explore this engagement
                </span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}

window.Services = Services;
