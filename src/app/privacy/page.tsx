import type { Metadata } from "next";
import Link from "next/link";
import { companyInfo } from "@/data/works";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${companyInfo.shortName}のプライバシーポリシーです。`,
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl section-pad py-16 md:py-24">
        <Link
          href="/"
          className="text-sm tracking-wide text-muted transition-colors hover:text-foreground"
        >
          ← トップへ戻る
        </Link>

        <h1 className="mt-10 font-serif text-3xl font-medium tracking-wide md:text-4xl">
          プライバシーポリシー
        </h1>
        <p className="mt-4 text-sm text-muted">
          {companyInfo.name}（以下「当社」）は、お問い合わせ等を通じて取得する個人情報の取扱いについて、以下のとおり定めます。
        </p>

        <div className="mt-12 space-y-10 text-sm leading-relaxed text-muted">
          <section>
            <h2 className="font-serif text-lg text-foreground">1. 取得する情報</h2>
            <p className="mt-3">
              お問い合わせフォーム等を通じて、お名前、会社名、メールアドレス、電話番号、ご相談内容その他、お客様が入力された情報を取得することがあります。
            </p>
          </section>
          <section>
            <h2 className="font-serif text-lg text-foreground">2. 利用目的</h2>
            <p className="mt-3">
              取得した個人情報は、お問い合わせへの回答、サービスのご案内・ご提案、業務上必要なご連絡のために利用します。
            </p>
          </section>
          <section>
            <h2 className="font-serif text-lg text-foreground">3. 第三者提供</h2>
            <p className="mt-3">
              法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供しません。
            </p>
          </section>
          <section>
            <h2 className="font-serif text-lg text-foreground">4. 安全管理</h2>
            <p className="mt-3">
              当社は、個人情報の漏えい、滅失またはき損の防止その他の安全管理のため、合理的な措置を講じます。
            </p>
          </section>
          <section>
            <h2 className="font-serif text-lg text-foreground">5. お問い合わせ窓口</h2>
            <p className="mt-3">
              個人情報の取扱いに関するお問い合わせは、
              <a
                href={companyInfo.emailHref}
                className="mx-1 text-foreground underline-offset-4 hover:underline"
              >
                {companyInfo.email}
              </a>
              までご連絡ください。
            </p>
          </section>
          <section>
            <h2 className="font-serif text-lg text-foreground">6. 改定</h2>
            <p className="mt-3">
              本ポリシーの内容は、必要に応じて改定することがあります。改定後の内容は、本ページに掲載した時点から効力を生じます。
            </p>
          </section>
        </div>

        <p className="mt-14 text-sm text-muted">
          {companyInfo.name}
          <br />
          {companyInfo.postal} {companyInfo.address}
        </p>
      </div>
    </main>
  );
}
