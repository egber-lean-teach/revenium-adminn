import { Title } from "../atoms";
import { Section, Table } from "../molecules";
import { ITextResponse } from "@/app/core/application/dto";

export default function DashboardSectionOrganisms(): React.ReactNode {
  const tableHeaders: string[] = [
    "ID",
    "Category",
    "Subcategory",
    "Name",
    "Description",
    "Actions",
  ];

  const tableBody: ITextResponse = {
    category1: {
      category: "categorydas",
      subcategory: "subcategory dasda",
      description: "description dasd",
      id: "id",
      name: "test name",
    },
    category2: {
      category: "category dasd",
      subcategory: "subcategory asdsa",
      description: "descriptiondasd ",
      id: "id",
      name: "test name",
    },
  };

  return (
    <div>
      <Title />
      <Section>
        <Table headers={tableHeaders} body={tableBody} />
      </Section>
    </div>
  );
}
