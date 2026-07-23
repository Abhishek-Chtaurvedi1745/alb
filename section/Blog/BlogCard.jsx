import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] transition-all duration-300 hover:border-[#FF403A]/45 hover:shadow-[0_0_30px_rgba(255,64,58,0.1)]">
      <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
          <Link
            href={`/blog/category/${post.categorySlug}`}
            className="rounded-full border border-[#FF403A]/40 bg-[#FF403A]/10 px-3 py-1 font-medium text-white transition hover:bg-[#FF403A]/20"
          >
            {post.category}
          </Link>
          <span className="text-white/60">{post.date}</span>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h4 className="min-h-[3.5rem] text-xl font-semibold leading-snug text-white line-clamp-2 transition group-hover:text-[#FF403A]">
            {post.title}
          </h4>
        </Link>

        <p className="font-normal mt-3 flex-1 text-sm leading-relaxed text-white/75 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs text-white/50">{post.readTime} min read</span>
          <Link
            href={`/blog/${post.slug}`}
            className="text-sm font-semibold text-[#FF403A] transition hover:underline"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}
