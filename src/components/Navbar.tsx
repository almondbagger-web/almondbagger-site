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
        className="fixed inset-x-0 top-0 z-50 section-pad pt-3"
      >
        <div
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 md:px-5 md:py-3.5",
            scrolled
              ? "lux-glass border border-white/80 shadow-sm"
              : "border border-transparent bg-white/85 backdrop-blur-sm",
          )}
        >
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#top");
            }}
            aria-label={`${companyInfo.shortName} トップへ`}
            className="shrink-0"
          >
            <BrandLogo priority />
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="rounded-full px-2.5 py-2 text-xs font-semibold text-foreground/60 transition hover:bg-brand-soft hover:text-brand xl:px-3"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Bounce>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav("#contact");
                }}
                className="btn-primary hidden text-xs md:inline-flex"
              >
                <Phone className="h-3.5 w-3.5" />
                お問い合わせ
              </a>
            </Bounce>
            <button
              type="button"
              aria-label="メニュー"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/80 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 32 }}
            transition={{ ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white/97 backdrop-blur-sm lg:hidden"
          >
            <div className="flex h-full flex-col justify-center gap-2 px-8">
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
                  className="py-3 text-lg font-semibold text-foreground"
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
                className="btn-primary mt-6 w-fit"
              >
                <Phone className="h-4 w-4" />
                お問い合わせ
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
