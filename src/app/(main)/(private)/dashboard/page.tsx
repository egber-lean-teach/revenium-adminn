import { TextService } from "@/app/infrastructure/services";
import { ManageUser } from "@/ui/atoms";

import { DashboardSectionOrganisms } from "@/ui/organisms";

export default async function DashboardView() {
  const response = await TextService.getTexts();
  return (
    <ManageUser>
      <DashboardSectionOrganisms response={response} />
    </ManageUser>
  );
}
