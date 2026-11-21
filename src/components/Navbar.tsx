"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { companyInfo, navLinks } from "@/data/works";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
          scrolled
            ? "border-border bg-white/95 shadow-[0_1px_0_rgba(17,19,21,0.03)] backdrop-blur-md"
            : "border-transparent bg-white/90 backdrop-blur-sm",
        )}
      >
        <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 section-pad md:h-[4.75rem]">
          <a
            href="#top"
            aria-label={`${companyInfo.shortName} トップへ`}
            className="min-w-0 shrink-0"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <BrandLogo variant="header" priority />
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="px-3 py-2 text-[0.8125rem] font-medium tracking-[0.06em] text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#contact");
              }}
              className="btn-dark ml-3"
            >
              お問い合わせ
            </a>
          </nav>

          <button
            type="button"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 bg-white lg:hidden">
          <div className="flex h-full flex-col px-6 pb-10 pt-24">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className="border-b border-border py-4 font-serif text-xl tracking-wide text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
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
