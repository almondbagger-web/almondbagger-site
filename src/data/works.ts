export type WorkCategory = "Movie & Drama" | "MV & CM" | "Vertical & SNS";

export type WorkAspect = "landscape" | "portrait";

export type WorkRole =
  | "制作担当"
  | "制作主任"
  | "制作進行"
  | "制作部"
  | "制作応援"
  | "現場応援"
  | "車両管理"
  | "撮影協力"
  | "ロケ地手配"
  | "撮影支援";

export type Work = {
  id: string;
  title: string;
  client: string;
  category: WorkCategory;
  roles: WorkRole[];
  /** "/works/work-NN.jpg" または外部URL。未設定時はUIフォールバック */
  thumbnail?: string;
  year: number;
  description: string;
  aspect: WorkAspect;
  /** 公式サイト / 公式関連URL */
  officialUrl?: string;
};

const t = (n: number) => `/works/work-${String(n).padStart(2, "0")}.jpg`;

/**
 * 実績データ出典: https://almondbagger.com/?page_id=54 / ?cat=1
 * 動画埋め込みなし。サムネイル + officialUrl の外部リンク形式。
 */
export const works: Work[] = [
  {
    id: "w-01",
    title: "憧れの作家は人間じゃありませんでした",
    client: "Prime Video / ストームレーベルズ・共同テレビ",
    category: "Movie & Drama",
    roles: ["制作担当"],
    thumbnail: t(1),
    year: 2026,
    description:
      "Prime Video独占配信ドラマ。制作担当として参加。原作は澤村御影『憧れの作家は人間じゃありませんでした』（角川文庫／KADOKAWA）。",
    aspect: "landscape",
  },
  {
    id: "w-02",
    title: "晩餐ブルース Special",
    client: "テレビ東京",
    category: "Movie & Drama",
    roles: ["制作担当", "制作進行"],
    thumbnail: t(2),
    year: 2026,
    description:
      "テレビ東京『晩餐ブルース Special』に制作担当・制作進行として参加。放送後はU-NEXT / TELASA 等で配信。",
    aspect: "landscape",
    officialUrl: "https://www.tv-tokyo.co.jp/bansanblues_sp/",
  },
  {
    id: "w-03",
    title: "MAGI -天正遣欧少年使節-",
    client: "Netflix / FOD / U-NEXT",
    category: "Movie & Drama",
    roles: ["制作部"],
    thumbnail: t(3),
    year: 2025,
    description:
      "Netflix・FOD・U-NEXTで見放題配信。制作部として参加した配信作品。",
    aspect: "landscape",
    officialUrl: "https://www.magi-boys.com/index.html",
  },
  {
    id: "w-04",
    title: "浅草ラスボスおばあちゃん",
    client: "東海テレビ",
    category: "Movie & Drama",
    roles: ["制作担当", "制作主任"],
    thumbnail: t(4),
    year: 2025,
    description:
      "東海テレビドラマ。制作担当・制作主任として現場進行をサポート。",
    aspect: "landscape",
    officialUrl: "https://www.tokai-tv.com/asakusa-lastboss/",
  },
  {
    id: "w-05",
    title: "アイシー～瞬間記憶捜査・柊班～",
    client: "フジテレビ",
    category: "Movie & Drama",
    roles: ["制作担当", "制作主任"],
    thumbnail: t(5),
    year: 2025,
    description:
      "フジテレビドラマ。制作担当・制作主任として制作部体制で参加。",
    aspect: "landscape",
    officialUrl: "https://www.fujitv.co.jp/eyesee/",
  },
  {
    id: "w-06",
    title: "街並み照らすヤツら",
    client: "日本テレビ",
    category: "Movie & Drama",
    roles: ["制作担当", "制作主任"],
    thumbnail: t(6),
    year: 2025,
    description:
      "日本テレビ土曜ドラマ。制作担当・制作主任として携わった参加作品。",
    aspect: "landscape",
    officialUrl: "https://www.ntv.co.jp/machinami-ntv/story/01.html",
  },
  {
    id: "w-07",
    title: "今日からヒットマン",
    client: "テレビ朝日",
    category: "Movie & Drama",
    roles: ["制作応援"],
    thumbnail: t(7),
    year: 2025,
    description:
      "テレビ朝日金曜ナイトドラマ。制作応援として撮影現場をサポート。",
    aspect: "landscape",
    officialUrl: "https://www.tv-asahi.co.jp/hitman/story/0008/",
  },
  {
    id: "w-08",
    title: "地面師たち",
    client: "Netflix",
    category: "Movie & Drama",
    roles: ["制作担当"],
    thumbnail: t(8),
    year: 2024,
    description:
      "Netflix配信ドラマ。制作担当として参加した大規模配信作品。",
    aspect: "landscape",
  },
  {
    id: "w-09",
    title: "東京彼女 クズ男製造女子篇",
    client: "東京彼女",
    category: "Vertical & SNS",
    roles: ["現場応援"],
    thumbnail: t(9),
    year: 2024,
    description:
      "2024年4月号ドラマ企画。現場応援として参加。公式はYouTubeで各話公開。",
    aspect: "portrait",
    officialUrl: "https://www.youtube.com/watch?v=nvsvDVqyy9U",
  },
  {
    id: "w-10",
    title: "STRANGERS",
    client: "映画『STRANGERS』製作委員会",
    category: "Movie & Drama",
    roles: ["制作部"],
    thumbnail: t(10),
    year: 2024,
    description:
      "映画『STRANGERS』に制作部として参加。ロケ進行・制作オペレーションをサポート。",
    aspect: "landscape",
    officialUrl: "https://strangers1102.studio.site",
  },
  {
    id: "w-11",
    title: "ロマンティック・キラー",
    client: "映画製作委員会",
    category: "Movie & Drama",
    roles: ["制作部"],
    thumbnail: t(11),
    year: 2023,
    description:
      "公式WORKS掲載の映画参加作品。制作部・現場サポートとして携わった実績。",
    aspect: "landscape",
  },
  {
    id: "w-12",
    title: "釣られた埋蔵金",
    client: "映画製作委員会",
    category: "Movie & Drama",
    roles: ["制作部"],
    thumbnail: t(12),
    year: 2023,
    description:
      "公式WORKS掲載の映画参加作品。制作部体制での現場支援実績。",
    aspect: "landscape",
  },
  {
    id: "w-13",
    title: "東京リベンジャーズ２ 血のハロウィン編 運命／決戦",
    client: "映画製作委員会",
    category: "Movie & Drama",
    roles: ["制作部", "車両管理"],
    thumbnail: t(13),
    year: 2023,
    description:
      "大規模アクション映画の制作現場に参加。制作部としてスケジュールとオペレーションを支援。",
    aspect: "landscape",
  },
  {
    id: "w-14",
    title: "四角の中の人たち",
    client: "映画製作委員会",
    category: "Movie & Drama",
    roles: ["制作部"],
    thumbnail: t(14),
    year: 2023,
    description:
      "公式WORKS掲載の映画参加作品。制作進行・現場サポート領域で参加。",
    aspect: "landscape",
  },
  {
    id: "w-15",
    title: "そばかす",
    client: "映画製作委員会",
    category: "Movie & Drama",
    roles: ["制作部"],
    thumbnail: t(15),
    year: 2023,
    description:
      "公式WORKS掲載の映画参加作品。制作部スタッフとして現場をサポート。",
    aspect: "landscape",
  },
  {
    id: "w-16",
    title: "COLD BLOOD 三つ巴の抗争",
    client: "映画製作委員会",
    category: "Movie & Drama",
    roles: ["制作部"],
    thumbnail: t(16),
    year: 2022,
    description:
      "公式WORKS掲載の映画参加作品（シリーズ）。制作部として参加。",
    aspect: "landscape",
  },
  {
    id: "w-17",
    title: "COLD BLOOD 三つ巴の抗争２",
    client: "映画製作委員会",
    category: "Movie & Drama",
    roles: ["制作部"],
    thumbnail: t(17),
    year: 2023,
    description:
      "公式WORKS掲載の映画参加作品（続編）。制作部として現場を支援。",
    aspect: "landscape",
  },
  {
    id: "w-18",
    title: "池井戸潤スペシャル「かばん屋の相続」",
    client: "WOWOW",
    category: "Movie & Drama",
    roles: ["制作部"],
    thumbnail: t(18),
    year: 2024,
    description:
      "WOWOWスペシャルドラマ。制作部・現場サポートとして参加した実績。",
    aspect: "landscape",
  },
  {
    id: "w-19",
    title: "往生際の意味を知れ",
    client: "MBS",
    category: "Movie & Drama",
    roles: ["制作部"],
    thumbnail: t(19),
    year: 2023,
    description: "MBSドラマ。公式WORKS掲載の制作部参加作品。",
    aspect: "landscape",
  },
  {
    id: "w-20",
    title: "御手洗家、炎上する",
    client: "Netflix",
    category: "Movie & Drama",
    roles: ["制作部"],
    thumbnail: t(20),
    year: 2023,
    description: "Netflix配信ドラマ。制作部として参加した配信作品。",
    aspect: "landscape",
  },
  {
    id: "w-21",
    title: "それでも愛を誓いますか？",
    client: "ABCテレビ",
    category: "Movie & Drama",
    roles: ["制作部"],
    thumbnail: t(21),
    year: 2023,
    description: "ABCドラマ。公式WORKS掲載の制作部参加作品。",
    aspect: "landscape",
  },
  {
    id: "w-22",
    title: "誰かが、見ている",
    client: "Amazon Prime Video",
    category: "Movie & Drama",
    roles: ["制作部"],
    thumbnail: t(22),
    year: 2023,
    description:
      "Amazonプライム配信ドラマ。制作部として現場サポートに参加。",
    aspect: "landscape",
  },
  {
    id: "w-23",
    title: "厨房のありす",
    client: "日本テレビ",
    category: "Movie & Drama",
    roles: ["制作部"],
    thumbnail: t(23),
    year: 2024,
    description: "日本テレビドラマ。公式WORKS掲載の制作部参加作品。",
    aspect: "landscape",
  },
  {
    id: "w-24",
    title: "THE MYSTERY DAY",
    client: "日本テレビ（開局70年特別番組）",
    category: "Movie & Drama",
    roles: ["制作部"],
    thumbnail: t(24),
    year: 2023,
    description:
      "日本テレビ開局70年特別番組。制作部として番組制作現場をサポート。",
    aspect: "landscape",
  },
  {
    id: "w-25",
    title: "３年VR組",
    client: "関西テレビ",
    category: "Movie & Drama",
    roles: ["制作部"],
    thumbnail: t(25),
    year: 2023,
    description: "関西テレビドラマ。公式WORKS掲載の制作部参加作品。",
    aspect: "landscape",
  },
];

export const workCategories: Array<"すべて" | WorkCategory> = [
  "すべて",
  "Movie & Drama",
  "MV & CM",
  "Vertical & SNS",
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

