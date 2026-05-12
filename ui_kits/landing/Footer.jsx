// Footer.jsx
function Footer() {
  const cols = [
    { h: "Services", items: ["Fractional COO", "Workflow automation", "Custom software build", "ClaritySRM platform"] },
    { h: "Work",     items: ["Construction", "Financial services", "Education", "Professional services"] },
    { h: "Company",  items: ["About", "Engagement model", "Operator notes", "Contact"] },
  ];

  return (
    <footer style={{ background: "var(--navy-900)", color: "var(--cream-50)", paddingTop: 88 }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.4fr) repeat(3, minmax(0,1fr))", gap: 64, paddingBottom: 80, borderBottom: "1px solid var(--line-dark)" }}>
          <div>
            <Logo inverse size={36}/>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.6, color: "var(--fg-onDark-muted)", margin: "24px 0 28px", maxWidth: 320 }}>
              From business function to built solution. A ClaritySRM company,
              working with Australian businesses across construction, financial
              services, professional services, and education.
            </p>
            <Button variant="secondaryOnDark">Book a discovery call</Button>
          </div>

          {cols.map(col => (
            <div key={col.h}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--fg-onDark-muted)", marginBottom: 18 }}>{col.h}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
                {col.items.map(i => (
                  <li key={i}><a href="#" style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--cream-50)", textDecoration: "none" }}>{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ padding: "32px 0 44px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--fg-onDark-muted)" }}>
            © 2026 ClarityWorks · A ClaritySRM company · Sydney NSW · clarityworks.com.au
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="#" style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--fg-onDark-muted)", textDecoration: "none" }}>Privacy</a>
            <a href="#" style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--fg-onDark-muted)", textDecoration: "none" }}>Terms</a>
            <a href="#" style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--fg-onDark-muted)", textDecoration: "none" }}>LinkedIn ↗</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

window.Footer = Footer;
