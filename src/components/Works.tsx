"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  companyInfo,
  featuredWorkIds,
  works,
} from "@/data/works";

const featuredWorks = featuredWorkIds
  .map((id) => works.find((w) => w.id === id))
  .filter((w): w is NonNullable<typeof w> => Boolean(w));

const originalMv = works.find((w) => w.id === "w-obanhurumai");

export default function Works() {
  return (
    <>
      <section
        id="works"
        className="relative scroll-mt-24 bg-background section-y md:scroll-mt-28"
      >
        <div className="mx-auto max-w-6xl section-pad">
          <div>
            <p className="text-[0.7rem] font-medium tracking-[0.24em] text-gold">
              WORKS
            </p>
            <h2 className="mt-4 font-serif text-2xl font-medium tracking-wide text-foreground md:text-3xl lg:text-4xl">
              制作実績
            </h2>
            <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
              Netflix映画、劇場公開作品、地上波・配信ドラマなど。制作部として現場を支えてきた代表的な作品です。
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredWorks.map((work, index) => (
              <motion.article
                key={work.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex h-full flex-col border border-border bg-white"
              >
                <div className="relative aspect-[2.39/1] overflow-hidden bg-surface">
                  {work.thumbnail ? (
                    <Image
                      src={work.thumbnail}
                      alt={work.title}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-end bg-gradient-to-br from-[#1a1c1e] via-[#2a2d31] to-[#3d3428] p-5">
                      <span className="font-serif text-lg tracking-wide text-white/90">
                        {work.title}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.7rem] tracking-wide text-muted">
                    <span>{work.year}</span>
                    <span className="text-border">|</span>
                    <span>{work.client}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-lg font-medium tracking-wide text-foreground">
                    {work.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
                    {work.description}
                  </p>
                  {work.officialUrl ? (
                    <a
                      href={work.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-[0.78rem] font-medium tracking-wide text-foreground transition-colors hover:text-gold-deep"
                    >
                      詳細を見る
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="products"
        className="relative scroll-mt-24 bg-surface section-y md:scroll-mt-28"
      >
        <div className="mx-auto max-w-6xl section-pad">
          <div>
            <p className="text-[0.7rem] font-medium tracking-[0.24em] text-gold">
              ORIGINAL PRODUCTS
            </p>
            <h2 className="mt-4 font-serif text-2xl font-medium tracking-wide text-foreground md:text-3xl lg:text-4xl">
              自社開発DXツール・IP
            </h2>
            <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
              現場の制作部が培った知見を、ツールと作品としてかたちにしています。
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="border border-border bg-white p-7 md:p-9"
            >
              <p className="text-[0.7rem] font-medium tracking-[0.18em] text-gold">
                DX TOOL
              </p>
              <h3 className="mt-4 font-serif text-xl font-medium tracking-wide text-foreground md:text-2xl">
                AB式ロケ地図ツクール
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-muted md:text-[0.95rem]">
                現場の制作部向けに開発したロケーション＆許認可マップツールです。ロケハン情報、控室・待機場所、道路使用許可エリアなどを地図上で整理・共有し、香盤表や台本と連動した現場準備を支えます。
              </p>
              <a
                href={companyInfo.mapToolUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-outline mt-8"
              >
                地図ツクールを開く
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.article>

            {originalMv ? (
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden border border-border bg-white"
              >
                <div className="relative aspect-[2.39/1] bg-surface">
                  {originalMv.thumbnail ? (
                    <Image
                      src={originalMv.thumbnail}
                      alt={originalMv.title}
                      fill
                      sizes="(max-width:1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  ) : null}
                </div>
                <div className="p-7 md:p-9">
                  <p className="text-[0.7rem] font-medium tracking-[0.18em] text-gold">
                    ORIGINAL IP
                  </p>
                  <h3 className="mt-4 font-serif text-xl font-medium tracking-wide text-foreground md:text-2xl">
                    {originalMv.title}
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed text-muted md:text-[0.95rem]">
                    自社プロデュースのオリジナルアニメMV。企画から映像まで一貫して制作した、ALMONDBAGGERのクリエイティブIPです。
                  </p>
                  {originalMv.officialUrl ? (
                    <a
                      href={originalMv.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold-outline mt-8"
                    >
                      YouTubeで観る
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              </motion.article>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
