// Step-by-step adaptation of a product page from desktop to mobile, shown at true proportions.
export function Responsive() {
  return (
    <>
      <section className="section" id="adapt">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Layout that stays responsive</span>
            <h2>One frame. <span className="grad">Every device.</span></h2>
            <p className="lead">Design the desktop once. Inlu reflows it for tablet and mobile — you only fix the exceptions — and the breakpoints ship in the code. Watch a real product page adapt in five steps.</p>
          </div>

          <div className="stepper reveal" id="adaptDemo">
            <ol className="steps-list" role="tablist" aria-label="Adaptation steps">
              <li><button className="active" data-step="0"><span className="n">1</span><span><b>Start from desktop</b><small>1280 px frame, auto layout everywhere</small></span></button></li>
              <li><button data-step="1"><span className="n">2</span><span><b>Set resize rules</b><small>Fill, Hug or Fixed on each block</small></span></button></li>
              <li><button data-step="2"><span className="n">3</span><span><b>Add Tablet · 768</b><small>Grid reflows from 4 to 2 columns</small></span></button></li>
              <li><button data-step="3"><span className="n">4</span><span><b>Add Mobile · 390</b><small>Stack, sticky buy bar, burger nav</small></span></button></li>
              <li><button data-step="4"><span className="n">5</span><span><b>Export all breakpoints</b><small>One component, three layouts</small></span></button></li>
            </ol>

            <div className="adapt-view">
              <div className="adapt-bar">
                <div className="seg" id="bpSeg">
                  <button className="active" data-bp="1280">Desktop 1280</button>
                  <button data-bp="768">Tablet 768</button>
                  <button data-bp="390">Mobile 390</button>
                </div>
                <span className="adapt-scale" id="adaptScale">shown at 100%</span>
                <button className="play" id="adaptPlay" aria-label="Pause auto-play">❚❚</button>
              </div>
              <div className="adapt-stage" id="adaptStage">
                <div className="rf-holder" id="rfHolder">
                  <div className="rf" id="rframe">
                    <div className="rf-nav" data-c="Fill · Hug height">
                      <i className="rf-burger">☰</i><span className="rf-logo">morrow<em>.audio</em></span>
                      <span className="rf-links"><a>Headphones</a><a>Earbuds</a><a>Speakers</a><a>Accessories</a><a>Journal</a></span>
                      <span className="rf-icons"><i>⌕</i><i>♡</i><i className="bag">Bag · 2</i></span>
                    </div>
                    <div className="rf-crumbs">Home / Headphones / <b>Aero Lite</b></div>
                    <div className="rf-main">
                      <div className="rf-gallery" data-c="Fill">
                        <div className="rf-photo"><svg viewBox="0 0 200 200" aria-hidden="true"><use href="#hp"/></svg><span className="rf-tag">New · 2026</span><span className="rf-spec">40 h battery</span></div>
                        <div className="rf-thumbs">
                          <span className="on"><svg viewBox="0 0 200 200"><use href="#hp"/></svg></span>
                          <span style={{ '--hp-cup': '#3DD9EB' } as React.CSSProperties}><svg viewBox="0 0 200 200"><use href="#hp"/></svg></span>
                          <span><svg viewBox="0 0 200 200"><use href="#case"/></svg></span>
                          <span><svg viewBox="0 0 200 200"><use href="#dock"/></svg></span>
                        </div>
                      </div>
                      <div className="rf-info" data-c="Fixed 440 → Fill">
                        <p className="rf-brand">Morrow Audio</p>
                        <h3 className="rf-title">Aero Lite headphones</h3>
                        <p className="rf-rating">★★★★★ <span>4.8 · 1,204 reviews</span></p>
                        <p className="rf-price">$128.00 <s>$159.00</s></p>
                        <div className="rf-opt"><span>Color · Electric violet</span><div className="rf-sw"><i className="s1 on"></i><i className="s2"></i><i className="s3"></i><i className="s4"></i></div></div>
                        <div className="rf-opt"><span>Edition · ANC</span><div className="rf-sizes"><i>Standard</i><i className="on">ANC</i><i>Studio</i></div></div>
                        <div className="rf-buy"><button className="rf-add">Add to bag</button><button className="rf-fav">♡</button></div>
                        <ul className="rf-perks"><li>Free 2-day delivery</li><li>40 h battery · USB-C fast charge</li><li>2-year warranty, 30-day returns</li></ul>
                      </div>
                    </div>
                    <div className="rf-related" data-c="Grid · 4 → 2 → 2 cols">
                      <h4>Pairs well with</h4>
                      <div className="rf-grid">
                        <div className="rf-card"><span className="p1"><svg viewBox="0 0 200 200"><use href="#buds"/></svg></span><b>Aero Buds</b><em>$89</em></div>
                        <div className="rf-card"><span className="p2"><svg viewBox="0 0 200 200"><use href="#case"/></svg></span><b>Travel case</b><em>$42</em></div>
                        <div className="rf-card"><span className="p3"><svg viewBox="0 0 200 200"><use href="#dock"/></svg></span><b>Charging stand</b><em>$59</em></div>
                        <div className="rf-card"><span className="p4"><svg viewBox="0 0 200 200"><use href="#speaker"/></svg></span><b>Pocket speaker</b><em>$119</em></div>
                      </div>
                    </div>
                    <div className="rf-sticky"><span><b>$128.00</b> Violet · ANC</span><button>Add to bag</button></div>
                  </div>
                </div>
                <div className="adapt-export" id="adaptExport">
                  <div className="code"><div className="code-top"><span className="code-file">ProductPage.module.css — generated breakpoints</span></div>
                    <div className="code-body"><div className="code-lines" id="adaptCode"></div></div></div>
                </div>
              </div>
              <p className="adapt-caption" id="adaptCaption"></p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
