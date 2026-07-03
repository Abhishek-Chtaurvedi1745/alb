export default function AlternatingSection({ sections }) {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        {sections.map((section, index) => (
          <div
            key={section.title}
            className={`grid items-center gap-10 lg:grid-cols-2 ${
              index > 0 ? "mt-20 border-t border-white/10 pt-20" : ""
            }`}
          >
            <div className={section.imageRight ? "" : "lg:order-2"}>
              <h2 className="text-3xl font-semibold leading-tight md:text-[40px]">
                {section.title}{" "}
                <span className="text-[#FF403A]">{section.titleAccent}</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/90 md:text-[18px]">
                {section.description}
              </p>
            </div>
            <div className={`flex justify-center ${section.imageRight ? "" : "lg:order-1"}`}>
              <img
                src={section.image}
                alt={section.imageAlt}
                className="w-full max-w-lg object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
