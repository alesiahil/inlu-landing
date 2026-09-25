// Voice rooms, follow mode, comments in context.
export function Collaboration() {
  return (
    <>
      <section className="section" id="collab">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Collaboration</span>
            <h2>Designers and developers <span className="grad">in one file.</span></h2>
            <p className="lead">Live cursors, voice, follow mode and comments — with developers reviewing the actual output, not a spec. Unlimited viewers and commenters on Professional.</p>
          </div>
          <div className="collab-grid">
            <article className="card reveal"><div className="cv cv-voice"><span className="av big talk" style={{ background: 'var(--c-violet)' } as React.CSSProperties}>M</span><span className="av big" style={{ background: 'var(--c-green)' } as React.CSSProperties}>L</span><span className="av big" style={{ background: 'var(--c-pink)' } as React.CSSProperties}>A</span><span className="wave"><i></i><i></i><i></i><i></i><i></i></span></div><h3>Voice rooms</h3><p>Talk without leaving the canvas.</p></article>
            <article className="card reveal d1"><div className="cv cv-follow"><div className="vp"><span>Following Leo</span></div><div className="vp-sel"></div></div><h3>Follow mode</h3><p>See a teammate’s viewport and selection live.</p></article>
            <article className="card reveal d2"><div className="cv cv-pin"><div className="pin-frame"><i></i><i></i><i className="w"></i></div><span className="pin">1</span><span className="pin p2">2</span><div className="pin-card">“Tighten gap to 16 on mobile” <small><span className="pc-open">Maya · open</span><span className="pc-done">✓ Resolved by Leo</span></small></div></div><h3>Comments in context</h3><p>Pin feedback beside the work it describes.</p></article>
          </div>
        </div>
      </section>

    </>
  );
}
