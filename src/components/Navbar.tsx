"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { Bounce } from "@/components/Motion";
import { companyInfo, navLinks } from "@/data/works";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 section-pad pt-2 md:pt-3"
      >
        <div
          className={cn(
            "mx-auto flex max-w-[92rem] flex-col gap-1 rounded-2xl px-3 py-2.5 transition-all duration-300 sm:px-4 md:px-5 md:py-3",
            scrolled
              ? "lux-glass border border-white/80 shadow-sm"
              : "border border-transparent bg-white/90 backdrop-blur-sm",
          )}
        >
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#top");
              }}
              aria-label={`${companyInfo.shortName} トップへ`}
              className="min-w-0 shrink-0"
            >
              <BrandLogo variant="header" priority />
            </a>

            <div className="ml-auto flex shrink-0 items-center gap-2 md:gap-3">
              <Bounce>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav("#contact");
                  }}
                  className="btn-primary nav-cta-btn hidden sm:inline-flex"
                >
                  <Phone className="h-4 w-4 md:h-5 md:w-5" />
                  お問い合わせ
                </a>
              </Bounce>
              <button
                type="button"
                aria-label="メニュー"
                onClick={() => setOpen((v) => !v)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/80 xl:hidden"
              >
                {open ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <nav
            aria-label="メインナビゲーション"
            className="hidden items-center justify-center gap-x-1 gap-y-1 border-t border-border/50 pt-2 xl:flex 2xl:gap-x-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="nav-impact-link"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 32 }}
            transition={{ ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white/97 backdrop-blur-sm xl:hidden"
          >
            <div className="flex h-full flex-col justify-center gap-1 px-6 pt-28 sm:px-10">
              <div className="mb-8">
                <BrandLogo variant="header" />
              </div>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className="nav-impact-link nav-impact-link--mobile"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav("#contact");
                }}
                className="btn-primary nav-cta-btn mt-8 w-fit"
              >
                <Phone className="h-5 w-5" />
                お問い合わせ
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
