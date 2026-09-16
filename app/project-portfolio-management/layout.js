import { seoForPath } from "@/lib/seo";

export const metadata = seoForPath("/project-portfolio-management");

export default function PpmLayout({ children }) {
  return children;
}
