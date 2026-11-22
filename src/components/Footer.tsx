import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import OpeningReplayTrigger from "@/components/OpeningReplayTrigger";
import { companyInfo, navLinks } from "@/data/works";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[2] border-t border-border bg-cinema text-white">
      <div className="mx-auto max-w-6xl section-pad py-16 md:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <Link
              href="/"
              aria-label={`${companyInfo.shortName} トップへ`}
              className="inline-block rounded-sm bg-white px-2 py-1"
            >
              <BrandLogo variant="footer" />
            </Link>
            <p className="mt-6 font-display text-[clamp(1.75rem,5vw,2.75rem)] font-black leading-[1.05] tracking-tighter text-white/90">
              PRODUCTION
              <br />
              DIVISION
            </p>
            <p className="mt-5 text-sm leading-relaxed text-white/55">
              映画・ドラマ制作部統括 × 最先端AIクリエイティブ × SNS戦略。八王子を拠点に、作品の現場を支えます。
            </p>
            <p className="mt-5 text-sm leading-relaxed text-white/55">
              {companyInfo.postal}
              <br />
              {companyInfo.address}
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            <nav
              className="flex flex-col gap-3"
              aria-label="フッターナビゲーション"
            >
              {navLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm tracking-wide text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={`/${link.href}`}
                    className="text-sm tracking-wide text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ),
              )}
              <a
                href="/#contact"
                className="text-sm tracking-wide text-white/60 transition-colors hover:text-white"
              >
                お問い合わせ
              </a>
              <Link
                href="/privacy"
                className="text-sm tracking-wide text-white/60 transition-colors hover:text-white"
              >
                プライバシーポリシー
              </Link>
            </nav>

            <div className="flex flex-col gap-4 self-start">
              <OpeningReplayTrigger variant="footer" />
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-display text-sm font-extrabold tracking-[0.16em] text-gold transition-colors hover:text-white"
              >
                BACK TO TOP ↑
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/12 pt-6 text-xs text-white/40 md:flex-row md:justify-between">
          <p>
            © {year} {companyInfo.name}
          </p>
          <p>{companyInfo.partner}</p>
        </div>
      </div>
    </footer>
  );
}
