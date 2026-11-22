import type { LocationListing } from "./types";

/** 公開掲示板の初期サンプル（ダミー架空物件・サンプル表記付き） */
export const SAMPLE_LISTINGS: LocationListing[] = [
  {
    id: "sample-hachioji-kissaten",
    managementId: "AB-LOC-SAMPLE01",
    status: "approved",
    isSample: true,
    createdAt: "2026-01-01T00:00:00.000Z",
    updatedAt: "2026-01-01T00:00:00.000Z",
    areaRegion: "東京・多摩",
    areaLabel: "東京都八王子市",
    category: "飲食店・カフェ",
    appealText:
      "昭和レトロな純喫茶の店内。木目カウンターと淡い暖色照明が特徴。定休日・早朝の貸し出し相談可。電源・控室スペースあり。※掲載イメージ用サンプル物件です。",
    photos: [
      {
        src: "/location-samples/sample-kissaten.svg",
        filename: "sample-kissaten.svg",
      },
    ],
    private: {
      ownerName: "[非公開・サンプル]",
      propertyName: "[非公開・サンプル]",
      fullAddress: "[非公開・サンプル]",
      email: "sample@example.invalid",
      phone: "",
    },
  },
  {
    id: "sample-kominka",
    managementId: "AB-LOC-SAMPLE02",
    status: "approved",
    isSample: true,
    createdAt: "2026-01-01T00:00:00.000Z",
    updatedAt: "2026-01-01T00:00:00.000Z",
    areaRegion: "東京・多摩",
    areaLabel: "東京都八王子市",
    category: "古民家・和風",
    appealText:
      "縁側と庭のある和風邸宅。畳の間・土間を撮影に活用可能。近隣配慮のうえ営業時間外のみ対応。駐車場は近隣に確保しやすい立地。※掲載イメージ用サンプル物件です。",
    photos: [
      {
        src: "/location-samples/sample-kominka.svg",
        filename: "sample-kominka.svg",
      },
    ],
    private: {
      ownerName: "[非公開・サンプル]",
      propertyName: "[非公開・サンプル]",
      fullAddress: "[非公開・サンプル]",
      email: "sample@example.invalid",
      phone: "",
    },
  },
];
