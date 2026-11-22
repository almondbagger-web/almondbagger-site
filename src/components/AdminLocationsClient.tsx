"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { LocationListing } from "@/lib/location-board/types";

export default function AdminLocationsClient() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [listings, setListings] = useState<LocationListing[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/location-board/admin", { cache: "no-store" });
      if (res.status === 401) {
        setAuthed(false);
        setListings([]);
        return;
      }
      const data = (await res.json()) as {
        ok?: boolean;
        listings?: LocationListing[];
        error?: string;
      };
      if (!res.ok || !data.ok) throw new Error(data.error || "取得失敗");
      setAuthed(true);
      setListings(data.listings ?? []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "取得失敗");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const login = async () => {
    setError("");
    const res = await fetch("/api/location-board/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = (await res.json()) as { ok?: boolean; error?: string };
    if (!res.ok || !data.ok) {
      setError(data.error || "認証失敗");
      return;
    }
    setPassword("");
    await load();
  };

  const logout = async () => {
    await fetch("/api/location-board/admin/login", { method: "DELETE" });
    setAuthed(false);
    setListings([]);
  };

  const setStatus = async (id: string, status: "approved" | "pending" | "rejected") => {
    const res = await fetch("/api/location-board/admin", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    if (!res.ok) {
      const data = (await res.json()) as { error?: string };
      setError(data.error || "更新失敗");
      return;
    }
    await load();
  };

  const remove = async (id: string) => {
    if (!window.confirm("この投稿を削除しますか？")) return;
    const res = await fetch("/api/location-board/admin", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (!res.ok) {
      const data = (await res.json()) as { error?: string };
      setError(data.error || "削除失敗");
      return;
    }
    await load();
  };

  return (
    <main className="min-h-screen bg-[#F3F5F8] text-foreground">
      <div className="mx-auto max-w-5xl px-5 py-12 md:py-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-display text-[0.65rem] font-extrabold tracking-[0.16em] text-gold">
              ADMIN
            </p>
            <h1 className="mt-2 font-serif text-2xl font-bold tracking-wide md:text-3xl">
              ロケ地掲示板 承認管理
            </h1>
          </div>
          <Link href="/location-partner" className="text-sm text-muted underline-offset-4 hover:underline">
            ← 公開ページへ
          </Link>
        </div>

        {!authed ? (
          <div className="glass-panel mt-10 max-w-md p-6">
            <p className="text-sm text-muted">
              環境変数 <code className="text-foreground">ADMIN_PASSWORD</code>{" "}
              で認証します（未設定時はローカル開発用フォールバック）。
            </p>
            <label className="mt-5 block space-y-2">
              <span className="text-[0.78rem] text-muted">パスワード</span>
              <input
                type="password"
                className="field-lux"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") void login();
                }}
              />
            </label>
            {error ? (
              <p className="mt-3 text-sm text-[#C68B83]" role="alert">
                {error}
              </p>
            ) : null}
            <button type="button" className="btn-dark mt-5" onClick={() => void login()}>
              ログイン
            </button>
          </div>
        ) : (
          <>
            <div className="mt-6 flex items-center justify-between gap-3">
              <p className="text-sm text-muted">
                {loading ? "更新中…" : `${listings.length} 件`}
              </p>
              <button type="button" className="btn-gold-outline" onClick={() => void logout()}>
                ログアウト
              </button>
            </div>
            {error ? (
              <p className="mt-3 text-sm text-[#C68B83]" role="alert">
                {error}
              </p>
            ) : null}

            <ul className="mt-8 space-y-4">
              {listings.map((item) => (
                <li key={item.id} className="gold-frame p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-sm font-bold tracking-wide text-gold">
                        {item.managementId}
                        {item.isSample ? " · SAMPLE" : ""}
                      </p>
                      <p className="mt-1 text-sm text-foreground">
                        {item.areaLabel} / {item.category} /{" "}
                        <span className="font-medium">{item.status}</span>
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {item.appealText}
                      </p>
                      {!item.isSample ? (
                        <div className="mt-3 rounded border border-[#C68B83]/30 bg-[#C68B83]/5 p-3 text-xs leading-relaxed text-muted">
                          <p>非公開連絡先（管理者のみ）</p>
                          <p className="mt-1 text-foreground">
                            {item.private.ownerName} / {item.private.propertyName}
                          </p>
                          <p>{item.private.fullAddress}</p>
                          <p>
                            {item.private.email}
                            {item.private.phone ? ` / ${item.private.phone}` : ""}
                          </p>
                        </div>
                      ) : null}
                    </div>
                    {!item.isSample ? (
                      <div className="flex flex-col gap-2 sm:flex-row">
                        <button
                          type="button"
                          className="btn-dark text-[0.7rem]"
                          onClick={() => void setStatus(item.id, "approved")}
                        >
                          承認して公開
                        </button>
                        <button
                          type="button"
                          className="btn-gold-outline text-[0.7rem]"
                          onClick={() => void setStatus(item.id, "pending")}
                        >
                          非公開に戻す
                        </button>
                        <button
                          type="button"
                          className="border border-[#C68B83]/60 px-3 py-2 text-[0.7rem] text-[#8f5f58]"
                          onClick={() => void remove(item.id)}
                        >
                          削除
                        </button>
                      </div>
                    ) : (
                      <p className="text-xs text-muted">サンプルは変更不可</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </main>
  );
}
