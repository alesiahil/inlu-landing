// Floating pill navigation with Product dropdown and mobile menu.
export function Nav() {
  return (
    <>
      <header className="nav" id="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="logo" aria-label="Inlu home">
            <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="11" cy="12" r="7" fill="#FF6B4A"/><circle cx="21" cy="12" r="7" fill="#7C4DFF" style={{ mixBlendMode: 'multiply' } as React.CSSProperties}/><circle cx="16" cy="21" r="7" fill="#DDF25A" style={{ mixBlendMode: 'multiply' } as React.CSSProperties}/></svg>
            inlu
          </a>
          <nav className="nav-links" aria-label="Primary">
            <div className="dd">
              <button className="dd-btn" aria-expanded="false">Product <span className="chev">▾</span></button>
              <div className="dd-menu">
                <a href="#export"><b>One-click output</b><span>Approved frame → React, HTML/CSS, SwiftUI, Flutter</span></a>
                <a href="#adapt"><b>Responsive layout</b><span>One frame, every breakpoint</span></a>
                <a href="#prototype"><b>Prototyping</b><span>Screens become a working flow</span></a>
                <a href="#collab"><b>Collaboration</b><span>Voice, follow mode, comments</span></a>
                <a href="#directions"><b>Styles → screens</b><span>Generate a system, then design with it</span></a>
              </div>
            </div>
            <a href="#compare">Why switch</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="nav-right">
            <a href="#" className="nav-login" data-cta="Log in — prototype link">Log in</a>
            <a href="#pricing" className="btn btn-accent btn-sm">Start 7-day trial</a>
            <button className="burger" aria-label="Menu" aria-expanded="false"><span></span></button>
          </div>
        </div>
        <div className="mobile-menu">
          <a href="#export">One-click output</a>
          <a href="#adapt">Responsive layout</a>
          <a href="#prototype">Prototyping</a>
          <a href="#directions">Styles → screens</a>
          <a href="#compare">Why switch</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#pricing" className="btn btn-accent">Start 7-day trial</a>
        </div>
      </header>
    </>
  );
}
