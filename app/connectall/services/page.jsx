import ConnectAllServiceCard from "@/section/ConnectAll/ConnectAllServiceCard";
import { connectAllServices } from "@/section/ConnectAll/connectAllServicesData";

export const metadata = {
  title: "ConnectALL Services | Albatroz Solutions",
  description:
    "Explore expert ConnectALL integration services from Albatroz Solutions — assessment, implementation, workflow design, enterprise use cases, and platform maintenance.",
};

export default function ConnectAllServicesPage() {
  return (
    <div className="bg-black">
      <section className="mt-[83px] px-4 py-8 sm:px-6 sm:py-10 md:py-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[40px]">
            ConnectALL <span className="text-[#ff403a]">Services</span>
          </h1>

          <p className="mt-4 max-w-4xl text-base leading-relaxed text-white/90 sm:mt-5 sm:text-lg md:text-[17px]">
            Connect your enterprise applications, automate workflows, and
            eliminate information silos with expert-driven ConnectALL services.
          </p>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 sm:pb-14 md:pb-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-6">
          {connectAllServices.map((service) => (
            <ConnectAllServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}
