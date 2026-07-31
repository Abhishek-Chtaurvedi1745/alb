"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";
import BlogCategoryFilter from "./BlogCategoryFilter";

export default function BlogListSection({
  posts,
  categories,
  activeCategory = "all",
  title = "Articles",
  subtitle = "Expert insights on project management, Clarity PPM, and enterprise automation.",
}) {
  const [visibleCount, setVisibleCount] = useState(9);

  const visiblePosts = posts.slice(0, visibleCount);

  return (
    <section className="min-h-screen bg-black pb-20 pt-[110px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF403A]">
            Insights
          </p>
          <h1 className="text-3xl font-semibold text-white md:text-[40px]">
            {title}
          </h1>
          <p className="font-normal mx-auto mt-4 max-w-2xl text-sm text-white/70 md:text-sm">
            {subtitle}
          </p>
        </div>

        <BlogCategoryFilter
          categories={categories}
          activeSlug={activeCategory}
        />

        <div className="mt-12 grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {visiblePosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {visibleCount < posts.length && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="cursor-pointer rounded-full bg-[#FF403A] px-8 py-3 font-medium text-white transition hover:opacity-90"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
