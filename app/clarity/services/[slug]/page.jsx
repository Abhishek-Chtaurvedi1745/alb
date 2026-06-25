import { notFound } from "next/navigation";
import ClarityServiceDetailPage from "@/section/Clarity/ClarityServiceDetailPage";
import {
  clarityServiceSlugs,
  getClarityServicePage,
} from "@/section/Clarity/clarityServicePagesData";

export function generateStaticParams() {
  return clarityServiceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getClarityServicePage(slug);

  if (!page) {
    return { title: "Clarity Service | Albatroz Solutions" };
  }

  return {
    title: `${page.title} | Clarity Services | Albatroz Solutions`,
    description: page.subtitle,
  };
}

export default async function ClarityServiceSlugPage({ params }) {
  const { slug } = await params;
  const page = getClarityServicePage(slug);

  if (!page) {
    notFound();
  }

  return <ClarityServiceDetailPage page={page} />;
}
