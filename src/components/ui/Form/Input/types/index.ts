import React from "react";

import type { ActionMeta, SingleValue } from "react-select";

type BaseOnChange = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
};
type BaseValue = {
  value?: string | number | null;
};

interface IBase {
  name: string;
  size?: "small" | "default" | "large";
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  fit?: boolean;
  rounded?: boolean;
  props?: Object;
}

interface IBaseInput extends IBase, BaseValue {
  type?:
    | "email"
    | "number"
    | "password"
    | "tel"
    | "text"
    | "search"
    | "date"
    | "file"
    | "textarea";
  inputMode?: "text" | "decimal";
  readOnly?: boolean;
  requiredMessages?: string;
  onKeyDown?: (event: React.KeyboardEvent) => any;
}

export interface InputProps extends IBaseInput, BaseOnChange {
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  onClick?: () => any;
  onClickLeft?: () => any;
  onClickRight?: () => any;
}

export interface InputSearchProps extends IBaseInput, BaseOnChange {
  iconPosition?: "right" | "left";
}

export interface InputCurrencyProps extends IBaseInput {
  onChange?: (value: number, event: React.ChangeEvent<HTMLInputElement>) => any;
  renderDecimal?: boolean;
}

export interface InputUploadProps extends IBase {
  value?: File | string | null;
  accept?: string;
  onChange?: (file: File | null, event: { name: string; value: string }) => any;
}

interface Option {
  value: string | number;
  label: string | number;
}
export type SelectOption = Option[];
export interface InputSelectProps extends IBase, BaseValue {
  loading?: boolean;
  searchable?: boolean;
  noOptionsMessage?: string;
  loadingMessage?: string;
  option?: {
    value: string | number;
    label: string | number;
  }[];
  onChange?: (
    newValue: SingleValue<Option>,
    actionMeta: ActionMeta<Option>
  ) => any;
}
