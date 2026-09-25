// Screens → connections → logic → play, plus comparison with a screens-and-arrows approach.
export function PrototypeFlow() {
  return (
    <>
      <section className="section dark" id="prototype">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow light">Interactive prototypes</span>
            <h2>Turn screens into <span className="grad">a working flow.</span></h2>
            <p className="lead">Four checkout screens become a clickable flow with logic in four steps. The same variables that drive the prototype carry through to the exported code.</p>
          </div>

          <div className="flow-demo reveal" id="flowDemo">
            <ol className="flow-steps" role="tablist">
              <li><button className="active" data-fstep="0"><span className="n">1</span><b>Screens</b><small>4 static frames</small></button></li>
              <li><button data-fstep="1"><span className="n">2</span><b>Connect</b><small>Drag from a button to a screen</small></button></li>
              <li><button data-fstep="2"><span className="n">3</span><b>Add logic</b><small>Variables, conditions, states</small></button></li>
              <li><button data-fstep="3"><span className="n">4</span><b>Play</b><small>Preview the real flow</small></button></li>
            </ol>

            <div className="flow-stage">
              <div className="fit" data-w="1200" data-h="600">
                <div className="fit-inner flow-canvas" style={{ width: '1200px', height: '600px' } as React.CSSProperties} id="flowCanvas" data-step="0">
                  <div className="fc-vars"><span className="fc-var">cartTotal <b id="fvTotal">$170.00</b></span><span className="fc-var">delivery <b id="fvDel">"express"</b></span><span className="fc-var">card.valid <b id="fvCard">true</b></span></div>

                  <svg className="fc-links" viewBox="0 0 1200 600" aria-hidden="true">
                    <defs><marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#9B8CFF"/></marker>
                          <marker id="arrR" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#FF3DCB"/></marker></defs>
                    <path className="lk l1" d="M220 470 C 268 470, 272 300, 316 300" markerEnd="url(#arr)"/>
                    <path className="lk l2" d="M520 470 C 568 470, 572 300, 616 300" markerEnd="url(#arr)"/>
                    <path className="lk l3" d="M820 470 C 868 470, 872 300, 916 300" markerEnd="url(#arr)"/>
                    <path className="lk lx" d="M770 508 C 770 574, 680 574, 680 512" markerEnd="url(#arrR)"/>
                  </svg>
                  <span className="lk-label ll1">Tap “Checkout” → Navigate</span>
                  <span className="lk-label ll2">Tap “Continue” → Navigate · set delivery</span>
                  <span className="lk-label ll3 cond">if card.valid → Navigate</span>
                  <span className="lk-label llx cond-else">else → state: Error</span>

                  <div className="ph ph1" style={{ left: '20px' } as React.CSSProperties}><div className="ph-top"><b>Bag</b><span>2 items</span></div>
                    <div className="ph-item"><i className="pi1"><svg viewBox="0 0 200 200"><use href="#hp"/></svg></i><span>Aero Lite headphones<small>Violet · ANC</small></span><b>$128</b></div>
                    <div className="ph-item"><i className="pi2"><svg viewBox="0 0 200 200"><use href="#case"/></svg></i><span>Travel case<small>Ice blue</small></span><b>$42</b></div>
                    <div className="ph-sum"><span>Subtotal</span><b>$170.00</b></div>
                    <div className="ph-btn" data-hot="1">Checkout</div></div>

                  <div className="ph ph2" style={{ left: '320px' } as React.CSSProperties}><div className="ph-top"><b>Delivery</b><span>2 of 3</span></div>
                    <div className="ph-radio"><i></i><span>Standard<small>3–5 days</small></span><b>Free</b></div>
                    <div className="ph-radio on"><i></i><span>Express<small>1–2 days</small></span><b>$12</b></div>
                    <div className="ph-field">Address<b>12 Rue Oberkampf, Paris</b></div>
                    <div className="ph-btn" data-hot="2">Continue</div></div>

                  <div className="ph ph3" style={{ left: '620px' } as React.CSSProperties}><div className="ph-top"><b>Payment</b><span>3 of 3</span></div>
                    <div className="ph-cardvis"><span>VISA</span><b>•••• 4242</b><small>09 / 28</small></div>
                    <div className="ph-field err-hide">Card number<b>4242 4242 4242 4242</b></div>
                    <div className="ph-error">Card declined — try another card</div>
                    <div className="ph-states"><span className="on">Default</span><span>Error</span><span>Loading</span></div>
                    <div className="ph-btn" data-hot="3">Pay <span className="pay-total">$195.60</span></div></div>

                  <div className="ph ph4" style={{ left: '920px' } as React.CSSProperties}><div className="ph-top"><b>Done</b><span></span></div>
                    <div className="ph-done"><span>✓</span><b>Order placed</b><small>#MM-20418 · arrives Thu</small></div>
                    <div className="ph-sum"><span>Paid</span><b className="pay-total">$195.60</b></div>
                    <div className="ph-btn ghost">Track order</div></div>

                  <div className="fc-play" id="flowPlay">
                    <div className="pp"><div className="pp-screen" id="ppScreen"></div><div className="pp-tap" id="ppTap"></div></div>
                    <div className="pp-log" id="ppLog"></div>
                  </div>
                </div>
              </div>
            </div>
            <p className="flow-caption" id="flowCaption"></p>
          </div>

          <div className="compare reveal">
            <div className="cmp-col">
              <span className="cmp-k">Prototype as a separate layer</span>
              <ul>
                <li>Duplicate Payment for Error and Loading → <b>6 frames</b></li>
                <li>Wire every frame and every variant by hand → <b>7 links</b></li>
                <li>Total and delivery choice are typed into each frame as text</li>
                <li>Developers rebuild the logic from scratch in code</li>
              </ul>
            </div>
            <div className="cmp-col good">
              <span className="cmp-k">In Inlu</span>
              <ul>
                <li>States live inside one Payment frame → <b>4 frames</b></li>
                <li>One connection per step, one condition → <b>3 links + 1 rule</b></li>
                <li><code>cartTotal</code> and <code>delivery</code> carry through the flow</li>
                <li>The same logic and values arrive in the export — nothing to re-implement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
