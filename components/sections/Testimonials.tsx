// Social proof — layout ready, content is a placeholder until real customer quotes and numbers are approved.
const quotes = [
  { metric: "−N days", label: "from approved design to merged UI", text: "Placeholder: a design lead describes how handoff changed after moving to Inlu.", who: "Name Surname", role: "Head of Design, Company" },
  { metric: "N×", label: "fewer review rounds per feature", text: "Placeholder: an engineer on reviewing exported code instead of rebuilding screens.", who: "Name Surname", role: "Frontend Lead, Company" },
  { metric: "N%", label: "of exported code merged without rewrites", text: "Placeholder: a product manager on shipping the same UI to web and iOS.", who: "Name Surname", role: "Product Manager, Company" },
];

export function Testimonials() {
  return (
    <section className="section" id="proof">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Teams shipping with Inlu</span>
          <h2>Less handoff. <span className="grad">More shipping.</span></h2>
          <p className="lead">Real results from product teams go here. Every value below is a placeholder until customers approve their quotes and numbers.</p>
        </div>
        <div className="proof-grid">
          {quotes.map((q, i) => (
            <figure className={`proof reveal d${i}`} key={q.label}>
              <span className="ph-tag">Placeholder</span>
              <div className="proof-metric"><b>{q.metric}</b><span>{q.label}</span></div>
              <blockquote>“{q.text}”</blockquote>
              <figcaption><i aria-hidden="true" />{q.who}<small>{q.role}</small></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
