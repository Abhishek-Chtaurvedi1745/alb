import AutomationServiceCard from "@/section/Automation/AutomationServiceCard";
import { automicServices } from "@/section/Automation/automicServicesData";

export const metadata = {
  title: "Automic Automation Services | Albatroz Solutions",
  description:
    "Transform complexity into clarity and confidence. Explore expert-driven Automic Automation services from Albatroz Solutions.",
};

export default function AutomicAutomationServicesPage() {
  return (
    <div className="bg-black">
      <section className="mt-[83px] px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[45px]">
              Automic Automation <span className="text-[#ff403a]">Services</span>
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:mt-5 sm:text-lg md:text-[20px]">
              Transform complexity into clarity and confidence. Empower smarter
              decisions with expert-driven solutions.
            </p>
          </div>

          <img
            src="/images/Automic-by-broadcom.webp"
            alt="Automic by Broadcom"
            className="h-12 w-auto shrink-0 opacity-90 sm:h-14 md:h-16"
          />
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {automicServices.map((service, index) => (
            <div
              key={service.slug}
              className={
                index === automicServices.length - 1
                  ? "md:col-span-2 md:mx-auto md:w-full md:max-w-2xl"
                  : ""
              }
            >
              <AutomationServiceCard service={service} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
