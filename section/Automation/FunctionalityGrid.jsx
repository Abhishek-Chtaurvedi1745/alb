export default function FunctionalityGrid({ title, titleAccent, items }) {
  return (
    <section className="bg-black px-6 py-16 text-white lg:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-semibold md:text-[40px]">
          {title}{" "}
          {titleAccent ? <span className="text-[#FF403A]">{titleAccent}</span> : null}
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const isIconCard = item.icon && !item.image;

            return (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-2xl border border-[#FF403A]/35 bg-[#0a0a0a] ${
                  item.fullWidth ? "lg:col-span-3" : ""
                } ${item.featured ? "min-h-[220px] lg:min-h-[260px]" : isIconCard ? "min-h-[240px]" : "min-h-[200px]"}`}
              >
                {item.image ? (
                  <>
                    <img
                      src={item.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-35 transition duration-500 group-hover:scale-105 group-hover:opacity-45"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />
                  </>
                ) : null}

                <div
                  className={`relative flex h-full flex-col p-6 md:p-8 ${
                    isIconCard
                      ? "items-center justify-center text-center"
                      : "justify-end"
                  }`}
                >
                  {item.icon ? (
                    <img
                      src={item.icon}
                      alt=""
                      className={
                        isIconCard
                          ? "mb-5 h-[60px] w-[60px] object-contain transition-transform duration-300 group-hover:scale-110"
                          : "mb-4 h-10 w-10 object-contain"
                      }
                    />
                  ) : null}
                  <h3 className="text-lg font-semibold md:text-xl">{item.title}</h3>
                  {item.description ? (
                    <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">
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
