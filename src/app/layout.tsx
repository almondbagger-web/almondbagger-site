import type { Metadata } from "next";
import { Montserrat, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
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

const fontDisplay = Montserrat({
  weight: ["700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteTitle =
  "ALMONDBAGGER | 映画・ドラマ制作部統括 × AI映像制作プロダクション";

const siteDescription =
  "株式会社ALMONDBAGGER（東京都八王子市）。商業映画・地上波ドラマの制作部統括20年超、八王子フィルムコミッション公認連携。オープンゲート縦横同時制作、AI Previs / VFX、AB式ロケ地図ツクールを提供する映像制作プロダクションです。";

const keywords = [
  "映画 制作部 統括",
  "ドラマ 制作進行",
  "八王子 フィルムコミッション",
  "ロケーションコーディネート",
  "AI Previs",
  "AI VFX",
  "オープンゲート撮影",
  "縦型ショート動画 制作",
  "企業PR映像",
  "地図ツクール",
  "ALMONDBAGGER",
  "弓田悠太",
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
      knowsAbout: keywords,
      slogan: "現場を動かす、確かな統括力。",
      sameAs: [
        companyInfo.partnerUrl,
        companyInfo.mapToolUrl,
        companyInfo.yumiChaUrl,
      ],
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
      description:
        "商業映画・連続ドラマの制作部およびバックオフィス統括。現場統括20年超、ロケハン、香盤管理、道路使用許可、予算・権利管理、八王子フィルムコミッション公認連携。",
    },
    {
      "@type": "Service",
      "@id": "https://www.almondbagger.com/#service-corporate",
      name: "次世代映像制作（オープンゲート縦横同時制作）",
      serviceType: "オープンゲート撮影・ドローン空撮・AI Previs / AI VFX",
      provider: { "@id": "https://www.almondbagger.com/#organization" },
      description:
        "オープンゲート撮影による横型16:9と縦型9:16の同時納品、DJIプロ仕様ドローン空撮、AI Previs、AI VFXバレ消しによるポスプロ短縮。",
    },
    {
      "@type": "Service",
      "@id": "https://www.almondbagger.com/#service-location",
      name: "ロケーションコーディネート",
      serviceType: "ロケ地選定・許認可・フィルムコミッション連携",
      provider: { "@id": "https://www.almondbagger.com/#organization" },
      areaServed: { "@type": "City", name: "八王子市" },
      description:
        "八王子フィルムコミッション公認連携のもと、ロケ地選定から許認可申請まで支援。",
    },
    {
      "@type": ["SoftwareApplication", "Service"],
      "@id": "https://www.almondbagger.com/#map-tool",
      name: "AB式ロケ地図ツクール",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://map.almondbagger.com",
      provider: { "@id": "https://www.almondbagger.com/#organization" },
      description:
        "制作現場向けロケーション＆許認可マップツール。ロケハン・控室・車両動線・道路使用許可エリアを地図化・PDF出力。",
    },
    {
      "@type": ["SoftwareApplication", "Service"],
      "@id": "https://www.almondbagger.com/#yumi-cha",
      name: "YUMI-CHA（制作現場ブレインOS）",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://yumi-cha.streamlit.app/",
      provider: { "@id": "https://www.almondbagger.com/#organization" },
      description:
        "20年の映画・ドラマ制作部統括の知恵・許認可ノウハウ・ロケ地・ロケ弁データベースを学習した制作部専用AIアシスタント。",
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
      className={`${fontSans.variable} ${fontSerif.variable} ${fontDisplay.variable} h-full antialiased`}
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
