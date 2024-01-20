import { InputField } from "@/components/ui";

import SearchIcon from "@/components/ui/Icons/search-icon";

import type { InputSearchProps } from "../../types";

function InputSearch({
  name,
  type = "search",
  size = "default",
  value,
  placeholder = "Cari",
  iconPosition = "left",
  fit = false,
  rounded = false,
  onChange,
  className = "",
}: InputSearchProps) {
  const props = {
    name,
    type,
    size,
    value,
    placeholder,
    fit,
    rounded,
    onChange,
    className,
  };

  const renderIcon =
    iconPosition === "left"
      ? { iconLeft: <SearchIcon /> }
      : { iconRight: <SearchIcon /> };

  return <InputField {...{ ...props, ...renderIcon }} />;
}

export default InputSearch;
