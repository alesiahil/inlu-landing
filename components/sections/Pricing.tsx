// Plans inline with beta terms, 7-day trial and plan comparison table.
export function Pricing() {
  return (
    <>
      <section className="section" id="pricing">
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="eyebrow">Pricing</span>
            <h2>Start free. <span className="grad">Pay when your team ships.</span></h2>
            <p className="lead">One seat covers design, prototyping and code output — no separate developer seats. Try Professional free for 7 days, no credit card.</p>
          </div>

          <div className="beta-banner reveal">
            <span className="pill beta">Early access</span>
            <p><b>Beta pricing.</b> Teams that join during early access keep today’s price for 12 months. Plan limits can change during beta — we give 30 days’ notice by email.</p>
          </div>

          <div className="bill reveal">
            <div className="seg" id="billSeg"><button className="active" data-bill="m">Monthly</button><button data-bill="y">Yearly <span className="save">−20%</span></button></div>
          </div>

          <div className="plans">
            <article className="plan reveal">
              <h3>Starter</h3>
              <p className="plan-for">For individuals and small teams starting from a blank canvas — or a file you already have.</p>
              <div className="price"><b>$0</b><span>forever</span></div>
              <a href="#" className="btn btn-ghost" data-cta="✦ Canvas created — this is a prototype">Start a canvas</a>
              <ul>
                <li>Blank canvas, or .fig and .sketch import</li>
                <li>Components, variables and responsive layout</li>
                <li>Prototyping on the source design</li>
                <li>3 projects · 2 editors</li>
                <li>Code export: preview only</li>
              </ul>
            </article>

            <article className="plan pop reveal d1">
              <span className="plan-flag">Most popular · 7-day free trial</span>
              <h3>Professional</h3>
              <p className="plan-for">For product teams designing together every day, from first draft to approved layout.</p>
              <div className="price"><b data-m="$16" data-y="$13">$16</b><span>per editor / month<br /><em data-m="billed monthly" data-y="billed yearly · $156">billed monthly</em></span></div>
              <a href="#" className="btn btn-accent" data-trial>Start 7-day free trial</a>
              <p className="plan-trial">No card needed. On day 7, pick a plan at <span data-m="$16" data-y="$13">$16</span>/editor — or stay on Starter. Your files stay with you.</p>
              <ul>
                <li>Everything in Starter, unlimited projects</li>
                <li>Multiplayer with live cursors</li>
                <li>Voice rooms, follow mode, comments in context</li>
                <li>One-click export: React, HTML/CSS, SwiftUI, Flutter</li>
                <li>Unlimited viewers &amp; commenters</li>
              </ul>
            </article>

            <article className="plan reveal d2">
              <h3>Organization</h3>
              <p className="plan-for">For organizations with broader needs around seats, controls and terms.</p>
              <div className="price"><b>Custom</b><span>annual contract<br /><em>from 20 editors</em></span></div>
              <button className="btn btn-dark" data-talk>Talk to us</button>
              <ul>
                <li>Everything in Professional</li>
                <li>SSO / SAML and SCIM provisioning</li>
                <li>Organization-wide libraries and roles</li>
                <li>Audit log and data residency options</li>
                <li>Dedicated onboarding and support</li>
              </ul>
            </article>
          </div>

          <details className="plan-table reveal">
            <summary>Compare all plan details</summary>
            <div className="tbl-scroll">
            <table>
              <thead><tr><th></th><th>Starter</th><th>Professional</th><th>Organization</th></tr></thead>
              <tbody>
                <tr><td>Price</td><td>$0</td><td><span data-m="$16" data-y="$13">$16</span> / editor / mo</td><td>Custom</td></tr>
                <tr><td>Free trial</td><td>—</td><td>7 days, no card</td><td>Pilot on request</td></tr>
                <tr><td>Projects</td><td>3</td><td>Unlimited</td><td>Unlimited</td></tr>
                <tr><td>Editors</td><td>Up to 2</td><td>Unlimited</td><td>Unlimited</td></tr>
                <tr><td>.fig / .sketch import</td><td>✓</td><td>✓</td><td>✓</td></tr>
                <tr><td>Prototyping &amp; variables</td><td>✓</td><td>✓</td><td>✓</td></tr>
                <tr><td>Code export</td><td>Preview</td><td>All 4 formats</td><td>All 4 formats + custom components</td></tr>
                <tr><td>Voice rooms &amp; follow mode</td><td>—</td><td>✓</td><td>✓</td></tr>
                <tr><td>SSO, SCIM, audit log</td><td>—</td><td>—</td><td>✓</td></tr>
                <tr><td>Support</td><td>Community</td><td>Email, 1 business day</td><td>Dedicated manager</td></tr>
              </tbody>
            </table>
            </div>
          </details>
        </div>
      </section>

    </>
  );
}
