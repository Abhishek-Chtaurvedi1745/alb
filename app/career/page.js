import CareerTestimonials from "../../section/Career/CareerTestimonials";
import CommonBanner from "../../component/common/Banner";

const vacancies = [
  {
    id: 1,
    title: "Clarity PPM Consultant",
    type: "Full-time · Remote / Hybrid",
  },
  {
    id: 2,
    title: "Clarity PPM Consultant",
    type: "Full-time · Remote / Hybrid",
  },
];

function page() {
  return (
    <div>
      <CommonBanner image="https://res.cloudinary.com/ddcx08e0s/image/upload/v1788263037/albatroz/crr.png" title="Career" highlight="" />

      <section className="w-full bg-black py-10">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h3 className="text-3xl font-semibold text-white md:text-[40px]">
            Join Our <span className="text-[#FF403A]">Team!</span>
          </h3>

          <p className="text-[13px] font-normal leading-8 text-white md:text-[16px]">
            Come join our vibrant professional services team if you have a niche
            for consulting &amp; enjoy working closely with customers in solving
            their business problems.
          </p>

          <p className="mt-4 text-[13px] font-normal leading-8 text-white md:text-[16px]">
            Albatroz&apos;s truly flexible work culture, challenging
            opportunities to learn &amp; grow in a startup environment is what we
            are known for. If this resonates with you, hit us with your resume
            for the openings listed.
          </p>
        </div>
      </section>

      <section id="open-roles" className="w-full bg-black py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a0a]">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF403A] to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#FF403A]/10 blur-3xl"
            />

            <div className="relative flex flex-col gap-8 p-8 md:gap-10 md:p-12">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#FF403A]">
                    We&apos;re hiring
                  </p>
                  <h3 className="text-[34px] font-semibold leading-tight text-white md:text-[40px]">
                    Current Vacancies
                  </h3>
                </div>
                <span className="w-fit rounded-full border border-white/25 px-5 py-1.5 text-sm font-medium text-white/80">
                  {vacancies.length} open{" "}
                  {vacancies.length === 1 ? "position" : "positions"}
                </span>
              </div>

              <ul className="flex flex-col gap-3">
                {vacancies.map((job) => (
                  <li key={job.id}>
                    <div className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/40 px-5 py-5 transition-all duration-300 hover:border-[#FF403A]/45 hover:bg-[#FF403A]/[0.04] sm:flex-row sm:items-center sm:justify-between sm:px-6">
                      <div className="flex min-w-0 items-start gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#FF403A]/50 bg-[#FF403A]/10 text-sm font-semibold text-[#FF403A] transition-colors group-hover:border-[#FF403A] group-hover:bg-[#FF403A] group-hover:text-white">
                          {job.id}
                        </span>
                        <div className="min-w-0">
                          <p className="text-base font-medium text-white md:text-lg">
                            {job.title}
                          </p>
                          <p className="mt-1 text-sm text-white/55">{job.type}</p>
                        </div>
                      </div>

                      <a
                        href={`mailto:info@albatrozsolutions.com?subject=${encodeURIComponent(
                          `Application — ${job.title}`
                        )}`}
                        className="inline-flex w-fit shrink-0 items-center justify-center rounded-full border border-[#FF403A] bg-[#FF403A] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-transparent hover:text-[#FF403A] sm:ml-4"
                      >
                        Apply
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CareerTestimonials />
    </div>
  );
}

export default page