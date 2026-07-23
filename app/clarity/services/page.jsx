import ClarityServiceCard from "@/section/Clarity/ClarityServiceCard";
import { clarityServices } from "@/section/Clarity/clarityServicesData";

export const metadata = {
  title: "Clarity Services | Albatroz Solutions",
  description:
    "Transform complexity into clarity and confidence. Explore expert-driven Broadcom Clarity PPM services from Albatroz Solutions.",
};

export default function ClarityServicesPage() {
  return (
    <div className="bg-black">
      <section className="mt-[83px] px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[45px]">
            Clarity <span className="text-[#ff403a]">Services</span>
          </h1>

          <p className="mt-4 max-w-4xl text-base leading-relaxed text-white/90 sm:mt-5 sm:text-lg md:text-[17px]">
            Transform complexity into clarity and confidence. Empower smarter
            decisions with expert-driven solutions.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {clarityServices.map((service) => (
            <ClarityServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}
