import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/location-board/auth";
import {
  deleteListing,
  listAllForAdmin,
  updateListingStatus,
} from "@/lib/location-board/store";
import type { LocationStatus } from "@/lib/location-board/types";

export const runtime = "nodejs";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  try {
    const listings = await listAllForAdmin();
    return NextResponse.json({ ok: true, listings });
  } catch (error) {
    console.error("[admin GET]", error);
    return NextResponse.json(
      { ok: false, error: "取得に失敗しました" },
      { status: 500 },
    );
  }
}

export async function PATCH(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  try {
    const body = (await request.json()) as {
      id?: string;
      status?: LocationStatus;
    };
    if (!body.id || !body.status) {
      return NextResponse.json(
        { ok: false, error: "id と status が必要です" },
        { status: 400 },
      );
    }
    if (!["pending", "approved", "rejected"].includes(body.status)) {
      return NextResponse.json(
        { ok: false, error: "不正な status です" },
        { status: 400 },
      );
    }
    const updated = await updateListingStatus(body.id, body.status);
    if (!updated) {
      return NextResponse.json(
        { ok: false, error: "対象が見つかりません（サンプルは変更不可）" },
        { status: 404 },
      );
    }
    return NextResponse.json({ ok: true, listing: updated });
  } catch (error) {
    console.error("[admin PATCH]", error);
    return NextResponse.json(
      { ok: false, error: "更新に失敗しました" },
      { status: 500 },
    );
  }
}

export async function DELETE(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  try {
    const body = (await request.json()) as { id?: string };
    if (!body.id) {
      return NextResponse.json({ ok: false, error: "id が必要です" }, { status: 400 });
    }
    const ok = await deleteListing(body.id);
    if (!ok) {
      return NextResponse.json(
        { ok: false, error: "削除できません（サンプルは削除不可）" },
        { status: 400 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[admin DELETE]", error);
    return NextResponse.json(
      { ok: false, error: "削除に失敗しました" },
      { status: 500 },
    );
  }
}
