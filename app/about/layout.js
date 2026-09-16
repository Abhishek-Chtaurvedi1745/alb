import { seoForPath } from "@/lib/seo";

export const metadata = seoForPath("/about");

export default function AboutLayout({ children }) {
  return children;
}
