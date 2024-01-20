import InputField from "../index";

import type { InputCurrencyProps } from "../../types";

const formatValue = (value: number): string => {
  const valueStr = value.toString();
  let newValue: string;

  const formatNumber = (n: string, isNegativeValue: boolean): string => {
    const regex = n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    if (isNegativeValue) {
      return "-" + regex;
    }

    return regex;
  };

  newValue = formatNumber(valueStr, valueStr.includes("-"));

  // if (valueStr.indexOf(",") >= 0) {
  //   const decimalPos = valueStr.indexOf(",");

  //   let leftSide = valueStr.substring(0, decimalPos);
  //   let rightSide = valueStr.substring(decimalPos);

  //   leftSide = formatNumber(leftSide);
  //   rightSide = formatNumber(rightSide) + "00";

  //   rightSide = rightSide.substring(0, 2);

  //   newValue = leftSide + "," + rightSide;
  //   newValue = leftSide;
  // } else {
  //   newValue = formatNumber(value) + ",00";
  //   console.log(valueStr);
  //   newValue = formatNumber(valueStr);
  // }

  return newValue;
};

function InputCurrency({
  name,
  value,
  placeholder,
  required = false,
  disabled = false,
  onChange,
}: InputCurrencyProps) {
  // console.log("cek onchange", onChange);
  const props = {
    name,
    placeholder,
    required,
    disabled,
  };

  const formatOnChange = (event: React.ChangeEvent<any>) => {
    const value: string = event.target.value;
    const formmatedValue = value.replace(/\D/g, "");

    let newValue: number;

    if (formmatedValue === "" || formmatedValue === "0") {
      onChange?.(0, event);
      return;
    }

    if (formmatedValue.split("")[0] === "0") {
      newValue = Number(formmatedValue.split("")[1]);
    } else {
      newValue = Number(formmatedValue);
    }

    onChange?.(newValue, event);
  };

  return (
    <InputField
      inputMode="decimal"
      value={formatValue(Number(value))}
      onChange={formatOnChange}
      iconLeft={<span className="text-ui-gray-blue-50">Rp</span>}
      {...props}
    />
  );
}

export default InputCurrency;
