import { IList } from "@/app/core/application/interfaces";
import ItemList from "../atoms/itemList";
import { IconHome, IconText } from "../../../public/icons";

export default function Sidebar(): React.ReactNode {
  const dataList: IList[] = [
    { text: "Home", icon: <IconHome />, href: "/" },
    { text: "Helps text", icon: <IconText />, href: "/help-texts" },
  ];
  return (
    <div className="w-[18vw] h-[90vh] border-gray-200 border-r-1 p-6 bg-[var(--color-gray-light)]">
      <ul className="flex flex-col gap-2">
        {dataList.map((item, index: number) => (
          <ItemList data={item} key={index} />
        ))}
      </ul>
    </div>
  );
}
