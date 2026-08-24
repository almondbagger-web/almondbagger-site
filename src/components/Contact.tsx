"use client";

import { type FormEvent, useState } from "react";
import { CheckCircle2, Clock, Mail, Phone, Send } from "lucide-react";
import {
  AuroraLayer,
  GeometricGridLayer,
} from "@/components/VelocityVisuals";
import { Bounce, Reveal } from "@/components/Motion";
import { companyInfo, priceDisclaimer } from "@/data/works";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  urgency: "通常" | "緊急（24H）";
  plan: string;
  budget: string;
  message: string;
};

const initial: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  urgency: "通常",
  plan: "ご相談（応相談）",
  budget: "",
  message: "",
};

const planOptions = [
  "ご相談（応相談）",
  "縦型ショート / TikTok / Reels",
  "YouTube動画制作",
  "CM / プロモーション映像",
  "映画・ドラマ現場サポート",
  "その他",
] as const;

const fieldClass =
  "field-focus w-full rounded-2xl border border-border/80 bg-white/80 px-4 py-3.5 text-foreground outline-none backdrop-blur transition placeholder:text-muted/60";

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-36 md:scroll-mt-40 overflow-hidden bg-transparent section-y"
    >
      <AuroraLayer className="opacity-40" />
      <GeometricGridLayer className="opacity-30" />

      <div className="relative z-10 mx-auto max-w-6xl section-pad">
        <Reveal direction="left">
          <div className="flex flex-wrap gap-2">
            <span className="tag-chip tag-chip--red">24H</span>
            <span className="tag-chip tag-chip--cyan">Standby</span>
            <span className="tag-chip tag-chip--pink">Urgent</span>
          </div>
          <p className="eyebrow mt-5">お問い合わせ</p>
          <h2 className="mt-4 font-display text-2xl font-bold tracking-tight md:text-4xl">
            24時間
            <span className="mesh-text">緊急対応</span>
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-muted">
            撮影変更・許可・ロケトラブルに加え、低バジェット〜大規模の制作ご相談も歓迎です。
            参考料金は目安のため、まずは応相談でお気軽にどうぞ。
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal direction="left" className="space-y-4">
            <div className="relative overflow-hidden rounded-[1.25rem] mesh-bg p-6 text-white md:p-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur">
                <Clock className="h-3.5 w-3.5" />
                24H STANDBY
              </div>
              <h3 className="font-display text-2xl font-bold tracking-wide">
                緊急時も、予算相談も。
              </h3>
              <p className="mt-3 text-sm text-white/85">
                通常〜緊急案件、料金の応相談まで。内容に応じて最短で担当が対応します。
              </p>
              <div className="mt-6 space-y-3 text-sm">
                <a
                  href={companyInfo.phoneHref}
                  className="flex items-center gap-3 rounded-2xl bg-white/15 px-4 py-3 backdrop-blur transition hover:bg-white/25"
                >
                  <Phone className="h-4 w-4" />
                  {companyInfo.phone}
                </a>
                <a
                  href={companyInfo.emailHref}
                  className="flex items-center gap-3 rounded-2xl bg-white/15 px-4 py-3 backdrop-blur transition hover:bg-white/25"
                >
                  <Mail className="h-4 w-4" />
                  {companyInfo.email}
                </a>
              </div>
            </div>
            <div className="lux-glass rounded-2xl px-4 py-3 text-xs font-bold leading-relaxed text-foreground/80">
              {priceDisclaimer}
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="lux-card p-6 md:p-8">
              {submitted ? (
                <div className="flex min-h-[340px] flex-col items-center justify-center text-center">
                  <CheckCircle2 className="mb-4 h-12 w-12 text-lime" />
                  <h3 className="font-display text-2xl font-bold tracking-wide">
                    送信を受け付けました
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-muted">
                    デモのため実送信は行いません。本番ではメール通知へ接続できます。
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm(initial);
                    }}
                    className="btn-secondary mt-6"
                  >
                    フォームに戻る
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="block space-y-2">
                      <span className="text-xs font-bold tracking-wide text-muted">
                        お名前 <span className="text-pink">*</span>
                      </span>
                      <input
                        required
                        className={fieldClass}
                        value={form.name}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, name: e.target.value }))
                        }
                        placeholder="山田 太郎"
                      />
                    </label>
                    <label className="block space-y-2">
                      <span className="text-xs font-bold tracking-wide text-muted">
                        会社名
                      </span>
                      <input
                        className={fieldClass}
                        value={form.company}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, company: e.target.value }))
                        }
                        placeholder="株式会社〇〇"
                      />
                    </label>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="block space-y-2">
                      <span className="text-xs font-bold tracking-wide text-muted">
                        メール <span className="text-pink">*</span>
                      </span>
                      <input
                        required
                        type="email"
                        className={fieldClass}
                        value={form.email}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, email: e.target.value }))
                        }
                        placeholder="you@example.com"
                      />
                    </label>
                    <label className="block space-y-2">
                      <span className="text-xs font-bold tracking-wide text-muted">
                        電話 <span className="text-pink">*</span>
                      </span>
                      <input
                        required
                        className={fieldClass}
                        value={form.phone}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, phone: e.target.value }))
                        }
                        placeholder="090-0000-0000"
                      />
                    </label>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="block space-y-2">
                      <span className="text-xs font-bold tracking-wide text-muted">
                        ご希望プラン
                      </span>
                      <select
                        className={fieldClass}
                        value={form.plan}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, plan: e.target.value }))
                        }
                      >
                        {planOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="block space-y-2">
                      <span className="text-xs font-bold tracking-wide text-muted">
                        ご予算感（任意）
                      </span>
                      <input
                        className={fieldClass}
                        value={form.budget}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, budget: e.target.value }))
                        }
                        placeholder="例：30万円〜 / 応相談"
                      />
                    </label>
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-bold tracking-wide text-muted">
                      緊急度
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {(["通常", "緊急（24H）"] as const).map((level) => (
                        <Bounce key={level}>
                          <button
                            type="button"
                            onClick={() =>
                              setForm((f) => ({ ...f, urgency: level }))
                            }
                            className={cn(
                              "w-full rounded-2xl px-3 py-3 text-sm font-bold transition",
                              form.urgency === level
                                ? level === "緊急（24H）"
                                  ? "mesh-bg text-white shadow-lg"
                                  : "bg-cyan text-white shadow-lg"
                                : "bg-crystal text-foreground/70 ring-1 ring-white/90",
                            )}
                          >
                            {level}
                          </button>
                        </Bounce>
                      ))}
                    </div>
                  </div>
                  <label className="block space-y-2">
                    <span className="text-xs font-bold tracking-wide text-muted">
                      ご相談内容 <span className="text-pink">*</span>
                    </span>
                    <textarea
                      required
                      rows={5}
                      className={cn(fieldClass, "resize-none")}
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      placeholder="撮影日、場所、必要な支援、ご予算の希望など"
                    />
                  </label>
                  <Bounce>
                    <button
                      type="submit"
                      className="btn-primary w-full justify-center md:w-auto"
                    >
                      <Send className="h-4 w-4" />
                      送信する
                    </button>
                  </Bounce>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
