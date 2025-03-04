"use client";
import { ITextResponseComplete } from "@/app/core/application/dto/textResponse";
import { IconContent, ManageColumn, Pagination, Title } from "../atoms";
import { Modal, Section, Table } from "../molecules";
import { IconList, IconPlus, IconReload } from "../../../public/icons";

interface IDashboardSectionOrganismsProps {
  response: ITextResponseComplete;
}
export default function DashboardSectionOrganisms({
  response,
}: IDashboardSectionOrganismsProps): React.ReactNode {
  const tableHeaders: string[] = [
    "ID",
    "Category",
    "Subcategory",
    "Name",
    "Description",
    "Actions",
  ];

  return (
    <div>
      <Section>
        <Title />
        <div className="flex justify-end mb-3">
          <div className="flex flex-col gap-3">
            <div className="flex justify-end">
              <IconContent
                className="flex flex-center bg-[var(--color-text-gray-hover)] text-white p-2 rounded-[6px] cursor-pointer"
                icon={<IconPlus />}
                onClick={() => console.log("Plus")}
              />
            </div>
            <ManageColumn
              icon={<IconList />}
              text="Manage Columns"
              onClick={() => console.log("manage columns  ")}
            />
          </div>
        </div>
        <Table headers={tableHeaders} body={response} />
        <div className="flex justify-between items-center mt-4">
          <span className="cursor-pointer border-[var(--color-gray-light-three)] border-1 rounded-[6px] p-2 hover:bg-[var(--color-gray-light-three)]">
            <IconReload />
          </span>
          <Pagination />
        </div>
      </Section>
    </div>
  );
}
