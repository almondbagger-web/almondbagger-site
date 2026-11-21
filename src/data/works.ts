export type WorkCategory = "映画" | "ドラマ・配信" | "MV・オリジナルIP";

export type WorkAspect = "landscape" | "portrait";

export type Work = {
  id: string;
  title: string;
  client: string;
  category: WorkCategory;
  tags: string[];
  thumbnail?: string;
  year: number;
  /** YYYYMMDD。新しい順ソート用 */
  sortKey: number;
  /** 画面表示用の公開・配信時期 */
  periodLabel: string;
  description: string;
  aspect: WorkAspect;
  officialUrl?: string;
  ctaLabel?: string;
  secondaryUrl?: string;
  secondaryCtaLabel?: string;
  credit?: string;
  roleCredit: string;
};

/**
 * 制作実績：公開・配信の新しい順（2026→2020）
 * 日付は公式情報に準拠
 */
export const works: Work[] = [
  {
    id: "w-bl-drama",
    title: "BLドラマに女はいらない",
    client: "FOD（フジテレビ）",
    category: "ドラマ・配信",
    tags: ["FOD SHORT", "縦型ショートドラマ"],
    year: 2026,
    sortKey: 20260710,
    periodLabel: "2026年7月10日配信",
    description:
      "FOD縦型ショートドラマ。制作部・現場進行として撮影オペレーションを担当。",
    aspect: "portrait",
    officialUrl: "https://short.fod.fujitv.co.jp/s80af/",
    roleCredit: "制作部・現場進行",
  },
  {
    id: "w-luvntcom",
    title: "ラブ≠コメディ",
    client: "Storm Labels",
    category: "映画",
    tags: ["劇場公開映画", "Storm Labels配給"],
    year: 2026,
    sortKey: 20260703,
    periodLabel: "2026年7月3日公開",
    description:
      "Storm Labels配給の劇場公開映画。制作部・現場統括・ロケーション管理を担当。",
    aspect: "landscape",
    officialUrl: "https://movie.storm-labels.co.jp/s/luvntcom/",
    roleCredit: "制作部・現場統括・ロケーション管理",
  },
  {
    id: "w-jikihai",
    title: "ジキ／ハイ～愛した男には別の顔があった～",
    client: "FOD（フジテレビ）",
    category: "ドラマ・配信",
    tags: ["FOD SHORT", "縦型ショートドラマ"],
    year: 2026,
    sortKey: 20260615,
    periodLabel: "2026年配信",
    description:
      "FOD縦型ショートドラマ。制作部・現場進行として撮影を支えた。",
    aspect: "portrait",
    officialUrl: "https://short.fod.fujitv.co.jp/s17xo/",
    roleCredit: "制作部・現場進行",
  },
  {
    id: "w-soulmate",
    title: "ソウルメイト",
    client: "Netflix",
    category: "ドラマ・配信",
    tags: ["Netflixシリーズ", "世界独占配信"],
    year: 2026,
    sortKey: 20260514,
    periodLabel: "2026年5月14日世界独占配信",
    description:
      "Netflixシリーズ。制作部・クラフト部門として撮影現場に参加。",
    aspect: "landscape",
    officialUrl: "https://about.netflix.com/ja/news/soulmate-main-trailer",
    ctaLabel: "公式サイト / 配信で観る",
    roleCredit: "制作部・クラフト部門参加",
  },
  {
    id: "w-obanhurumai",
    title: "いいねの大盤振る舞い",
    client: "YUMITA / ALMONDBAGGER",
    category: "MV・オリジナルIP",
    tags: ["自社フラッグシップIP", "オリジナルアニメMV"],
    thumbnail: "/mv-obanhurumai.jpg",
    year: 2026,
    sortKey: 20260510,
    periodLabel: "2026年公開",
    description:
      "自社フラッグシップのオリジナルアニメMV。企画から映像まで一貫制作。",
    aspect: "landscape",
    officialUrl: "https://youtu.be/D2lvekhImOI",
    ctaLabel: "YouTubeで本編を観る",
    credit: "企画・作詞・作曲・アニメーション制作：YUMITA",
    roleCredit: "企画・作詞・作曲・アニメーション制作：YUMITA",
  },
  {
    id: "w-aimote",
    title: "aiを持て",
    client: "AKBB",
    category: "MV・オリジナルIP",
    tags: ["MV", "制作部協力"],
    thumbnail: "/mv-aimote.jpg",
    year: 2026,
    sortKey: 20260505,
    periodLabel: "2026年公開",
    description: "AKBBのミュージックビデオ。制作部協力として参加。",
    aspect: "portrait",
    officialUrl: "https://youtu.be/3TjVEUCimZs",
    ctaLabel: "YouTubeで観る",
    secondaryUrl:
      "https://www.tiktok.com/@akbb.a.i.kuchipak?is_from_webapp=1&sender_device=pc",
    secondaryCtaLabel: "公式TikTokへ",
    roleCredit: "制作部協力",
  },
  {
    id: "w-waterman",
    title: "WATERMAN",
    client: "AKBB feat. Waterman",
    category: "MV・オリジナルIP",
    tags: ["MV", "実写×AI"],
    thumbnail: "/mv-waterman.jpg",
    year: 2026,
    sortKey: 20260501,
    periodLabel: "2026年公開",
    description:
      "制作部・現場統括・ロケーション支援・実写×AI映像制作協力として参加。",
    aspect: "portrait",
    officialUrl: "https://vt.tiktok.com/ZSVx84VPA/",
    ctaLabel: "TikTokで観る",
    roleCredit: "制作部・現場統括・ロケーション支援・実写×AI映像制作協力",
  },
  {
    id: "w-jimenshi",
    title: "地面師たち",
    client: "Netflix",
    category: "ドラマ・配信",
    tags: ["Netflixシリーズ"],
    year: 2024,
    sortKey: 20240701,
    periodLabel: "2024年配信",
    description: "大規模ロケ手配および撮影現場進行を統括。",
    aspect: "landscape",
    officialUrl: "https://www.netflix.com/jp/title/81574118",
    roleCredit: "制作部・現場統括・ロケーション支援",
  },
  {
    id: "w-alice",
    title: "厨房のありす",
    client: "日本テレビ",
    category: "ドラマ・配信",
    tags: ["日曜ドラマ", "地上波連続ドラマ"],
    year: 2024,
    sortKey: 20240401,
    periodLabel: "2024年放送",
    description: "日本テレビ系日曜ドラマ。制作部・現場進行を担当。",
    aspect: "landscape",
    officialUrl: "https://www.ntv.co.jp/alice/",
    roleCredit: "制作部・現場進行",
  },
  {
    id: "w-mysteryday",
    title: "THE MYSTERY DAY",
    client: "日本テレビ",
    category: "ドラマ・配信",
    tags: ["開局70年特別番組"],
    year: 2023,
    sortKey: 20231201,
    periodLabel: "2023年放送",
    description: "開局70年特別番組の制作部・現場統括を担当。",
    aspect: "landscape",
    officialUrl: "https://www.ntv.co.jp/mysteryday/",
    roleCredit: "制作部・現場統括",
  },
  {
    id: "w-mitarai",
    title: "御手洗家、炎上する",
    client: "Netflix",
    category: "ドラマ・配信",
    tags: ["Netflixシリーズ"],
    year: 2023,
    sortKey: 20230701,
    periodLabel: "2023年配信",
    description: "Netflixシリーズの制作部・バックオフィスを担当。",
    aspect: "landscape",
    officialUrl:
      "https://about.netflix.com/ja/news/burn-the-house-down-main-trailer-and-main-key-art-debut",
    roleCredit: "制作部・バックオフィス",
  },
  {
    id: "w-oujou",
    title: "往生際の意味を知れ！",
    client: "MBS / TBS ドラマイズム",
    category: "ドラマ・配信",
    tags: ["ドラマイズム", "地上波連続ドラマ"],
    year: 2023,
    sortKey: 20230401,
    periodLabel: "2023年放送",
    description: "MBS・TBSドラマイズム作品の制作部・ロケーションを担当。",
    aspect: "landscape",
    officialUrl: "https://www.mbs.jp/oujougiwa_no_imioshire/",
    roleCredit: "制作部・ロケーション",
  },
  {
    id: "w-akogare",
    title: "憧れの作家は人間じゃありませんでした",
    client: "配信ドラマ",
    category: "ドラマ・配信",
    tags: ["配信ドラマ"],
    year: 2023,
    sortKey: 20230101,
    periodLabel: "2023年配信",
    description: "配信ドラマの制作部・現場管理を担当。",
    aspect: "landscape",
    officialUrl: "https://www.amazon.co.jp/gp/video/detail/B0GY2FX132",
    roleCredit: "制作部・現場管理",
  },
  {
    id: "w-sobakasu",
    title: "そばかす",
    client: "(NOT) HEROINE MOVIES",
    category: "映画",
    tags: ["劇場公開映画"],
    year: 2022,
    sortKey: 20220601,
    periodLabel: "2022年公開",
    description: "劇場公開映画の制作部・ロケ支援を担当。",
    aspect: "landscape",
    officialUrl: "https://notheroinemovies.com/sobakasu/",
    roleCredit: "制作部・ロケ支援",
  },
  {
    id: "w-romakira",
    title: "ロマンティック・キラー",
    client: "Netflix / 東宝",
    category: "ドラマ・配信",
    tags: ["Netflixシリーズ"],
    year: 2022,
    sortKey: 20220101,
    periodLabel: "2022年配信",
    description: "Netflix配信作品の制作部として参加。",
    aspect: "landscape",
    officialUrl: "https://romakira-movie.toho.co.jp/",
    roleCredit: "制作部",
  },
  {
    id: "w-shikaku",
    title: "四角の人たち",
    client: "短編映画",
    category: "映画",
    tags: ["短編映画"],
    year: 2022,
    sortKey: 20221001,
    periodLabel: "2022年公開",
    description: "短編映画の制作部・ロケ協力を担当。",
    aspect: "landscape",
    officialUrl: "https://373kaze.com/2022/10/27/post-22303/",
    roleCredit: "制作部・ロケ協力",
  },
  {
    id: "w-tokrev",
    title: "東京リベンジャーズ",
    client: "ワーナー ブラザース ジャパン",
    category: "映画",
    tags: ["劇場公開映画"],
    year: 2021,
    sortKey: 20210701,
    periodLabel: "2021年公開",
    description: "劇場公開映画の制作部・ロケ統括を担当。",
    aspect: "landscape",
    officialUrl: "https://wwws.warnerbros.co.jp/tokyo-revengersjp/",
    roleCredit: "制作部・ロケ統括",
  },
  {
    id: "w-kabanya",
    title: "連続ドラマW 池井戸潤スペシャル『かばん屋の相続』",
    client: "WOWOW",
    category: "ドラマ・配信",
    tags: ["WOWOWオリジナル"],
    year: 2021,
    sortKey: 20211201,
    periodLabel: "2021年放送",
    description: "WOWOW連続ドラマWの制作部として参加。",
    aspect: "landscape",
    officialUrl: "https://www.wowow.co.jp/drama/original/kabanyano-souzoku/",
    roleCredit: "制作部",
  },
  {
    id: "w-soreai",
    title: "それでも愛を誓いますか？",
    client: "ABCテレビ・テレビ朝日",
    category: "ドラマ・配信",
    tags: ["地上波連続ドラマ"],
    year: 2021,
    sortKey: 20210401,
    periodLabel: "2021年放送",
    description: "地上波連続ドラマの制作部として参加。",
    aspect: "landscape",
    officialUrl: "https://www.asahi.co.jp/soreai/",
    roleCredit: "制作部",
  },
  {
    id: "w-dareka",
    title: "誰かが、見ている",
    client: "Amazon Original",
    category: "ドラマ・配信",
    tags: ["Amazon Prime Video"],
    year: 2020,
    sortKey: 20200901,
    periodLabel: "2020年配信",
    description: "Amazon Originalドラマの制作部として参加。",
    aspect: "landscape",
    officialUrl: "https://www.amazon.co.jp/dp/B08H4XGHNZ",
    roleCredit: "制作部",
  },
];

/** 新しい順にソート済み配列を返す */
export function getWorksSorted(): Work[] {
  return [...works].sort((a, b) => b.sortKey - a.sortKey);
}

export const workCategories: Array<"すべて" | WorkCategory> = [
  "すべて",
  "映画",
  "ドラマ・配信",
  "MV・オリジナルIP",
];

export const companyInfo = {
  name: "株式会社ALMONDBAGGER",
  shortName: "ALMONDBAGGER",
  representative: "代表取締役 弓田 悠太",
  postal: "〒192-0082",
  address: "東京都八王子市東町1-10 グランデハイツ八王子801",
  founded: "令和3年（2021年）8月3日",
  business:
    "映画・ドラマ・CM・企業映像の制作及び制作部統括、ロケーションコーディネート、AI映像技術開発・DXツール運営",
  phone: "090-8200-3640",
  phoneHref: "tel:09082003640",
  email: "almondbagger@gmail.com",
  emailHref: "mailto:almondbagger@gmail.com",
  area: "東京都・八王子市・関東圏・全国対応可",
  partner: "八王子フィルムコミッション公認連携",
  partnerUrl: "https://www.hkc.or.jp/fc/",
  mapToolUrl: "https://map.almondbagger.com/",
  mapEmbed:
    "https://maps.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AB%E7%8E%8B%E5%AD%90%E5%B8%82%E6%9D%B1%E7%94%BA1%E7%95%AA10%E5%8F%B7&t=&z=16&ie=UTF8&iwloc=&output=embed",
} as const;

export const navLinks = [
  { href: "#services", label: "事業領域" },
  { href: "#works", label: "制作実績" },
  { href: "#faq", label: "FAQ" },
  { href: "#company", label: "会社概要" },
] as const;

export const servicePillars = [
  {
    id: "producers",
    audience: "映画・ドラマ・配信作品のプロデューサー様へ",
    title: "商業映画・連続ドラマ制作部 ＆ バックオフィス統括",
    points: [
      "現場統括20年超の制作部体制",
      "ロケハン・香盤管理",
      "道路使用許可・各種許認可申請",
      "予算・権利管理",
      "八王子フィルムコミッション公認連携",
    ],
    href: "#contact",
    cta: "制作部のご相談",
    tone: "cinema" as const,
  },
  {
    id: "corporate",
    audience: "企業・自治体・広告主様へ",
    title: "次世代映像制作パッケージ",
    points: [
      "オープンゲート撮影による横型16:9＋縦型9:16同時納品",
      "DJIプロ仕様ドローン空撮",
      "AI Previs（動く絵コンテ）",
      "AI VFXバレ消しによるポスプロ短縮",
    ],
    href: "#contact",
    cta: "企業映像のご相談",
    tone: "light" as const,
  },
  {
    id: "creators",
    audience: "制作現場・クリエイター様へ",
    title: "プロダクションDX『AB式ロケ地図ツクール』",
    points: [
      "ロケハン・控室・待機・許可エリアを地図上で共有",
      "香盤表・台本と連動した現場準備",
      "制作部が現場知をもとに開発・運営",
    ],
    href: "https://map.almondbagger.com/",
    cta: "地図ツクールを開く",
    external: true,
    tone: "light" as const,
  },
] as const;

/** 旧料金ページ互換（トップでは非表示） */
export const priceDisclaimer =
  "ご予算・規模に応じて個別にお見積もりいたします。まずはお気軽にご相談ください。";

export type PricePlan = {
  id: string;
  name: string;
  color: "red" | "pink" | "cyan" | "purple" | "lime";
  badge?: string;
  priceLines: string[];
  description: string;
  features: string[];
};

export const pricePlans: PricePlan[] = [
  {
    id: "p-consult",
    name: "制作部・映像制作のご相談",
    color: "cyan",
    priceLines: ["内容・規模により個別お見積もり"],
    description:
      "制作部統括、企業映像、オープンゲート縦横同時制作など、案件に合わせてご提案します。",
    features: ["ヒアリング", "体制提案", "お見積もり"],
  },
];

export const staffRates = [
  { role: "制作担当", rate: "月額応相談" },
  { role: "制作主任", rate: "月額応相談" },
  { role: "制作進行", rate: "月額応相談" },
];

export const staffRateNote =
  "体制・期間に応じてご相談ください。";

export const faqItems = [
  {
    question: "映画・ドラマの制作部やロケ手配のみ依頼できますか？",
    answer:
      "はい。商業映画・地上波ドラマ・配信作品など、制作部統括・ロケハン・許認可・現場進行のみのご依頼にも対応します。規模に応じて柔軟に編成します。",
  },
  {
    question: "企業向けに横動画と縦型ショート動画を同時に制作できますか？",
    answer:
      "可能です。オープンゲート撮影により、フルサイズセンサー全面記録から Web・YouTube用16:9 と TikTok・Reels用9:16 を同時生成。現場拘束時間と再撮コストの圧縮につなげます。",
  },
  {
    question: "AIを使った映像制作やバレ消しに対応していますか？",
    answer:
      "対応しています。動く絵コンテ（AI Previs）による合意形成の高速化と、ロケ映り込みのAIバレ消し（AI VFX）によるポスプロ圧縮を、制作部の進行管理と直結して提供します。",
  },
  {
    question: "八王子エリアでのロケやフィルムコミッション連携は可能ですか？",
    answer:
      "はい。八王子フィルムコミッション公認連携のもと、ロケ地選定から許認可申請、地元施設との撮影調整まで制作部として支援します。",
  },
  {
    question: "AB式ロケ地図ツクールとは何ですか？",
    answer:
      "現場の制作部が開発したロケーション＆許認可マップツールです。ロケハン情報・控室・待機場所・道路使用許可エリアを地図上で共有し、香盤表・台本と連動した現場準備を支えます。",
  },
] as const;
