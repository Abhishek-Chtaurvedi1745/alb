import { seoForPath } from "@/lib/seo";

export const metadata = seoForPath("/clarity");

export default function ClarityLayout({ children }) {
  return children;
}
