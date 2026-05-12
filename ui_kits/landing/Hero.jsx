// Hero.jsx — WAC-style full-bleed image hero with carousel indicators
const { useState: useStateHero, useEffect: useEffectHero } = React;
function Hero() {
  const slides = [
    {
      slot: "hero-1",
      eyebrow: "From business function to built solution",
      headline: <>AI <span style={{fontStyle:"italic"}}>Precision</span>. Operator <span style={{fontStyle:"italic"}}>Intuition</span>. Real Results.</>,
      cta: "Built for Australian operators",
    },
    {
      slot: "hero-2",
      eyebrow: "Featured engagement",
      headline: <>Tender review, <span style={{fontStyle:"italic"}}>days → hours</span> for ICG.</>,
      cta: "Read the case study",
    },
    {
      slot: "hero-3",
      eyebrow: "Active pilot",
      headline: <>Communication intelligence with <span style={{fontStyle:"italic"}}>Macquarie University</span>.</>,
      cta: "Explore ClaritySRM",
    },
  ];
  const [i, setI] = useStateHero(0);
  useEffectHero(() => {
    const t = setInterval(() => setI(x => (x + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ position: "relative", height: "min(820px, 92vh)", minHeight: 640, overflow: "hidden", background: "var(--ink-900)" }}>
      {slides.map((s, idx) => (
        <div key={idx} style={{
          position: "absolute", inset: 0,
          opacity: i === idx ? 1 : 0,
          transition: "opacity 900ms var(--ease-out)",
          pointerEvents: i === idx ? "auto" : "none",
        }}>
          <div style={{ position: "absolute", inset: 0 }}
               dangerouslySetInnerHTML={{ __html: `<image-slot id="${s.slot}" placeholder="Hero image — drop a wide editorial photograph" style="width:100%;height:100%;display:block;--placeholder-bg:#0a1220;--placeholder-fg:#ffffff66"></image-slot>` }}/>
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(180deg, rgba(8,12,22,0.55) 0%, rgba(8,12,22,0.35) 40%, rgba(8,12,22,0.85) 100%)",
          }}/>
        </div>
      ))}

      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        <Container style={{ paddingBottom: 96, position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
            <span style={{ width: 36, height: 1, background: "rgba(255,255,255,0.5)" }}></span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)" }}>
              {slides[i].eyebrow}
            </span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: "clamp(48px, 6.8vw, 96px)", lineHeight: 1.04, letterSpacing: "-0.025em",
            color: "#fff", margin: 0, maxWidth: 1280, textWrap: "balance",
          }}>
            {slides[i].headline}
          </h1>

          <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 48, flexWrap: "wrap" }}>
            <Button variant="pillLight">{slides[i].cta}</Button>
            <a href="#work" style={{
              fontFamily: "var(--font-body)", fontSize: 15, color: "rgba(255,255,255,0.85)",
              textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.5)", paddingBottom: 3,
            }}>See our approach</a>
          </div>

          {/* Carousel indicators */}
          <div style={{ marginTop: 80, display: "flex", alignItems: "center", gap: 28 }}>
            {slides.map((s, idx) => (
              <button key={idx} onClick={() => setI(idx)} style={{
                background: "transparent", border: "none", padding: 0, cursor: "pointer",
                display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10,
                minWidth: 120, opacity: i === idx ? 1 : 0.55,
                transition: "opacity 220ms var(--ease-out)",
              }}>
                <div style={{ width: "100%", height: 2, background: "rgba(255,255,255,0.2)", position: "relative" }}>
                  <div style={{
                    position: "absolute", inset: 0, background: "#fff",
                    width: i === idx ? "100%" : "0%",
                    transition: i === idx ? "width 6500ms linear" : "none",
                  }}/>
                </div>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em",
                  textTransform: "uppercase", color: "#fff", textAlign: "left",
                }}>0{idx + 1} / 03</span>
              </button>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}

window.Hero = Hero;
