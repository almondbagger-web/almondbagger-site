"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { navLinks } from "@/data/works";
import { cn } from "@/lib/utils";

type NavbarProps = {
  forceLight?: boolean;
};

export default function Navbar({ forceLight = false }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const lightBar = forceLight || !isHome || scrolled || open;

  const handleNav = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      if (isHome) {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`/${href}`);
      }
      return;
    }
    router.push(href);
  };

  const linkClass = cn(
    "px-2 py-2 text-[0.72rem] font-medium tracking-[0.05em] transition-colors xl:px-2.5 xl:text-[0.78rem]",
    lightBar
      ? "text-muted hover:text-foreground"
      : "text-white/70 hover:text-white",
  );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
          lightBar
            ? "border-slate-300/70 bg-white/80 shadow-[0_1px_0_rgba(18,21,28,0.04)] backdrop-blur-md"
            : "border-white/10 bg-[#060913]/65 backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-2 section-pad sm:gap-4 md:h-[4.75rem]">
          <Link
            href="/"
            title="株式会社ALMONDBAGGER | 八王子フィルムコミッション × 制作部 × AIクリエイター"
            aria-label="株式会社ALMONDBAGGER | 八王子フィルムコミッション × 制作部 × AIクリエイター"
            className={cn(
              "flex min-w-0 max-w-[min(100%,18.5rem)] items-center gap-2 sm:max-w-none sm:gap-3",
              !lightBar && "rounded-sm bg-white/95 px-1.5 py-1 sm:px-2",
            )}
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
              setOpen(false);
            }}
          >
            <BrandLogo variant="header" priority />
            <span className="min-w-0 leading-tight">
              <span className="block font-display text-base font-extrabold tracking-widest text-foreground sm:text-lg md:text-xl">
                ALMONDBAGGER
              </span>
              <span className="mt-0.5 block truncate text-[9px] tracking-wide text-[#A68A56] sm:text-[10px] md:text-xs">
                八王子フィルムコミッション × 制作部 × AIクリエイター
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-0.5 xl:flex"
            aria-label="メインナビゲーション"
          >
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className={linkClass}
                >
                  {link.label}
                </a>
              ),
            )}
            <a
              href={isHome ? "#contact" : "/#contact"}
              onClick={(e) => {
                e.preventDefault();
                handleNav("#contact");
              }}
              className={cn("ml-2", lightBar ? "btn-dark" : "btn-on-dark")}
            >
              お問い合わせ
            </a>
          </nav>

          <button
            type="button"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center border xl:hidden",
              lightBar
                ? "border-border text-foreground"
                : "border-white/25 text-white",
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 bg-white xl:hidden">
          <div className="flex h-full flex-col px-6 pb-10 pt-24">
            <nav className="flex flex-col gap-1" aria-label="モバイルナビゲーション">
              {navLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-border py-4 font-serif text-xl tracking-wide text-foreground"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={isHome ? link.href : `/${link.href}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="border-b border-border py-4 font-serif text-xl tracking-wide text-foreground"
                  >
                    {link.label}
                  </a>
                ),
              )}
              <a
                href={isHome ? "#contact" : "/#contact"}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav("#contact");
                }}
                className="btn-dark mt-8 w-full"
              >
                お問い合わせ
              </a>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
