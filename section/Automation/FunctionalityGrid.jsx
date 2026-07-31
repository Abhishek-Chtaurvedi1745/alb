export default function FunctionalityGrid({
  title,
  titleAccent,
  titleSuffix,
  items,
  compact = false,
}) {
  return (
    <section
      className={`bg-black px-6 text-white lg:px-12 ${
        compact ? "py-8 md:py-12" : "py-16"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <h1 className="text-center text-3xl font-semibold md:text-[40px]">
          {title}{" "}
          {titleAccent ? <span className="text-[#FF403A]">{titleAccent}</span> : null}
          {titleSuffix ? ` ${titleSuffix}` : null}
        </h1>

        <div
          className={`grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-5 lg:grid-cols-3 ${
            compact ? "mt-6 md:mt-8" : "mt-8 sm:mt-10"
          }`}
        >
          {items.map((item, index) => {
            const isCentered = Boolean(item.centered);
            const isLast = index === items.length - 1;
            const shouldCenterOrphan =
              isLast && !item.fullWidth && items.length % 3 === 1;
            const shouldCenterOrphanMd =
              isLast && !item.fullWidth && items.length % 2 === 1;

            return (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-2xl border-0 bg-[#0a0a0a] ${
                  item.fullWidth ? "md:col-span-2 lg:col-span-3" : ""
                } ${
                  shouldCenterOrphanMd
                    ? "md:col-span-2 md:mx-auto md:w-[calc(50%-0.625rem)] lg:col-span-1 lg:mx-0 lg:w-full"
                    : ""
                } ${shouldCenterOrphan ? "lg:col-start-2" : ""}`}
              >
                {item.image ? (
                  <>
                    <img
                      src={item.image}
                      alt=""
                      className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
                        item.fullWidth
                          ? "scale-105 object-[75%_center] opacity-90"
                          : "opacity-85"
                      }`}
                    />
                    <div
                      className={`pointer-events-none absolute inset-0 ${
                        item.fullWidth
                          ? "bg-gradient-to-r from-black/80 from-10% via-black/55 via-45% to-transparent"
                          : "bg-gradient-to-b from-black/55 via-black/50 to-black/80"
                      }`}
                    />
                  </>
                ) : null}

                <div
                  className={`relative flex h-full flex-col p-5 md:p-8 ${
                    compact
                      ? "min-h-[180px] sm:min-h-[200px] md:min-h-[220px]"
                      : "min-h-[200px] sm:min-h-[220px] md:min-h-[260px]"
                  } ${
                    isCentered
                      ? "items-center justify-center text-center"
                      : "items-start justify-start text-left"
                  } ${item.fullWidth ? "md:min-h-[220px] lg:max-w-3xl" : ""}`}
                >
                  {item.icon ? (
                    <img
                      src={item.icon}
                      alt=""
                      className={
                        isCentered
                          ? "mb-5 h-[60px] w-[60px] object-contain transition-transform duration-300 group-hover:scale-110"
                          : "mb-4 h-11 w-11 object-contain transition-transform duration-300 group-hover:scale-110 md:h-12 md:w-12"
                      }
                    />
                  ) : null}
                  <h4 className="text-base font-semibold sm:text-lg md:text-[20px]">
                    {item.title}
                  </h4>
                  {item.description ? (
                    <p className="mt-2 text-sm font-normal leading-relaxed text-white/85 sm:mt-3">
                      {item.description}
                    </p>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
