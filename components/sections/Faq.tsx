// Accordion FAQ.
export function Faq() {
  return (
    <>
      <section className="section soft" id="faq">
        <div className="wrap faq-wrap">
          <div className="reveal">
            <span className="eyebrow">FAQ</span>
            <h2>Questions, <span className="grad">answered directly.</span></h2>
            <p className="lead">What to know before you start.</p>
          </div>
          <div className="faq">
            <div className="faq-item"><button className="faq-q">Will my imported files look the same in Inlu?<span>+</span></button><div className="faq-a"><p>Import a .fig or .sketch file you own and Inlu shows what it found before you continue: auto layout frames, components and variants, variables with their modes, prototype links and comments all arrive as editable objects, not flattened images.</p></div></div>
            <div className="faq-item"><button className="faq-q">Can we try Inlu without leaving our current tool?<span>+</span></button><div className="faq-a"><p>Yes. Import one project, try it with your team, and keep everything else where it is. Many teams keep their old tool as the archive and design new work in Inlu, where it can go straight to code.</p></div></div>
            <div className="faq-item"><button className="faq-q">How long does it take a team to switch?<span>+</span></button><div className="faq-a"><p>Frames, auto layout, components, variables and comments work the way designers already know them, so most of the learning is the new part: reviewing and exporting code. Start with one project during the 7-day trial and decide from there.</p></div></div>
            <div className="faq-item"><button className="faq-q">Which code does Inlu export?<span>+</span></button><div className="faq-a"><p>React (TypeScript + CSS Modules), HTML/CSS, SwiftUI and Flutter. Review the output and connect real data and behaviour before release.</p></div></div>
            <div className="faq-item"><button className="faq-q">How good is the exported code? Can it use our components?<span>+</span></button><div className="faq-a"><p>Auto layout becomes flex and stack containers, variables become tokens, and breakpoints become media queries — no absolute positions. On Organization you can map Inlu components to your own library so the output imports them. Treat the result like a pull request: review it and connect real data before release.</p></div></div>
                        <div className="faq-item"><button className="faq-q">Where are my files stored? Is it secure?<span>+</span></button><div className="faq-a"><p>Files are encrypted in transit and at rest, and access follows your workspace roles. Organization adds SSO/SAML, SCIM, an audit log and data residency options.</p></div></div>
            <div className="faq-item"><button className="faq-q">What happens to my files after the trial?<span>+</span></button><div className="faq-a"><p>Nothing disappears. If you don’t pick a paid plan, your workspace moves to Starter: every file stays, and projects beyond the Starter limit become view-only until you upgrade.</p></div></div>
            <div className="faq-item"><button className="faq-q">How does the 7-day trial work?<span>+</span></button><div className="faq-a"><p>You get the full Professional plan for 7 days, with no card required. On day 7 you choose a plan or stay on Starter for free. Your files are kept either way.</p></div></div>
            <div className="faq-item"><button className="faq-q">What does “early access” mean for pricing?<span>+</span></button><div className="faq-a"><p>Prices on this page are the current beta prices. If you join now, your price stays the same for 12 months. If plan limits change, we tell you 30 days in advance.</p></div></div>
            <div className="faq-item"><button className="faq-q">How does the team work together?<span>+</span></button><div className="faq-a"><p>Multiplayer editing, live cursors, voice rooms, follow mode, and comments pinned to the work they describe.</p></div></div>
          </div>
        </div>
      </section>

    </>
  );
}
