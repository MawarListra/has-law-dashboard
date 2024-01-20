import type { SelectOption } from "@/components/ui/Form/Input/types";

export const generateSelectOption = (
  data: any[],
  valueKey: string,
  labelKey: string
): SelectOption => {
  let temp = [];

  for (const key in data) {
    temp.push({
      value: data[key][valueKey],
      label: data[key][labelKey],
    });
  }

  return temp;
};
