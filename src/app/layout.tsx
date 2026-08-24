import type { Metadata } from "next";
import { Anton, Noto_Sans_JP, Syne } from "next/font/google";
import { companyInfo } from "@/data/works";
import "./globals.css";

const fontCinema = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cinema",
  display: "swap",
});

const fontHeroJa = Noto_Sans_JP({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-hero-ja",
  display: "swap",
});

const fontSyne = Syne({
  weight: ["700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const siteTitle =
  "ALMONDBAGGER | 八王子の映画・ドラマ制作部 × 最先端AI動画制作・フィルムコミッション連携";

const siteDescription =
  "八王子を拠点に20年の現場統括実績を持つ映画・ドラマ制作部と最先端AIクリエイティブが融合。八王子フィルムコミッション連携によるロケ支援から、中小企業向けPR動画、AI Previs・VFXまでワンストップ対応。";

const keywords = [
  "八王子 制作部",
  "映画 制作部",
  "ドラマ 制作進行",
  "八王子 フィルムコミッション",
  "八王子 動画制作",
  "八王子 映像制作",
  "AI動画 制作",
  "AI Previs",
  "AI VFX",
  "PR動画 中小企業 八王子",
  "ロケ支援 許認可",
  "SNS 縦型ショート動画",
];

export const metadata: Metadata = {
  metadataBase: new URL("https://www.almondbagger.com"),
  title: {
    default: siteTitle,
    template: `%s | ${companyInfo.shortName}`,
  },
  description: siteDescription,
  keywords,
  authors: [{ name: companyInfo.name }],
  creator: companyInfo.shortName,
  publisher: companyInfo.name,
  alternates: { canonical: "https://www.almondbagger.com/" },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/icon.png",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "ja_JP",
    siteName: companyInfo.shortName,
    url: "https://www.almondbagger.com",
    images: [
      {
        url: "/会社LOGO.png",
        width: 2400,
        height: 1792,
        alt: `${companyInfo.shortName} ロゴ`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/会社LOGO.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  appleWebApp: {
    capable: true,
    title: companyInfo.shortName,
    statusBarStyle: "default",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "@id": "https://www.almondbagger.com/#organization",
      name: companyInfo.name,
      alternateName: [
        companyInfo.shortName,
        "ALMOND BAGGER",
        "アーモンドバガー",
      ],
      description: siteDescription,
      url: "https://www.almondbagger.com",
      telephone: companyInfo.phone,
      email: companyInfo.email,
      founder: { "@type": "Person", name: "弓田 悠太" },
      foundingDate: "2021-08-03",
      address: {
        "@type": "PostalAddress",
        streetAddress: companyInfo.address.replace(/^東京都八王子市/, ""),
        addressLocality: "八王子市",
        addressRegion: "東京都",
        postalCode: companyInfo.postal.replace("〒", ""),
        addressCountry: "JP",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 35.6556,
        longitude: 139.339,
      },
      areaServed: [
        { "@type": "City", name: "八王子市" },
        { "@type": "AdministrativeArea", name: "東京都" },
        { "@type": "Country", name: "日本" },
      ],
      knowsAbout: keywords,
      slogan:
        "20年の映画・ドラマ制作部統括力 × 次世代AIパイプライン。現場の確固たる進行管理と最新技術で、映像制作を支え抜く。",
      sameAs: [companyInfo.partnerUrl],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: companyInfo.phone,
        contactType: "customer service",
        areaServed: "JP",
        availableLanguage: ["Japanese"],
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.almondbagger.com/#service-production",
      name: "映画・ドラマ制作部・バックオフィス統括",
      serviceType: "制作進行・現場統括・許認可・予算・権利処理",
      provider: { "@id": "https://www.almondbagger.com/#organization" },
      description:
        "商業映画・地上波連続ドラマ・大型CMの現場統括。ロケハン、香盤表作成、道路使用・撮影許認可、エキストラ管理、安全管理、予算配分・出演契約・権利処理までプロの規律で現場環境を構築します。",
    },
    {
      "@type": "Service",
      "@id": "https://www.almondbagger.com/#service-fc",
      name: "八王子フィルムコミッション連携・ロケーション支援",
      serviceType: "ロケーションコーディネート・許認可サポート",
      provider: { "@id": "https://www.almondbagger.com/#organization" },
      areaServed: { "@type": "City", name: "八王子市" },
      description:
        "八王子フィルムコミッション公認連携のもと、映画・ドラマ・CM・MVのロケ地選定、道路使用等の許認可、地元施設との撮影調整を制作部として支援します。",
    },
    {
      "@type": "Service",
      "@id": "https://www.almondbagger.com/#service-video",
      name: "企業向けPR・採用動画 / SNS縦型ショート制作",
      serviceType: "PR動画・採用映像・CM・SNS縦型ショート制作",
      provider: { "@id": "https://www.almondbagger.com/#organization" },
      areaServed: [
        { "@type": "City", name: "八王子市" },
        { "@type": "AdministrativeArea", name: "多摩地域" },
      ],
      description:
        "八王子・多摩エリアの中小企業・メーカー・商業施設向けに、企業PR・採用動画・SNS縦型ショート動画を企画から撮影・編集・配信までワンストップで制作します。",
    },
    {
      "@type": "Service",
      "@id": "https://www.almondbagger.com/#service-ai",
      name: "制作部直結型 AI Previs & AI VFX",
      serviceType: "AI Previs・AIバレ消し・ポスプロ最適化",
      provider: { "@id": "https://www.almondbagger.com/#organization" },
      description:
        "動く絵コンテ（AI Previs）で企画承認と現場共有を光速化。ロケ撮影の電柱・看板などのAIバレ消しにより、ポスプロコストと納期を圧縮します。",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.almondbagger.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "制作部・ロケ手配のみの依頼も可能ですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "もちろん可能です。映画・ドラマ・CM・MVなど、規模を問わずロケ地選定・許認可申請から撮影当日の現場オペレーション、バックオフィス業務まで柔軟に対応いたします。",
          },
        },
        {
          "@type": "Question",
          name: "AI PrevisやAIバレ消しは、制作部業務とどのように連携できますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "企画段階での動くコンテ作成や、ロケ撮影時にどうしても映り込んでしまう不要物のAI消去など、現場の判断とポスプロを直結させることで制作期間と予算を大幅に最適化できます。",
          },
        },
        {
          "@type": "Question",
          name: "八王子エリアでのロケ撮影やフィルムコミッションの相談は可能ですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "はい。八王子フィルムコミッション公認連携のもと、ロケ地提案、許認可申請、制作部としての現場進行まで一気通貫でサポートします。",
          },
        },
        {
          "@type": "Question",
          name: "動画制作の予算が限られている中小企業でも相談できますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "可能です。映画・ドラマ制作部の進行管理を基盤に、必要な範囲だけ制作部支援・AI Previs・PR映像制作を組み合わせ、予算規模に合わせた最適プランをご提案します。",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${fontCinema.variable} ${fontHeroJa.variable} ${fontSyne.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative min-h-full bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
