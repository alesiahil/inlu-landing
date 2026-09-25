// Footer with brand palette and the layout-grid tip.
export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <a href="#top" className="logo light"><svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="11" cy="12" r="7" fill="#FF6B4A"/><circle cx="21" cy="12" r="7" fill="#7C4DFF" style={{ mixBlendMode: 'multiply' } as React.CSSProperties}/><circle cx="16" cy="21" r="7" fill="#DDF25A" style={{ mixBlendMode: 'multiply' } as React.CSSProperties}/></svg>inlu</a>
            <p>Collaborative interface design, prototyping and working output in one editable workflow.</p>
          </div>
          <div><h5>Product</h5><a href="#export">One-click output</a><a href="#adapt">Responsive layout</a><a href="#prototype">Prototyping</a><a href="#collab">Collaboration</a><a href="#proof">Customers</a><a href="#pricing">Pricing</a></div>
          <div><h5>Resources</h5><a href="#">Features</a><a href="#">Use cases</a><a href="#">Compare</a><a href="#">Guides</a><a href="#">Blog</a></div>
          <div><h5>Company</h5><a href="#">About</a><a href="#" data-talk>Contact</a><a href="#" data-talk>Enterprise</a></div>
          <div><h5>Legal</h5><a href="#">Privacy policy</a><a href="#">Terms of use</a><a href="#">RSS feed</a></div>
        </div>
        <div className="wrap footer-bottom"><span>© 2026 Inlu. Redesign concept.</span><span className="palette" aria-label="Brand palette — click to copy"><button style={{ '--c': '#FF6B4A' } as React.CSSProperties} data-hex="#FF6B4A" title="#FF6B4A"></button><button style={{ '--c': '#FF4F9A' } as React.CSSProperties} data-hex="#FF4F9A" title="#FF4F9A"></button><button style={{ '--c': '#7C4DFF' } as React.CSSProperties} data-hex="#7C4DFF" title="#7C4DFF"></button><button style={{ '--c': '#3DD9EB' } as React.CSSProperties} data-hex="#3DD9EB" title="#3DD9EB"></button><button style={{ '--c': '#DDF25A' } as React.CSSProperties} data-hex="#DDF25A" title="#DDF25A"></button></span><span>Press <kbd>G</kbd> for the layout grid · Made on one canvas</span></div>
      </footer>
    </>
  );
}
