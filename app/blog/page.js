import BlogListSection from "@/section/Blog/BlogListSection";
import { BLOG_CATEGORIES, getAllBlogPosts } from "@/lib/blog";
import { seoForPath } from "@/lib/seo";

export const metadata = seoForPath("/blog");

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <BlogListSection
      posts={posts}
      categories={BLOG_CATEGORIES}
      activeCategory="all"
    />
  );
}
