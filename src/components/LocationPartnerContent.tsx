"use client";

import { type FormEvent, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { companyInfo } from "@/data/works";
import { cn } from "@/lib/utils";

const promises = [
  {
    no: "01",
    title: "初期費用・持ち出しは「完全0円」",
    body: "撮影受け入れに必要な簡易照明の追加、電源整備、ロケハン用のプロ写真撮影・間取り図作成などの初期費用（数十万円相当）は、すべて弊社が全額負担いたします。",
  },
  {
    no: "02",
    title: "地上波・大手配信の制作会社へ直接アプローチ",
    body: "Netflix『ソウルメイト』『地面師たち』や商業映画『ラブ≠コメディ』等の現場を手掛ける弊社が窓口となり、主要制作会社へ貴店を優先提案。作品登場による認知度・集客力向上も期待できます。",
  },
  {
    no: "03",
    title: "本業の邪魔なし・万全のトラブル防止＆保険完備",
    body: "貸し出しはオーナー様が指定された定休日・早朝・深夜など営業時間外のみ。当日は20年以上の現場経験を持つ制作スタッフが必ず立ち会い、床・壁の徹底養生・近隣配慮・原状回復を行い、万が一に備えた賠償責任保険にも加入しています。",
  },
] as const;

const propertyTypes = [
  "飲食店・カフェ",
  "居酒屋",
  "古民家・一軒家",
  "オフィス",
  "倉庫・スタジオ",
  "美容室",
  "その他",
] as const;

type FormState = {
  name: string;
  propertyName: string;
  location: string;
  propertyType: string;
  email: string;
  phone: string;
  message: string;
};

const initial: FormState = {
  name: "",
  propertyName: "",
  location: "",
  propertyType: "飲食店・カフェ",
  email: "",
  phone: "",
  message: "",
};

export default function LocationPartnerContent() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-cinema text-white">
        <div className="pointer-events-none absolute inset-0 tech-grid opacity-20" />
        <div className="relative mx-auto max-w-6xl section-pad py-20 md:py-28">
          <p className="font-display text-[0.7rem] font-extrabold tracking-[0.2em] text-gold">
            LOCATION PARTNER
          </p>
          <h1 className="mt-6 max-w-4xl font-serif text-[clamp(1.75rem,4.5vw,3rem)] font-bold leading-[1.35] tracking-wide">
            貴店の定休日・営業時間外が、
            <br className="hidden sm:block" />
            ドラマや映画の舞台になる。
          </h1>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            地上波ドラマ・CM・Netflix・Amazon Prime Video等の制作会社へ直接ご提案。初期費用0円・本業優先・万全の養生と保険体制で、新たな副収入とお店のブランディングを実現します。
          </p>
          <a href="#location-form" className="btn-on-dark mt-10 inline-flex">
            相談してみる
          </a>
        </div>
      </section>

      <section
        aria-labelledby="promises-heading"
        className="relative bg-surface section-y"
      >
        <div className="mx-auto max-w-6xl section-pad">
          <SectionHeading
            english="OUR PROMISE"
            japanese="オーナー様が安心できる3つの約束"
            id="promises-heading"
            tone="gold"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {promises.map((item) => (
              <article key={item.no} className="gold-frame p-6 md:p-7">
                <p className="font-display text-2xl font-black tracking-tighter text-gold">
                  {item.no}
                </p>
                <h3 className="mt-4 font-serif text-lg font-bold leading-snug tracking-wide text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="revenue-heading"
        className="relative bg-background section-y"
      >
        <div className="mx-auto max-w-6xl section-pad">
          <SectionHeading
            english="REVENUE SHARE"
            japanese="収益の仕組み"
            id="revenue-heading"
          />
          <div className="mt-12 max-w-3xl">
            <p className="text-base leading-relaxed text-muted md:text-lg">
              制作会社から支払われる場所代（1回の撮影あたり数万円〜十数万円が目安）をオーナー様と分配。営業や制作会社との煩雑なスケジュール・条件交渉はすべて弊社が代行します。
            </p>
          </div>

          <h3
            id="properties-heading"
            className="mt-16 font-serif text-xl font-bold tracking-wide text-foreground md:text-2xl"
          >
            対象物件例
          </h3>
          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              "飲食店・カフェ",
              "居酒屋",
              "古民家",
              "一軒家",
              "オフィス",
              "倉庫",
              "スタジオ",
              "美容室",
            ].map((label) => (
              <li
                key={label}
                className="border border-border bg-white px-4 py-2 text-sm tracking-wide text-foreground"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="location-form"
        aria-labelledby="location-form-heading"
        className="relative scroll-mt-24 bg-surface section-y md:scroll-mt-28"
      >
        <div className="mx-auto max-w-6xl section-pad">
          <SectionHeading
            english="CONTACT"
            japanese="お問い合わせ"
            id="location-form-heading"
            tone="gold"
          />
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            「まずは話だけ聞いてみたい」「うちの店でも撮影需要があるか知りたい」——お気軽にご相談ください。
          </p>

          <div className="glass-panel mt-12 p-6 md:p-10">
            {submitted ? (
              <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="mb-4 h-10 w-10 text-gold" />
                <h3 className="font-serif text-xl font-medium tracking-wide">
                  送信を受け付けました
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                  デモのため実送信は行いません。本番環境ではメール通知へ接続できます。
                  <br />
                  担当より {companyInfo.email} よりご連絡いたします。
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
                <div className="grid gap-5 md:grid-cols-2">
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
                      店舗・物件名 <span className="text-gold">*</span>
                    </span>
                    <input
                      required
                      className="field-lux"
                      value={form.propertyName}
                      onChange={(e) =>
                        setForm((f) => ({
                          ...f,
                          propertyName: e.target.value,
                        }))
                      }
                      placeholder="〇〇カフェ"
                    />
                  </label>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block space-y-2">
                    <span className="text-[0.78rem] font-medium tracking-wide text-muted">
                      所在地 <span className="text-gold">*</span>
                    </span>
                    <input
                      required
                      className="field-lux"
                      value={form.location}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, location: e.target.value }))
                      }
                      placeholder="東京都八王子市…"
                    />
                  </label>
                  <label className="block space-y-2">
                    <span className="text-[0.78rem] font-medium tracking-wide text-muted">
                      物件種別 <span className="text-gold">*</span>
                    </span>
                    <select
                      required
                      className="field-lux"
                      value={form.propertyType}
                      onChange={(e) =>
                        setForm((f) => ({
                          ...f,
                          propertyType: e.target.value,
                        }))
                      }
                    >
                      {propertyTypes.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
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
                </div>
                <label className="block space-y-2">
                  <span className="text-[0.78rem] font-medium tracking-wide text-muted">
                    ご相談内容
                  </span>
                  <textarea
                    rows={5}
                    className={cn("field-lux", "resize-y")}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="定休日の有無、物件の特徴など、差し支えのない範囲でご記入ください。"
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
          </div>
        </div>
      </section>
    </>
  );
}
