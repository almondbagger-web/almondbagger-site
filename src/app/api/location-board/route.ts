import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { createListing, listPublicApproved } from "@/lib/location-board/store";
import { processAndStorePhoto } from "@/lib/location-board/images";
import { maskContactInfo, sanitizeAreaLabel } from "@/lib/location-board/mask";
import {
  AREA_REGIONS,
  LOCATION_CATEGORIES,
  MAX_PHOTOS,
  type LocationAreaRegion,
  type LocationCategory,
} from "@/lib/location-board/types";

export const runtime = "nodejs";

export async function GET() {
  try {
    const listings = await listPublicApproved();
    return NextResponse.json({ ok: true, listings });
  } catch (error) {
    console.error("[location-board GET]", error);
    return NextResponse.json(
      { ok: false, error: "掲示板データの取得に失敗しました", listings: [] },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();

    const areaRegion = String(form.get("areaRegion") || "") as LocationAreaRegion;
    const areaLabelRaw = String(form.get("areaLabel") || "");
    const category = String(form.get("category") || "") as LocationCategory;
    const appealTextRaw = String(form.get("appealText") || "");
    const ownerName = String(form.get("ownerName") || "").trim();
    const propertyName = String(form.get("propertyName") || "").trim();
    const fullAddress = String(form.get("fullAddress") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const consentPrivacy = form.get("consentPrivacy") === "true";
    const consentNoPii = form.get("consentNoPii") === "true";

    if (!consentPrivacy || !consentNoPii) {
      return NextResponse.json(
        { ok: false, error: "必須の同意チェックにすべてご確認ください" },
        { status: 400 },
      );
    }

    if (!AREA_REGIONS.includes(areaRegion)) {
      return NextResponse.json(
        { ok: false, error: "エリアを選択してください" },
        { status: 400 },
      );
    }

    if (!LOCATION_CATEGORIES.includes(category)) {
      return NextResponse.json(
        { ok: false, error: "物件種別を選択してください" },
        { status: 400 },
      );
    }

    if (!areaLabelRaw.trim() || !appealTextRaw.trim()) {
      return NextResponse.json(
        { ok: false, error: "公開用のエリア表記とアピール文章は必須です" },
        { status: 400 },
      );
    }

    if (!ownerName || !propertyName || !fullAddress || !email) {
      return NextResponse.json(
        { ok: false, error: "非公開の連絡先項目（お名前・物件名・住所・メール）は必須です" },
        { status: 400 },
      );
    }

    const files = form
      .getAll("photos")
      .filter((f): f is File => typeof File !== "undefined" && f instanceof File && f.size > 0);

    if (files.length === 0) {
      return NextResponse.json(
        { ok: false, error: "写真を1枚以上アップロードしてください" },
        { status: 400 },
      );
    }
    if (files.length > MAX_PHOTOS) {
      return NextResponse.json(
        { ok: false, error: `写真は最大${MAX_PHOTOS}枚までです` },
        { status: 400 },
      );
    }

    const listingId = randomUUID();
    const photos = [];
    for (let i = 0; i < files.length; i++) {
      photos.push(await processAndStorePhoto(files[i], listingId, i));
    }

    const listing = await createListing({
      id: listingId,
      status: "pending",
      isSample: false,
      areaRegion,
      areaLabel: sanitizeAreaLabel(areaLabelRaw),
      category,
      appealText: maskContactInfo(appealTextRaw.trim()),
      photos: photos.map((p) => ({ src: p.src, filename: p.filename })),
      private: {
        ownerName,
        propertyName,
        fullAddress,
        email,
        phone,
      },
    });

    return NextResponse.json({
      ok: true,
      managementId: listing.managementId,
      message:
        "ご投稿ありがとうございます。個人情報・画像データの安全確認（事務局審査）完了後、通常1〜2営業日以内に公開されます。",
    });
  } catch (error) {
    console.error("[location-board POST]", error);
    const message =
      error instanceof Error ? error.message : "投稿の保存に失敗しました";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
