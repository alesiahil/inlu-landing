// Real checkout design + exported file tree for React / HTML/CSS / SwiftUI / Flutter.
export function CodeExport() {
  return (
    <>
      <section className="section" id="export">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">The part other tools hand off</span>
            <h2>Approved means <span className="grad">shipped.</span></h2>
            <p className="lead">Developers don’t inspect, measure and rebuild. They review a pull request: components, tokens and breakpoints generated from the frame you approved — with your spacing exactly as designed.</p>
          </div>

          <div className="export reveal" id="exportDemo">
            {/* left: the real design, shown at its true width */}
            <div className="export-design">
              <div className="panel-bar">
                <span className="dotrow"><i></i><i></i><i></i></span>
                <span className="muted">Morrow Audio</span><span className="sep">/</span><b>Checkout · Desktop</b>
                <span className="pill ok">● Approved</span>
              </div>
              <div className="export-canvas selectable">
                <div className="fit" data-w="520" data-h="auto" data-match="#exportCode">
                  <div className="fit-inner" style={{ width: '520px' } as React.CSSProperties}>
                    <div className="frame-label">Checkout card · 440 × auto · Auto layout ↓ 24</div>
                    <div id="exportCard" className="export-card-host">
        <section className="ck" data-node="card" data-label="Checkout card · Auto layout ↓ 24 · Padding 32">
          <header className="ck-head" data-node="header" data-label="Header · Hug"><h4>Checkout</h4><span>Step 2 of 3</span></header>
          <ul className="ck-items">
            <li className="ck-item" data-node="lineitem" data-label="LineItem · component"><span className="ck-img a"><svg viewBox="0 0 200 200"><use href="#hp"/></svg></span><span className="ck-t"><b>Aero Lite headphones</b><small>Violet · ANC</small></span><span className="ck-qty"><i>−</i>1<i>+</i></span><b className="ck-p">$128.00</b></li>
            <li className="ck-item" data-node="lineitem" data-label="LineItem · component"><span className="ck-img b"><svg viewBox="0 0 200 200"><use href="#case"/></svg></span><span className="ck-t"><b>Travel case</b><small>Ice blue</small></span><span className="ck-qty"><i>−</i>1<i>+</i></span><b className="ck-p">$42.00</b></li>
          </ul>
          <fieldset className="ck-del" data-node="delivery" data-label="DeliveryOption × 2">
            <legend>Delivery</legend>
            <label><i></i><span>Standard<small>3–5 days</small></span><b>Free</b></label>
            <label className="on"><i></i><span>Express<small>1–2 days</small></span><b>$12.00</b></label>
          </fieldset>
          <div className="ck-promo"><span>Promo code</span><b>Apply</b></div>
          <dl className="ck-sum" data-node="summary" data-label="SummaryRow × 4">
            <div><dt>Subtotal</dt><dd>$170.00</dd></div>
            <div><dt>Shipping</dt><dd>$12.00</dd></div>
            <div><dt>Tax</dt><dd>$13.60</dd></div>
            <div className="tot"><dt>Total</dt><dd>$195.60</dd></div>
          </dl>
          <button className="ck-cta" data-node="cta" data-label="Button / primary · Fill · 48">Continue to payment</button>
          <p className="ck-secure">🔒 Secure checkout · Apple Pay · Google Pay</p>
        </section>
                    </div>
                  </div>
                </div>
              </div>
              <div className="export-hint">Click a layer → jump to its code</div>
            </div>

            {/* right: file structure + code */}
            <div className="export-code" id="exportCode">
              <div className="fmt-tabs" role="tablist" aria-label="Export format"></div>
              <div className="export-meta" id="exportMeta"></div>
              <div className="ide">
                <div className="tree" id="exportTree" aria-label="Exported files"></div>
                <div className="code ide-code">
                  <div className="code-top"><span className="code-file" id="exportFile"></span>
                    <div className="code-actions"><button className="code-btn" id="exportCopy">Copy</button><button className="code-btn" id="exportZip">Download .zip</button></div>
                  </div>
                  <div className="code-body"><div className="code-lines" id="exportLines"></div></div>
                </div>
              </div>
            </div>
          </div>

          <div className="export-points">
            <div className="reveal"><h4>Your spacing ships as designed</h4><p>Every frame becomes a component, every auto layout becomes a flex or stack container with the same gap and padding. The tree on the right is the layer panel, in code.</p></div>
            <div className="reveal d1"><h4>Tokens, not hex codes</h4><p>Colors, spacing, radii and type come out as variables — CSS custom properties, a Swift enum or a Dart class, per format.</p></div>
            <div className="reveal d2"><h4>Breakpoints included</h4><p>Responsive rules from the canvas become media queries or size classes. Nothing is hard-coded to one screen.</p></div>
          </div>
        </div>
      </section>

    </>
  );
}
