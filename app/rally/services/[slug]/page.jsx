import { notFound } from "next/navigation";
import RallyServiceDetailPage from "@/section/Rally/RallyServiceDetailPage";
import { getRallyServicePage, rallyServiceSlugs } from "@/section/Rally/rallyServicePagesData";

export function generateStaticParams() {
  return rallyServiceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getRallyServicePage(slug);

  if (!page) {
    return { title: "Rally Service | Albatroz Solutions" };
  }

  return {
    title: `${page.title} | Rally Services | Albatroz Solutions`,
    description: page.subtitle,
  };
}

export default async function RallyServiceSlugPage({ params }) {
  const { slug } = await params;
  const page = getRallyServicePage(slug);

  if (!page) {
    notFound();
  }

  return <RallyServiceDetailPage page={page} />;
}
