import path from "path";
import fs from "fs/promises";
import { NextResponse } from "next/server";
import { getUploadsDir } from "@/lib/location-board/paths";

export const runtime = "nodejs";

type Params = { params: Promise<{ filename: string }> };

export async function GET(_request: Request, { params }: Params) {
  try {
    const { filename: raw } = await params;
    const filename = decodeURIComponent(raw);
    if (
      !filename ||
      filename.includes("..") ||
      filename.includes("/") ||
      filename.includes("\\")
    ) {
      return new NextResponse("Not found", { status: 404 });
    }

    const diskPath = path.join(getUploadsDir(), filename);
    const data = await fs.readFile(diskPath);
    const ext = path.extname(filename).toLowerCase();
    const type =
      ext === ".jpg" || ext === ".jpeg"
        ? "image/jpeg"
        : ext === ".png"
          ? "image/png"
          : "image/webp";

    return new NextResponse(data, {
      status: 200,
      headers: {
        "Content-Type": type,
        "Cache-Control": "public, max-age=31536000, immutable",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
