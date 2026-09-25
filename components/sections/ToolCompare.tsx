// Honest comparison with other design tools for teams considering a switch.
const rows: { what: string; figma: string; inlu: string; same?: boolean }[] = [
  { what: "Multiplayer, live cursors, comments", figma: "Yes", inlu: "Yes", same: true },
  { what: "Components, variants, variables, modes", figma: "Yes", inlu: "Yes", same: true },
  { what: "Auto layout and responsive resizing", figma: "Yes", inlu: "Yes", same: true },
  { what: "Open your existing .fig and .sketch files", figma: "Usually their own format", inlu: ".fig and .sketch, structure intact" },
  { what: "Production code from a frame", figma: "Inspect specs, then a developer rebuilds it", inlu: "React, HTML/CSS, SwiftUI, Flutter — built in" },
  { what: "Breakpoints in the output", figma: "Written by hand in code", inlu: "Media queries and size classes generated" },
  { what: "Prototype logic in the output", figma: "Re-implemented by developers", inlu: "Variables carry through to the export" },
  { what: "Developer access", figma: "Separate seats", inlu: "Included — unlimited viewers & commenters" },
];

export function ToolCompare() {
  return (
    <section className="section soft" id="compare">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Why switch</span>
          <h2>Everything you’re used to. <span className="grad">Plus the handoff, done.</span></h2>
          <p className="lead">Your team keeps the tools it already knows. What changes is what happens after a frame is approved.</p>
        </div>
        <div className="vs reveal">
          <div className="vs-row vs-head"><span></span><span>Other design tools</span><span>Inlu</span></div>
          {rows.map((r) => (
            <div className={`vs-row${r.same ? " same" : ""}`} key={r.what}>
              <span className="vs-what">{r.what}</span>
              <span className="vs-figma" data-label="Other tools">{r.figma}</span>
              <span className="vs-inlu" data-label="Inlu">{r.inlu}</span>
            </div>
          ))}
        </div>
        <p className="vs-note reveal">Based on popular design tools as of 2026; plugins can add some of this. Keep your old tool as the archive — import only what you want to move.</p>
      </div>
    </section>
  );
}
