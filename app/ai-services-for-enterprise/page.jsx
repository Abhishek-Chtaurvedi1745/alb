import AIServicesPage from "@/section/AIServices/AIServicesPage";
import { seoForPath } from "@/lib/seo";
import "./ai-services.css";

export const metadata = seoForPath("/ai-services-for-enterprise");

export default function Page() {
  return <AIServicesPage />;
}
