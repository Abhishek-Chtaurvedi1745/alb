import fs from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "data/blogs");
const POSTS_DIR = path.join(BLOG_DIR, "posts");
const INDEX_PATH = path.join(BLOG_DIR, "index.json");

export const BLOG_CATEGORIES = [
  { name: "All", slug: "all" },
  {
    name: "Project Portfolio Management",
    slug: "project-portfolio-management",
  },
  { name: "Clarity", slug: "clarity" },
  { name: "Configuration", slug: "configuration" },
  { name: "Reporting", slug: "reporting" },
];

function readIndex() {
  const raw = fs.readFileSync(INDEX_PATH, "utf-8");
  return JSON.parse(raw);
}

export function getAllBlogPosts() {
  return readIndex();
}

export function getBlogPostBySlug(slug) {
  const filePath = path.join(POSTS_DIR, `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

export function getBlogPostsByCategory(categorySlug) {
  const posts = getAllBlogPosts();

  if (!categorySlug || categorySlug === "all") {
    return posts;
  }

  return posts.filter((post) => post.categorySlug === categorySlug);
}

export function getRelatedPosts(slug, limit = 4) {
  const current = getBlogPostBySlug(slug);

  if (!current) {
    return [];
  }

  return getAllBlogPosts()
    .filter(
      (post) =>
        post.slug !== slug && post.categorySlug === current.categorySlug
    )
    .slice(0, limit);
}

export function getCategoryBySlug(slug) {
  return BLOG_CATEGORIES.find((category) => category.slug === slug) ?? null;
}
