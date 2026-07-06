"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BlogCategoryFilter({ categories, activeSlug = "all" }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => {
        const href =
          category.slug === "all" ? "/blog" : `/blog/category/${category.slug}`;
        const isActive =
          category.slug === activeSlug ||
          (category.slug === "all" && pathname === "/blog");

        return (
          <Link
            key={category.slug}
            href={href}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
              isActive
                ? "border-[#FF403A] bg-[#FF403A] text-white"
                : "border-white/20 bg-transparent text-white/80 hover:border-[#FF403A]/50 hover:text-white"
            }`}
          >
            {category.name}
          </Link>
        );
      })}
    </div>
  );
}
