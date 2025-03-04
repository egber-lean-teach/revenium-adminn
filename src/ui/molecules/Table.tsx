"use client";

import { Button, Copy, IconContent, Loading } from "../atoms";
import { IConCopy, IconDown, IconEdit } from "../../../public/icons";
import { ITextResponseComplete } from "@/app/core/application/dto/textResponse";
import { UtilApplicationInternal } from "@/app/core/application/utils/util.application";

interface ITableProps {
  headers: string[];
  body: ITextResponseComplete;
}

export default function Table({ headers, body }: ITableProps): React.ReactNode {
  const handleClickEdit = (): void => {
    console.log("edit");
  };

  const handleClickMore = (): void => {
    console.log("more");
  };

  return (
    <table className="border border-gray-200 w-full table-auto rounded-lg">
      <thead>
        <tr className="border-b border-gray-200 hover:bg-[var(--color-gray-light)]">
          {headers.map((header: string, index: number) => (
            <th
              className={`pt-2 pb-2 text-[var(--color-text-gray)] text-start font-medium text-[.9rem] ${
                header === "ID" ? "flex justify-center" : ""
              } ${header === "Actions" ? "flex justify-center" : ""}`}
              key={index}
            >
              {header.toUpperCase()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="w-full">
        {body.statusCode >= 400 ? (
          <tr>
            <td colSpan={6} className="p-10 content-message">
              <div className="w-full flex justify-center items-center gap-6">
                <Loading />
                <p>{body.message}</p>
              </div>
            </td>
          </tr>
        ) : (
          Object.entries(body?.data).map(([Key, value]) => (
            <tr
              key={Key}
              className="text-start border-b border-gray-200 text-[.9rem] hover:bg-[var(--color-gray-light)]"
            >
              <td className="p-6">
                <p className="bg-[var(--color-gray-light-two)] text-[.8rem] rounded-[6px] font-medium text-center relative">
                  {`${UtilApplicationInternal.firstFourLetter(
                    value.id.toLocaleLowerCase()
                  )}...`}
                  <Copy value={value.id} />
                </p>
              </td>
              <td>{value.category}</td>
              <td>{value.subcategory}</td>
              <td>{value.name}</td>
              <td>{value.description}</td>
              <td>
                <div className="flex gap-2">
                  <Button variant="default" onClick={handleClickEdit}>
                    <IconEdit />
                  </Button>
                  <Button variant="default" onClick={handleClickMore}>
                    <span className="mt-[-16px] text-[1.3rem]">...</span>
                    <span>
                      <IconDown />
                    </span>
                  </Button>
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
