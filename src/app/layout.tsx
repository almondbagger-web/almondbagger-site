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
  "ALMOND BAGGER | 八王子のロケーション特化型制作プロダクション・完全現場主義・AI映像";

const siteDescription =
  "20年の現場統括力 × 八王子ロケーション × 次世代AIパイプライン。固定スタジオを持たない機動型制作プロダクションとして、スタジオ維持費を上乗せせず映像品質へ予算を集中。八王子フィルムコミッション連携の完全現場主義と、実写ロケ×3D空間キャプチャ×AI合成で、あらゆる現場と先端テクノロジーを統合します。";

const keywords = [
  "八王子 フィルムコミッション",
  "八王子 ロケ",
  "八王子 動画制作",
  "八王子 映像制作",
  "ロケーション特化 映像制作",
  "完全現場主義 プロダクション",
  "AI 動画制作",
  "3D空間キャプチャ",
  "PR動画 中小企業",
  "制作部 八王子",
];

export const metadata: Metadata = {
  metadataBase: new URL("https://almondbagger.com"),
  title: {
    default: siteTitle,
    template: `%s | ${companyInfo.shortName}`,
  },
  description: siteDescription,
  keywords,
  authors: [{ name: companyInfo.name }],
  creator: companyInfo.shortName,
  publisher: companyInfo.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "ja_JP",
    siteName: companyInfo.shortName,
    url: "https://almondbagger.com",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "@id": "https://almondbagger.com/#organization",
      name: companyInfo.name,
      alternateName: [
        companyInfo.shortName,
        "ALMOND BAGGER",
        "アーモンドバガー",
      ],
      description: siteDescription,
      url: "https://almondbagger.com",
      telephone: companyInfo.phone,
      email: companyInfo.email,
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
        "20年の現場統括力 × 八王子ロケーション × 次世代AIパイプライン。スタジオの固定概念を超え、あらゆる現場と先端テクノロジーを統合する制作プロダクション。",
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
      "@id": "https://almondbagger.com/#service-fc",
      name: "八王子フィルムコミッション連携・ロケーション支援",
      serviceType: "ロケーションコーディネート・許認可サポート",
      provider: { "@id": "https://almondbagger.com/#organization" },
      areaServed: { "@type": "City", name: "八王子市" },
      description:
        "固定スタジオを持たない機動型プロダクションとして、八王子エリアのネットワークを活かし、映画・ドラマ・CM・MVのロケ地選定、道路使用等の許認可、制作部としての現場進行を完全現場主義で支援します。",
    },
    {
      "@type": "Service",
      "@id": "https://almondbagger.com/#service-production",
      name: "映画・ドラマ制作部",
      serviceType: "制作進行・現場統括",
      provider: { "@id": "https://almondbagger.com/#organization" },
      description:
        "商業映画・地上波連続ドラマの現場を熟知した制作チームが、香盤表作成からロケ進行・安全管理までスムーズな撮影環境を構築します。",
    },
    {
      "@type": "Service",
      "@id": "https://almondbagger.com/#service-video",
      name: "八王子・中小企業向け動画制作・プロデュース",
      serviceType: "PR動画・採用映像・CM制作",
      provider: { "@id": "https://almondbagger.com/#organization" },
      areaServed: [
        { "@type": "City", name: "八王子市" },
        { "@type": "AdministrativeArea", name: "多摩地域" },
      ],
      description:
        "八王子・多摩エリアのメーカー、老舗企業、商業施設向けに、採用動画やプロモーション映像を企画から撮影・編集までワンストップ制作します。",
    },
    {
      "@type": "Service",
      "@id": "https://almondbagger.com/#service-ai",
      name: "実写ロケ × 3D空間キャプチャ × AI合成",
      serviceType: "ロケーション特化型パイプライン・生成AI映像",
      provider: { "@id": "https://almondbagger.com/#organization" },
      description:
        "現地ロケ素材に3D空間キャプチャと生成AIを融合。大がかりなセットや固定スタジオに頼らず、スタジオ撮影以上のスケール感を適正コストと短納期で具現化します。",
    },
    {
      "@type": "FAQPage",
      "@id": "https://almondbagger.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "固定スタジオでの撮影は可能ですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "当社は固定スタジオを保有していません。完全現場主義のロケーション特化型プロダクションとして、八王子・多摩のロケーションやクライアント現場へ直接駆けつけて撮影します。",
          },
        },
        {
          "@type": "Question",
          name: "八王子エリアでのロケ撮影やフィルムコミッションの相談は可能ですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "はい。八王子フィルムコミッションと連携し、ロケ地提案、許認可申請、制作部としての現場進行まで一気通貫でサポートします。",
          },
        },
        {
          "@type": "Question",
          name: "動画制作の予算が限られている中小企業でも相談できますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "固定スタジオを持たない機動型プロダクションのため、スタジオ維持費を上乗せせず映像品質へ予算を集中投下できます。実写ロケと3D空間キャプチャ・生成AIを組み合わせた最適プランをご提案します。",
          },
        },
        {
          "@type": "Question",
          name: "実写ロケ × 3D空間キャプチャ × AI合成とはどのような制作手法ですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "現地で撮影した実写素材をベースに、3D空間キャプチャや生成AIを融合させるロケーション特化型パイプラインです。大がかりなセットを組まなくても、スタジオ撮影以上のスケール感を適正コストで実現できます。",
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
