import { OrganizationService } from "@/app/infrastructure/services";
import { DashboardSectionOrganisms } from "@/ui/organisms";

export default async function DashboardView() {
  // const data = await OrganizationService.getAllOrganization();

  return <DashboardSectionOrganisms />;
}
