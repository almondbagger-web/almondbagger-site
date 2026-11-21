"use client";

import { type FormEvent, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Send } from "lucide-react";
import { motion } from "framer-motion";
import { companyInfo } from "@/data/works";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initial: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  subject: "制作部・ロケ支援のご相談",
  message: "",
};

const subjectOptions = [
  "制作部・ロケ支援のご相談",
  "AI Previs / VFXのご相談",
  "オープンゲート縦横同時制作のご相談",
  "企業PR映像・SNS展開のご相談",
  "地図ツクールについて",
  "その他",
] as const;

const rows = [
  { label: "会社名", value: companyInfo.name },
  {
    label: "所在地",
    value: `${companyInfo.postal} ${companyInfo.address}`,
  },
  { label: "代表者", value: companyInfo.representative },
  { label: "事業内容", value: companyInfo.business },
  {
    label: "公認連携",
    value: companyInfo.partner,
    href: companyInfo.partnerUrl,
  },
  { label: "電話番号", value: companyInfo.phone, href: companyInfo.phoneHref },
  { label: "メール", value: companyInfo.email, href: companyInfo.emailHref },
] as const;

export default function CompanyContact() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section
        id="company"
        aria-labelledby="company-heading"
        className="relative scroll-mt-24 overflow-hidden bg-background section-y md:scroll-mt-28"
      >
        <div className="pointer-events-none absolute inset-0 tech-grid opacity-35" />
        <div className="relative mx-auto max-w-6xl section-pad">
          <div>
            <p className="text-[0.7rem] font-medium tracking-[0.24em] text-gold">
              COMPANY
            </p>
            <h2
              id="company-heading"
              className="mt-4 font-serif text-2xl font-medium tracking-wide text-foreground md:text-3xl lg:text-4xl"
            >
              会社概要
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel mt-12 overflow-hidden"
          >
            <table className="w-full text-left text-sm">
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={cn(
                      "border-b border-border last:border-b-0",
                      i % 2 === 0 ? "bg-white" : "bg-surface/60",
                    )}
                  >
                    <th className="w-[34%] px-4 py-4 align-top text-[0.78rem] font-medium tracking-wide text-muted sm:w-[28%] md:px-6 md:py-5 md:text-[0.8125rem]">
                      {row.label}
                    </th>
                    <td className="px-4 py-4 leading-relaxed text-foreground md:px-6 md:py-5">
                      {"href" in row && row.href ? (
                        <a
                          href={row.href}
                          {...(row.href.startsWith("http")
                            ? {
                                target: "_blank",
                                rel: "noopener noreferrer",
                              }
                            : {})}
                          className="underline-offset-4 transition-colors hover:text-gold-deep hover:underline"
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
          </motion.div>
        </div>
      </section>

      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="relative scroll-mt-24 overflow-hidden bg-surface section-y md:scroll-mt-28"
      >
        <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" />
        <div className="relative mx-auto max-w-2xl section-pad">
          <div className="text-center">
            <p className="text-[0.7rem] font-medium tracking-[0.24em] text-gold">
              CONTACT
            </p>
            <h2
              id="contact-heading"
              className="mt-4 font-serif text-2xl font-medium tracking-wide text-foreground md:text-3xl lg:text-4xl"
            >
              お問い合わせ
            </h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-muted">
              制作部支援、ロケーション、AI映像、縦横同時制作に関するご相談を承ります。内容を確認のうえ、担当よりご連絡いたします。
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel mt-12 p-6 md:p-10"
          >
            {submitted ? (
              <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="mb-4 h-10 w-10 text-gold" />
                <h3 className="font-serif text-xl font-medium tracking-wide">
                  送信を受け付けました
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                  デモのため実送信は行いません。本番環境ではメール通知へ接続できます。
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm(initial);
                  }}
                  className="btn-gold-outline mt-8"
                >
                  フォームに戻る
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <label className="block space-y-2">
                  <span className="text-[0.78rem] font-medium tracking-wide text-muted">
                    お名前 <span className="text-gold">*</span>
                  </span>
                  <input
                    required
                    className="field-lux"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder="山田 太郎"
                  />
                </label>
                <label className="block space-y-2">
                  <span className="text-[0.78rem] font-medium tracking-wide text-muted">
                    会社名・団体名
                  </span>
                  <input
                    className="field-lux"
                    value={form.company}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, company: e.target.value }))
                    }
                    placeholder="株式会社〇〇"
                  />
                </label>
                <label className="block space-y-2">
                  <span className="text-[0.78rem] font-medium tracking-wide text-muted">
                    メールアドレス <span className="text-gold">*</span>
                  </span>
                  <input
                    required
                    type="email"
                    className="field-lux"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="you@example.com"
                  />
                </label>
                <label className="block space-y-2">
                  <span className="text-[0.78rem] font-medium tracking-wide text-muted">
                    電話番号
                  </span>
                  <input
                    className="field-lux"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    placeholder="090-0000-0000"
                  />
                </label>
                <label className="block space-y-2">
                  <span className="text-[0.78rem] font-medium tracking-wide text-muted">
                    ご相談内容の種別
                  </span>
                  <select
                    className="field-lux"
                    value={form.subject}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, subject: e.target.value }))
                    }
                  >
                    {subjectOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block space-y-2">
                  <span className="text-[0.78rem] font-medium tracking-wide text-muted">
                    メッセージ <span className="text-gold">*</span>
                  </span>
                  <textarea
                    required
                    rows={6}
                    className={cn("field-lux", "resize-y")}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="撮影予定、ご相談の概要など、差し支えのない範囲でご記入ください。"
                  />
                </label>
                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <Link
                    href="/privacy"
                    className="text-[0.78rem] text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    プライバシーポリシー
                  </Link>
                  <button type="submit" className="btn-dark w-full sm:w-auto">
                    <Send className="h-4 w-4" />
                    送信する
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
