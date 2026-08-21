"use client";

import { MapPin } from "lucide-react";
import { Reveal } from "@/components/Motion";
import { companyInfo } from "@/data/works";

const rows = [
  { label: "会社名", value: companyInfo.name },
  { label: "代表者", value: companyInfo.representative },
  { label: "所在地", value: `${companyInfo.postal} ${companyInfo.address}` },
  { label: "設立", value: companyInfo.founded },
  { label: "事業内容", value: companyInfo.business },
  { label: "電話番号", value: companyInfo.phone, href: companyInfo.phoneHref },
  { label: "メール", value: companyInfo.email, href: companyInfo.emailHref },
  { label: "対応エリア", value: companyInfo.area },
] as const;

export default function Company() {
  return (
    <section id="company" className="relative overflow-hidden bg-soft py-20 md:py-28">
      <div className="pointer-events-none absolute right-10 top-10 h-56 w-56 rounded-full bg-cyan/25 pop-blob" />
      <div className="relative mx-auto max-w-6xl section-pad">
        <Reveal>
          <span className="neon-badge bg-lime text-white">COMPANY</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
            会社概要
          </h2>
          <p className="mt-3 text-muted">
            八王子本社を拠点に、関東〜全国の現場へ。
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal direction="left">
            <div className="overflow-hidden rounded-3xl bg-white shadow-[0_18px_40px_rgba(31,18,53,0.08)] ring-1 ring-black/5">
              <table className="w-full text-left text-sm">
                <tbody>
                  {rows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={i % 2 === 0 ? "bg-white" : "bg-soft/60"}
                    >
                      <th className="w-[30%] px-4 py-4 align-top font-bold text-pink md:px-5">
                        {row.label}
                      </th>
                      <td className="px-4 py-4 leading-relaxed text-foreground md:px-5">
                        {"href" in row && row.href ? (
                          <a
                            href={row.href}
                            className="font-medium text-cyan underline-offset-2 hover:underline"
                          >
                            {row.value}
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
            <div className="overflow-hidden rounded-3xl bg-white shadow-[0_18px_40px_rgba(31,18,53,0.08)] ring-1 ring-black/5">
              <div className="flex items-center gap-2 border-b border-black/5 px-5 py-4">
                <MapPin className="h-4 w-4 text-rose" />
                <p className="text-sm font-bold">八王子本社マップ</p>
              </div>
              <div className="aspect-[4/3] w-full bg-soft">
                <iframe
                  title="ALMONDBAGGER 八王子本社"
                  src={companyInfo.mapEmbed}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="px-5 py-4 text-sm text-muted">
                {companyInfo.postal}
                <br />
                {companyInfo.address}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
