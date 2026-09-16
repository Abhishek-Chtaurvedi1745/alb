import RallyPage from "@/section/Rally/RallyPage";
import { seoForPath } from "@/lib/seo";
import "./rally.css";

export const metadata = seoForPath("/rally");

export default function Page() {
  return <RallyPage />;
}
