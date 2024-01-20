import { PaginationType } from "@/components/ui/Pagination/types";

export default function getIndexTable(data: any[], meta: PaginationType) {
  let tempData = [];

  for (const [key, value] of Object.entries(data)) {
    const index = (((meta.page * meta.size) - (meta.size - 1)) + Number(key)).toString(); //prettier-ignore

    tempData.push({
      index,
      ...(typeof value === "object" ? value : {}),
    });
  }

  return tempData;
}
