import Link from "next/link";
import { connectAllServices } from "./connectAllServicesData";

export default function ConnectAllServicesGrid({
  showViewAllLink = true,
  className = "",
}) {
  return (
    <section className={`bg-black px-6 py-8 md:py-12 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-5 text-center text-3xl font-semibold text-white md:mb-6 md:text-[40px]">
          Comprehensive ConnectALL{" "}
          <span className="text-[#FF403A]">Services</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {connectAllServices.map((service, index) => {
            const isLastInRow4 = (index + 1) % 4 === 0;
            const isLastOverall = index === connectAllServices.length - 1;

            return (
              <Link
                key={service.slug}
                href={service.href}
                className={`group flex flex-col items-center gap-2 px-3 py-5 text-center transition-colors hover:bg-white/[0.04] sm:gap-3 sm:px-4 sm:py-6
                  ${!isLastInRow4 && !isLastOverall ? "sm:border-r border-white/10" : ""}
                  ${index < 4 ? "border-b border-white/10" : ""}
                `}
              >
                <img
                  src={service.icon}
                  alt=""
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <p className="max-w-[140px] text-[17px] leading-snug text-white transition-colors group-hover:text-[#FF403A] md:text-[22px]">
                  {service.label}
                </p>
              </Link>
            );
          })}
        </div>

        {showViewAllLink && (
          <div className="mt-6 text-center md:mt-8">
            <Link
              href="/connectall/services"
              className="inline-block rounded-lg border border-[#FF403A]/40 bg-[#111111] px-8 py-3 text-lg font-semibold text-white transition hover:border-[#FF403A] hover:text-[#FF403A]"
            >
              View All ConnectALL Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
