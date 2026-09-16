import { notFound } from "next/navigation";
import ClarityServiceDetailPage from "@/section/Clarity/ClarityServiceDetailPage";
import {
  clarityServiceSlugs,
  getClarityServicePage,
} from "@/section/Clarity/clarityServicePagesData";
import { seoForPath, PAGE_SEO, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return clarityServiceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getClarityServicePage(slug);

  const path = `/clarity/services/${slug}`;
  const planned = PAGE_SEO[path];

  if (planned) {
    return seoForPath(path);
  }

  if (!page) {
    return { title: "Clarity Service | Albatroz Solutions" };
  }

  return pageMeta({
    title: `${page.title} | Clarity Services | Albatroz Solutions`,
    description: page.subtitle,
    path,
  });
}

export default async function ClarityServiceSlugPage({ params }) {
  const { slug } = await params;
  const page = getClarityServicePage(slug);

  if (!page) {
    notFound();
  }

  return <ClarityServiceDetailPage page={page} />;
}
