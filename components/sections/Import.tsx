// Sample .fig import with what Inlu found.
export function Import() {
  return (
    <>
      <section className="section soft" id="import">
        <div className="wrap split">
          <div className="reveal">
            <span className="eyebrow">Switching tools</span>
            <h2>Your files move in. <span className="grad">Nothing gets flattened.</span></h2>
            <p className="lead">Drop in a .fig or .sketch file. Auto layout, components, variants, variables — even prototype links and comments — come across as editable objects, not pictures. Keep your old files as the archive for as long as you like.</p>
            <button className="btn btn-dark btn-lg" id="importRun">Try a sample import</button>
          </div>
          <div className="import-card reveal d1" id="importCard">
            <div className="imp-file"><span className="imp-ico">.fig</span><div><b>morrow-audio.fig</b><small>48 frames · 14.2 MB</small></div><span className="imp-state" id="impState">Ready</span></div>
            <div className="imp-bar"><i id="impBar"></i></div>
            <ul className="imp-list">
              <li><span>Auto layout frames</span><em>→ Stacks &amp; grids</em><b>126</b></li>
              <li><span>Components &amp; variants</span><em>→ Components</em><b>32</b></li>
              <li><span>Variables · 2 modes</span><em>→ Tokens</em><b>64</b></li>
              <li><span>Prototype links</span><em>→ Flow connections</em><b>18</b></li>
              <li><span>Comments</span><em>→ Pinned threads</em><b>41</b></li>
            </ul>
          </div>
        </div>
      </section>

    </>
  );
}
