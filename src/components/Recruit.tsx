"use client";

import { BarChart3, Clapperboard, Film, Mail, MessageCircle } from "lucide-react";
import { GeometricGridLayer } from "@/components/VelocityVisuals";
import { Bounce, Reveal } from "@/components/Motion";
import { companyInfo } from "@/data/works";
import { cn } from "@/lib/utils";

const roles = [
  {
    icon: Film,
    title: "制作部スタッフ",
    subtitle: "映画・ドラマ現場進行（八王子・都内）",
    body: "八王子・都内を拠点に、香盤表作成からロケ進行・安全管理まで制作部として現場を支えます。未経験からでもプロの規律を学べる環境です。",
    chip: "tag-chip--red",
    status: "Open",
    theme: "theme-card--red",
  },
  {
    icon: Clapperboard,
    title: "映像クリエイター",
    subtitle: "撮影・編集・動画プロデュース",
    body: "地場企業のPR・採用動画からショートまで、企画意図を映像に落とし込み撮影・編集を担当。クオリティと納期を両立する中核ポジションです。",
    chip: "tag-chip--cyan",
    status: "Hiring",
    theme: "theme-card--cyan",
  },
  {
    icon: BarChart3,
    title: "AIプロンプトエンジニア",
    subtitle: "生成AI映像・ビジュアル制作",
    body: "最新の画像・動画生成AIを活用し、低コスト・短納期のビジュアル表現を担当。プロンプト設計と映像クオリティの両立を追求します。",
    chip: "tag-chip--purple",
    status: "Welcome",
    theme: "theme-card--purple",
  },
] as const;

const points = [
  {
    label: "未経験歓迎",
    body: "人柄と熱意を大切に選考します。映像やSNSに興味があり、学びながら成長したい方を歓迎します。",
  },
  {
    label: "普通自動車免許",
    body: "お持ちの方は優遇します。お持ちでない場合も、応募いただけます。",
  },
  {
    label: "給与・勤務時間",
    body: "ご本人のご希望や経験、ライフスタイルに合わせて面談時に誠実にご相談の上、決定いたします。",
  },
] as const;

const recruitMail = `${companyInfo.emailHref}?subject=${encodeURIComponent("【採用応募】カジュアル面談")}&body=${encodeURIComponent("お名前：\n希望職種：\n一言：\n")}`;

export default function Recruit() {
  return (
    <section
      id="recruit"
      className="relative scroll-mt-24 overflow-hidden bg-surface/55 section-y"
    >
      <GeometricGridLayer className="opacity-45" />
      <div className="relative z-10 mx-auto max-w-6xl section-pad">
        <Reveal direction="left">
          <span className="lux-badge">Recruit · 八王子 / 都内</span>
          <h2 className="mt-5 max-w-3xl font-display text-2xl font-bold leading-snug tracking-tight md:text-4xl">
            八王子・都内拠点で、
            <span className="mesh-text">制作部・映像・AI</span>
            の仲間を募集
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            制作部スタッフ、映像クリエイター、AIプロンプトエンジニアを募集しています。未経験歓迎、普通免許優遇。給与・勤務条件は面談で柔軟にすり合わせます。
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {roles.map((r, i) => (
            <Reveal key={r.title} delay={0.05 + i * 0.05} direction="left">
              <article
                className={cn(
                  "lux-card card-lift geo-frame flex h-full flex-col p-6 md:p-7",
                  r.theme,
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="theme-icon">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <span className={cn("tag-chip", r.chip)}>{r.status}</span>
                </div>
                <h3 className="mt-5 text-base font-semibold">{r.title}</h3>
                <p className="mt-1 text-xs font-medium text-brand">{r.subtitle}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{r.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} direction="left" className="mt-10">
          <div className="lux-card geo-frame glow-ring border border-brand/15 p-6 md:p-9">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-semibold">応募要件・条件</h3>
              <span className="tag-chip tag-chip--red">誠実にすり合わせ</span>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {points.map((p) => (
                <div key={p.label}>
                  <p className="text-sm font-semibold text-brand">{p.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12} direction="left" className="mt-8">
          <div className="lux-card flex flex-col items-start gap-5 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <p className="eyebrow">カジュアル面談</p>
              <p className="mt-2 text-lg font-semibold">
                まずはお気軽にご連絡ください
              </p>
              <p className="mt-1 text-sm text-muted">
                履歴書不要。お問い合わせフォームまたはメールで受け付けています。
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Bounce>
                <a href="#contact" className="btn-primary">
                  <MessageCircle className="h-4 w-4" />
                  お問い合わせ
                </a>
              </Bounce>
              <Bounce>
                <a href={recruitMail} className="btn-secondary">
                  <Mail className="h-4 w-4" />
                  メールで応募
                </a>
              </Bounce>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
