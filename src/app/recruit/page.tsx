import type { Metadata } from "next";
import SiteChrome from "@/components/SiteChrome";
import RecruitContent from "@/components/RecruitContent";
import { companyInfo } from "@/data/works";

export const metadata: Metadata = {
  title: "採用情報 | 制作部スタッフ・マネージャー募集",
  description:
    "現場の熱量とテクノロジーの力で、映像制作の未来をつくる。商業映画・Netflix現場と自社DXツールを両立する次世代プロダクションの採用情報。",
  openGraph: {
    title: `採用情報 | ${companyInfo.shortName}`,
    description:
      "制作部スタッフ・マネージャー募集。商業映画・Netflix現場 × 最先端AIクリエイティブ。",
  },
};

export default function RecruitPage() {
  return (
    <SiteChrome>
      <RecruitContent />
    </SiteChrome>
  );
}
