import ClarityServiceCard from "@/section/Clarity/ClarityServiceCard";
import { stonebranchServices } from "@/section/Automation/stonebranchServicesData";

export const metadata = {
  title: "Stonebranch Services | Albatroz Solutions",
  description:
    "Explore expert Stonebranch Automation services from Albatroz Solutions — implementation, installation, staff augmentation, and support.",
};

export default function StonebranchServicesPage() {
  return (
    <div className="bg-black">
      <section className="mt-[83px] px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[45px]">
            Stonebranch <span className="text-[#ff403a]">Services</span>
          </h1>

          <p className="mt-4 max-w-4xl text-base leading-relaxed text-white/90 sm:mt-5 sm:text-lg md:text-[20px]">
            Leveraging our extensive experience in designing and implementing
            Stonebranch Automation solutions, we help organizations streamline
            enterprise workload automation through industry best practices and
            scalable architectures.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {stonebranchServices.map((service) => (
            <ClarityServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}
