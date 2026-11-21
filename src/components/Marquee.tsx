export default function Marquee() {
  const text = "ALMONDBAGGER — PRODUCTION DIVISION × CINEMATIC AI";

  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__track">
        <span className="marquee__item">{text}</span>
        <span className="marquee__item">{text}</span>
      </div>
    </div>
  );
}
