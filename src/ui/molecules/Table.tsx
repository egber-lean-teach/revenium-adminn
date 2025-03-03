import { ITextResponse } from "@/app/core/application/dto";
import { IText } from "@/app/core/application/interfaces";

interface ITableProps {
  headers: string[];
  body: ITextResponse;
}
export default function Table({ headers, body }: ITableProps): React.ReactNode {
  return (
    <table className="border-gray-200 border-1 w-full">
      <tr className="bg-[var(--color-gray-light)] border-gray-200 border-1">
        {headers.map((header: string, index: number) => (
          <th className="text-[var(--color-text-gray)] p-2" key={index}>
            {header}
          </th>
        ))}
      </tr>
      {Object.entries(body).map(([Key, value]) => (
        <tr key={Key} className="border-gray-200 border-b-1">
          <td className="pl-10">{value.id}</td>
          <td className="pl-10">{value.category}</td>
          <td>{value.subcategory}</td>
          <td>{value.name}</td>
          <td>{value.description}</td>
          <td>
            <button>Edit</button>
            <button>Show</button>
          </td>
        </tr>
      ))}
    </table>
  );
}
