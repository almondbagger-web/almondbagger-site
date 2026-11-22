import type { Metadata } from "next";
import AdminLocationsClient from "@/components/AdminLocationsClient";

export const metadata: Metadata = {
  title: "ロケ地掲示板 管理",
  robots: { index: false, follow: false },
};

export default function AdminLocationsPage() {
  return <AdminLocationsClient />;
}
