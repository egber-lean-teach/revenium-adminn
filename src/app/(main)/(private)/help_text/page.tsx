import { TextService } from "@/app/infrastructure/services";
import { ManageUser } from "@/ui/atoms";

import { DashboardSectionOrganisms } from "@/ui/organisms";

export default async function DashboardView() {
  const response = await TextService.getTexts();
  const categories = await TextService.getCategories();
  const subcategories = await TextService.getSubcategories();
  return (
    <ManageUser>
      <DashboardSectionOrganisms
        response={response}
        categories={categories}
        subcategories={subcategories}
      />
    </ManageUser>
  );
}
