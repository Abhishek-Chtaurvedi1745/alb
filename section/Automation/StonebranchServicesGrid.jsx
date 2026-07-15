import Link from "next/link";
import { stonebranchServices } from "./stonebranchServicesData";

export default function StonebranchServicesGrid({
  showViewAllLink = true,
  className = "",
}) {
  return (
    <section className={`bg-black px-6 py-16 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-semibold text-white md:text-[40px]">
          Comprehensive Stonebranch{" "}
          <span className="text-[#FF403A]">Services</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4">
          {stonebranchServices.map((service, index) => {
            const isLastInRow4 = (index + 1) % 4 === 0;
            const isLastOverall = index === stonebranchServices.length - 1;

            return (
              <Link
                key={service.slug}
                href={service.href}
                className={`group flex flex-col items-center gap-3 px-4 py-8 text-center transition-colors hover:bg-white/[0.04]
                  ${!isLastInRow4 && !isLastOverall ? "md:border-r border-white/10" : ""}
                `}
              >
                <img
                  src={service.icon}
                  alt=""
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <p className="max-w-[140px] text-[20px] leading-snug text-white transition-colors group-hover:text-[#FF403A] md:text-[22px]">
                  {service.label}
                </p>
              </Link>
            );
          })}
        </div>

        {showViewAllLink && (
          <div className="mt-10 text-center">
            <Link
              href="/stonebranch/services"
              className="inline-block rounded-lg border border-[#FF403A]/40 bg-[#111111] px-8 py-3 text-lg font-semibold text-white transition hover:border-[#FF403A] hover:text-[#FF403A]"
            >
              View All Stonebranch Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
