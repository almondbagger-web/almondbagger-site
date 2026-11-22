"use client";

import { type FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { companyInfo } from "@/data/works";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  managementId: string;
  message: string;
};

const initial: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  managementId: "",
  message: "",
};

export default function LocationShootInquiryForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onId = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail) {
        setForm((f) => ({ ...f, managementId: detail }));
        setSubmitted(false);
      }
    };
    window.addEventListener("location-inquiry-id", onId);
    return () => window.removeEventListener("location-inquiry-id", onId);
  }, []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="location-inquiry"
      aria-labelledby="location-inquiry-heading"
      className="relative scroll-mt-24 bg-background/85 section-y md:scroll-mt-28"
    >
      <div className="mx-auto max-w-6xl section-pad">
        <SectionHeading
          english="SHOOT INQUIRY"
          japanese="撮影相談（制作会社様）"
          id="location-inquiry-heading"
          tone="gold"
        />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          ギャラリーの「撮影相談する」から遷移すると管理IDが自動入力されます。オーナー様への直接連絡は行わず、すべて事務局が仲介します。
        </p>

        <div className="glass-panel mt-12 max-w-2xl p-6 md:p-10">
          {submitted ? (
            <div className="flex min-h-[220px] flex-col items-center justify-center text-center">
              <CheckCircle2 className="mb-4 h-10 w-10 text-gold" />
              <h3 className="font-serif text-xl font-medium tracking-wide">
                相談を受け付けました
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                デモのため実送信は行いません。本番ではメール通知へ接続できます。
                <br />
                担当より {companyInfo.email} よりご連絡いたします。
              </p>
              <button
                type="button"
                className="btn-gold-outline mt-8"
                onClick={() => {
                  setSubmitted(false);
                  setForm(initial);
                }}
              >
                フォームに戻る
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <label className="block space-y-2">
                <span className="text-[0.78rem] font-medium text-muted">
                  ロケ地管理ID
                </span>
                <input
                  className="field-lux font-mono tracking-wide"
                  value={form.managementId}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, managementId: e.target.value }))
                  }
                  placeholder="AB-LOC-001"
                />
              </label>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block space-y-2">
                  <span className="text-[0.78rem] font-medium text-muted">
                    お名前 <span className="text-gold">*</span>
                  </span>
                  <input
                    required
                    className="field-lux"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                  />
                </label>
                <label className="block space-y-2">
                  <span className="text-[0.78rem] font-medium text-muted">
                    会社・制作会社名
                  </span>
                  <input
                    className="field-lux"
                    value={form.company}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, company: e.target.value }))
                    }
                  />
                </label>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
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
                  />
                </label>
              </div>
              <label className="block space-y-2">
                <span className="text-[0.78rem] font-medium text-muted">
                  ご相談内容 <span className="text-gold">*</span>
                </span>
                <textarea
                  required
                  rows={5}
                  className={cn("field-lux", "resize-y")}
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  placeholder="撮影予定時期、人数規模、希望条件など"
                />
              </label>
              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href="/privacy"
                  className="text-[0.78rem] text-muted underline-offset-4 hover:underline"
                >
                  プライバシーポリシー
                </Link>
                <button type="submit" className="btn-dark w-full sm:w-auto">
                  <Send className="h-4 w-4" />
                  送信する
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
