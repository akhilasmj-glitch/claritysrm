// Navbar.jsx
const { useState: useStateN, useEffect: useEffectN } = React;

function Navbar() {
  const [scrolled, setScrolled] = useStateN(false);
  useEffectN(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Approach", href: "#approach" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? "rgba(251,247,237,0.78)" : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? "1px solid var(--line-warm)" : "1px solid transparent",
      transition: "background 220ms var(--ease-out), border-color 220ms var(--ease-out)",
    }}>
      <Container style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}><Logo size={30}/></a>
        <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
          <div style={{ display: "flex", gap: 28 }}>
            {links.map(l => (
              <a key={l.label} href={l.href} style={{
                fontFamily: "var(--font-body)", fontSize: 14.5, color: "var(--ink-900)",
                textDecoration: "none", letterSpacing: "0.005em", fontWeight: 400,
              }}>{l.label}</a>
            ))}
          </div>
          <Button variant="primaryDark" icon={true} style={{ padding: "10px 16px", fontSize: 14 }}>
            Book a discovery call
          </Button>
        </div>
      </Container>
    </nav>
  );
}

window.Navbar = Navbar;
