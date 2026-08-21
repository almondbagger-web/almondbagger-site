"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { Bounce } from "@/components/Motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#works", label: "Works" },
  { href: "#price", label: "Price" },
  { href: "#company", label: "Company" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed inset-x-0 top-0 z-50 section-pad pt-3"
      >
        <div
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 md:px-5",
            scrolled
              ? "glass-light shadow-[0_12px_40px_rgba(236,72,153,0.15)] ring-1 ring-pink/15"
              : "bg-white/70 shadow-sm ring-1 ring-black/5",
          )}
        >
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#top");
            }}
            aria-label="ALMONDBAGGER トップへ"
          >
            <BrandLogo priority />
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="rounded-full px-3 py-2 text-sm font-bold text-foreground/70 transition hover:bg-soft hover:text-pink"
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
                className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-rose to-pink px-4 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(244,63,94,0.35)] md:inline-flex"
              >
                <Phone className="h-4 w-4" />
                24H相談
              </a>
            </Bounce>
            <button
              type="button"
              aria-label="メニュー"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-soft text-pink md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col justify-center gap-2 px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className="font-display text-3xl font-bold text-foreground"
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
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-pink px-5 py-3 font-bold text-white"
              >
                <Phone className="h-4 w-4" />
                24H相談
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
