// Playful details: canvas coordinates chip and 12-column layout grid (press G).
export function Overlays() {
  return (
    <>
      {/* playful details: canvas coordinates, layout grid (press G) */}
      <div className="coords" id="coords" aria-hidden="true"><b>X</b> <span id="cx">0</span> <b>Y</b> <span id="cy">0</span> <i>100%</i></div>
      <div className="grid-overlay" id="gridOverlay" aria-hidden="true"><div className="wrap"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>

    </>
  );
}
