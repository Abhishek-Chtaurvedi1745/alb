import { seoForPath } from "@/lib/seo";

export const metadata = seoForPath("/contact-us");

export default function ContactLayout({ children }) {
  return children;
}
