import { notFound } from "next/navigation";
import PrebuiltPluginPage from "@/section/Clarity/PrebuiltPluginPage";
import {
  getPrebuiltPlugin,
  prebuiltPluginSlugs,
} from "@/section/Clarity/prebuiltPluginsData";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return prebuiltPluginSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getPrebuiltPlugin(slug);

  if (!page) {
    return { title: "Prebuilt Plugin | Albatroz Solutions" };
  }

  return pageMeta({
    title: `${page.tabLabel} | Clarity Plugins | Albatroz Solutions`,
    description: page.summary,
    path: `/clarity/plugins/${slug}`,
  });
}

export default async function PrebuiltPluginSlugPage({ params }) {
  const { slug } = await params;
  const page = getPrebuiltPlugin(slug);

  if (!page) {
    notFound();
  }

  return <PrebuiltPluginPage page={page} />;
}
