import { notFound } from "next/navigation";
import StonebranchServiceDetailPage from "@/section/Automation/StonebranchServiceDetailPage";
import {
  getStonebranchServicePage,
  stonebranchServiceSlugs,
} from "@/section/Automation/stonebranchServicePagesData";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return stonebranchServiceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getStonebranchServicePage(slug);

  if (!page) {
    return { title: "Stonebranch Service | Albatroz Solutions" };
  }

  return pageMeta({
    title: `${page.title} | Stonebranch Services | Albatroz Solutions`,
    description:
      page.subtitle ||
      `${page.title} from Albatroz Solutions — Stonebranch UAC automation services.`,
    path: `/stonebranch/services/${slug}`,
  });
}

export default async function StonebranchServiceSlugPage({ params }) {
  const { slug } = await params;
  const page = getStonebranchServicePage(slug);

  if (!page) {
    notFound();
  }

  return <StonebranchServiceDetailPage page={page} />;
}
