import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { companyInfo } from "@/data/works";
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
  "ALMONDBAGGER | 商業映画・ドラマ制作部統括・ロケーション支援";

const siteDescription =
  "商業映画・地上波ドラマの制作部統括20年の実績と、八王子フィルムコミッション公認連携。企画設計から許認可・ロケーション管理・最新AI映像技術まで、作品の現場を一貫して支えます。";

const keywords = [
  "八王子 制作部",
  "映画 制作部",
  "ドラマ 制作進行",
  "八王子 フィルムコミッション",
  "八王子 映像制作",
  "ロケーションコーディネート",
  "AI Previs",
  "AI VFX",
  "企業PR映像",
  "地図ツクール",
  "ロケマップ",
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
        "商業映画・地上波連続ドラマの制作部統括。ロケハン、香盤表、道路使用許可、予算管理、権利処理まで一貫して支えます。",
    },
    {
      "@type": "Service",
      "@id": "https://www.almondbagger.com/#service-fc",
      name: "八王子フィルムコミッション公認連携・ロケーション支援",
      serviceType: "ロケーションコーディネート・許認可サポート",
      provider: { "@id": "https://www.almondbagger.com/#organization" },
      areaServed: { "@type": "City", name: "八王子市" },
      description:
        "八王子フィルムコミッション公認連携のもと、ロケ地選定から許認可・撮影調整まで制作部として支援します。",
    },
    {
      "@type": "Service",
      "@id": "https://www.almondbagger.com/#service-ai",
      name: "制作部直結型 AI Previs / VFX ＆ 企業PR映像制作",
      serviceType: "AI Previs・AI VFX・企業PR映像",
      provider: { "@id": "https://www.almondbagger.com/#organization" },
      description:
        "企画段階のAI Previsから現場連携のVFX、企業向けPR映像まで、制作部の進行管理と直結して提供します。",
    },
    {
      "@type": ["SoftwareApplication", "Service"],
      "@id": "https://www.almondbagger.com/#map-tool",
      name: "AB式ロケ地図ツクール",
      alternateName: ["地図ツクール", "Location Map Studio"],
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://map.almondbagger.com",
      serviceType: "映画・ドラマ・CM向けロケーション＆許認可マップ",
      provider: { "@id": "https://www.almondbagger.com/#organization" },
      description:
        "現場の制作部向けに開発したロケ地図作成ツール。ロケハン情報・許認可エリア・待機導線を地図上で共有できます。",
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
