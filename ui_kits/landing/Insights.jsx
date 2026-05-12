// Insights.jsx — operator notes / blog cards (WAC-style)
function Insights() {
  const posts = [
    { slot: "ins-1", tag: "Operator note · 6 min", title: "Why most automation roadmaps fail before the first sprint.", date: "April 2026" },
    { slot: "ins-2", tag: "Case write-up · 8 min", title: "Quantifying tender review: what hours-saved really means.", date: "March 2026" },
    { slot: "ins-3", tag: "Field note · 4 min", title: "The seven questions we ask before quoting an engagement.", date: "March 2026" },
  ];
  return (
    <Section tone="cream" paddingY={128}>
      <Container>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 48, gap: 40, flexWrap: "wrap" }}>
          <div>
            <Eyebrow>Operator notes</Eyebrow>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 52, lineHeight: 1.05,
              letterSpacing: "-0.02em", color: "var(--ink-900)", margin: "20px 0 0", textWrap: "balance",
            }}>
              Field writing from the <span style={{ fontStyle: "italic", color: "var(--blue-500)" }}>engagement floor</span>.
            </h2>
          </div>
          <Button variant="ghost">All notes</Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {posts.map(p => (
            <a key={p.slot} href="#" style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ overflow: "hidden", borderRadius: 8, aspectRatio: "16/10", background: "var(--cream-200)" }}
                   dangerouslySetInnerHTML={{ __html: `<image-slot id="${p.slot}" placeholder="${p.tag}" style="width:100%;height:100%;display:block"></image-slot>` }}/>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-500)" }}>{p.tag}</span>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 24, lineHeight: 1.2, letterSpacing: "-0.01em", color: "var(--ink-900)", margin: 0, textWrap: "balance" }}>{p.title}</h3>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ink-500)" }}>{p.date}</span>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
window.Insights = Insights;
