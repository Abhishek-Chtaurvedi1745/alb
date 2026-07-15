import Link from "next/link";

const buttonClassName =
  "inline-block rounded-xl border border-[#FF403A] bg-[#111111] px-10 py-4 text-lg font-semibold text-white transition hover:bg-[#FF403A]/10";

export default function GetStartedLink({
  product,
  href = "/contact-us",
  className = "",
}) {
  return (
    <Link href={href} className={`${buttonClassName} ${className}`.trim()}>
      Get Started with <span className="text-[#FF403A]">{product}</span>
    </Link>
  );
}
