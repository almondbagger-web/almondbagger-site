import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { companyInfo, faqItems } from "@/data/works";
import "./globals.css";

const fontSans = Noto_Sans_JP({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans-jp",
  display: "swap",
});

const fontSerif = Noto_Serif_JP({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif-jp",
  display: "swap",
});

const siteTitle =
  "ALMONDBAGGER | 日本の映画・ドラマ制作部統括 × AI映像・SNS戦略プロダクション";

const siteDescription =
  "商業映画・地上波ドラマの制作部統括20年超と、八王子フィルムコミッション公認連携。最先端AI Previs/VFX、オープンゲート縦横同時制作、SNS・アナリティクス戦略まで、一流クリエイティブプロダクションとして現場を支えます。";

const keywords = [
  "映画 制作部 統括",
  "ドラマ 制作進行",
  "八王子 フィルムコミッション",
  "ロケーションコーディネート",
  "AI Previs",
  "AI VFX",
  "AIバレ消し",
  "オープンゲート撮影",
  "縦型ショート動画 制作",
  "企業PR映像",
  "SNS動画 アナリティクス",
  "地図ツクール",
  "八王子 映像制作",
  "ALMONDBAGGER",
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
      founder: {
        "@type": "Person",
        name: "弓田 悠太",
        jobTitle: "代表取締役",
      },
      foundingDate: "2021-08-03",
      address: {
        "@type": "PostalAddress",
        streetAddress: "東町1-10 グランデハイツ八王子801",
        addressLocality: "八王子市",
        addressRegion: "東京都",
        postalCode: "192-0082",
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
      knowsAbout: [
        ...keywords,
        "20年超の映画・ドラマ制作部統括",
        "八王子フィルムコミッション公認連携",
      ],
      slogan:
        "日本一の映画・ドラマ制作部統括力 × 最先端AIクリエイター × SNS・アナリティクス戦略",
      sameAs: [companyInfo.partnerUrl, companyInfo.mapToolUrl],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: companyInfo.phone,
        contactType: "customer service",
        areaServed: "JP",
        availableLanguage: ["Japanese"],
      },
      award: "八王子フィルムコミッション公認連携",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.almondbagger.com/#website",
      url: "https://www.almondbagger.com",
      name: companyInfo.shortName,
      description: siteDescription,
      publisher: { "@id": "https://www.almondbagger.com/#organization" },
      inLanguage: "ja-JP",
    },
    {
      "@type": "Service",
      "@id": "https://www.almondbagger.com/#service-production",
      name: "映画・ドラマ制作部統括",
      serviceType: "制作部統括・現場進行・許認可・予算・権利処理",
      provider: { "@id": "https://www.almondbagger.com/#organization" },
      areaServed: "JP",
      description:
        "商業映画・地上波連続ドラマ・配信作品の制作部統括。ロケハン、香盤表、道路使用許可、予算管理、権利処理まで一貫対応。",
    },
    {
      "@type": "Service",
      "@id": "https://www.almondbagger.com/#service-location",
      name: "ロケーションコーディネート",
      serviceType: "ロケ地選定・許認可・フィルムコミッション連携",
      provider: { "@id": "https://www.almondbagger.com/#organization" },
      areaServed: { "@type": "City", name: "八王子市" },
      description:
        "八王子フィルムコミッション公認連携のもと、ロケ地選定から許認可申請、地元施設との撮影調整まで支援。",
    },
    {
      "@type": "Service",
      "@id": "https://www.almondbagger.com/#service-opengate",
      name: "オープンゲート縦横同時動画制作",
      serviceType: "オープンゲート撮影・16:9 / 9:16 同時生成",
      provider: { "@id": "https://www.almondbagger.com/#organization" },
      description:
        "フルサイズ3:2センサー全面記録により、1回の撮影からWeb・YouTube用16:9とTikTok・Reels用9:16を同時生成。現場拘束時間・人件費の圧縮を実現。",
    },
    {
      "@type": "Service",
      "@id": "https://www.almondbagger.com/#service-ai",
      name: "AI Previs / AI VFX",
      serviceType: "AI Previs・AIバレ消し・ポスプロ最適化",
      provider: { "@id": "https://www.almondbagger.com/#organization" },
      description:
        "動く絵コンテ（AI Previs）による合意形成の高速化と、AIバレ消しによるポスプロ圧縮を制作部進行と直結して提供。",
    },
    {
      "@type": ["SoftwareApplication", "Service"],
      "@id": "https://www.almondbagger.com/#map-tool",
      name: "AB式ロケ地図ツクール",
      alternateName: ["地図ツクール", "Location Map Studio"],
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://map.almondbagger.com",
      provider: { "@id": "https://www.almondbagger.com/#organization" },
      description:
        "現場の制作部向けロケーション＆許認可マップツール。ロケハン情報・待機導線・許可エリアを地図上で共有。",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.almondbagger.com/#faq",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${fontSans.variable} ${fontSerif.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icon.png" />
        {/* Google AdSense — keep verification assets (public/ads.txt) intact */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
