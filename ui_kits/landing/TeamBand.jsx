// TeamBand.jsx — WAC-style multi-image team collage
function TeamBand() {
  return (
    <Section tone="paper" paddingY={140}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "center" }}>
          <div>
            <Eyebrow>Working with us</Eyebrow>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 400,
              fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.025em",
              color: "var(--ink-900)", margin: "20px 0 32px", textWrap: "balance",
            }}>
              We sit with you. Not <span style={{ fontStyle: "italic", color: "var(--blue-500)" }}>across the table</span>.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.65, color: "var(--ink-500)", margin: "0 0 36px", maxWidth: 520 }}>
              Operators who've run finance, ops, and engineering teams inside Australian businesses. We aren't a generalist IT firm and we don't subcontract delivery. The team that quantifies the work is the team that builds it.
            </p>
            <Button variant="pillDark">Meet the team</Button>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "180px 180px",
            gap: 12,
          }}>
            <div style={{ gridColumn: "1 / 2", gridRow: "1 / 3", borderRadius: 8, overflow: "hidden", background: "var(--ink-900)" }}
                 dangerouslySetInnerHTML={{ __html: `<image-slot id="team-1" placeholder="Operator at whiteboard" style="width:100%;height:100%;display:block"></image-slot>` }}/>
            <div style={{ gridColumn: "2 / 3", gridRow: "1 / 2", borderRadius: 8, overflow: "hidden", background: "var(--ink-900)" }}
                 dangerouslySetInnerHTML={{ __html: `<image-slot id="team-2" placeholder="Workshop session" style="width:100%;height:100%;display:block"></image-slot>` }}/>
            <div style={{ gridColumn: "3 / 4", gridRow: "1 / 2", borderRadius: 8, overflow: "hidden", background: "var(--ink-900)" }}
                 dangerouslySetInnerHTML={{ __html: `<image-slot id="team-3" placeholder="Client site visit" style="width:100%;height:100%;display:block"></image-slot>` }}/>
            <div style={{ gridColumn: "2 / 4", gridRow: "2 / 3", borderRadius: 8, overflow: "hidden", background: "var(--ink-900)" }}
                 dangerouslySetInnerHTML={{ __html: `<image-slot id="team-4" placeholder="Team / culture image" style="width:100%;height:100%;display:block"></image-slot>` }}/>
          </div>
        </div>
      </Container>
    </Section>
  );
}

window.TeamBand = TeamBand;
