import type { Metadata } from "next";
import { Fredoka, M_PLUS_Rounded_1c } from "next/font/google";
import { companyInfo } from "@/data/works";
import "./globals.css";

const display = Fredoka({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const sans = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${companyInfo.shortName} | 映画・ドラマから、縦型ショートまで。`,
    template: `%s | ${companyInfo.shortName}`,
  },
  description: `${companyInfo.name}は映像制作サポート・SNS縦型ショート制作の会社です。八王子本社、代表 ${companyInfo.representative}。映画・ドラマ・MV・CM・YouTube・TikTok対応。`,
  keywords: [
    companyInfo.shortName,
    "アーモンドバガー",
    "映像制作",
    "縦型ショート",
    "TikTok",
    "八王子",
    companyInfo.representative,
  ],
  openGraph: {
    title: `${companyInfo.shortName} | 映画・ドラマから、縦型ショートまで。`,
    description:
      "映像制作サポート事業＆SNS・縦型ショート動画制作。八王子本社・全国対応。",
    type: "website",
    locale: "ja_JP",
    siteName: companyInfo.shortName,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
