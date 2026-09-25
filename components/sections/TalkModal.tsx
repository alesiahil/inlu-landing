// "Talk to us" popup with contact form (A/B: ?talk=page opens a separate page instead).
export function TalkModal() {
  return (
    <>
      <div className="modal" id="talkModal" role="dialog" aria-modal="true" aria-labelledby="talkTitle" hidden>
        <div className="modal-backdrop" data-close></div>
        <div className="modal-card">
          <button className="modal-x" data-close aria-label="Close">×</button>
          <div className="modal-form" id="talkFormWrap">
            <span className="eyebrow">Organization plan</span>
            <h3 id="talkTitle">Talk to us</h3>
            <p className="muted">Leave your contacts — we reply within one business day. You stay on this page.</p>
            <form id="talkForm" noValidate>
              <label>Name<input name="name" autoComplete="name" required /></label>
              <label>Work email<input name="email" type="email" autoComplete="email" required /></label>
              <div className="row2">
                <label>Company<input name="company" autoComplete="organization" required /></label>
                <label>Team size<select name="size"><option>20–50</option><option>51–200</option><option>201–1000</option><option>1000+</option></select></label>
              </div>
              <label>What do you need? <span className="opt">optional</span><textarea name="msg" rows={3} placeholder="SSO, seat count, security review…"></textarea></label>
              <button className="btn btn-accent btn-lg" type="submit">Send request</button>
              <p className="fine">Prefer to try first? <a href="#" data-trial>Start a 7-day trial</a> while we get back to you.</p>
            </form>
          </div>
          <div className="modal-done" id="talkDone" hidden>
            <div className="done-ic">✓</div>
            <h3>Thanks — request received</h3>
            <p className="muted">We’ll email <b id="talkEmail"></b> within one business day.</p>
            <button className="btn btn-dark" data-close>Back to pricing</button>
          </div>
        </div>
      </div>
    </>
  );
}
