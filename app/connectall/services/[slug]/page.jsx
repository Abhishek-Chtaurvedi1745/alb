import { notFound } from "next/navigation";
import ConnectAllServiceDetailPage from "@/section/ConnectAll/ConnectAllServiceDetailPage";
import {
  connectAllServiceSlugs,
  getConnectAllServicePage,
} from "@/section/ConnectAll/connectAllServicePagesData";

export function generateStaticParams() {
  return connectAllServiceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getConnectAllServicePage(slug);

  if (!page) {
    return { title: "ConnectALL Service | Albatroz Solutions" };
  }

  return {
    title: `${page.title} | ConnectALL Services | Albatroz Solutions`,
    description: page.subtitle,
  };
}

export default async function ConnectAllServiceSlugPage({ params }) {
  const { slug } = await params;
  const page = getConnectAllServicePage(slug);

  if (!page) {
    notFound();
  }

  return <ConnectAllServiceDetailPage page={page} />;
}
