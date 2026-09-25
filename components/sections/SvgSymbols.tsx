// Shared SVG product drawings referenced with <use>.
export function SvgSymbols() {
  return (
    <>
      {/* shared SVG */}
      <svg width="0" height="0" style={{ position: 'absolute' } as React.CSSProperties} aria-hidden="true">
        <symbol id="hp" viewBox="0 0 200 200">
          <path d="M44 116 V94 a56 56 0 0 1 112 0 V116" fill="none" stroke="var(--hp-band, #1B1530)" strokeWidth="12" strokeLinecap="round"/>
          <rect x="24" y="100" width="42" height="68" rx="19" fill="var(--hp-cup, #7C4DFF)"/>
          <rect x="134" y="100" width="42" height="68" rx="19" fill="var(--hp-cup, #7C4DFF)"/>
          <rect x="58" y="110" width="14" height="48" rx="7" fill="var(--hp-band, #1B1530)"/>
          <rect x="128" y="110" width="14" height="48" rx="7" fill="var(--hp-band, #1B1530)"/>
          <rect x="32" y="110" width="8" height="22" rx="4" fill="#fff" opacity=".45"/>
          <circle cx="155" cy="152" r="4" fill="var(--hp-led, #DDF25A)"/>
        </symbol>
        <symbol id="buds" viewBox="0 0 200 200">
          <rect x="46" y="84" width="108" height="78" rx="36" fill="var(--c1, #FFFFFF)"/>
          <path d="M48 116 H152" stroke="rgba(27,21,48,.14)" strokeWidth="3"/>
          <circle cx="82" cy="64" r="17" fill="var(--c2, #7C4DFF)"/><rect x="76" y="64" width="12" height="36" rx="6" fill="var(--c2, #7C4DFF)"/>
          <circle cx="118" cy="64" r="17" fill="var(--c2, #7C4DFF)"/><rect x="112" y="64" width="12" height="36" rx="6" fill="var(--c2, #7C4DFF)"/>
          <circle cx="100" cy="138" r="4" fill="var(--c3, #DDF25A)"/>
        </symbol>
        <symbol id="case" viewBox="0 0 200 200">
          <ellipse cx="100" cy="108" rx="72" ry="54" fill="var(--c1, #3DD9EB)"/>
          <ellipse cx="100" cy="108" rx="60" ry="43" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="3" strokeDasharray="7 6"/>
          <rect x="150" y="100" width="26" height="12" rx="6" fill="var(--c2, #1B1530)"/>
          <path d="M70 84 q30 -14 60 0" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="5" strokeLinecap="round"/>
        </symbol>
        <symbol id="dock" viewBox="0 0 200 200">
          <rect x="52" y="152" width="96" height="16" rx="8" fill="var(--c2, #1B1530)"/>
          <rect x="94" y="62" width="12" height="94" rx="6" fill="var(--c2, #1B1530)"/>
          <path d="M66 74 a34 34 0 0 1 68 0" fill="none" stroke="var(--c1, #7C4DFF)" strokeWidth="11" strokeLinecap="round"/>
          <circle cx="100" cy="160" r="3.5" fill="var(--c3, #DDF25A)"/>
        </symbol>
        <symbol id="speaker" viewBox="0 0 200 200">
          <rect x="60" y="36" width="80" height="132" rx="32" fill="var(--c1, #1B1530)"/>
          <circle cx="100" cy="120" r="28" fill="var(--c2, #FF4F9A)"/><circle cx="100" cy="120" r="11" fill="var(--c3, #DDF25A)"/>
          <circle cx="100" cy="66" r="9" fill="var(--c2, #FF4F9A)"/>
        </symbol>
      </svg>
    </>
  );
}
