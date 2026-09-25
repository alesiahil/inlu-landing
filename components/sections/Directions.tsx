// Assistant flow: style → dashboard → mobile → second direction.
export function Directions() {
  return (
    <>
      <section className="section soft" id="directions">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Made on one canvas</span>
            <h2>From one style <span className="grad">to a full product.</span></h2>
            <p className="lead">The whole workflow, start to finish: generate a style system, ask Inlu to design screens with it, then try another direction and watch every screen follow.</p>
          </div>

          <div className="dir reveal" id="dirDemo">
            <aside className="dir-chat">
              <div className="dir-chat-head"><b>Inlu assistant</b><span className="pill">Canvas · Orbit Ops</span></div>
              <div className="dir-msgs" id="dirMsgs"></div>
              <div className="dir-input"><span id="dirTyping"></span><button className="dir-send" id="dirNext">Run step 1 →</button></div>
              <div className="dir-prog" id="dirProg"><i></i><i></i><i></i><i></i></div>
            </aside>

            <div className="dir-canvas-wrap">
              <div className="dir-dirs" id="dirToggle">
                <span>Direction</span><div className="seg small"><button className="active" data-theme="calm">A · Calm fintech</button><button data-theme="warm" disabled title="Appears after step 4">B · Warm editorial</button></div>
                <small id="dirHint">B is generated in step 4</small>
              </div>
              <div className="fit" data-w="1180" data-h="700">
                <div className="fit-inner dir-canvas" style={{ width: '1180px', height: '700px' } as React.CSSProperties} id="dirCanvas" data-stage="0" data-theme="calm">
                  <div className="dir-empty">Empty canvas · describe a style to begin</div>

                  {/* style board */}
                  <div className="d-board">
                    <div className="d-label">Styles · <span className="d-theme-name">Calm fintech</span></div>
                    <div className="d-sw"><i style={{ background: 'var(--d-accent)' } as React.CSSProperties}></i><i style={{ background: 'var(--d-accent-2)' } as React.CSSProperties}></i><i style={{ background: 'var(--d-ink)' } as React.CSSProperties}></i><i style={{ background: 'var(--d-surface-2)' } as React.CSSProperties}></i><i style={{ background: 'var(--d-pos)' } as React.CSSProperties}></i><i style={{ background: 'var(--d-neg)' } as React.CSSProperties}></i></div>
                    <div className="d-type"><span className="t1">Aa Display 32</span><span className="t2">Heading 20</span><span className="t3">Body 14 · Label 12</span></div>
                    <div className="d-comp"><span className="d-btn">Primary</span><span className="d-btn sec">Secondary</span><span className="d-chip">Chip</span></div>
                    <div className="d-input">Search accounts…</div>
                    <div className="d-tokens"><code>radius · <b className="d-r">12</b></code><code>space · 4 / 8 / 16 / 24</code><code>font · <b className="d-f">Inter</b></code></div>
                  </div>

                  {/* dashboard */}
                  <div className="d-dash">
                    <div className="d-label">Operations dashboard · Desktop</div>
                    <div className="dd-app">
                      <div className="dd-side"><b className="dd-logo">Orbit Ops</b><span className="on">Overview</span><span>Projects</span><span>Capacity</span><span>Reports</span><span>Settings</span></div>
                      <div className="dd-main">
                        <div className="dd-top"><b>Overview</b><span className="d-input sm">Search…</span><span className="d-btn">New project</span></div>
                        <div className="dd-kpis">
                          <div className="dd-kpi"><small>Active projects</small><b>48</b><em className="pos">+6 this week</em></div>
                          <div className="dd-kpi"><small>Team capacity</small><b>82%</b><em>of 64 people</em></div>
                          <div className="dd-kpi"><small>At risk</small><b>5</b><em className="neg">2 overdue</em></div>
                        </div>
                        <div className="dd-chart"><div className="dd-ch-head"><b>Throughput</b><span className="d-chip">Last 12 weeks</span></div>
                          <div className="dd-bars"><i style={{ '--h': '38%' } as React.CSSProperties}></i><i style={{ '--h': '52%' } as React.CSSProperties}></i><i style={{ '--h': '46%' } as React.CSSProperties}></i><i style={{ '--h': '61%' } as React.CSSProperties}></i><i style={{ '--h': '58%' } as React.CSSProperties}></i><i style={{ '--h': '70%' } as React.CSSProperties}></i><i style={{ '--h': '64%' } as React.CSSProperties}></i><i style={{ '--h': '77%' } as React.CSSProperties}></i><i style={{ '--h': '72%' } as React.CSSProperties}></i><i style={{ '--h': '84%' } as React.CSSProperties}></i><i style={{ '--h': '80%' } as React.CSSProperties}></i><i style={{ '--h': '91%' } as React.CSSProperties}></i></div></div>
                        <div className="dd-table">
                          <div className="dd-row th"><span>Project</span><span>Owner</span><span>Status</span><span>Due</span></div>
                          <div className="dd-row"><span>Billing revamp</span><span>M. Chen</span><span className="d-chip pos">On track</span><span>Oct 14</span></div>
                          <div className="dd-row"><span>Mobile onboarding</span><span>R. Alvarez</span><span className="d-chip neg">At risk</span><span>Oct 02</span></div>
                          <div className="dd-row"><span>Data export API</span><span>S. Okafor</span><span className="d-chip pos">On track</span><span>Nov 08</span></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* mobile */}
                  <div className="d-mob">
                    <div className="d-label">Mobile · 390</div>
                    <div className="dm-app">
                      <div className="dm-top"><small>Good morning, Sam</small><b>Overview</b></div>
                      <div className="dm-hero"><small>Team capacity</small><b>82%</b><div className="dm-meter"><i></i></div></div>
                      <div className="dm-list">
                        <div><span>Billing revamp</span><span className="d-chip pos">On track</span></div>
                        <div><span>Mobile onboarding</span><span className="d-chip neg">At risk</span></div>
                        <div><span>Data export API</span><span className="d-chip pos">On track</span></div>
                      </div>
                      <span className="d-btn wide">New project</span>
                      <div className="dm-tab"><i className="on"></i><i></i><i></i><i></i></div>
                    </div>
                  </div>

                  <div className="d-gen" id="dirGen">Generating…</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
