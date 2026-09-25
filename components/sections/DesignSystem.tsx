// Three animated cards: responsive layout, modes, attached comments.
export function DesignSystem() {
  return (
    <>
      <section className="section soft">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Everything you rely on</span>
            <h2>Nothing you rely on <span className="grad">is missing.</span></h2>
            <p className="lead">Auto layout, components, variables and modes — the way your team already works, now connected to the code.</p>
          </div>
          <div className="sys-grid">
            <article className="sys reveal">
              <div className="sys-vis sys-resize"><div className="rs-box" id="rsBox"><span className="rs-media"><svg viewBox="0 0 200 200"><use href="#hp"/></svg></span><span className="rs-body"><b>Aero Lite</b><small>$128 · 40 h battery</small></span><span className="rs-btn">Add</span><em className="rs-tag">Fill ↔</em></div><span className="rs-handle">↔ drag</span></div>
              <h3>Layout that stays responsive.</h3><p>Stacks, grids and constraints move together as the frame is resized.</p>
            </article>
            <article className="sys reveal d1">
              <div className="sys-vis sys-modes"><div className="seg small" id="modeSeg"><button className="active" data-mode="light">Light</button><button data-mode="dark">Dark</button><button data-mode="compact">Compact</button></div><div className="mode-btns" id="modeBtns" data-mode="light"><span className="mb ghost">Back</span><span className="mb">Continue</span></div><code className="mode-vars">Radius · 12 · Gap · 16</code></div>
              <h3>One system. Every screen.</h3><p>Components, variables and modes keep repeated decisions aligned.</p>
            </article>
            <article className="sys reveal d2">
              <div className="sys-vis sys-comments"><div className="cm-target">Continue</div><span className="cm-pin">A</span><div className="cm-bubble"><span className="cm-typing"><i></i><i></i><i></i></span><span className="cm-text"><b>Ana</b> Can the button say “Pay $195.60”?</span><small>2 replies · attached to Button / primary</small></div></div>
              <h3>The conversation stays attached.</h3><p>Comments sit next to the object and decision they describe.</p>
            </article>
          </div>
        </div>
      </section>

    </>
  );
}
