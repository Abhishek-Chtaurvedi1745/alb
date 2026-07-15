import AutomationServicesTabSection from "./AutomationServicesTabSection";
import { automicServices } from "./automicServicesData";

export default function AutomicServicesGrid(props) {
  return (
    <AutomationServicesTabSection
      title="Comprehensive Automic Automation"
      titleAccent="Services"
      services={automicServices}
      columns={5}
      showViewAllLink
      viewAllHref="/automic-automation/services"
      viewAllLabel="View All Automic Automation Services"
      {...props}
    />
  );
}
