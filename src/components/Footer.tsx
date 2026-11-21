import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { companyInfo, navLinks } from "@/data/works";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[2] border-t border-border bg-background">
      <div className="mx-auto max-w-6xl section-pad py-16 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <a href="#top" aria-label={`${companyInfo.shortName} トップへ`}>
              <BrandLogo variant="footer" />
            </a>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              映画・ドラマ制作部統括 × 最先端AIクリエイティブ × SNS・アナリティクス戦略。八王子を拠点に、作品の現場と拡散を支えます。
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              {companyInfo.postal}
              <br />
              {companyInfo.address}
            </p>
            <p className="mt-4 text-sm">
              <a
                href={companyInfo.phoneHref}
                className="text-foreground transition-colors hover:text-gold-deep"
              >
                {companyInfo.phone}
              </a>
              <span className="mx-2 text-border">·</span>
              <a
                href={companyInfo.emailHref}
                className="text-foreground transition-colors hover:text-gold-deep"
              >
                {companyInfo.email}
              </a>
            </p>
          </div>

          <nav
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3"
            aria-label="フッターナビゲーション"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm tracking-wide text-muted transition-colors hover:text-foreground"
            >
              お問い合わせ
            </a>
            <Link
              href="/privacy"
              className="text-sm tracking-wide text-muted transition-colors hover:text-foreground"
            >
              プライバシーポリシー
            </Link>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted md:flex-row md:justify-between">
          <p>
            © {year} {companyInfo.name}
          </p>
          <p>{companyInfo.partner}</p>
        </div>
      </div>
    </footer>
  );
}
