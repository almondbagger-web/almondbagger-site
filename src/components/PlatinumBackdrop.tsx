import CosmicGoldParticles from "@/components/CosmicGoldParticles";

/** 明るいプラチナセクション用：淡いグリッド＋微細な金粉 */
export default function PlatinumBackdrop({
  withParticles = true,
}: {
  withParticles?: boolean;
}) {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 tech-grid opacity-[0.55]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-[#E6E9EF]/50"
        aria-hidden
      />
      {withParticles ? <CosmicGoldParticles intensity="light" /> : null}
    </>
  );
}
