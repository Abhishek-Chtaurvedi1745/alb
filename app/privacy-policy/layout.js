import { seoForPath } from "@/lib/seo";

export const metadata = seoForPath("/privacy-policy");

export default function PrivacyLayout({ children }) {
  return children;
}
