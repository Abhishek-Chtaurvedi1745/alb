import BlogListSection from "@/section/Blog/BlogListSection";
import { BLOG_CATEGORIES, getAllBlogPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | Albatroz Solutions",
  description:
    "Expert insights and updates on project portfolio management, Clarity PPM, reporting, and enterprise automation.",
};

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
