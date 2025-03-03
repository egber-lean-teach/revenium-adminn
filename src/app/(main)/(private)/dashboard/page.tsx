import { OrganizationService } from "@/app/infrastructure/services";
import { DashboardSectionOrganisms } from "@/ui/organisms";

export default async function DashboardView() {
  return <DashboardSectionOrganisms />;
}
