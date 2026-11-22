"use client";

import { type FormEvent, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CosmicGoldParticles from "@/components/CosmicGoldParticles";
import { companyInfo } from "@/data/works";
import { cn } from "@/lib/utils";

const reasons = [
  {
    no: "01",
    title: "第一線の現場経験",
    body: "商業映画・Netflix・地上波ドラマの第一線の現場を経験できる。",
  },
  {
    no: "02",
    title: "自社DX × AIで効率化",
    body: "自社開発DXツール（『AB式ロケ地図ツクール』『YUMI-CHA』）やAI Previsを導入し、旧態依然としたアナログ業務を徹底効率化。",
  },
  {
    no: "03",
    title: "幅広いキャリアパス",
    body: "制作部からAIクリエイティブ・IPプロデュースまで幅広いキャリアパス。",
  },
] as const;

const positions = [
  {
    id: "production",
    title: "制作部スタッフ（現場進行・ロケーションコーディネート）",
    duties:
      "映画・ドラマ・配信作品・CM・企業映像のロケハン、撮影許可申請（道路使用・警察・自治体協議）、香盤管理、撮影現場の統括進行、ロケ地オーナー様との調整業務。",
    profile:
      "映画・ドラマ制作に興味がある方、周囲と円滑にコミュニケーションが取れる方（未経験・アシスタント志望も歓迎／普通自動車免許あれば尚可）。",
  },
  {
    id: "manager",
    title: "マネージャー（クリエイター・アーティスト・IPマネジメント）",
    duties:
      "所属アーティスト・AIクリエイター・タレント（AKBB・YUMITA等）のスケジュール管理、クライアント窓口・営業推進、SNS（YouTube/TikTok）プロモーション企画、タイアップ案件の進行管理。",
    profile:
      "エンタメ・SNSトレンドへの感度が高い方、クリエイターの魅力を世の中に広めるプロデュース意欲のある方（芸能マネージャーや広告・SNS運用経験者優遇）。",
  },
] as const;

const roleOptions = [
  "制作部スタッフ",
  "マネージャー",
  "カジュアル面談希望",
] as const;

type FormState = {
  name: string;
  email: string;
  phone: string;
  role: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  role: "制作部スタッフ",
  message: "",
};

export default function RecruitContent() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 cosmic-sunrise text-white">
        <div className="pointer-events-none absolute inset-0 cosmic-rays opacity-70" aria-hidden />
        <div className="pointer-events-none absolute inset-0 tech-grid-dark opacity-35" />
        <CosmicGoldParticles intensity="hero" />
        <div className="relative z-[2] mx-auto max-w-6xl section-pad py-20 md:py-28">
          <p className="font-display text-[0.7rem] font-extrabold tracking-[0.2em] text-gold">
            RECRUIT
          </p>
          <h1 className="mt-6 max-w-4xl font-serif text-[clamp(1.75rem,4.5vw,3rem)] font-bold leading-[1.35] tracking-wide">
            現場の熱量と、テクノロジーの力で、
            <br className="hidden sm:block" />
            映像制作の未来をつくる。
          </h1>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            20年の映画・ドラマ制作部の規律 × 最先端AI・DXツール。次世代クリエイティブプロダクションで、あなたのキャリアを広げませんか。
          </p>
          <a href="#recruit-form" className="btn-on-dark mt-10 inline-flex">
            応募・面談を申し込む
          </a>
        </div>
      </section>

      <section
        aria-labelledby="reasons-heading"
        className="relative bg-surface section-y"
      >
        <div className="mx-auto max-w-6xl section-pad">
          <SectionHeading
            english="WHY US"
            japanese="私たちが選ばれる理由"
            id="reasons-heading"
            tone="gold"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reasons.map((item) => (
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
        aria-labelledby="positions-heading"
        className="relative bg-background section-y"
      >
        <div className="mx-auto max-w-6xl section-pad">
          <SectionHeading
            english="OPEN POSITIONS"
            japanese="募集職種"
            id="positions-heading"
          />
          <div className="mt-12 space-y-8">
            {positions.map((pos) => (
              <article key={pos.id} className="gold-frame overflow-hidden">
                <div className="border-b border-slate-300/70 bg-white/80 px-6 py-5 md:px-8 backdrop-blur-sm">
                  <p className="font-display text-[0.65rem] font-extrabold tracking-[0.16em] text-gold">
                    POSITION
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-bold tracking-wide text-foreground md:text-2xl">
                    {pos.title}
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[32rem] text-left text-sm">
                    <tbody>
                      <tr className="border-b border-border">
                        <th className="w-[8.5rem] bg-surface/80 px-6 py-4 font-medium tracking-wide text-muted md:w-40 md:px-8">
                          業務内容
                        </th>
                        <td className="px-6 py-4 leading-relaxed text-foreground md:px-8">
                          {pos.duties}
                        </td>
                      </tr>
                      <tr>
                        <th className="bg-surface/80 px-6 py-4 font-medium tracking-wide text-muted md:px-8">
                          求める人物像
                        </th>
                        <td className="px-6 py-4 leading-relaxed text-foreground md:px-8">
                          {pos.profile}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 max-w-3xl border-l-2 border-gold pl-6">
            <h3 className="font-serif text-lg font-bold tracking-wide text-foreground">
              勤務地・待遇
            </h3>
            <dl className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <div>
                <dt className="font-medium text-foreground">勤務地</dt>
                <dd className="mt-1">
                  {companyInfo.postal} {companyInfo.address}
                  （各撮影現場・リモート併用相談可）
                </dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">会社</dt>
                <dd className="mt-1">
                  {companyInfo.name}／{companyInfo.representative}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section
        id="recruit-form"
        aria-labelledby="recruit-form-heading"
        className="relative scroll-mt-24 bg-surface section-y md:scroll-mt-28"
      >
        <div className="mx-auto max-w-6xl section-pad">
          <SectionHeading
            english="APPLY"
            japanese="応募・カジュアル面談"
            id="recruit-form-heading"
            tone="gold"
          />
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            まずは話を聞いてみたい方も歓迎です。希望職種を選択のうえ、お気軽にご応募ください。
          </p>

          <div className="glass-panel mt-12 p-6 md:p-10">
            {submitted ? (
              <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="mb-4 h-10 w-10 text-gold" />
                <h3 className="font-serif text-xl font-medium tracking-wide">
                  応募を受け付けました
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
                      希望職種 <span className="text-gold">*</span>
                    </span>
                    <select
                      required
                      className="field-lux"
                      value={form.role}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, role: e.target.value }))
                      }
                    >
                      {roleOptions.map((opt) => (
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
                    自己PR・ご質問など
                  </span>
                  <textarea
                    rows={6}
                    className={cn("field-lux", "resize-y")}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="経歴の概要、興味のある領域、質問など、差し支えのない範囲でご記入ください。"
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
