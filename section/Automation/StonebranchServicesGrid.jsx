import AutomationServicesTabSection from "./AutomationServicesTabSection";
import { stonebranchServices } from "./stonebranchServicesData";

export default function StonebranchServicesGrid(props) {
  return (
    <AutomationServicesTabSection
      title="Comprehensive Stonebranch"
      titleAccent="Services"
      services={stonebranchServices}
      columns={4}
      showViewAllLink
      viewAllHref="/stonebranch/services"
      viewAllLabel="View All Stonebranch Services"
      {...props}
    />
  );
}
