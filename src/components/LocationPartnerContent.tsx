import SectionHeading from "@/components/SectionHeading";
import CosmicGoldParticles from "@/components/CosmicGoldParticles";
import LocationShowcaseBoard from "@/components/LocationShowcaseBoard";
import LocationOwnerSubmitForm from "@/components/LocationOwnerSubmitForm";
import LocationShootInquiryForm from "@/components/LocationShootInquiryForm";

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

export default function LocationPartnerContent() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 cosmic-sunrise text-white">
        <div className="pointer-events-none absolute inset-0 cosmic-rays opacity-70" aria-hidden />
        <div className="pointer-events-none absolute inset-0 tech-grid-dark opacity-35" />
        <CosmicGoldParticles intensity="hero" />
        <div className="relative z-[2] mx-auto max-w-6xl section-pad py-20 md:py-28">
          <p className="font-display text-[0.7rem] font-extrabold tracking-[0.2em] text-gold">
            LOCATION PARTNER
          </p>
          <h1 className="mt-6 max-w-4xl font-serif text-[clamp(1.75rem,4.5vw,3rem)] font-bold leading-[1.35] tracking-wide">
            貴店の定休日・営業時間外が、
            <br className="hidden sm:block" />
            ドラマや映画の舞台になる。
          </h1>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            地上波ドラマ・CM・Netflix・Amazon Prime Video等の制作会社へ直接ご提案。初期費用0円・本業優先・万全の養生と保険体制で、新たな副収入とお店のブランディングを実現します。個人情報は公開せず、事務局が一括仲介します。
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#location-showcase" className="btn-on-dark inline-flex">
              提携ロケ地を見る
            </a>
            <a href="#location-submit" className="btn-on-dark-outline inline-flex">
              物件を投稿する
            </a>
          </div>
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
              制作会社から支払われる場所代（1回の撮影あたり数万円〜十数万円が目安）をオーナー様と分配。営業や制作会社との煩雑なスケジュール・条件交渉はすべて弊社が代行します。公開掲示板でも連絡先は非公開のため、中抜きを防ぎます。
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
                className="border border-slate-300/70 bg-white/75 px-4 py-2 text-sm tracking-wide text-foreground backdrop-blur-sm"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LocationShowcaseBoard />
      <LocationOwnerSubmitForm />
      <LocationShootInquiryForm />
    </>
  );
}
