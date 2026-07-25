export default function FunctionalityGrid({ title, titleAccent, titleSuffix, items }) {
  return (
    <section className="bg-black px-6 py-16 text-white lg:px-12">
      <div className="mx-auto max-w-7xl">
        <h3 className="text-center text-3xl font-semibold md:text-[40px]">
          {title}{" "}
          {titleAccent ? <span className="text-[#FF403A]">{titleAccent}</span> : null}
          {titleSuffix ? ` ${titleSuffix}` : null}
        </h3>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
                  className={`relative flex h-full min-h-[240px] flex-col p-6 md:min-h-[260px] md:p-8 ${
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
                  <h4 className="text-lg font-semibold md:text-xl">{item.title}</h4>
                  {item.description ? (
                    <p className="mt-3 text-sm font-normal leading-relaxed text-white/85">
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
