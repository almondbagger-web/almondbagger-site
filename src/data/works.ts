export type WorkCategory = "映画" | "ドラマ・配信" | "MV・PR";

export type WorkAspect = "landscape" | "portrait";

export type Work = {
  id: string;
  title: string;
  client: string;
  category: WorkCategory;
  /** 画面表示用の担当領域・作品属性バッジ */
  tags: string[];
  /** "/works/..." またはルート画像。未設定時はシネマプレースホルダー */
  thumbnail?: string;
  year: number;
  description: string;
  aspect: WorkAspect;
  /** 公式サイト / 配信ページ */
  officialUrl?: string;
};

const t = (n: number) => `/works/work-${String(n).padStart(2, "0")}.jpg`;

/**
 * 制作実績：映画・ドラマ・配信・MV
 * Featured WATERMAN は UI 側で別カード表示。
 */
export const works: Work[] = [
  {
    id: "w-waterman",
    title: "WATERMAN",
    client: "AKBB feat. Waterman",
    category: "MV・PR",
    tags: ["制作部 / 現場統括", "ロケーション支援", "実写 ✕ AI映像制作協力"],
    thumbnail: "/mv-waterman.jpg",
    year: 2026,
    description:
      "AI ✖️ 口パク ✖️ エアーギターの最新型ロックバンド。制作部・現場統括・ロケーション支援・実写✕AI映像制作協力として参加。",
    aspect: "portrait",
    officialUrl: "https://vt.tiktok.com/ZSVx84VPA/",
  },
  {
    id: "w-jimenshi",
    title: "地面師たち",
    client: "Netflix",
    category: "ドラマ・配信",
    tags: ["Netflixオリジナル", "制作部 / 現場統括", "ロケーション支援"],
    thumbnail: t(8),
    year: 2024,
    description: "社会現象となった話題作。大規模ロケ手配および現場進行を統括支援。",
    aspect: "landscape",
    officialUrl: "https://www.netflix.com/jp/title/81574118",
  },
  {
    id: "w-tokrev",
    title: "東京リベンジャーズ",
    client: "ワーナー ブラザース ジャパン",
    category: "映画",
    tags: ["劇場公開映画", "制作部", "ロケーション統括"],
    thumbnail: t(13),
    year: 2021,
    description:
      "大ヒットコミック実写映画。アクションシーンや大規模ロケーションの現場管理を完走。",
    aspect: "landscape",
    officialUrl: "https://wwws.warnerbros.co.jp/tokyo-revengersjp/",
  },
  {
    id: "w-mitarai",
    title: "御手洗家、炎上する",
    client: "Netflix",
    category: "ドラマ・配信",
    tags: ["Netflixオリジナル", "制作部 / バックオフィス"],
    thumbnail: t(20),
    year: 2023,
    description:
      "復讐とサスペンスを描く話題のドラマシリーズ。撮影現場オペレーションを担当。",
    aspect: "landscape",
    officialUrl:
      "https://about.netflix.com/ja/news/burn-the-house-down-main-trailer-and-main-key-art-debut",
  },
  {
    id: "w-alice",
    title: "厨房のありす",
    client: "日本テレビ",
    category: "ドラマ・配信",
    tags: ["地上波連続ドラマ", "制作部 / 現場進行"],
    thumbnail: t(23),
    year: 2024,
    description: "ハートフル・ミステリードラマの現場統括・ロケーション調整。",
    aspect: "landscape",
    officialUrl: "https://www.ntv.co.jp/alice/",
  },
  {
    id: "w-mysteryday",
    title: "THE MYSTERY DAY",
    client: "日本テレビ（開局70年特別番組）",
    category: "ドラマ・配信",
    tags: ["大型特別ドラマ", "制作部 / 現場統括"],
    thumbnail: t(24),
    year: 2023,
    description:
      "豪華キャストが集結した大型ミステリー特番の現場進行・バックオフィス管理。",
    aspect: "landscape",
    officialUrl: "https://www.ntv.co.jp/mysteryday/",
  },
  {
    id: "w-kabanya",
    title: "連続ドラマW 池井戸潤スペシャル『かばん屋の相続』",
    client: "WOWOW",
    category: "ドラマ・配信",
    tags: ["WOWOWオリジナル", "制作部"],
    thumbnail: t(18),
    year: 2024,
    description:
      "池井戸潤原作の重厚なヒューマンドラマ。確かな制作部管理体制で現場を支え抜く。",
    aspect: "landscape",
    officialUrl: "https://www.wowow.co.jp/drama/original/kabanyano-souzoku/",
  },
  {
    id: "w-dareka",
    title: "誰かが、見ている",
    client: "Amazon Original",
    category: "ドラマ・配信",
    tags: ["Amazon Original", "制作部"],
    thumbnail: t(22),
    year: 2020,
    description: "三谷幸喜×香取慎吾のシチュエーションコメディ作品の制作部支援。",
    aspect: "landscape",
    officialUrl: "https://www.amazon.co.jp/dp/B08H4XGHNZ",
  },
  {
    id: "w-oujou",
    title: "往生際の意味を知れ！",
    client: "MBS / TBS ドラマイズム",
    category: "ドラマ・配信",
    tags: ["連続ドラマ", "制作部 / ロケーション"],
    thumbnail: t(19),
    year: 2023,
    description: "クレイジーで過激な恋愛やり直しラブストーリーの現場統括。",
    aspect: "landscape",
    officialUrl: "https://www.mbs.jp/oujougiwa_no_imioshire/",
  },
  {
    id: "w-soreai",
    title: "それでも愛を誓いますか？",
    client: "ABCテレビ・テレビ朝日",
    category: "ドラマ・配信",
    tags: ["地上波連続ドラマ", "制作部"],
    thumbnail: t(21),
    year: 2021,
    description: "大人の切ない恋愛・結婚生活を描いた連続ドラマの制作進行。",
    aspect: "landscape",
    officialUrl: "https://www.asahi.co.jp/soreai/",
  },
  {
    id: "w-sobakasu",
    title: "そばかす",
    client: "(NOT) HEROINE MOVIES",
    category: "映画",
    tags: ["劇場公開映画", "制作部 / ロケ支援"],
    thumbnail: t(15),
    year: 2023,
    description:
      "「(NOT) HEROINE MOVIES」プロジェクトの映画作品。丁寧なロケ地管理と現場統括。",
    aspect: "landscape",
    officialUrl: "https://notheroinemovies.com/sobakasu/",
  },
  {
    id: "w-romakira",
    title: "ロマンティック・キラー",
    client: "東宝",
    category: "映画",
    tags: ["映画 / 配信", "制作部"],
    thumbnail: t(11),
    year: 2022,
    description: "人気コミック実写化作品の現場制作支援。",
    aspect: "landscape",
    officialUrl: "https://romakira-movie.toho.co.jp/",
  },
  {
    id: "w-akogare",
    title: "憧れの作家は人間じゃありませんでした",
    client: "Prime Video",
    category: "ドラマ・配信",
    tags: ["ドラマ / 配信", "制作部 / 現場管理"],
    thumbnail: t(1),
    year: 2026,
    description: "独特な世界観を持つ話題作の制作部・現場管理を推進。",
    aspect: "landscape",
    officialUrl: "https://www.amazon.co.jp/gp/video/detail/B0GY2FX132",
  },
  {
    id: "w-shikaku",
    title: "四角の人たち",
    client: "短編映像作品",
    category: "映画",
    tags: ["短編 / 映像作品", "制作部"],
    thumbnail: t(14),
    year: 2022,
    description: "個性豊かなショートフィルム作品のロケーションおよび制作部協力。",
    aspect: "landscape",
    officialUrl: "https://373kaze.com/2022/10/27/post-22303/",
  },
];

export const workCategories: Array<"すべて" | WorkCategory> = [
  "すべて",
  "映画",
  "ドラマ・配信",
  "MV・PR",
];

export const heroSlides = [
  { id: "hs-01", image: t(2), label: "Drama" },
  { id: "hs-02", image: t(10), label: "Movie" },
  { id: "hs-03", image: t(3), label: "Streaming" },
  { id: "hs-04", image: t(9), label: "SNS" },
];

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
    id: "p-short",
    name: "縦型ショート / TikTok / Reels",
    color: "red",
    badge: "人気",
    priceLines: ["参考価格：30万円〜 / 本", "月額運用プラン：50万円〜 / 月"],
    description:
      "企画・構成・縦型撮影・テンポ編集・テロップ・音効まで。止まりにくいショートを制作します。",
    features: ["企画・構成", "縦型撮影", "テンポ編集", "テロップ", "音効"],
  },
  {
    id: "p-youtube",
    name: "YouTube動画制作",
    color: "cyan",
    badge: "成長支援",
    priceLines: ["参考価格：25万円〜 / 本"],
    description:
      "企画・台本・撮影・編集・サムネイル制作まで。継続制作にも対応します。",
    features: ["企画・台本", "撮影", "編集", "サムネイル制作"],
  },
  {
    id: "p-cm",
    name: "CM / プロモーション映像",
    color: "purple",
    badge: "オーダーメイド",
    priceLines: ["参考価格：内容・規模により個別お見積もり"],
    description:
      "企画提案・キャストオーディション・本格撮影・カラーグレーディング・MA音響まで完全オーダーメイド対応。",
    features: [
      "企画提案",
      "キャストオーディション",
      "本格撮影",
      "カラーグレーディング",
      "MA音響",
    ],
  },
];

export type StaffRate = {
  role: string;
  rate: string;
};

export const staffRates: StaffRate[] = [
  { role: "制作担当", rate: "月額 80万円〜" },
  { role: "制作主任", rate: "月額 60万円〜" },
  { role: "制作進行", rate: "月額 35万円〜" },
];

export const staffRateNote =
  "その他：制作部助手、ドライバー、ロケハン専門スタッフ等もご相談ください。";

export const priceDisclaimer =
  "※上記は標準的な参考価格です。低予算（低バジェット）案件から大規模制作までご予算に応じた柔軟なプランニングが可能です。まずはお気軽にご相談（応相談）ください。";

export const serviceCards = [
  {
    title: "映画",
    en: "MOVIE",
    body: "長編・短編の制作進行、ロケ地、許可申請まで。",
    color: "bg-rose text-white",
    accent: "#f43f5e",
  },
  {
    title: "ドラマ",
    en: "DRAMA",
    body: "連続撮影の進行管理と多拠点オペレーション。",
    color: "bg-purple text-white",
    accent: "#a855f7",
  },
  {
    title: "MV",
    en: "MUSIC VIDEO",
    body: "アーティストの世界観に合う特異ロケ地を手配。",
    color: "bg-cyan text-white",
    accent: "#06b6d4",
  },
  {
    title: "CM",
    en: "COMMERCIAL",
    body: "ブランド映像の撮影支援と車両・進行を一括対応。",
    color: "bg-lime text-white",
    accent: "#10b981",
  },
  {
    title: "YouTube",
    en: "YOUTUBE",
    body: "チャンネル運営に効く企画・撮影・編集サポート。",
    color: "bg-yellow text-foreground",
    accent: "#facc15",
  },
  {
    title: "TikTok縦型",
    en: "SHORTS",
    body: "9:16ショートを高速で量産。トレンドに即応。",
    color: "bg-pink text-white",
    accent: "#ec4899",
  },
] as const;

export const companyInfo = {
  name: "株式会社ALMONDBAGGER（アーモンドバガー）",
  shortName: "ALMONDBAGGER",
  representative: "弓田 悠太",
  postal: "〒192-0082",
  address: "東京都八王子市東町1番10号 グランデハイツ八王子801",
  founded: "令和3年（2021年）8月3日",
  business:
    "映像制作サポート事業（制作部 / 演出部 / 現場進行 / ロケーション / 許可申請 / 車両管理）、SNS・縦型ショート動画制作",
  phone: "090-8200-3640",
  phoneHref: "tel:09082003640",
  email: "almondbagger@gmail.com",
  emailHref: "mailto:almondbagger@gmail.com",
  area: "東京都・八王子市・関東圏・全国対応可（八王子FC連携）",
  partner: "八王子フィルムコミッション",
  partnerUrl: "https://www.hkc.or.jp/fc/",
  mapEmbed:
    "https://maps.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AB%E7%8E%8B%E5%AD%90%E5%B8%82%E6%9D%B1%E7%94%BA1%E7%95%AA10%E5%8F%B7&t=&z=16&ie=UTF8&iwloc=&output=embed",
} as const;

/** ナビ・フッター共通。セクション id と必ず一致させる */
export const navLinks = [
  { href: "#news", label: "NEWS" },
  { href: "#about", label: "強み" },
  { href: "#services", label: "制作部" },
  { href: "#ai", label: "AI" },
  { href: "#works", label: "実績" },
  { href: "#price", label: "料金" },
  { href: "#faq", label: "FAQ" },
  { href: "#recruit", label: "採用" },
  { href: "#company", label: "会社概要" },
  { href: "#contact", label: "お問い合わせ" },
] as const;

