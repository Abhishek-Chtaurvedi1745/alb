import BlendedSectionImage from "@/component/Media/BlendedSectionImage";

export default function PPMComprehensiveFeatureBlock({
  title,
  accent,
  intro,
  items,
  imageSrc,
  imageAlt,
  fade = "left",
  animate = false,
  mobileImageFirst = false,
  desktopImageFirst = false,
}) {
  const content = (
    <div className="h-full rounded-2xl border border-white/10 bg-[#0c0c0c] max-md:rounded-none max-md:border-0 max-md:border-t max-md:border-white/10 md:p-6 lg:p-8">
      <div className="max-md:p-4">
        <h3 className="mb-3 text-xl font-semibold leading-tight max-md:text-[22px] md:mb-4 md:text-2xl lg:text-[35px]">
          {title} <span className="text-[#FF403A]">{accent}</span>
        </h3>
        <p className="mb-4 text-[13px] leading-relaxed text-white/90 max-md:mb-5 md:mb-6 md:text-sm">
          {intro}
        </p>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-black/50 p-3 transition-colors hover:border-[#FF403A]/40 max-md:p-3.5"
            >
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#ff403a]/15">
                  <img src="/images/crt.svg" alt="" className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-snug text-[#FF403A]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-white/80 sm:text-[13px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const image = (
    <div
      className={`relative overflow-hidden max-md:aspect-[16/10] max-md:min-h-[200px] md:rounded-2xl md:border md:border-white/10 ${
        desktopImageFirst ? "lg:order-1" : "lg:order-2"
      } ${mobileImageFirst ? "max-md:order-1" : "max-md:order-2"}`}
    >
      <BlendedSectionImage
        src={imageSrc}
        alt={imageAlt}
        fade={fade}
        animate={animate}
      />
    </div>
  );

  const contentWrapper = (
    <div
      className={`h-full ${
        desktopImageFirst ? "lg:order-2" : "lg:order-1"
      } ${mobileImageFirst ? "max-md:order-2" : "max-md:order-1"}`}
    >
      {content}
    </div>
  );

  return (
    <article className="grid items-stretch gap-8 max-md:overflow-hidden max-md:rounded-2xl max-md:border max-md:border-[#ff403a]/20 max-md:bg-[#0a0a0a] max-md:shadow-[0_8px_32px_rgba(255,64,58,0.06)] lg:grid-cols-2 lg:items-center lg:gap-12">
      {contentWrapper}
      {image}
    </article>
  );
}
