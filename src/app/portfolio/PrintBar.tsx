"use client";

import { Printer } from "lucide-react";

export default function PrintBar() {
  return (
    <div className="no-print portfolio-print-bar">
      <div className="portfolio-print-bar__inner">
        <div>
          <p className="portfolio-print-bar__eyebrow">A4 Landscape · Print / PDF</p>
          <p className="portfolio-print-bar__hint">
            「PDFとして保存 / 印刷」は Command + P（Windows: Ctrl + P）でも実行できます
          </p>
        </div>
        <button
          type="button"
          className="portfolio-print-bar__btn"
          onClick={() => window.print()}
        >
          <Printer className="h-4 w-4" />
          ポートフォリオPDFをダウンロード / 印刷する
        </button>
      </div>
    </div>
  );
}
