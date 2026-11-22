export type LocationStatus = "pending" | "approved" | "rejected";

export type LocationAreaRegion =
  | "東京・多摩"
  | "神奈川"
  | "埼玉・千葉"
  | "その他";

export type LocationCategory =
  | "飲食店・カフェ"
  | "古民家・和風"
  | "オフィス・店舗"
  | "倉庫・特殊空間";

export type LocationPhoto = {
  /** Public path or API media path */
  src: string;
  /** Filename on disk */
  filename: string;
};

/** Full record — private fields never leave admin/API without auth */
export type LocationListing = {
  id: string;
  managementId: string;
  status: LocationStatus;
  isSample: boolean;
  createdAt: string;
  updatedAt: string;
  /** Public */
  areaRegion: LocationAreaRegion;
  areaLabel: string;
  category: LocationCategory;
  appealText: string;
  photos: LocationPhoto[];
  /** Private — admin / staff only */
  private: {
    ownerName: string;
    propertyName: string;
    fullAddress: string;
    email: string;
    phone: string;
  };
};

/** Safe public DTO */
export type PublicLocationListing = {
  managementId: string;
  areaRegion: LocationAreaRegion;
  areaLabel: string;
  category: LocationCategory;
  appealText: string;
  photos: string[];
  isSample: boolean;
};

export type LocationBoardStore = {
  version: 1;
  sequence: number;
  listings: LocationListing[];
};

export const AREA_REGIONS: LocationAreaRegion[] = [
  "東京・多摩",
  "神奈川",
  "埼玉・千葉",
  "その他",
];

export const LOCATION_CATEGORIES: LocationCategory[] = [
  "飲食店・カフェ",
  "古民家・和風",
  "オフィス・店舗",
  "倉庫・特殊空間",
];

export const MAX_PHOTOS = 4;
export const MAX_PHOTO_BYTES = 5 * 1024 * 1024;
export const MAX_PHOTO_WIDTH = 1600;
