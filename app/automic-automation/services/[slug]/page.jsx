import { notFound } from "next/navigation";
import AutomicServiceDetailPage from "@/section/Automation/AutomicServiceDetailPage";
import {
  getAutomicServicePage,
  automicServiceSlugs,
} from "@/section/Automation/automicServicePagesData";

export function generateStaticParams() {
  return automicServiceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getAutomicServicePage(slug);

  if (!page) {
    return { title: "Automic Service | Albatroz Solutions" };
  }

  return {
    title: `${page.title} | Automic Automation Services | Albatroz Solutions`,
    description: page.subtitle,
  };
}

export default async function AutomicServiceSlugPage({ params }) {
  const { slug } = await params;
  const page = getAutomicServicePage(slug);

  if (!page) {
    notFound();
  }

  return <AutomicServiceDetailPage page={page} />;
}
