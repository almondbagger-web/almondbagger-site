import path from "path";
import fs from "fs/promises";
import sharp from "sharp";
import { getUploadsDir } from "./paths";
import { MAX_PHOTO_BYTES, MAX_PHOTO_WIDTH } from "./types";

export type ProcessedPhoto = {
  filename: string;
  src: string;
  bytes: number;
};

/**
 * Strip ALL EXIF/metadata (incl. GPS), resize ≤1600px, re-encode as WebP.
 */
export async function processAndStorePhoto(
  file: File,
  listingId: string,
  index: number,
): Promise<ProcessedPhoto> {
  if (file.size > MAX_PHOTO_BYTES) {
    throw new Error(`画像は5MB以下にしてください（${file.name}）`);
  }

  const mime = file.type || "";
  if (
    !/^image\/(jpeg|jpg|png|webp|heic|heif|gif)$/i.test(mime) &&
    !mime.startsWith("image/")
  ) {
    throw new Error(`対応していない画像形式です（${file.name}）`);
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  let output = await sharp(buffer, { failOn: "none" })
    .rotate()
    .resize({
      width: MAX_PHOTO_WIDTH,
      height: MAX_PHOTO_WIDTH,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 82 })
    .toBuffer();

  // Second pass: guarantee metadata/EXIF (GPS etc.) are gone
  output = await sharp(output).webp({ quality: 82 }).toBuffer();

  if (output.byteLength > MAX_PHOTO_BYTES) {
    output = await sharp(output).webp({ quality: 68 }).toBuffer();
  }

  const filename = `${listingId}-${index}-${Date.now()}.webp`;
  const diskPath = path.join(getUploadsDir(), filename);
  await fs.writeFile(diskPath, output);

  return {
    filename,
    src: `/api/location-board/media/${encodeURIComponent(filename)}`,
    bytes: output.byteLength,
  };
}
