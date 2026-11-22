"use client";

import { type FormEvent, useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle2, ImagePlus, Send, X } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import {
  AREA_REGIONS,
  LOCATION_CATEGORIES,
  MAX_PHOTOS,
} from "@/lib/location-board/types";
import { cn } from "@/lib/utils";

type FormState = {
  areaRegion: string;
  areaLabel: string;
  category: string;
  appealText: string;
  ownerName: string;
  propertyName: string;
  fullAddress: string;
  email: string;
  phone: string;
  consentNoPii: boolean;
  consentPrivacy: boolean;
};

const initial: FormState = {
  areaRegion: "東京・多摩",
  areaLabel: "",
  category: "飲食店・カフェ",
  appealText: "",
  ownerName: "",
  propertyName: "",
  fullAddress: "",
  email: "",
  phone: "",
  consentNoPii: false,
  consentPrivacy: false,
};

export default function LocationOwnerSubmitForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onFiles = (list: FileList | null) => {
    if (!list) return;
    const next = [...files, ...Array.from(list)].slice(0, MAX_PHOTOS);
    setFiles(next);
    setPreviews(next.map((f) => URL.createObjectURL(f)));
  };

  const removeFile = (index: number) => {
    const next = files.filter((_, i) => i !== index);
    setFiles(next);
    setPreviews(next.map((f) => URL.createObjectURL(f)));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.consentNoPii || !form.consentPrivacy) {
      setError("必須の同意チェックにすべてご確認ください");
      return;
    }
    if (files.length === 0) {
      setError("写真を1枚以上選択してください");
      return;
    }

    setSubmitting(true);
    try {
      const body = new FormData();
      Object.entries(form).forEach(([k, v]) => {
        body.append(k, String(v));
      });
      files.forEach((f) => body.append("photos", f));

      const res = await fetch("/api/location-board", {
        method: "POST",
        body,
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "投稿に失敗しました");
      }
      setDone(true);
      setForm(initial);
      setFiles([]);
      setPreviews([]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "投稿に失敗しました");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="location-submit"
      aria-labelledby="location-submit-heading"
      className="relative scroll-mt-24 bg-surface/90 section-y md:scroll-mt-28"
    >
      <div className="mx-auto max-w-6xl section-pad">
        <SectionHeading
          english="OWNER SUBMISSION"
          japanese="物件オーナー様・投稿フォーム"
          id="location-submit-heading"
          tone="gold"
        />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          公開される情報と、事務局のみが扱う非公開連絡先を分けてお送りください。写真はEXIF（GPS等）を除去したうえで審査後に掲載されます。
        </p>

        <div className="glass-panel mt-12 p-6 md:p-10">
          {done ? (
            <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
              <CheckCircle2 className="mb-4 h-10 w-10 text-gold" />
              <h3 className="font-serif text-xl font-medium tracking-wide">
                ご投稿ありがとうございます
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
                個人情報・画像データの安全確認（事務局審査）完了後、通常1〜2営業日以内に公開されます。公開カードには管理IDのみが表示され、お名前・店舗名・番地・連絡先は掲載されません。
              </p>
              <button
                type="button"
                className="btn-gold-outline mt-8"
                onClick={() => setDone(false)}
              >
                続けて投稿する
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-8">
              <div>
                <p className="font-display text-[0.65rem] font-extrabold tracking-[0.16em] text-gold">
                  PUBLIC · 公開される情報
                </p>
                <div className="mt-4 grid gap-5 md:grid-cols-2">
                  <label className="block space-y-2">
                    <span className="text-[0.78rem] font-medium text-muted">
                      エリア区分 <span className="text-gold">*</span>
                    </span>
                    <select
                      required
                      className="field-lux"
                      value={form.areaRegion}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, areaRegion: e.target.value }))
                      }
                    >
                      {AREA_REGIONS.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block space-y-2">
                    <span className="text-[0.78rem] font-medium text-muted">
                      都道府県・市区町村（番地は非公開）{" "}
                      <span className="text-gold">*</span>
                    </span>
                    <input
                      required
                      className="field-lux"
                      value={form.areaLabel}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, areaLabel: e.target.value }))
                      }
                      placeholder="例：東京都八王子市"
                    />
                  </label>
                  <label className="block space-y-2 md:col-span-2">
                    <span className="text-[0.78rem] font-medium text-muted">
                      物件種別 <span className="text-gold">*</span>
                    </span>
                    <select
                      required
                      className="field-lux"
                      value={form.category}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, category: e.target.value }))
                      }
                    >
                      {LOCATION_CATEGORIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block space-y-2 md:col-span-2">
                    <span className="text-[0.78rem] font-medium text-muted">
                      物件の特徴・アピール文章 <span className="text-gold">*</span>
                    </span>
                    <textarea
                      required
                      rows={5}
                      className={cn("field-lux", "resize-y")}
                      value={form.appealText}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, appealText: e.target.value }))
                      }
                      placeholder="営業時間外貸出可、電源・駐車場の有無、空間の雰囲気など。電話番号・メールの記載は自動で除去されます。"
                    />
                  </label>
                </div>

                <div className="mt-5">
                  <p className="text-[0.78rem] font-medium text-muted">
                    写真（最大{MAX_PHOTOS}枚・各5MB以下）{" "}
                    <span className="text-gold">*</span>
                  </p>
                  <div
                    className="mt-2 flex min-h-[140px] cursor-pointer flex-col items-center justify-center border border-dashed border-slate-300/80 bg-white/50 px-4 py-8 text-center transition-colors hover:border-gold/50"
                    onClick={() => inputRef.current?.click()}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault();
                      onFiles(e.dataTransfer.files);
                    }}
                  >
                    <ImagePlus className="h-7 w-7 text-gold" />
                    <p className="mt-3 text-sm text-muted">
                      ドラッグ＆ドロップ、またはタップして選択
                    </p>
                    <input
                      ref={inputRef}
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={(e) => onFiles(e.target.files)}
                    />
                  </div>
                  {previews.length > 0 ? (
                    <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {previews.map((src, i) => (
                        <li key={src} className="relative aspect-square overflow-hidden border border-border">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={src}
                            alt=""
                            className="h-full w-full object-cover"
                          />
                          <button
                            type="button"
                            aria-label="写真を削除"
                            className="absolute right-1 top-1 bg-cinema/80 p-1 text-white"
                            onClick={() => removeFile(i)}
                          >
                            <X className="h-3.5 w-3.5" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <p className="font-display text-[0.65rem] font-extrabold tracking-[0.16em] text-[#C68B83]">
                  PRIVATE · 非公開・事務局連絡専用
                </p>
                <p className="mt-2 text-xs text-muted">
                  以下は公開掲示板に一切表示されません。中抜き防止のため、制作会社からの連絡もすべて事務局が仲介します。
                </p>
                <div className="mt-4 grid gap-5 md:grid-cols-2">
                  <label className="block space-y-2">
                    <span className="text-[0.78rem] font-medium text-muted">
                      オーナー様お名前 <span className="text-gold">*</span>
                    </span>
                    <input
                      required
                      className="field-lux"
                      value={form.ownerName}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, ownerName: e.target.value }))
                      }
                    />
                  </label>
                  <label className="block space-y-2">
                    <span className="text-[0.78rem] font-medium text-muted">
                      店舗・物件名 <span className="text-gold">*</span>
                    </span>
                    <input
                      required
                      className="field-lux"
                      value={form.propertyName}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, propertyName: e.target.value }))
                      }
                    />
                  </label>
                  <label className="block space-y-2 md:col-span-2">
                    <span className="text-[0.78rem] font-medium text-muted">
                      詳細な住所（番地まで） <span className="text-gold">*</span>
                    </span>
                    <input
                      required
                      className="field-lux"
                      value={form.fullAddress}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, fullAddress: e.target.value }))
                      }
                    />
                  </label>
                  <label className="block space-y-2">
                    <span className="text-[0.78rem] font-medium text-muted">
                      メールアドレス <span className="text-gold">*</span>
                    </span>
                    <input
                      required
                      type="email"
                      className="field-lux"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                    />
                  </label>
                  <label className="block space-y-2">
                    <span className="text-[0.78rem] font-medium text-muted">
                      電話番号
                    </span>
                    <input
                      className="field-lux"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, phone: e.target.value }))
                      }
                      placeholder="090-0000-0000"
                    />
                  </label>
                </div>
              </div>

              <div className="space-y-3 border-t border-border pt-6">
                <label className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={form.consentNoPii}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        consentNoPii: e.target.checked,
                      }))
                    }
                  />
                  <span>
                    投稿写真に第三者の顔・表札・車のナンバープレート等の個人情報が映り込んでいないことを確認しました
                    <span className="text-gold"> *</span>
                  </span>
                </label>
                <label className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={form.consentPrivacy}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        consentPrivacy: e.target.checked,
                      }))
                    }
                  />
                  <span>
                    本物件の所有者または掲載権限を有しており、
                    <Link href="/privacy" className="underline underline-offset-2">
                      プライバシーポリシー
                    </Link>
                    に同意します
                    <span className="text-gold"> *</span>
                  </span>
                </label>
              </div>

              {error ? (
                <p className="text-sm text-[#C68B83]" role="alert">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={submitting}
                className="btn-dark w-full sm:w-auto"
              >
                <Send className="h-4 w-4" />
                {submitting ? "送信中…" : "審査へ投稿する"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
