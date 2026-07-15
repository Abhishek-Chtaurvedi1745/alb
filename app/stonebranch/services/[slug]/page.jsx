import { notFound } from "next/navigation";
import StonebranchServiceDetailPage from "@/section/Automation/StonebranchServiceDetailPage";
import {
  getStonebranchServicePage,
  stonebranchServiceSlugs,
} from "@/section/Automation/stonebranchServicePagesData";

export function generateStaticParams() {
  return stonebranchServiceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getStonebranchServicePage(slug);

  if (!page) {
    return { title: "Stonebranch Service | Albatroz Solutions" };
  }

  return {
    title: `${page.title} | Stonebranch Services | Albatroz Solutions`,
    description: page.subtitle,
  };
}

export default async function StonebranchServiceSlugPage({ params }) {
  const { slug } = await params;
  const page = getStonebranchServicePage(slug);

  if (!page) {
    notFound();
  }

  return <StonebranchServiceDetailPage page={page} />;
}
