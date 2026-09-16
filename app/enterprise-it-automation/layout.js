import { seoForPath } from "@/lib/seo";

export const metadata = seoForPath("/enterprise-it-automation");

export default function EnterpriseItLayout({ children }) {
  return children;
}
