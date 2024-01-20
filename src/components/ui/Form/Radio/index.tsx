import React from "react";

interface RadioButtonProps {
  name: string;
  disabled: boolean;
  className: string;
  props: object;
  value: string | number;
  checked: boolean;
  onChange: () => void;
  text: string;
}

function RadioButton({
  name,
  onChange,
  checked,
  disabled,
  className,
  props,
  value,
  text,
}: RadioButtonProps) {
  return (
    <React.Fragment>
      <div className="flex flex-row items-center space-x-1">
        <input
          name={name}
          type={"radio"}
          checked={checked}
          onChange={onChange}
          style={{
            width: "24px",
            height: "24px",
            flexShrink: 0,
          }}
          disabled={disabled}
          value={value}
          className={className}
          {...props}
        />
        <span>{text}</span>
      </div>
    </React.Fragment>
  );
}

export default RadioButton;
