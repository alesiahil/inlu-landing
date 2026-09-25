// Gradient-framed hero with the live design ↔ code demo (ported from Inlu 3.0).
export function Hero() {
  return (
    <>
      <section className="hero" id="top">
        <div className="wrap">
         <div className="hero-frame" id="heroFrame">
          <div className="hero-glow" aria-hidden="true"></div>
          <span className="jelly j1" data-depth="18" aria-hidden="true"></span>
          <span className="jelly j2" data-depth="-24" aria-hidden="true"></span>
          <span className="jelly j3" data-depth="30" aria-hidden="true"></span>
          <div className="hero-head">
            <a href="#import" className="hero-badge reveal"><b>Switching?</b> Your .fig or .sketch file opens with components intact <span>→</span></a>
            <h1 className="reveal d1">Design it once.<br /><span className="grad">Ship it as code.</span><span className="spark" aria-hidden="true">✦</span></h1>
            <p className="lead reveal d2">Everything you expect from a design tool — plus the step other tools leave to developers. Approve a frame and get React, HTML/CSS, SwiftUI or Flutter with your exact spacing and tokens. No handoff, no rebuild.</p>
            <div className="hero-ctas reveal d2">
              <a href="#import" className="btn btn-accent btn-lg">Import .fig or .sketch</a>
              <a href="#pricing" className="btn btn-ghost btn-lg">Start 7-day trial</a>
            </div>
            <p className="hero-note reveal d3"><span>No credit card</span><span>Full Professional plan for 7 days</span><span>Your files stay after the trial</span></p>
          </div>

          <div className="hero-demo reveal d2" id="heroDemo">
            <div className="canvas selectable">
              <div className="canvas-bar">
                <span className="muted">Stays</span><span className="sep">/</span><span className="file">Booking card</span>
                <span className="pill ok">● Approved</span>
                <div className="avatars">
                  <span className="av" style={{ background: 'var(--c-violet)' } as React.CSSProperties} title="Maya — designer">M</span>
                  <span className="av" style={{ background: 'var(--c-green)' } as React.CSSProperties} title="Leo — engineer">L</span>
                  <span className="av" style={{ background: 'var(--c-pink)' } as React.CSSProperties} title="Ana — PM">A</span>
                </div>
              </div>
              <div className="hero-stage">
                <div className="frame-wrap">
                  <div className="frame-label">Booking card · 280 × auto</div>
                  <div id="heroCard"></div>
                </div>
              </div>
              <div className="cursor" id="curMaya" style={{ transform: 'translate(60px,120px)' } as React.CSSProperties}>
                <svg viewBox="0 0 18 18"><path d="M1 1l6 15 2.2-6.4L16 7.3z" fill="var(--c-violet)" stroke="#fff" strokeWidth="1.3" strokeLinejoin="round"/></svg>
                <span className="tag" style={{ background: 'var(--c-violet)' } as React.CSSProperties}>Maya · design</span>
              </div>
              <div className="cursor" id="curLeo" style={{ transform: 'translate(420px,340px)' } as React.CSSProperties}>
                <svg viewBox="0 0 18 18"><path d="M1 1l6 15 2.2-6.4L16 7.3z" fill="var(--c-green)" stroke="#fff" strokeWidth="1.3" strokeLinejoin="round"/></svg>
                <span className="tag" style={{ background: 'var(--c-green)' } as React.CSSProperties}>Leo · code</span>
              </div>
              <div className="hero-hint">Hover any layer → see its code</div>
            </div>
            <div className="sticker white st-edit" style={{ '--r': '-4deg' } as React.CSSProperties}><span className="avs"><i style={{ background: 'var(--coral)' } as React.CSSProperties}>MK</i><i style={{ background: '#C7E03A', color: 'var(--lime-ink)' } as React.CSSProperties}>TR</i><i style={{ background: 'var(--violet)' } as React.CSSProperties}>AL</i></span><span>3 editing<small>One shared canvas</small></span></div>
            <div className="sticker lime st-out" style={{ '--r': '3deg' } as React.CSSProperties}><span className="dot"></span><span><small>Output ready</small>React · SwiftUI</span></div>

            <div className="code" id="heroCode">
              <div className="code-top" role="tablist" aria-label="Output framework"></div>
              <div className="code-body"><div className="code-lines"></div></div>
              <div className="code-status"><span className="dot"></span><span id="heroStatus">Live from the approved frame</span></div>
            </div>
          </div>

          <div className="outputs reveal">
            <span>Export to</span> <b>React</b><i></i><b>HTML/CSS</b><i></i><b>SwiftUI</b><i></i><b>Flutter</b>
            <span className="gap">Open</span> <b>.fig</b><i></i><b>.sketch</b>
          </div>
         </div>
        </div>
      </section>

    </>
  );
}
