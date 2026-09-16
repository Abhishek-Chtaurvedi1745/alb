import { seoForPath } from "@/lib/seo";

export const metadata = seoForPath("/ourteam");

export default function OurTeamLayout({ children }) {
  return children;
}
