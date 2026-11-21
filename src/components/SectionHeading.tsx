import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  english: string;
  japanese: string;
  id?: string;
  tone?: "light" | "dark" | "gold";
  className?: string;
};

export default function SectionHeading({
  english,
  japanese,
  id,
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("section-heading", className)}>
      <p
        aria-hidden
        className={cn(
          "section-heading__bg",
          tone === "dark" && "section-heading__bg--on-dark",
          tone === "gold" && "section-heading__bg--gold",
        )}
      >
        {english}
      </p>
      <h2
        id={id}
        className={cn(
          "section-heading__title",
          tone === "dark" && "section-heading__title--on-dark",
        )}
      >
        {japanese}
      </h2>
    </div>
  );
}
