"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/works";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative scroll-mt-24 overflow-hidden bg-surface section-y md:scroll-mt-28"
    >
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" />

      <div className="relative mx-auto max-w-3xl section-pad">
        <div className="text-center">
          <p className="text-[0.7rem] font-medium tracking-[0.24em] text-gold">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="mt-4 font-serif text-2xl font-medium tracking-wide text-foreground md:text-3xl lg:text-4xl"
          >
            よくあるご質問
          </h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-muted">
            制作部・縦横同時制作・AI映像について、よくいただくご質問です。
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqItems.map((item, index) => {
            const open = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={item.question}
                className="border border-border bg-white/90 backdrop-blur-md"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    <span className="font-serif text-[0.95rem] font-medium tracking-wide text-foreground md:text-base">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 text-gold transition-transform duration-300",
                        open && "rotate-180",
                      )}
                      aria-hidden
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!open}
                  className={cn(!open && "hidden")}
                >
                  <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted md:px-6 md:py-5">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
