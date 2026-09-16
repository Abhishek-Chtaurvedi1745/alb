import { SITE_URL } from "@/lib/seo";
import { BLOG_CATEGORIES, getAllBlogPosts } from "@/lib/blog";
import { clarityServiceSlugs } from "@/section/Clarity/clarityServicePagesData";
import { prebuiltPluginSlugs } from "@/section/Clarity/prebuiltPluginsData";
import { rallyServiceSlugs } from "@/section/Rally/rallyServicePagesData";
import { connectAllServiceSlugs } from "@/section/ConnectAll/connectAllServicePagesData";
import { automicServiceSlugs } from "@/section/Automation/automicServicePagesData";
import { stonebranchServiceSlugs } from "@/section/Automation/stonebranchServicePagesData";

function loc(path) {
  if (!path || path === "/") {
    return `${SITE_URL}/`;
  }

  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean.endsWith("/") ? clean : `${clean}/`}`;
}

function entry(path, { lastModified, changeFrequency, priority } = {}) {
  return {
    url: loc(path),
    lastModified: lastModified || new Date("2026-09-16"),
    changeFrequency: changeFrequency || "monthly",
    priority: priority ?? 0.7,
  };
}

export default function sitemap() {
  const staticPages = [
    entry("/", { changeFrequency: "weekly", priority: 1 }),
    entry("/about", { priority: 0.8 }),
    entry("/ourteam", { priority: 0.6 }),
    entry("/career", { changeFrequency: "weekly", priority: 0.6 }),
    entry("/contact-us", { priority: 0.7 }),
    entry("/blog", { changeFrequency: "weekly", priority: 0.8 }),
    entry("/privacy-policy", { changeFrequency: "yearly", priority: 0.3 }),
    entry("/project-portfolio-management", { priority: 0.9 }),
    entry("/enterprise-it-automation", { priority: 0.9 }),
    entry("/ai-services-for-enterprise", { priority: 0.9 }),
    entry("/clarity", { priority: 0.9 }),
    entry("/clarity/services", { priority: 0.8 }),
    entry("/rally", { priority: 0.9 }),
    entry("/rally/services", { priority: 0.7 }),
    entry("/connectall", { priority: 0.9 }),
    entry("/connectall/services", { priority: 0.7 }),
    entry("/automic-automation", { priority: 0.9 }),
    entry("/automic-automation/services", { priority: 0.7 }),
    entry("/stonebranch", { priority: 0.9 }),
    entry("/stonebranch/services", { priority: 0.7 }),
  ];

  const clarityServices = clarityServiceSlugs.map((slug) =>
    entry(`/clarity/services/${slug}`, { priority: 0.7 })
  );
  const plugins = prebuiltPluginSlugs.map((slug) =>
    entry(`/clarity/plugins/${slug}`, { priority: 0.6 })
  );
  const rallyServices = rallyServiceSlugs.map((slug) =>
    entry(`/rally/services/${slug}`, { priority: 0.6 })
  );
  const connectAllServices = connectAllServiceSlugs.map((slug) =>
    entry(`/connectall/services/${slug}`, { priority: 0.6 })
  );
  const automicServices = automicServiceSlugs.map((slug) =>
    entry(`/automic-automation/services/${slug}`, { priority: 0.6 })
  );
  const stonebranchServices = stonebranchServiceSlugs.map((slug) =>
    entry(`/stonebranch/services/${slug}`, { priority: 0.6 })
  );

  const blogCategories = BLOG_CATEGORIES.filter(
    (category) => category.slug !== "all"
  ).map((category) =>
    entry(`/blog/category/${category.slug}`, {
      changeFrequency: "weekly",
      priority: 0.6,
    })
  );

  const blogs = getAllBlogPosts().map((post) =>
    entry(`/blog/${post.slug}`, {
      changeFrequency: "yearly",
      priority: 0.6,
    })
  );

  return [
    ...staticPages,
    ...clarityServices,
    ...plugins,
    ...rallyServices,
    ...connectAllServices,
    ...automicServices,
    ...stonebranchServices,
    ...blogCategories,
    ...blogs,
  ];
}
