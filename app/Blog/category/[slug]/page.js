import { notFound } from "next/navigation";
import BlogListSection from "@/section/Blog/BlogListSection";
import {
  BLOG_CATEGORIES,
  getBlogPostsByCategory,
  getCategoryBySlug,
} from "@/lib/blog";

export async function generateStaticParams() {
  return BLOG_CATEGORIES.filter((category) => category.slug !== "all").map(
    (category) => ({ slug: category.slug })
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return { title: "Blog Category | Albatroz Solutions" };
  }

  return {
    title: `${category.name} Blogs | Albatroz Solutions`,
    description: `Read ${category.name} articles from Albatroz Solutions.`,
  };
}

export default async function BlogCategoryPage({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category || category.slug === "all") {
    notFound();
  }

  const posts = getBlogPostsByCategory(slug);

  return (
    <BlogListSection
      posts={posts}
      categories={BLOG_CATEGORIES}
      activeCategory={slug}
      title={category.name}
      subtitle={`Explore ${category.name} insights, tips, and best practices from Albatroz Solutions.`}
    />
  );
}
