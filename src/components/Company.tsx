"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import {
  AuroraLayer,
  GeometricGridLayer,
} from "@/components/VelocityVisuals";
import { Reveal } from "@/components/Motion";
import { companyInfo } from "@/data/works";

type InfoRow = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

const rows: InfoRow[] = [
  { label: "会社名", value: companyInfo.name },
  { label: "代表者", value: companyInfo.representative },
  { label: "所在地", value: `${companyInfo.postal} ${companyInfo.address}` },
  { label: "設立", value: companyInfo.founded },
  { label: "事業内容", value: companyInfo.business },
  {
    label: "提携・協力機関",
    value: `${companyInfo.partner}（${companyInfo.partnerUrl}）`,
    href: companyInfo.partnerUrl,
    external: true,
  },
  {
    label: "電話番号",
    value: companyInfo.phone,
    href: companyInfo.phoneHref,
  },
  {
    label: "メール",
    value: companyInfo.email,
    href: companyInfo.emailHref,
  },
  { label: "対応エリア", value: companyInfo.area },
];

export default function Company() {
  return (
    <section
      id="company"
      className="relative scroll-mt-44 md:scroll-mt-48 overflow-hidden bg-surface/55 section-y"
    >
      <AuroraLayer className="opacity-35" />
      <GeometricGridLayer className="opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl section-pad">
        <Reveal direction="left">
          <span className="lux-badge">Company</span>
          <h2 className="mt-5 font-display text-2xl font-bold tracking-tight md:text-4xl">
            <span className="mesh-text">会社概要</span>
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            八王子本社を拠点に、関東〜全国の現場へ。
            八王子フィルムコミッションとの公式連携で、ロケ地提案から許可申請までを加速します。
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal direction="left">
            <div className="overflow-hidden lux-card geo-frame">
              <table className="w-full text-left text-sm">
                <tbody>
                  {rows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={i % 2 === 0 ? "bg-white/50" : "bg-surface/80"}
                    >
                      <th className="w-[32%] px-4 py-4 align-top font-bold tracking-wide text-brand md:px-5">
                        {row.label}
                      </th>
                      <td className="px-4 py-4 leading-relaxed text-foreground md:px-5">
                        {row.href ? (
                          <a
                            href={row.href}
                            {...(row.external
                              ? {
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                }
                              : {})}
                            className="inline-flex items-center gap-1 font-medium text-brand underline-offset-2 hover:underline"
                          >
                            {row.value}
                            {row.external ? (
                              <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                            ) : null}
                          </a>
                        ) : (
                          row.value
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="overflow-hidden lux-card card-lift geo-frame">
              <div className="flex items-center gap-2 border-b border-border/70 px-5 py-4">
                <MapPin className="h-4 w-4 text-brand" />
                <p className="text-sm font-bold tracking-wide">八王子本社マップ</p>
              </div>
              <div className="aspect-[4/3] w-full bg-surface">
                <iframe
                  title={`${companyInfo.shortName} 八王子本社`}
                  src={companyInfo.mapEmbed}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="space-y-3 px-5 py-4">
                <p className="text-sm text-muted">
                  {companyInfo.postal}
                  <br />
                  {companyInfo.address}
                </p>
                <a
                  href={companyInfo.partnerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline"
                >
                  提携：{companyInfo.partner}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
