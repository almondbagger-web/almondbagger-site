import { ArrowUpRight } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { companyInfo, navLinks } from "@/data/works";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[1] overflow-hidden border-t border-pink/10 bg-soft">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose via-yellow to-cyan" />
      <div className="mx-auto max-w-6xl section-pad py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#top" aria-label={`${companyInfo.shortName} トップへ`}>
              <BrandLogo imageClassName="h-14" />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              映画・ドラマから縦型ショートまで。
              八王子本社の{companyInfo.shortName}が、現場を止めない制作サポートを提供します。
            </p>
            <p className="mt-3 text-sm font-medium text-foreground/80">
              {companyInfo.postal}
              <br />
              {companyInfo.address}
            </p>
            <p className="mt-3 text-sm font-bold text-pink">
              <a href={companyInfo.phoneHref}>{companyInfo.phone}</a>
              {" · "}
              <a href={companyInfo.emailHref}>{companyInfo.email}</a>
            </p>
            <p className="mt-4 text-sm text-foreground/75">
              提携・協力機関：
              <a
                href={companyInfo.partnerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 inline-flex items-center gap-1 font-bold text-pink hover:underline"
              >
                {companyInfo.partner}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </p>
            <a
              href={companyInfo.partnerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-xs text-muted hover:text-cyan"
            >
              {companyInfo.partnerUrl}
            </a>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-foreground/60 transition hover:text-pink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-pink/10 pt-6 text-xs text-muted md:flex-row md:justify-between">
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
