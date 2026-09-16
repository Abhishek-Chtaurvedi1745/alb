import { notFound } from "next/navigation";
import AutomicServiceDetailPage from "@/section/Automation/AutomicServiceDetailPage";
import {
  getAutomicServicePage,
  automicServiceSlugs,
} from "@/section/Automation/automicServicePagesData";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return automicServiceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getAutomicServicePage(slug);

  if (!page) {
    return { title: "Automic Service | Albatroz Solutions" };
  }

  return pageMeta({
    title: `${page.title} | Automic Automation Services | Albatroz Solutions`,
    description:
      page.subtitle ||
      `${page.title} from Albatroz Solutions — Broadcom Automic Automation services.`,
    path: `/automic-automation/services/${slug}`,
  });
}

export default async function AutomicServiceSlugPage({ params }) {
  const { slug } = await params;
  const page = getAutomicServicePage(slug);

  if (!page) {
    notFound();
  }

  return <AutomicServiceDetailPage page={page} />;
}
