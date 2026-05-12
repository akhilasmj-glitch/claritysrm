// ContactCTA.jsx — book a discovery call
function ContactCTA() {
  const [form, setForm] = React.useState({ name: "", email: "", company: "", note: "" });
  const [sent, setSent] = React.useState(false);
  const onSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <Section tone="cream" paddingY={128} id="contact">
      <Container>
        <div style={{
          background: "#fff", border: "1px solid var(--line-warm)", borderRadius: 12,
          boxShadow: "0 2px 0 rgba(12,18,32,0.04), 0 20px 40px -20px rgba(12,18,32,0.18)",
          padding: 64, display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 80, alignItems: "start",
        }}>
          <div>
            <Eyebrow tone="accent">Discovery call</Eyebrow>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 400,
              fontSize: 52, lineHeight: 1.05, letterSpacing: "-0.02em",
              color: "var(--ink-900)", margin: "20px 0 24px", textWrap: "balance",
            }}>
              Let's see if there's a case <span style={{ fontStyle: "italic", color: "var(--blue-500)" }}>worth building</span>.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.65, color: "var(--ink-500)", margin: "0 0 28px", maxWidth: 440 }}>
              A 30-minute call with one of our principals. We'll ask what's
              slowing you down, share what we've seen work elsewhere, and tell
              you honestly if there's an engagement here.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {["No deck, no pitch.", "We come prepared with peer cases.", "If it isn't a fit, we'll say so."].map(t => (
                <li key={t} style={{ display: "flex", gap: 12, alignItems: "center", fontFamily: "var(--font-body)", fontSize: 15, color: "var(--ink-700)" }}>
                  <span style={{ color: "var(--blue-500)" }}><Icon name="circleCheck" size={18}/></span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={onSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {sent ? (
              <div style={{
                gridColumn: "1/-1", padding: "48px 36px", background: "var(--cream-50)",
                border: "1px solid var(--line-warm)", borderRadius: 8, textAlign: "center",
              }}>
                <div style={{ color: "var(--blue-500)", marginBottom: 14 }}><Icon name="circleCheck" size={36}/></div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 28, margin: "0 0 8px", color: "var(--ink-900)" }}>Thanks — we'll be in touch.</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--ink-500)", margin: 0 }}>A principal will reply inside one business day, from a Sydney number.</p>
              </div>
            ) : (
              <>
                <Field label="Full name" value={form.name} onChange={v => setForm({ ...form, name: v })} placeholder="Jane Hartley"/>
                <Field label="Work email" value={form.email} onChange={v => setForm({ ...form, email: v })} placeholder="jane@firm.com.au" type="email"/>
                <Field label="Company" value={form.company} onChange={v => setForm({ ...form, company: v })} placeholder="ICG Group" full/>
                <Field label="What's slowing you down?" value={form.note} onChange={v => setForm({ ...form, note: v })} placeholder="Tender review takes three days. We want it down to hours." textarea full/>
                <div style={{ gridColumn: "1/-1", display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 8, flexWrap: "wrap", gap: 12 }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ink-500)" }}>
                    Replies from a Sydney number within one business day.
                  </span>
                  <Button variant="primary">Book a discovery call</Button>
                </div>
              </>
            )}
          </form>
        </div>
      </Container>
    </Section>
  );
}

function Field({ label, value, onChange, placeholder, type = "text", textarea, full }) {
  const [focus, setFocus] = React.useState(false);
  const sharedStyle = {
    fontFamily: "var(--font-body)", fontSize: 15, padding: "12px 14px",
    border: `1px solid ${focus ? "var(--blue-500)" : "var(--line-warm)"}`,
    background: "#fff", borderRadius: 4, color: "var(--ink-900)", outline: "none",
    boxShadow: focus ? "0 0 0 3px rgba(43,91,255,0.15)" : "none",
    transition: "border-color 140ms, box-shadow 140ms", width: "100%", boxSizing: "border-box",
  };
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6, gridColumn: full ? "1/-1" : "auto" }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-500)" }}>{label}</span>
      {textarea ? (
        <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ ...sharedStyle, minHeight: 92, resize: "vertical" }}/>
      ) : (
        <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={sharedStyle}/>
      )}
    </label>
  );
}

window.ContactCTA = ContactCTA;
