import Link from "next/link";

export default function SolutionHero({
  title,
  titleAccent,
  image,
  imageAlt,
  logo,
  logoAlt,
  reverse = false,
  ctaHref = "/contact-us",
  ctaLabel = "Request a free demo",
}) {
  return (
    <section className="mt-[83px] bg-black text-white">
      <div
        className={`mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:px-12 lg:py-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          {logo ? (
            <img src={logo} alt={logoAlt || ""} className="mb-8 h-auto w-auto max-w-[324px]" />
          ) : null}
          {title || titleAccent ? (
            <h1 className="text-3xl font-bold leading-tight md:text-[50px]">
              {title}{" "}
              {titleAccent ? <span className="text-[#FF403A]">{titleAccent}</span> : null}
            </h1>
          ) : null}
          <Link
            href={ctaHref}
            className="mt-8 inline-block rounded-md bg-[#FF403A] px-6 py-3 text-lg font-semibold text-white transition hover:opacity-90"
          >
            {ctaLabel}
          </Link>
        </div>
        <div className="flex justify-center">
          <img
            src={image}
            alt={imageAlt}
            className="w-full max-w-xl object-contain lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
