"use client";
import { ITextResponseComplete } from "@/app/core/application/dto/textResponse";
import { Button, IconContent, ManageColumn, Pagination, Title } from "../atoms";
import {
  FormField,
  FormFieldSelect,
  FormFieldTextArea,
  FormFielSelect,
  LoadingContent,
  Modal,
  ModalContent,
  Section,
  Table,
} from "../molecules";
import {
  IconList,
  IconPlus,
  IconReload,
  IConSave,
  IConSaveTwo,
} from "../../../public/icons";
import { useModalLoadingContentState } from "@/app/core/application/global-state";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IModalMessage, IText } from "@/app/core/application/interfaces";
import { UtilApplicationInternal } from "@/app/core/application/utils/util.application";
import { TextService } from "@/app/infrastructure/services";

interface IDashboardSectionOrganismsProps {
  response: ITextResponseComplete;
  categories: string[];
  subcategories: string[];
}
export default function DashboardSectionOrganisms({
  response,
  categories,
  subcategories,
}: IDashboardSectionOrganismsProps): React.ReactNode {
  const router = useRouter();
  const { modalLoadingContent, setModalLoadingContent } =
    useModalLoadingContentState((state) => state);

  const [modalCreate, setModalCreate] = useState<boolean>(false);
  const [modalSave, setModalSave] = useState<boolean>(false);
  const [showErrorCreate, setShowErroCreate] = useState<boolean>(false);
  const [formCreate, setFormCreate] = useState<IText>({
    category: "",
    subcategory: "",
    description: "",
    id: "",
    name: "",
  });

  const tableHeaders: string[] = [
    "ID",
    "Category",
    "Subcategory",
    "Name",
    "Description",
    "Actions",
  ];

  const handleSubmitCreate = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formCreate.category ||
      !formCreate.description ||
      !formCreate.name ||
      !formCreate.subcategory
    ) {
      setShowErroCreate(true);
      return;
    }
    const data = await TextService.createText(formCreate);
    setModalLoadingContent(true);
    setModalSave(true);
    setModalCreate(false);
  };

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
                onClick={() => setModalCreate(true)}
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
          <span
            className="cursor-pointer border-[var(--color-gray-light-three)] border-1 rounded-[6px] p-2 hover:bg-[var(--color-gray-light-three)]"
            onClick={() => {
              setModalLoadingContent(true);
              router.push("/");
            }}
          >
            <IconReload />
          </span>
        </div>
        {modalCreate && (
          <Modal
            open={modalCreate}
            setOpen={setModalCreate}
            size="md"
            title="Create text"
            subtitle=""
          >
            <form
              className="w-[100%] flex flex-col gap-3"
              onSubmit={handleSubmitCreate}
            >
              <FormFieldSelect
                label="Category"
                name="category"
                errors={["Is necesary a value", "Spaces are not allowed"]}
                id="category"
                options={categories}
                nameCreate="newCategory"
                placeholderCreate="Create new category"
                formCreate={formCreate}
                setFormCreate={setFormCreate}
              />

              <FormFieldSelect
                label="Subcategory"
                name="subcategory"
                errors={["Is necesary a value", "Spaces are not allowed"]}
                id="subcategory"
                options={subcategories}
                nameCreate="newSubcategory"
                placeholderCreate="Create new subcategory"
                formCreate={formCreate}
                setFormCreate={setFormCreate}
              />
              <FormField
                label="Name"
                name="name"
                placeholder=""
                errors={["Is necesary a value", "Spaces are not allowed"]}
                type="text"
                formCreate={formCreate}
                setFormCreate={setFormCreate}
              />
              <FormFieldTextArea
                error=""
                label="Description"
                name="description"
                placeholder="Enter description"
                formCreate={formCreate}
                setFormCreate={setFormCreate}
              />
              {showErrorCreate && (
                <span className="text-[.9rem] text-red-500">
                  Error. Is required all params
                </span>
              )}
              <span className="text-[.9rem] text-[var(--color-text-gray)] flex justify-end">
                Check the ✔️ for save the value
              </span>
              <div className="flex justify-end">
                <Button
                  variant="third"
                  onClick={() => {
                    console.log("form data", formCreate);
                    setFormCreate({
                      ...formCreate,
                      ["id"]: UtilApplicationInternal.generateKey(
                        formCreate.category,
                        formCreate.subcategory,
                        formCreate.name
                      ),
                    });
                  }}
                >
                  <IConSaveTwo />
                </Button>
              </div>
            </form>
          </Modal>
        )}
        {modalSave && (
          <Modal
            open={modalSave}
            setOpen={setModalSave}
            size="sm"
            title=""
            subtitle=""
          >
            Success create text!
          </Modal>
        )}
      </Section>
    </div>
  );
}
