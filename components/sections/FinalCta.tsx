// Closing call to action.
export function FinalCta() {
  return (
    <>
      <section className="final dark">
        <div className="hero-glow" aria-hidden="true"></div>
        <div className="wrap final-inner reveal">
          <span className="eyebrow light">Your work is the best demo</span>
          <h2>See your own design <span className="grad">as code.</span></h2>
          <p className="lead">Import one real .fig or .sketch project and check the output yourself. Free to start, no card needed.</p>
          <div className="hero-ctas center">
            <a href="#import" className="btn btn-accent btn-lg">Import .fig or .sketch</a>
            <a href="#pricing" className="btn btn-outline-light btn-lg">Start 7-day trial</a>
          </div>
        </div>
      </section>
    </>
  );
}
