import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0c0c0c] transition-all duration-300 hover:border-[#FF403A]/45 hover:shadow-[0_0_30px_rgba(255,64,58,0.1)] md:rounded-2xl">
      <Link
        href={`/blog/${post.slug}`}
        className="block overflow-hidden bg-[#111111]"
      >
        <div className="relative flex aspect-[16/10] w-full items-center justify-center">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-contain object-center p-2 transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-3 md:p-6">
        <div className="mb-2 flex flex-col gap-1.5 md:mb-3 md:flex-row md:flex-wrap md:items-center md:gap-2">
          <Link
            href={`/blog/category/${post.categorySlug}`}
            className="w-fit rounded-full border border-[#FF403A]/40 bg-[#FF403A]/10 px-2 py-0.5 text-[10px] font-medium text-white transition hover:bg-[#FF403A]/20 md:px-3 md:py-1 md:text-xs"
          >
            {post.category}
          </Link>
          <span className="text-[10px] text-white/60 md:text-xs">{post.date}</span>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h4 className="text-sm font-semibold leading-snug text-white line-clamp-2 transition group-hover:text-[#FF403A] md:min-h-[3.5rem] md:text-xl">
            {post.title}
          </h4>
        </Link>

        <p className="mt-2 flex-1 text-xs leading-relaxed text-white/75 line-clamp-2 md:mt-3 md:text-sm md:line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-3 flex items-center justify-between gap-2 md:mt-5">
          <span className="text-[10px] text-white/50 md:text-xs">
            {post.readTime} min read
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="shrink-0 text-xs font-semibold text-[#FF403A] transition hover:underline md:text-sm"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}
