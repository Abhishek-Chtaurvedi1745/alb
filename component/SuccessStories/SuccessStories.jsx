export default function SuccessStories({
  stories,
  eyebrow = "Proven Impact",
  title = "Success",
  titleAccent = "Stories",
}) {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <hr className="border-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <div className="pointer-events-none absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#FF403A]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-20 h-48 w-48 rounded-full bg-[#FF403A]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20 lg:px-12">
        <div className="mb-12 flex flex-col items-center gap-4 text-center md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FF403A]">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-semibold leading-tight md:text-[42px]">
            {title}{" "}
            <span className="text-[#FF403A]">{titleAccent}</span>
          </h2>
          <div className="h-1 w-16 rounded-full bg-gradient-to-r from-transparent via-[#FF403A] to-transparent" />
        </div>

        <div className="relative">
          <div className="absolute bottom-8 left-[19px] top-8 hidden w-px bg-gradient-to-b from-[#FF403A] via-[#FF403A]/30 to-transparent md:block" />

          <div className="space-y-6 md:space-y-8">
            {stories.map((story, index) => (
              <article
                key={story.title}
                className="group relative md:pl-16"
              >
                <div className="absolute left-0 top-8 z-10 hidden h-10 w-10 items-center justify-center rounded-full border-2 border-[#FF403A] bg-black text-sm font-bold text-white shadow-[0_0_20px_rgba(255,64,58,0.25)] transition-transform duration-300 group-hover:scale-110 md:flex">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] transition-all duration-300 hover:border-[#FF403A]/45 hover:shadow-[0_0_40px_rgba(255,64,58,0.08)]">
                  <div className="h-1 w-full bg-gradient-to-r from-[#FF403A] via-[#FF403A]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="p-6 md:p-8">
                    <div className="mb-4 flex items-start gap-4 md:hidden">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#FF403A]/60 bg-[#FF403A]/10 text-xs font-bold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="pt-1 text-lg font-semibold leading-snug text-white">
                        {story.title}
                      </h3>
                    </div>

                    <h3 className="mb-4 hidden text-xl font-semibold leading-snug text-white md:block md:text-2xl">
                      {story.title}
                    </h3>

                    <div className="space-y-4">
                      {story.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 40)}
                          className="text-sm leading-relaxed text-white/85 md:text-base"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
