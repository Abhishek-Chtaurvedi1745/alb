import Link from "next/link";
import { connectAllServices } from "./connectAllServicesData";

export default function ConnectAllServicesGrid({
  showViewAllLink = true,
  className = "",
}) {
  return (
    <section className={`bg-black py-16 px-6 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-semibold text-white md:text-[40px]">
          Comprehensive ConnectALL{" "}
          <span className="text-[#FF403A]">Services</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
          {connectAllServices.map((service, index) => {
            const isLastInRow5 = (index + 1) % 5 === 0;
            const isLastOverall = index === connectAllServices.length - 1;

            return (
              <Link
                key={service.slug}
                href={service.href}
                className={`group flex flex-col items-center gap-3 px-4 py-8 text-center transition-colors hover:bg-white/[0.04]
                  ${!isLastInRow5 && !isLastOverall ? "sm:border-r border-white/10" : ""}
                  ${index < 5 ? "border-b border-white/10 sm:border-b md:border-b" : ""}
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
