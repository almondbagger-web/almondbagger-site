import { ArrowUpRight } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { companyInfo, navLinks } from "@/data/works";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[2] overflow-hidden border-t border-border/80 bg-surface/70 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px mesh-bg opacity-50" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-40 w-40 rounded-full bg-brand/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-10 h-36 w-36 rounded-full bg-cyan/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl section-pad py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#top" aria-label={`${companyInfo.shortName} トップへ`}>
              <BrandLogo imageClassName="h-14 max-w-[260px] md:h-16 md:max-w-[300px]" />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              20年の映画・ドラマ制作部統括力 × 次世代AIパイプライン。
              現場の確固たる進行管理と最新技術で、映像制作を支え抜きます。
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="tag-chip tag-chip--red">制作部</span>
              <span className="tag-chip tag-chip--cyan">バックオフィス</span>
              <span className="tag-chip tag-chip--purple">AI Previs</span>
            </div>
            <p className="mt-4 text-sm font-medium text-foreground/80">
              {companyInfo.postal}
              <br />
              {companyInfo.address}
            </p>
            <p className="mt-3 text-sm font-bold">
              <a href={companyInfo.phoneHref} className="mesh-text hover:opacity-80">
                {companyInfo.phone}
              </a>
              <span className="text-muted"> · </span>
              <a
                href={companyInfo.emailHref}
                className="text-foreground/75 transition hover:text-brand"
              >
                {companyInfo.email}
              </a>
            </p>
            <p className="mt-4 text-sm text-foreground/75">
              提携・協力機関：
              <a
                href={companyInfo.partnerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 inline-flex items-center gap-1 font-bold text-brand hover:underline"
              >
                {companyInfo.partner}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold tracking-wide text-foreground/50 transition hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-border/70 pt-6 text-xs text-muted md:flex-row md:justify-between">
          <p>
            © {year} {companyInfo.name}
          </p>
          <p>
            代表 {companyInfo.representative} · {companyInfo.partner}連携
          </p>
        </div>
      </div>
    </footer>
  );
}
