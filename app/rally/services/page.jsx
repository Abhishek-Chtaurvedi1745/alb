import RallyServiceCard from "@/section/Rally/RallyServiceCard";
import { rallyServices } from "@/section/Rally/rallyServicesData";

export const metadata = {
  title: "Rally Services | Albatroz Solutions",
  description:
    "Explore Rally implementation, integration, and support services from Albatroz Solutions.",
};

export default function RallyServicesPage() {
  return (
    <div className="bg-black">
      <section className="mt-[83px] px-4 py-8 sm:px-6 sm:py-10 md:py-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[40px]">
            Rally <span className="text-[#ff403a]">Services</span>
          </h1>

          <p className="mt-4 max-w-4xl text-base leading-relaxed text-white/90 sm:mt-5 sm:text-lg md:text-[17px]">
            End-to-end services to implement, integrate, and support Rally for enterprise Agile delivery.
          </p>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 sm:pb-14 md:pb-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-6">
          {rallyServices.map((service) => (
            <RallyServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}
