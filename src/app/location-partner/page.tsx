import type { Metadata } from "next";
import SiteChrome from "@/components/SiteChrome";
import LocationPartnerContent from "@/components/LocationPartnerContent";
import { companyInfo } from "@/data/works";

export const metadata: Metadata = {
  title: "ロケ地パートナー募集 | 店舗・物件オーナー様へ",
  description:
    "貴店の定休日・営業時間外が、ドラマや映画の舞台に。初期費用0円・本業優先・賠償責任保険完備。個人情報非公開の提携ロケ地ギャラリー＆投稿システム付き。",
  openGraph: {
    title: `ロケ地パートナー募集 | ${companyInfo.shortName}`,
    description:
      "初期費用0円・本業優先・保険完備。個人情報を公開せず投稿できるロケ地パートナー募集。",
  },
};

export default function LocationPartnerPage() {
  return (
    <SiteChrome>
      <LocationPartnerContent />
    </SiteChrome>
  );
}
