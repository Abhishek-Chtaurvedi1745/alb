import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import BlogContent from "@/section/Blog/BlogContent";
import BlogShare from "@/section/Blog/BlogShare";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Blog Not Found | Albatroz Solutions" };
  }

  return {
    title: `${post.title} | Albatroz Solutions`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  if (/^\d+$/.test(slug)) {
    const posts = getAllBlogPosts();
    const legacyPost = posts[Number(slug) - 1];

    if (legacyPost) {
      redirect(`/blog/${legacyPost.slug}`);
    }
  }

  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 4);

  return (
    <section className="bg-black pb-20 pt-[110px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/60">
          <Link href="/blog" className="transition hover:text-[#FF403A]">
            Blog
          </Link>
          <span>/</span>
          <Link
            href={`/blog/category/${post.categorySlug}`}
            className="transition hover:text-[#FF403A]"
          >
            {post.category}
          </Link>
          <span>/</span>
          <span className="text-white/80">{post.title}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="overflow-hidden rounded-[30px] border border-white/10 bg-[#0c0c0c]">
            <div className="flex w-full items-center justify-center bg-[#111111]">
              <img
                src={post.image}
                alt={post.title}
                className="max-h-[420px] w-full object-contain md:max-h-[480px]"
              />
            </div>

            <div className="p-6 md:p-10">
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF403A] text-lg font-bold text-white">
                    A
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Admin</h4>
                    <p className="text-sm text-white/70">{post.date}</p>
                  </div>
                </div>

                <div className="hidden h-8 w-px bg-gray-700 md:block" />

                <span className="rounded-full border border-[#FF403A]/40 bg-[#FF403A]/10 px-3 py-1 text-xs font-medium text-[#FF403A]">
                  {post.category}
                </span>

                <span className="text-sm text-white/70">
                  {post.readTime} min read
                </span>
              </div>

              <h1 className="mb-8 text-3xl font-bold leading-tight text-white md:text-5xl">
                {post.title}
              </h1>

              <div className="mb-10 rounded-2xl border border-[#FF403A]/20 bg-[#111111] p-6">
                <p className="text-lg leading-8 text-white/90">{post.excerpt}</p>
              </div>

              <BlogContent html={post.content} />
              <BlogShare title={post.title} slug={post.slug} />
            </div>
          </article>

          <aside className="space-y-6">
            <div className="sticky top-28 rounded-[30px] border border-white/10 bg-[#0c0c0c] p-6">
              <h3 className="mb-6 text-xl font-semibold text-white">
                Related <span className="text-[#FF403A]">Articles</span>
              </h3>

              <div className="space-y-6">
                {relatedPosts.length > 0 ? (
                  relatedPosts.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/blog/${item.slug}`}
                      className="group block"
                    >
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-20 w-20 shrink-0 rounded-xl bg-[#111111] object-contain p-1"
                        />
                        <div>
                          <h4 className="line-clamp-2 font-semibold text-white transition group-hover:text-[#FF403A]">
                            {item.title}
                          </h4>
                          <p className="mt-1 line-clamp-2 text-sm text-white/60">
                            {item.excerpt}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  getAllBlogPosts()
                    .filter((item) => item.slug !== slug)
                    .slice(0, 4)
                    .map((item) => (
                      <Link
                        key={item.slug}
                        href={`/blog/${item.slug}`}
                        className="group block"
                      >
                        <div className="flex gap-4">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-20 w-20 shrink-0 rounded-xl bg-[#111111] object-contain p-1"
                          />
                          <div>
                            <h4 className="line-clamp-2 font-semibold text-white transition group-hover:text-[#FF403A]">
                              {item.title}
                            </h4>
                            <p className="mt-1 line-clamp-2 text-sm text-white/60">
                              {item.excerpt}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
