"use client";

import React from "react";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-red-500 selection:text-white print:bg-white print:text-black">
      {/* 印刷・PDF保存コントロール（印刷時は非表示） */}
      <div className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800 p-4 print:hidden flex justify-between items-center max-w-6xl mx-auto px-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-red-400 font-bold">
            PORTFOLIO & EXECUTIVE SUMMARY
          </span>
          <h1 className="text-lg font-bold text-white">
            弓田 悠太 / YUTA YUMITA プロフェッショナルシート
          </h1>
        </div>
        <div className="flex gap-4 items-center">
          <a
            href="/"
            className="text-sm text-slate-400 hover:text-white transition"
          >
            ← HPトップへ戻る
          </a>
          <button
            type="button"
            onClick={() => window.print()}
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-lg transition flex items-center gap-2 cursor-pointer"
          >
            <span>PDF保存 / 印刷する</span>
            <span className="text-xs bg-red-800 px-2 py-0.5 rounded">⌘P</span>
          </button>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto p-4 md:p-8 space-y-12 print:space-y-0 print:p-0">
        {/* SLIDE 1: 表紙 */}
        <section className="bg-slate-950 border border-slate-800 rounded-2xl p-10 md:p-14 shadow-2xl relative overflow-hidden print:border-none print:shadow-none print:rounded-none print:break-after-page print:h-[210mm] print:w-[297mm] print:p-12 print:bg-white print:text-black flex flex-col justify-between">
          <div className="space-y-4">
            <div className="inline-block bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full print:border-black print:text-black">
              Executive Profile & Production Works
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white print:text-black">
              YUTA YUMITA
            </h2>
            <p className="text-xl md:text-2xl font-bold text-red-500">
              映画・ドラマ現場統括 20年の実績 ×
              先端AIクリエイティブ・自社IPプロデュース
            </p>
          </div>

          <div className="border-t border-slate-800 my-8 print:border-slate-300" />

          <div className="grid md:grid-cols-2 gap-8 items-end">
            <div>
              <p className="text-sm text-slate-400 print:text-slate-600">
                所属・役職
              </p>
              <p className="text-2xl font-black text-white print:text-black">
                株式会社ALMONDBAGGER 代表取締役
              </p>
              <p className="text-base font-semibold text-slate-300 mt-1 print:text-slate-700">
                プロデューサー / 制作担当：弓田 悠太
              </p>
            </div>
            <div className="text-right print:text-left space-y-1 text-sm text-slate-400 print:text-slate-600">
              <p>
                拠点：東京都八王子市（八王子フィルムコミッション公認連携）
              </p>
              <p>公式サイト：https://www.almondbagger.com</p>
            </div>
          </div>
        </section>

        {/* SLIDE 2: 4大コアスキル */}
        <section className="bg-slate-950 border border-slate-800 rounded-2xl p-10 md:p-14 shadow-2xl print:border-none print:shadow-none print:rounded-none print:break-after-page print:h-[210mm] print:w-[297mm] print:p-12 print:bg-white print:text-black">
          <h3 className="text-xs font-bold uppercase tracking-widest text-red-500">
            Core Expertise
          </h3>
          <h4 className="text-3xl font-black text-white print:text-black mt-1 mb-8">
            4大コアコンピタンス（制作統括力）
          </h4>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 print:bg-slate-50 print:border-slate-300">
              <div className="text-red-500 font-bold text-sm">
                01 / LINE MANAGEMENT
              </div>
              <h5 className="text-lg font-bold text-white print:text-black mt-1">
                現場統括・香盤編成・安全管理
              </h5>
              <p className="text-sm text-slate-400 print:text-slate-700 mt-2 leading-relaxed">
                20年以上の現場キャリア。大型商業映画・地上波連続ドラマの過密スケジュールを香盤編成と現場配慮で最適化。事故・トラブルゼロの運行を徹底。
              </p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 print:bg-slate-50 print:border-slate-300">
              <div className="text-red-500 font-bold text-sm">
                02 / LOCATION & PERMITS
              </div>
              <h5 className="text-lg font-bold text-white print:text-black mt-1">
                八王子FC連携・ロケ撮影許認可
              </h5>
              <p className="text-sm text-slate-400 print:text-slate-700 mt-2 leading-relaxed">
                八王子フィルムコミッションとの公認連携による迅速なロケ誘致・手配。道路使用許可・警察・自治体調整をワンストップで完遂。
              </p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 print:bg-slate-50 print:border-slate-300">
              <div className="text-red-500 font-bold text-sm">
                03 / BUDGET & BACK-OFFICE
              </div>
              <h5 className="text-lg font-bold text-white print:text-black mt-1">
                予算配分・契約管理・クラフト統括
              </h5>
              <p className="text-sm text-slate-400 print:text-slate-700 mt-2 leading-relaxed">
                製作費管理、出演・ロケーション契約、権利処理からケータリング（クラフト）の手配まで、現場が最高のパフォーマンスを出せる環境を構築。
              </p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 print:bg-slate-50 print:border-slate-300">
              <div className="text-red-500 font-bold text-sm">
                04 / CINEMATIC AI PIPELINE
              </div>
              <h5 className="text-lg font-bold text-white print:text-black mt-1">
                制作直結型 AI Previs ＆ AI VFX
              </h5>
              <p className="text-sm text-slate-400 print:text-slate-700 mt-2 leading-relaxed">
                企画段階の「動く絵コンテ（AI
                Previs）」による高速承認と、ロケ撮影後の「AI不要物消去・バレ消し」でポスプロコストを劇的に圧縮。
              </p>
            </div>
          </div>
        </section>

        {/* SLIDE 3: 主要参加実績リスト */}
        <section className="bg-slate-950 border border-slate-800 rounded-2xl p-10 md:p-14 shadow-2xl print:border-none print:shadow-none print:rounded-none print:break-after-page print:h-[210mm] print:w-[297mm] print:p-12 print:bg-white print:text-black">
          <h3 className="text-xs font-bold uppercase tracking-widest text-red-500">
            Track Record
          </h3>
          <h4 className="text-3xl font-black text-white print:text-black mt-1 mb-6">
            商業映画・ドラマ 主要作品実績
          </h4>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-xs md:text-sm">
            <div className="p-2 border-b border-slate-800 print:border-slate-200 flex justify-between items-center">
              <span className="font-bold text-white print:text-black">
                『ソウルメイト』 (2026年 / Netflix映画)
              </span>
              <span className="text-red-400 print:text-red-600 text-xs font-medium">
                制作部・クラフト
              </span>
            </div>
            <div className="p-2 border-b border-slate-800 print:border-slate-200 flex justify-between items-center">
              <span className="font-bold text-white print:text-black">
                『ラブ≠コメディ』 (劇場公開 / Storm Labels)
              </span>
              <span className="text-red-400 print:text-red-600 text-xs font-medium">
                制作部現場統括
              </span>
            </div>
            <div className="p-2 border-b border-slate-800 print:border-slate-200 flex justify-between items-center">
              <span className="font-bold text-white print:text-black">
                『BLドラマに女はいらない』 (FODショートドラマ)
              </span>
              <span className="text-red-400 print:text-red-600 text-xs font-medium">
                制作部
              </span>
            </div>
            <div className="p-2 border-b border-slate-800 print:border-slate-200 flex justify-between items-center">
              <span className="font-bold text-white print:text-black">
                『ジキ／ハイ～愛した男には別の顔があった～』 (FOD)
              </span>
              <span className="text-red-400 print:text-red-600 text-xs font-medium">
                制作部
              </span>
            </div>
            <div className="p-2 border-b border-slate-800 print:border-slate-200 flex justify-between items-center">
              <span className="font-bold text-white print:text-black">
                『地面師たち』 (2024年 / Netflixシリーズ)
              </span>
              <span className="text-red-400 print:text-red-600 text-xs font-medium">
                制作部・ロケ支援
              </span>
            </div>
            <div className="p-2 border-b border-slate-800 print:border-slate-200 flex justify-between items-center">
              <span className="font-bold text-white print:text-black">
                『厨房のありす』 (2024年 / 日本テレビ日曜ドラマ)
              </span>
              <span className="text-red-400 print:text-red-600 text-xs font-medium">
                制作部現場進行
              </span>
            </div>
            <div className="p-2 border-b border-slate-800 print:border-slate-200 flex justify-between items-center">
              <span className="font-bold text-white print:text-black">
                『THE MYSTERY DAY』 (2023年 / 日本テレビ開局70年特番)
              </span>
              <span className="text-red-400 print:text-red-600 text-xs font-medium">
                制作部現場統括
              </span>
            </div>
            <div className="p-2 border-b border-slate-800 print:border-slate-200 flex justify-between items-center">
              <span className="font-bold text-white print:text-black">
                『御手洗家、炎上する』 (2023年 / Netflixシリーズ)
              </span>
              <span className="text-red-400 print:text-red-600 text-xs font-medium">
                制作部バックオフィス
              </span>
            </div>
            <div className="p-2 border-b border-slate-800 print:border-slate-200 flex justify-between items-center">
              <span className="font-bold text-white print:text-black">
                『往生際の意味を知れ！』 (2023年 / MBS/TBSドラマイズム)
              </span>
              <span className="text-red-400 print:text-red-600 text-xs font-medium">
                制作部ロケーション
              </span>
            </div>
            <div className="p-2 border-b border-slate-800 print:border-slate-200 flex justify-between items-center">
              <span className="font-bold text-white print:text-black">
                『憧れの作家は人間じゃありませんでした』 (2023年)
              </span>
              <span className="text-red-400 print:text-red-600 text-xs font-medium">
                制作部
              </span>
            </div>
            <div className="p-2 border-b border-slate-800 print:border-slate-200 flex justify-between items-center">
              <span className="font-bold text-white print:text-black">
                『四角の人たち』 (2022年 / 短編映画)
              </span>
              <span className="text-red-400 print:text-red-600 text-xs font-medium">
                制作部ロケ協力
              </span>
            </div>
            <div className="p-2 border-b border-slate-800 print:border-slate-200 flex justify-between items-center">
              <span className="font-bold text-white print:text-black">
                映画『そばかす』 (2022年 / 劇場公開映画)
              </span>
              <span className="text-red-400 print:text-red-600 text-xs font-medium">
                制作部ロケ支援
              </span>
            </div>
            <div className="p-2 border-b border-slate-800 print:border-slate-200 flex justify-between items-center">
              <span className="font-bold text-white print:text-black">
                『ロマンティック・キラー』 (2022年 / Netflix)
              </span>
              <span className="text-red-400 print:text-red-600 text-xs font-medium">
                制作部
              </span>
            </div>
            <div className="p-2 border-b border-slate-800 print:border-slate-200 flex justify-between items-center">
              <span className="font-bold text-white print:text-black">
                『かばん屋の相続』 (2021年 / WOWOW 連続ドラマW)
              </span>
              <span className="text-red-400 print:text-red-600 text-xs font-medium">
                制作部
              </span>
            </div>
            <div className="p-2 border-b border-slate-800 print:border-slate-200 flex justify-between items-center">
              <span className="font-bold text-white print:text-black">
                『東京リベンジャーズ』 (2021年 / 劇場公開映画)
              </span>
              <span className="text-red-400 print:text-red-600 text-xs font-medium">
                制作部ロケ統括
              </span>
            </div>
            <div className="p-2 border-b border-slate-800 print:border-slate-200 flex justify-between items-center">
              <span className="font-bold text-white print:text-black">
                『誰かが、見ている』 (2020年 / Amazon Original)
              </span>
              <span className="text-red-400 print:text-red-600 text-xs font-medium">
                制作部
              </span>
            </div>
          </div>
        </section>

        {/* SLIDE 4: 自社オリジナルIP・音楽制作 */}
        <section className="bg-slate-950 border border-slate-800 rounded-2xl p-10 md:p-14 shadow-2xl print:border-none print:shadow-none print:rounded-none print:h-[210mm] print:w-[297mm] print:p-12 print:bg-white print:text-black">
          <h3 className="text-xs font-bold uppercase tracking-widest text-red-500">
            Original IP & Creator Works
          </h3>
          <h4 className="text-3xl font-black text-white print:text-black mt-1 mb-8">
            自社フラッグシップIP ＆ 音楽プロデュース
          </h4>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-red-500/30 print:bg-slate-50 print:border-slate-300">
              <span className="text-xs bg-red-600 text-white font-bold px-2.5 py-0.5 rounded">
                FLAGSHIP ORIGINAL IP
              </span>
              <h5 className="text-xl font-black text-white print:text-black mt-2">
                オリジナルアニメMV『いいねの大盤振る舞い』
              </h5>
              <p className="text-xs text-red-400 print:text-red-600 font-bold mt-1">
                企画・作詞・作曲・アニメーション制作：YUMITA（Generated with
                Suno & AI tools）
              </p>
              <p className="text-sm text-slate-300 print:text-slate-700 mt-2 leading-relaxed">
                「昔は槍で領地を奪取、今は親指で通知を連打ッシュ」。戦国の世からタイムスリップした侍が見たSNS社会を描くオリジナルIP。YouTube公開中・近日主要サブスク解禁。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                <span className="text-xs text-slate-400 print:text-slate-600 font-bold">
                  AKBB『aiを持て』
                </span>
                <p className="text-xs text-slate-300 print:text-slate-700 mt-1">
                  「AIの時代だからこそ愛（AI）を持って走る人間が一番強い」。爆発的中華ダンスロック／クラブEDMアンセム（制作協力）。
                </p>
              </div>
              <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                <span className="text-xs text-slate-400 print:text-slate-600 font-bold">
                  AKBB feat. Waterman『WATERMAN』
                </span>
                <p className="text-xs text-slate-300 print:text-slate-700 mt-1">
                  AI ✕ 口パク ✕
                  エアーギターの最新型ロックバンド。ロケーション支援・制作部統括（TikTok
                  / YouTube公開）。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 0;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            background: white !important;
            color: black !important;
          }
        }
      `}</style>
    </div>
  );
}
