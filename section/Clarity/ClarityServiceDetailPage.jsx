import Link from "next/link";
import { Check } from "lucide-react";

/**
 * Merges an orphan "heading-only" section with the very next section
 * (which carries the subtitle + paragraphs/bullets) into ONE section object.
 *
 * Example input (old, flat — two separate objects):
 *   { title: "Why Choose X?", paragraphs: [], bullets: [] }
 *   { title: "A successful implementation...", paragraphs: [], bullets: [...] }
 *
 * Example output (grouped — one object):
 *   { title: "Why Choose X?", subtitle: "A successful implementation...",
 *     paragraphs: [], bullets: [...] }
 */
function groupSections(sections) {
  const grouped = [];
  let i = 0;

  while (i < sections.length) {
    const current = sections[i];
    const isOrphanHeading =
      current.title &&
      (!current.paragraphs || current.paragraphs.length === 0) &&
      (!current.bullets || current.bullets.length === 0);

    const next = sections[i + 1];

    if (isOrphanHeading && next) {
      grouped.push({
        type: next.type || current.type,
        title: current.title,
        subtitle: next.title || "",
        paragraphs: next.paragraphs || [],
        bullets: next.bullets || [],
      });
      i += 2; // consumed both current and next
    } else {
      grouped.push({
        type: current.type,
        title: current.title,
        subtitle: current.subtitle || "",
        paragraphs: current.paragraphs || [],
        bullets: current.bullets || [],
      });
      i += 1;
    }
  }

  return grouped;
}

function SectionBlock({ section }) {
  const hasBullets = section.bullets?.length > 0;
  const hasParagraphs = section.paragraphs?.length > 0;
  const hasSubtitle = Boolean(section.subtitle);
  const isNumbered = /^\d+\./.test(section.title);
  const isWhySection =
    section.title.toLowerCase().startsWith("why ") ||
    section.title.toLowerCase().includes("enables organizations");

  if (!section.title && !hasParagraphs && !hasBullets) return null;

  return (
    <article
      className={`rounded-2xl border p-6 sm:p-8 ${
        isNumbered
          ? "border-[#ff403a]/30 bg-[#0d0d0d]"
          : "border-white/10 bg-[#080808]"
      }`}
    >
      {/* Main heading */}
      {section.title ? (
        <h2
          className={`font-semibold text-white ${
            hasSubtitle || hasParagraphs || hasBullets ? "mb-2" : "mb-0"
          } ${
            isNumbered
              ? "text-xl text-[#ff403a] sm:text-2xl"
              : "text-xl sm:text-[26px]"
          }`}
        >
          {section.title}
        </h2>
      ) : null}

      {/* Subheading, grouped in the same card right under the main heading */}
      {hasSubtitle ? (
        <h3 className="mb-4 text-base font-semibold text-white/90 sm:text-lg">
          {section.subtitle}
        </h3>
      ) : null}

      {hasParagraphs && (
        <div className={`space-y-4 ${hasSubtitle ? "mb-4" : ""}`}>
          {section.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-relaxed text-white/85 sm:text-[17px] md:text-[18px]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {hasBullets && (
        <ul
          className={`grid gap-3 ${
            isWhySection || section.bullets.length > 4
              ? "mt-4 sm:grid-cols-2"
              : "mt-4"
          }`}
        >
          {section.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff403a]/15">
                <Check size={12} className="text-[#ff403a]" strokeWidth={3} />
              </span>
              <span className="text-sm leading-relaxed text-white/80 sm:text-[15px] md:text-base">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default function ClarityServiceDetailPage({ page }) {
  // Merge orphan heading-only blocks with the content block that follows them
  const groupedPageSections = groupSections(page.sections);

  const intro =
    page.intro.length > 0
      ? page.intro
      : groupedPageSections
          .filter((section) => !section.title && section.paragraphs.length)
          .flatMap((section) => section.paragraphs)
          .slice(0, 3);

  const contentSections = groupedPageSections.filter(
    (section) =>
      section.title ||
      (section.paragraphs.length && page.intro.length > 0) ||
      section.bullets.length
  );

  const displaySections =
    page.intro.length === 0
      ? contentSections.filter(
          (section) => section.title || section.bullets.length
        )
      : contentSections;

  return (
    <div className="bg-black">
      <section className="relative mt-[83px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={page.image}
            alt=""
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
          <nav className="mb-6 text-sm text-white/60">
            <Link href="/clarity/services" className="transition-colors hover:text-[#ff403a]">
              Clarity Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/90">{page.title}</span>
          </nav>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff403a]">
            Clarity Services
          </p>

          <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[45px]">
            {page.title}
          </h1>

          <p className="mt-4 max-w-4xl text-lg font-medium leading-relaxed text-white sm:text-xl md:text-[24px]">
            {page.subtitle}
          </p>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6">
        <div className="mx-auto max-w-6xl space-y-5">
          {intro.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-relaxed text-white/85 sm:text-[17px] md:text-[18px]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24">
        <div className="mx-auto max-w-6xl space-y-6">
          {displaySections.map((section) => (
            <SectionBlock
              key={`${section.title}-${section.paragraphs[0] || section.bullets[0]}`}
              section={section}
            />
          ))}

          {page.closing ? (
            <div className="rounded-2xl border border-[#ff403a]/35 bg-gradient-to-br from-[#ff403a]/10 to-transparent p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                {page.closing.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-[17px] md:text-[18px]">
                {page.closing.text}
              </p>
            </div>
          ) : null}

          <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
            <Link
              href={`/contact-us?service=${page.slug}`}
              className="inline-flex items-center justify-center rounded-lg bg-[#ff403a] px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-[#cc2f2a] sm:text-lg"
            >
              Request Service
            </Link>
            <Link
              href="/clarity/services"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-3 text-base font-semibold text-white transition-colors hover:border-[#ff403a] hover:text-[#ff403a] sm:text-lg"
            >
              View All Clarity Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}