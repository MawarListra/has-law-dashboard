import ReactSelect from "react-select";

import Spinner from "@/components/ui/Spinner";

import type { InputSelectProps } from "../types";

function InputSelect({
  name,
  value,
  placeholder,
  option = [],
  noOptionsMessage = "Tidak ada Data",
  loadingMessage = "Memuat...",
  size = "default",
  loading = false,
  disabled = false,
  searchable = false,
  fit = false,
  rounded = false,
  required = false,
  className = "",
  onChange,
}: InputSelectProps) {
  const isValueEmpty = value === "";
  const inputPlaceholder = placeholder ?? name;

  const inputSize =
    size === "small"
      ? "p-2 text-xs md:text-sm"
      : size === "default"
      ? "p-2.5"
      : "p-4 md:text-base";

  const LoadingIndicator = () => {
    return <Spinner size="xs" />;
  };

  return (
    <div className={`relative ${fit && "w-fit"} text-ui-gray-blue-50`}>
      <ReactSelect
        name={name}
        value={
          option.length > 0 && !isValueEmpty
            ? option.find((el) => el.value === value)
            : null
        }
        placeholder={inputPlaceholder}
        options={option}
        classNames={{
          control: ({ isFocused, isDisabled }) =>
            `w-full ${rounded ? "rounded-full" : "rounded-lg"} ${
              isFocused && "outline-none ring-[2.5px] ring-ui-blue/50"
            } border-2 border-solid ${
              !isDisabled
                ? "border-ui-gray-blue-97 bg-white"
                : "border-ui-gray-blue-97/0 bg-ui-gray-blue-90 text-ui-gray-blue-40"
            } ${inputSize} font-bold shadow-md ${className}`,
          placeholder: () => `text-ui-gray-blue-70`,
          menu: () =>
            `border-2 mt-1 border-solid border-ui-gray-blue-97 bg-white rounded-lg shadow-lg shadow-[rgba(38,51,77,0.50)]`,
          option: ({ isFocused, isSelected }) =>
            `${inputSize} hover:cursor-pointer border-b-2 border-solid border-ui-gray-blue-97 ${
              isFocused && "bg-ui-blue/70 text-white active:bg-ui-blue/90"
            } ${isSelected && "bg-ui-blue/90 text-white"}`,
          noOptionsMessage: () => `${inputSize}`,
          loadingMessage: () => `${inputSize}`,
          dropdownIndicator: () => `pl-4`,
        }}
        noOptionsMessage={() => noOptionsMessage}
        loadingMessage={() => loadingMessage}
        components={{ LoadingIndicator }}
        isDisabled={disabled}
        isLoading={loading}
        isSearchable={searchable}
        required={required}
        onChange={onChange}
        unstyled
      />
    </div>
  );
}

export default InputSelect;
