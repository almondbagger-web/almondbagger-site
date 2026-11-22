import fs from "fs";
import fsPromises from "fs/promises";
import { SAMPLE_LISTINGS } from "./samples";
import { getStorePath } from "./paths";
import type {
  LocationBoardStore,
  LocationListing,
  LocationStatus,
  PublicLocationListing,
} from "./types";
import { maskContactInfo } from "./mask";

function emptyStore(): LocationBoardStore {
  return { version: 1, sequence: 0, listings: [] };
}

function mergeWithSamples(store: LocationBoardStore): LocationBoardStore {
  const userListings = store.listings.filter((l) => !l.isSample);
  return {
    ...store,
    listings: [...SAMPLE_LISTINGS, ...userListings],
  };
}

export function toPublicListing(listing: LocationListing): PublicLocationListing {
  return {
    managementId: listing.managementId,
    areaRegion: listing.areaRegion,
    areaLabel: listing.areaLabel,
    category: listing.category,
    appealText: maskContactInfo(listing.appealText),
    photos: listing.photos.map((p) => p.src),
    isSample: listing.isSample,
  };
}

export async function readStore(): Promise<LocationBoardStore> {
  try {
    const raw = await fsPromises.readFile(getStorePath(), "utf8");
    const parsed = JSON.parse(raw) as LocationBoardStore;
    if (!parsed || !Array.isArray(parsed.listings)) return emptyStore();
    return {
      version: 1,
      sequence: parsed.sequence ?? 0,
      listings: parsed.listings.filter((l) => !l.isSample),
    };
  } catch {
    return emptyStore();
  }
}

export async function writeStore(store: LocationBoardStore): Promise<void> {
  const payload: LocationBoardStore = {
    version: 1,
    sequence: store.sequence,
    listings: store.listings.filter((l) => !l.isSample),
  };
  const path = getStorePath();
  await fsPromises.writeFile(path, JSON.stringify(payload, null, 2), "utf8");
}

export async function listPublicApproved(): Promise<PublicLocationListing[]> {
  const store = mergeWithSamples(await readStore());
  return store.listings
    .filter((l) => l.status === "approved")
    .map(toPublicListing);
}

export async function listAllForAdmin(): Promise<LocationListing[]> {
  const store = mergeWithSamples(await readStore());
  return [...store.listings].sort(
    (a, b) => +new Date(b.createdAt) - +new Date(a.createdAt),
  );
}

export async function nextManagementId(): Promise<string> {
  const store = await readStore();
  const next = (store.sequence || 0) + 1;
  return `AB-LOC-${String(next).padStart(3, "0")}`;
}

export async function createListing(
  listing: Omit<LocationListing, "managementId" | "createdAt" | "updatedAt"> & {
    managementId?: string;
  },
): Promise<LocationListing> {
  const store = await readStore();
  store.sequence = (store.sequence || 0) + 1;
  const managementId =
    listing.managementId ?? `AB-LOC-${String(store.sequence).padStart(3, "0")}`;
  const now = new Date().toISOString();
  const full: LocationListing = {
    ...listing,
    managementId,
    createdAt: now,
    updatedAt: now,
  };
  store.listings.push(full);
  await writeStore(store);
  return full;
}

export async function updateListingStatus(
  id: string,
  status: LocationStatus,
): Promise<LocationListing | null> {
  const store = await readStore();
  const idx = store.listings.findIndex((l) => l.id === id);
  if (idx < 0) return null;
  store.listings[idx] = {
    ...store.listings[idx],
    status,
    updatedAt: new Date().toISOString(),
  };
  await writeStore(store);
  return store.listings[idx];
}

export async function deleteListing(id: string): Promise<boolean> {
  const store = await readStore();
  const target = store.listings.find((l) => l.id === id);
  if (!target || target.isSample) return false;
  store.listings = store.listings.filter((l) => l.id !== id);
  await writeStore(store);

  // Best-effort delete uploaded files
  for (const photo of target.photos) {
    try {
      const { getUploadsDir } = await import("./paths");
      const disk = `${getUploadsDir()}/${photo.filename}`;
      if (fs.existsSync(disk)) fs.unlinkSync(disk);
    } catch {
      // ignore
    }
  }
  return true;
}

export async function findById(id: string): Promise<LocationListing | null> {
  const store = mergeWithSamples(await readStore());
  return store.listings.find((l) => l.id === id) ?? null;
}
