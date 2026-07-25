"use client";

import Link from "next/link";

function ServiceIconGrid({ services, columns }) {
  const colClass =
    columns === 5
      ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-5"
      : "grid-cols-2 md:grid-cols-4";
  const itemsPerRow = columns;

  return (
    <div className={`grid ${colClass}`}>
      {services.map((service, index) => {
        const isLastInRow = (index + 1) % itemsPerRow === 0;
        const isLastOverall = index === services.length - 1;

        return (
          <Link
            key={service.slug}
            href={service.href}
            className={`group flex flex-col items-center gap-3 px-4 py-8 text-center transition-colors hover:bg-white/[0.04]
              ${!isLastInRow && !isLastOverall ? "border-white/10 sm:border-r md:border-r" : ""}
              ${index < itemsPerRow ? "border-b border-white/10 sm:border-b md:border-b" : ""}
            `}
          >
            <img
              src={service.icon}
              alt=""
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <p className="max-w-[140px] text-[17px] leading-snug text-white transition-colors group-hover:text-[#FF403A] md:text-[22px]">
              {service.label || service.title}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

export default function AutomationServicesTabSection({
  title,
  titleAccent = "Services",
  services,
  columns = 4,
  showViewAllLink = false,
  viewAllHref = "",
  viewAllLabel = "View All Services",
  className = "",
}) {
  return (
    <section className={`bg-black px-6 py-16 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-12 text-center text-3xl font-semibold text-white md:text-[40px]">
          {title}{" "}
          <span className="text-[#FF403A]">{titleAccent}</span>
        </h1>

        <ServiceIconGrid services={services} columns={columns} />

        {showViewAllLink && viewAllHref && (
          <div className="mt-10 text-center">
            <Link
              href={viewAllHref}
              className="inline-block rounded-lg border border-[#FF403A]/40 bg-[#111111] px-8 py-3 text-lg font-semibold text-white transition hover:border-[#FF403A] hover:text-[#FF403A]"
            >
              {viewAllLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
