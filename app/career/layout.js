import { seoForPath } from "@/lib/seo";

export const metadata = seoForPath("/career");

export default function CareerLayout({ children }) {
  return children;
}
