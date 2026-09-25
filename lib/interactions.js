/* Inlu — client-side page behaviour (demos, pricing popup, playful details).
   The page markup is rendered by React; this wires up the imperative demos once. */
import { EXPORTS } from './code-samples';
import { Hl, SAMPLE_CODE, SAMPLE_LABELS, bookingCardHTML } from './hero-sample';

export function initPage() {
  if (window.__inluInit) return;
  window.__inluInit = true;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const onVisible = (el, fn, threshold = .3) => {
    const io = new IntersectionObserver(([e]) => fn(e.isIntersecting), { threshold });
    io.observe(el);
  };

  /* ---------- Nav ---------- */
  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('scrolled', scrollY > 8);
  onScroll(); addEventListener('scroll', onScroll, { passive: true });
  $('.burger', nav).addEventListener('click', e => {
    const open = nav.classList.toggle('open');
    e.currentTarget.setAttribute('aria-expanded', open);
  });
  $$('.mobile-menu a', nav).forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  const dd = $('.dd', nav);
  $('.dd-btn', dd).addEventListener('click', e => {
    const open = dd.classList.toggle('open');
    e.currentTarget.setAttribute('aria-expanded', open);
  });
  document.addEventListener('click', e => { if (!dd.contains(e.target)) dd.classList.remove('open'); });
  $$('.dd-menu a').forEach(a => a.addEventListener('click', () => dd.classList.remove('open')));

  /* ---------- Reveal ---------- */
  const rio = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); rio.unobserve(e.target); }
  }), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach(el => rio.observe(el));

  /* ---------- Toast + prototype CTAs ---------- */
  let toastEl, toastT;
  const toast = window.toast = msg => {
    if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'toast'; toastEl.setAttribute('role', 'status'); document.body.appendChild(toastEl); }
    toastEl.innerHTML = msg; toastEl.classList.add('show');
    clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove('show'), 2400);
  };
  $$('[data-cta]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); toast(b.dataset.cta); }));

  /* ---------- FAQ ---------- */
  $$('.faq-item').forEach(item => {
    const q = $('.faq-q', item);
    q.setAttribute('aria-expanded', 'false');
    q.addEventListener('click', () => q.setAttribute('aria-expanded', item.classList.toggle('open')));
  });

  /* ---------- Fit: scale fixed-size canvases uniformly (never squeeze) ---------- */
  function fitAll() {
    $$('.fit').forEach(f => {
      const inner = f.firstElementChild, w = +f.dataset.w;
      const h = f.dataset.h === 'auto' ? inner.offsetHeight : +f.dataset.h;
      let s = Math.min(1, f.clientWidth / w);
      // match a neighbour's height (side-by-side layouts only)
      const m = f.dataset.match && $(f.dataset.match);
      if (m && innerWidth > 1060) {
        const pad = f.parentElement, cs = getComputedStyle(pad);
        const chrome = $('.panel-bar', pad.parentElement).offsetHeight + parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
        s = Math.min(s, (m.offsetHeight - chrome) / h);
      }
      inner.style.transform = `scale(${s})`;
      inner.style.left = Math.max(0, (f.clientWidth - w * s) / 2) + 'px';
      f.style.height = h * s + 'px';
    });
  }
  fitAll();
  addEventListener('resize', fitAll);

  /* ---------- Autoplay stepper helper ---------- */
  function stepper({ buttons, durations, onStep, root, playBtn }) {
    let cur = 0, playing = true, t0 = 0, raf = 0, visible = false;
    const go = (i, fromUser) => {
      cur = (i + buttons.length) % buttons.length;
      buttons.forEach((b, k) => {
        b.classList.toggle('active', k === cur); b.classList.toggle('done', k < cur);
        b.setAttribute('aria-selected', k === cur); b.style.setProperty('--p', '0%');
      });
      t0 = performance.now();
      onStep(cur, fromUser);
    };
    const loop = now => {
      if (playing && visible) {
        const d = durations[cur], p = Math.min(1, (now - t0) / d);
        buttons[cur].style.setProperty('--p', p * 100 + '%');
        if (p >= 1) go(cur + 1);
      } else t0 = now - (parseFloat(buttons[cur].style.getPropertyValue('--p')) || 0) / 100 * durations[cur];
      raf = requestAnimationFrame(loop);
    };
    buttons.forEach((b, k) => b.addEventListener('click', () => go(k, true)));
    const setPlaying = v => {
      playing = v;
      if (playBtn) { playBtn.textContent = v ? '❚❚' : '▶'; playBtn.setAttribute('aria-label', v ? 'Pause auto-play' : 'Play'); }
    };
    if (playBtn) playBtn.addEventListener('click', () => setPlaying(!playing));
    onVisible(root, v => { visible = v; }, .25);
    go(0); raf = requestAnimationFrame(loop);
    return { go, setPlaying, get cur() { return cur; } };
  }

  /* =========================================================
     HERO DEMO — ported from Inlu 3.0 (booking card ↔ code)
     ========================================================= */
  (function heroDemo() {
    const demo = $('#heroDemo'), canvas = $('.canvas', demo), cardHost = $('#heroCard');
    cardHost.innerHTML = bookingCardHTML();
    const LABELS = { card: 'Card · auto layout ↓ 16', image: 'Image · 16:10', title: 'Text / title', meta: 'Text / muted', price: 'Price', button: 'Button / primary' };
    $$('[data-node]', cardHost).forEach(n => n.dataset.label = LABELS[n.dataset.node]);
    const code = $('#heroCode'), tabsEl = $('.code-top', code), linesEl = $('.code-lines', code);
    let fw = 'react', current = null;
    tabsEl.innerHTML = Object.keys(SAMPLE_CODE).map(k =>
      `<button class="code-tab${k === fw ? ' active' : ''}" data-fw="${k}" role="tab" title="${SAMPLE_CODE[k].file}">${SAMPLE_LABELS[k]}</button>`
    ).join('') + `<div class="code-actions"><button class="code-btn" id="heroCopy">Copy</button></div>`;
    function renderCode(animate) {
      Hl.render(linesEl, SAMPLE_CODE[fw].ds, { animate });
      Hl.highlight(linesEl, current);
      $('#heroStatus').textContent = `Live from the approved frame · ${SAMPLE_CODE[fw].file} · ${SAMPLE_CODE[fw].ds.length} lines`;
    }
    tabsEl.addEventListener('click', e => {
      const t = e.target.closest('.code-tab'); if (!t) return;
      fw = t.dataset.fw;
      $$('.code-tab', tabsEl).forEach(b => b.classList.toggle('active', b === t));
      renderCode(true);
    });
    $('#heroCopy').addEventListener('click', () => {
      const txt = SAMPLE_CODE[fw].ds.map(l => l[0]).join('\n');
      (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(
        () => toast(`✓ ${SAMPLE_CODE[fw].file} copied`), () => toast(`✓ ${SAMPLE_CODE[fw].file} ready to paste`));
    });
    function select(node) {
      current = node;
      $$('[data-node]', cardHost).forEach(n => n.classList.toggle('sel', n.dataset.node === node));
      Hl.highlight(linesEl, node);
    }
    linesEl.addEventListener('mouseover', e => { const l = e.target.closest('.code-line'); if (!l || !l.dataset.node) return; stopAuto(); select(l.dataset.node); });
    linesEl.addEventListener('mouseleave', () => resumeAuto());
    canvas.addEventListener('mouseover', e => { const n = e.target.closest('[data-node]'); if (!n) return; stopAuto(); select(n.dataset.node); });
    canvas.addEventListener('mouseleave', () => resumeAuto());

    const leo = $('#curLeo'), maya = $('#curMaya');
    function posOf(node) {
      const r = $(`[data-node="${node}"]`, cardHost).getBoundingClientRect(), c = canvas.getBoundingClientRect();
      return [r.left - c.left + r.width * .6, r.top - c.top + r.height * .55];
    }
    const seq = ['button', 'price', 'title', 'image', 'meta', 'card'];
    let i = 0, autoTimer = null, resumeTimer = null, paused = false;
    function tick() {
      const node = seq[i++ % seq.length], [x, y] = posOf(node);
      leo.style.transform = `translate(${x}px, ${y}px)`;
      setTimeout(() => { if (!paused) select(node); }, 1100);
      const c = canvas.getBoundingClientRect();
      const mx = 30 + Math.random() * (c.width * .3), my = 70 + Math.random() * (c.height - 140);
      maya.style.transform = `translate(${Math.random() > .5 ? mx : c.width - mx - 60}px, ${my}px)`;
    }
    function startAuto() { paused = false; clearInterval(autoTimer); tick(); autoTimer = setInterval(tick, 2600); }
    function stopAuto() { paused = true; clearInterval(autoTimer); clearTimeout(resumeTimer); }
    function resumeAuto() { clearTimeout(resumeTimer); resumeTimer = setTimeout(startAuto, 1800); }
    renderCode(false);
    onVisible(demo, v => { if (v) { if (!paused && !autoTimer) startAuto(); } else { clearInterval(autoTimer); autoTimer = null; } });
  })();

  /* =========================================================
     1. CODE EXPORT — real design + file structure per format
     ========================================================= */
  (function exportDemo() {
    const host = $('#exportCard');
    const tabs = $('#exportDemo .fmt-tabs'), tree = $('#exportTree'), lines = $('#exportLines'), fileEl = $('#exportFile'), meta = $('#exportMeta');
    let fmt = 'react', file = null, node = 'card';

    tabs.innerHTML = Object.entries(EXPORTS).map(([k, v]) => `<button role="tab" data-fmt="${k}" class="${k === fmt ? 'active' : ''}">${v.label}</button>`).join('');
    tabs.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      fmt = b.dataset.fmt;
      $$('button', tabs).forEach(x => x.classList.toggle('active', x === b));
      render(true);
    });

    function renderTree() {
      const ex = EXPORTS[fmt], seen = new Set();
      let html = `<span class="root">▾ ${ex.root}</span>`;
      Object.keys(ex.files).forEach(p => {
        const parts = p.split('/'), isDir = p.endsWith('/'), nested = parts.length > 1 && !isDir;
        if (nested && !seen.has(parts[0])) { seen.add(parts[0]); html += `<span class="dir">▾ ${parts[0]}/</span>`; }
        const name = isDir ? `${p} <span class="ext">2 images</span>` : parts[parts.length - 1];
        const ext = isDir ? '' : `<span class="ext">${p.split('.').pop()}</span>`;
        html += `<button data-file="${p}" class="${nested ? 'nested' : ''}${p === file ? ' active' : ''}">${ext}${name}</button>`;
      });
      tree.innerHTML = html;
      meta.innerHTML = ex.meta.map(m => `<span>${m}</span>`).join('');
    }
    tree.addEventListener('click', e => {
      const b = e.target.closest('button[data-file]'); if (!b) return;
      openFile(b.dataset.file, null);
      $$('.sel', host).forEach(n => n.classList.remove('sel'));
      node = null;
    });

    function openFile(p, re, animate) {
      file = p;
      const src = EXPORTS[fmt].files[p].code.split('\n');
      fileEl.textContent = EXPORTS[fmt].root + p;
      lines.innerHTML = src.map((l, i) => {
        const hl = re && re.test(l);
        return `<div class="code-line${hl ? ' hl' : ''}${animate ? ' new' : ''}"${animate ? ` style="animation-delay:${Math.min(i, 30) * 18}ms"` : ''}><span class="ln">${i + 1}</span><span>${Hl.line(l)}</span></div>`;
      }).join('');
      $$('button[data-file]', tree).forEach(b => b.classList.toggle('active', b.dataset.file === p));
      const body = lines.closest('.code-body'), first = $('.code-line.hl', lines);
      body.scrollTo({ top: first ? Math.max(0, first.offsetTop - body.clientHeight / 3) : 0, behavior: 'smooth' });
    }

    function selectNode(n, animate) {
      node = n;
      $$('[data-node]', host).forEach(x => x.classList.remove('sel'));
      const target = $(`[data-node="${n}"]`, host); if (target) target.classList.add('sel');
      const [p, re] = EXPORTS[fmt].nodes[n];
      renderTree();
      openFile(p, re, animate);
      const btn = $(`button[data-file="${p}"]`, tree);
      if (btn) { btn.classList.remove('flash'); void btn.offsetWidth; btn.classList.add('flash'); }
    }
    host.addEventListener('click', e => {
      const n = e.target.closest('[data-node]'); if (!n) return;
      e.stopPropagation(); selectNode(n.dataset.node);
    });

    function render(animate) {
      if (node) selectNode(node, animate);
      else { file = Object.keys(EXPORTS[fmt].files)[0]; renderTree(); openFile(file, null, animate); }
    }
    $('#exportCopy').addEventListener('click', () => {
      const code = EXPORTS[fmt].files[file].code;
      (navigator.clipboard ? navigator.clipboard.writeText(code) : Promise.reject()).then(() => toast(`✓ ${file} copied`), () => toast(`✓ ${file} ready to paste`));
    });
    $('#exportZip').addEventListener('click', () => toast(`✓ checkout-${fmt}.zip · ${Object.keys(EXPORTS[fmt].files).length} files (prototype)`));
    render(false);
  })();

  /* =========================================================
     2. RESPONSIVE — step-by-step adaptation, true proportions
     ========================================================= */
  (function adaptDemo() {
    const root = $('#adaptDemo'), stage = $('#adaptStage'), holder = $('#rfHolder'), rf = $('#rframe');
    const seg = $('#bpSeg'), scaleEl = $('#adaptScale'), cap = $('#adaptCaption');
    const CAPS = [
      '<b>Step 1.</b> The designer builds the product page once, at desktop size. Every block uses auto layout — no absolute positions.',
      '<b>Step 2.</b> Each block gets a resize rule: the gallery <b>fills</b>, the buy box is <b>fixed at 440</b> on desktop, the grid <b>wraps</b>. These rules are what make the next steps automatic.',
      '<b>Step 3.</b> Add a Tablet breakpoint. Inlu reflows the same frame: nav collapses to a menu, the buy box shares the width, the grid drops to 2 columns. Nothing was redrawn.',
      '<b>Step 4.</b> Add Mobile · 390. Blocks stack into one column. The one manual decision — a <b>sticky “Add to bag” bar</b> — is saved as a mobile override.',
      '<b>Step 5.</b> Export once. All three layouts come out as one component with media queries — the same file for every breakpoint.'
    ];
    const STEPS = [[1280, ''], [1280, 'c'], [768, 'c'], [390, 'cf'], [390, '']];
    let bp = 1280;

    function scale() {
      const avail = stage.clientWidth - parseFloat(getComputedStyle(stage).paddingLeft) * 2;
      const w = rf.offsetWidth, s = Math.min(1, avail / w);
      rf.style.transform = `scale(${s})`;
      holder.style.width = w * s + 'px';
      holder.style.height = rf.offsetHeight * s + 'px';
      scaleEl.textContent = root.dataset.step === '4' ? '3 breakpoints → 1 file' : `${bp} px frame · shown at ${Math.round(s * 100)}%`;
    }
    new ResizeObserver(scale).observe(rf);
    new ResizeObserver(scale).observe(stage);

    function setBp(w) {
      bp = w; rf.style.width = w + 'px';
      $$('button', seg).forEach(b => b.classList.toggle('active', +b.dataset.bp === w));
      scale();
    }
    seg.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; ctl.setPlaying(false); setBp(+b.dataset.bp); });

    const L = [
      ['/* Generated from frame "Product page" · 3 breakpoints */'],
      ['.page    { display: grid; grid-template-columns: 1fr 440px; gap: 48px; }'],
      ['.related { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }'],
      ['.stickyBuy { display: none; }'],
      [''],
      ['@media (max-width: 1000px) {            /* Tablet · 768 */'],
      ['  .page     { grid-template-columns: 1fr 1fr; gap: 28px; }'],
      ['  .navLinks { display: none; }'],
      ['  .related  { grid-template-columns: repeat(2, 1fr); }'],
      ['}'],
      [''],
      ['@media (max-width: 520px) {             /* Mobile · 390 */'],
      ['  .page      { grid-template-columns: 1fr; gap: 18px; }'],
      ['  .buyRow    { display: none; }'],
      ['  .stickyBuy { display: flex; position: sticky; bottom: 0; }  /* override */'],
      ['}']
    ];
    Hl.render($('#adaptCode'), L);

    const ctl = stepper({
      root, buttons: $$('.steps-list button', root), durations: [4200, 5200, 5200, 5600, 6000], playBtn: $('#adaptPlay'),
      onStep(i, user) {
        if (user) ctl && ctl.setPlaying(false);
        const [w, flags] = STEPS[i];
        root.dataset.step = i;
        root.classList.toggle('show-c', flags.includes('c'));
        root.classList.toggle('show-fix', flags.includes('f'));
        root.dataset.step = i;
        setBp(w);
        cap.innerHTML = CAPS[i];
      }
    });
  })();

  /* ---------- 3. Import ---------- */
  (function importDemo() {
    const btn = $('#importRun'), bar = $('#impBar'), st = $('#impState'), items = $$('.imp-list li');
    let running = false;
    async function run() {
      if (running) return; running = true;
      items.forEach(li => li.classList.remove('on')); bar.style.transition = 'none'; bar.style.width = '0';
      st.textContent = 'Reading…'; st.classList.remove('ok');
      await sleep(50); bar.style.transition = ''; bar.style.width = '100%';
      for (const li of items) { await sleep(320); li.classList.add('on'); }
      st.textContent = '✓ Ready to edit'; st.classList.add('ok'); running = false;
    }
    btn.addEventListener('click', run);
    let done = false; onVisible($('#importCard'), v => { if (v && !done) { done = true; run(); } }, .5);
  })();

  /* ---------- 4. System modes (auto-cycle, pauses after a manual pick) ---------- */
  (function modes() {
    const seg = $('#modeSeg'), btns = $$('button', seg);
    let i = 0, hold = 0;
    const pick = b => { btns.forEach(x => x.classList.toggle('active', x === b)); $('#modeBtns').dataset.mode = b.dataset.mode; i = btns.indexOf(b); };
    seg.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; pick(b); hold = Date.now() + 8000; });
    let visible = false; onVisible(seg, v => visible = v, .5);
    setInterval(() => { if (visible && Date.now() > hold) pick(btns[(i + 1) % btns.length]); }, 2200);
  })();

  /* =========================================================
     5. PROTOTYPE FLOW — screens → connected, logical flow
     ========================================================= */
  (function flowDemo() {
    const root = $('#flowDemo'), canvas = $('#flowCanvas'), cap = $('#flowCaption');
    const screen = $('#ppScreen'), tap = $('#ppTap'), log = $('#ppLog');
    const ll3 = $('.ll3', canvas);
    const CAPS = [
      '<b>Start:</b> four static screens from the checkout design — Bag, Delivery, Payment, Done. Right now they are just pictures.',
      '<b>Connect:</b> drag from a button to the next screen. Each link is one gesture: trigger “Tap”, action “Navigate”. Three links make the happy path.',
      '<b>Add logic:</b> <code>cartTotal</code> and <code>delivery</code> are variables, so the Pay button always shows the real total. Payment has Error and Loading as <b>states</b> of one frame, and one condition decides where “Pay” goes.',
      '<b>Play:</b> the preview runs on the real, still-editable design. Watch the variables carry through and the condition pick the Error state, then Done.'
    ];
    let runId = 0;
    const addLog = (html) => { const d = document.createElement('div'); d.innerHTML = html; log.appendChild(d); };
    // cross-fade screen content inside a fixed phone bezel — no sideways movement
    const show = (sel, err) => {
      const ph = $(sel, canvas).cloneNode(true);
      ph.classList.toggle('is-error', !!err);
      const states = $('.ph-states', ph);
      if (states) { states.style.display = 'flex'; $$('span', states).forEach((s, k) => s.classList.toggle('on', k === (err ? 1 : 0))); }
      const old = $$('.ph', screen);
      screen.appendChild(ph);
      requestAnimationFrame(() => requestAnimationFrame(() => ph.classList.add('in')));
      old.forEach(o => { o.classList.add('out'); o.classList.remove('in'); setTimeout(() => o.remove(), 520); });
    };
    const doTap = async () => { tap.style.left = '81px'; tap.style.top = '415px'; tap.classList.remove('go'); void tap.offsetWidth; tap.classList.add('go'); await sleep(700); };
    async function play(id) {
      const alive = () => id === runId;
      log.innerHTML = '';
      show('.ph1'); addLog('<span class="k">▶ preview</span> cartTotal = $170.00');
      await sleep(1300); if (!alive()) return; await doTap(); if (!alive()) return;
      show('.ph2'); addLog('Tap “Checkout” → <span class="k">Delivery</span>');
      await sleep(1300); if (!alive()) return; await doTap(); if (!alive()) return;
      addLog('set delivery = "express" · cartTotal → <span class="ok">$195.60</span>');
      show('.ph3'); await sleep(1300); if (!alive()) return; await doTap(); if (!alive()) return;
      addLog('Tap “Pay” · card.valid = <span class="e">false</span>');
      show('.ph3', true); addLog('else → <span class="e">state: Error</span> (same frame)');
      await sleep(1800); if (!alive()) return;
      show('.ph3'); addLog('card updated · card.valid = <span class="ok">true</span>');
      await sleep(1000); if (!alive()) return; await doTap(); if (!alive()) return;
      show('.ph4'); addLog('if card.valid → <span class="k">Done</span>');
      await sleep(700); if (!alive()) return;
      addLog('<span class="ok">✓ 4 frames · 3 links · 1 rule</span>');
    }
    const ctl = stepper({
      root, buttons: $$('.flow-steps button', root), durations: [4200, 5000, 6500, 13500],
      onStep(i, user) {
        if (user && ctl) ctl.setPlaying(false);
        canvas.dataset.step = i;
        ll3.textContent = i >= 2 ? 'Tap “Pay” → if card.valid → Navigate' : 'Tap “Pay” → Navigate';
        cap.innerHTML = CAPS[i];
        runId++;
        if (i === 3) play(runId);
      }
    });
  })();

  /* =========================================================
     7. MANY DIRECTIONS — styles → dashboard → mobile → new direction
     ========================================================= */
  (function dirDemo() {
    const canvas = $('#dirCanvas'), msgs = $('#dirMsgs'), typing = $('#dirTyping'), btn = $('#dirNext'), gen = $('#dirGen'), toggle = $('#dirToggle');
    const prog = $$('#dirProg i');
    const STEPS = [
      { p: 'Create a style for a calm fintech product: violet accent, soft surfaces, 12px radius.',
        a: 'Created style <b>Calm fintech</b>:<ul><li>6 color tokens · 3 text styles</li><li>Button, Chip and Input components</li><li>Saved as variables, ready to reuse</li></ul>', build: '.d-board' },
      { p: 'Using these styles, design an operations dashboard: KPIs, weekly throughput and a project table.',
        a: 'Built <b>Overview</b> for desktop with 14 instances of your components. No new colors were added — everything uses the style tokens.', build: '.dd-main' },
      { p: 'Now the same overview for mobile, 390 wide.',
        a: 'Added <b>Mobile · 390</b>: same components and tokens, one column, tab bar at the bottom.', build: '.dm-app' },
      { p: 'Try a warmer direction: terracotta accent, serif headings, rounder corners.',
        a: 'Created <b>Direction B · Warm editorial</b> as a new mode. All 3 frames updated — switch A / B under the canvas to compare.', build: null }
    ];
    let stage = 0, busy = false, auto = true;
    const msg = (cls, html) => { const d = document.createElement('div'); d.className = 'msg ' + cls; d.innerHTML = html; msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight; };
    const setTheme = t => { canvas.dataset.theme = t; $$('button', toggle).forEach(b => b.classList.toggle('active', b.dataset.theme === t)); $('.d-theme-name', canvas).textContent = t === 'warm' ? 'Warm editorial' : 'Calm fintech'; $('.d-r', canvas).textContent = t === 'warm' ? '20' : '12'; $('.d-f', canvas).textContent = t === 'warm' ? 'Georgia' : 'Inter'; };
    const setWarmReady = v => { $('button[data-theme="warm"]', toggle).disabled = !v; toggle.classList.toggle('ready', v); };
    function reset() {
      stage = 0; canvas.dataset.stage = 0; setTheme('calm'); setWarmReady(false); msgs.innerHTML = '';
      msg('a', '<span class="msg-hint">Four prompts, one canvas: a style system first, then screens built with it, then a second direction.</span>');
      prog.forEach(p => p.classList.remove('on'));
      btn.textContent = 'Run step 1 →'; btn.disabled = false;
    }
    async function runStep() {
      if (busy || stage >= STEPS.length) return;
      busy = true; btn.disabled = true;
      const s = STEPS[stage];
      typing.textContent = '';
      for (const ch of s.p) { typing.textContent += ch; await sleep(18); }
      await sleep(250); typing.textContent = ''; msg('u', s.p);
      gen.classList.add('on'); await sleep(1100); gen.classList.remove('on');
      stage++; canvas.dataset.stage = stage;
      if (s.build) { const el = $(s.build, canvas); el.classList.remove('build'); void el.offsetWidth; el.classList.add('build'); }
      if (stage === 4) { setWarmReady(true); setTheme('warm'); }
      msg('a', s.a);
      prog.forEach((p, k) => p.classList.toggle('on', k < stage));
      busy = false; btn.disabled = false;
      btn.textContent = stage < STEPS.length ? `Run step ${stage + 1} →` : 'Replay ↺';
    }
    btn.addEventListener('click', () => { auto = false; if (stage >= STEPS.length) reset(); else runStep(); });
    toggle.addEventListener('click', e => { const b = e.target.closest('button'); if (b && !b.disabled) setTheme(b.dataset.theme); });
    reset();
    let started = false;
    onVisible($('#dirDemo'), async v => {
      if (!v || started) return; started = true;
      while (auto && stage < STEPS.length) { await runStep(); await sleep(2200); }
    }, .35);
  })();

  /* =========================================================
     8. PRICING — billing toggle, trial, "Talk to us" popup
     ========================================================= */
  $('#billSeg').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('#billSeg button').forEach(x => x.classList.toggle('active', x === b));
    const k = b.dataset.bill;
    $$('[data-m][data-y]').forEach(el => el.textContent = el.dataset[k]);
  });

  const modal = $('#talkModal'), form = $('#talkForm');
  // A/B: ?talk=page = control (separate contact page), default = popup (test variant)
  const talkVariant = new URLSearchParams(location.search).get('talk') === 'page' ? 'page' : 'popup';
  let lastFocus = null;
  function openModal() {
    lastFocus = document.activeElement;
    $('#talkFormWrap').hidden = false; $('#talkDone').hidden = true; form.reset();
    $$('.invalid', form).forEach(x => x.classList.remove('invalid'));
    modal.hidden = false; document.body.style.overflow = 'hidden';
    setTimeout(() => $('input', form).focus(), 50);
  }
  function closeModal() { modal.hidden = true; document.body.style.overflow = ''; if (lastFocus) lastFocus.focus(); }
  $$('[data-talk]').forEach(b => b.addEventListener('click', e => {
    e.preventDefault();
    if (talkVariant === 'page') toast('Variant A: would open the separate /contact page');
    else openModal();
  }));
  $$('[data-close]', modal).forEach(b => b.addEventListener('click', closeModal));
  document.addEventListener('keydown', e => {
    if (modal.hidden) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'Tab') {
      const f = $$('button, input, select, textarea, a[href]', modal).filter(x => x.offsetParent);
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });
  form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    $$('[required]', form).forEach(i => {
      const bad = !i.value.trim() || (i.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.value));
      i.classList.toggle('invalid', bad); if (bad && ok) { i.focus(); ok = false; }
    });
    if (!ok) return;
    $('#talkEmail').textContent = form.email.value;
    $('#talkFormWrap').hidden = true; $('#talkDone').hidden = false;
  });
  $$('[data-trial]').forEach(b => b.addEventListener('click', e => {
    e.preventDefault(); if (!modal.hidden) closeModal();
    toast('✦ 7-day Professional trial started — no card needed (prototype)');
  }));

  /* =========================================================
     Playful details for designers
     ========================================================= */
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Jelly shapes drift with the pointer (parallax by data-depth)
  const frame = $('#heroFrame');
  if (frame && finePointer && !calm) frame.addEventListener('mousemove', e => {
    const r = frame.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - .5, ny = (e.clientY - r.top) / r.height - .5;
    $$('.jelly', frame).forEach(j => { const d = +j.dataset.depth; j.style.setProperty('--px', nx * d + 'px'); j.style.setProperty('--py', ny * d + 'px'); });
  });

  // Canvas coordinates chip, like a design tool's X/Y readout
  const coords = $('#coords'), cx = $('#cx'), cy = $('#cy');
  if (finePointer) {
    let idle = 0;
    addEventListener('mousemove', e => {
      cx.textContent = Math.round(e.pageX); cy.textContent = Math.round(e.pageY);
      coords.classList.add('on');
      clearTimeout(idle); idle = setTimeout(() => coords.classList.remove('on'), 2600);
    }, { passive: true });
  }

  // Press G — 12-column layout grid, like in a design tool
  const grid = $('#gridOverlay');
  addEventListener('keydown', e => {
    if (e.key.toLowerCase() !== 'g' || e.metaKey || e.ctrlKey || e.altKey || /input|textarea|select/i.test(e.target.tagName)) return;
    const on = grid.classList.toggle('on');
    toast(on ? 'Layout grid on · 12 columns, 24 gutter — press G to hide' : 'Layout grid off');
  });

  // Hover a headline — inspect its type spec
  if (finePointer) {
    const tip = document.createElement('div'); tip.className = 'type-spec'; document.body.appendChild(tip);
    $$('h1, h2').forEach(h => {
      h.addEventListener('mouseenter', () => {
        const cs = getComputedStyle(h), fs = parseFloat(cs.fontSize);
        const ls = (parseFloat(cs.letterSpacing) / fs * 100).toFixed(1);
        tip.textContent = `${cs.fontFamily.split(',')[0].replace(/"/g, '')} ${cs.fontWeight} · ${Math.round(fs)}/${Math.round(parseFloat(cs.lineHeight))} · ${ls}%`;
        const r = h.getBoundingClientRect();
        tip.style.left = r.left + scrollX + 'px'; tip.style.top = r.top + scrollY - 34 + 'px';
        tip.classList.add('on'); h.classList.add('spec-on');
      });
      h.addEventListener('mouseleave', () => { tip.classList.remove('on'); h.classList.remove('spec-on'); });
    });
  }

  // Confetti for trial starts
  function confetti(x, y) {
    if (calm) return;
    const colors = ['#FF6B4A', '#FF4F9A', '#7C4DFF', '#3DD9EB', '#DDF25A'];
    for (let i = 0; i < 36; i++) {
      const c = document.createElement('i'); c.className = 'confetti';
      const a = Math.random() * Math.PI * 2, d = 60 + Math.random() * 140;
      c.style.cssText = `left:${x}px;top:${y}px;background:${colors[i % colors.length]};--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d - 60}px;--rot:${Math.random() * 720}deg;border-radius:${i % 3 ? 2 : 50}%`;
      document.body.appendChild(c); setTimeout(() => c.remove(), 1200);
    }
  }
  $$('[data-trial], .btn-accent').forEach(b => b.addEventListener('click', e => {
    if (/trial/i.test(b.textContent)) confetti(e.clientX || innerWidth / 2, e.clientY || innerHeight / 2);
  }));

  // Footer palette: click a swatch to copy its hex
  $$('.palette button').forEach(b => b.addEventListener('click', () => {
    const hex = b.dataset.hex;
    (navigator.clipboard ? navigator.clipboard.writeText(hex) : Promise.reject()).then(() => toast(`Copied ${hex}`), () => toast(hex));
  }));

  // re-fit once demos have injected their content and fonts/layout settled
  fitAll();
  addEventListener('load', fitAll);
  if (document.fonts) document.fonts.ready.then(fitAll);
}
