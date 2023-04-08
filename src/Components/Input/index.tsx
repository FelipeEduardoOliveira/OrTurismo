import React, { HTMLInputTypeAttribute } from "react";
import { ConntainerNewInput, MyNewInput, MySpan } from "./styles";

interface IPropsInput {
  error?: boolean;
  placeholder: string;
  onChange: any;
  value: string;
  type?: HTMLInputTypeAttribute;
  name: string;
  onClick?: any;
  required?: boolean;
  min?: string;
  disabled?: boolean;
}

const Input = ({
  error,
  placeholder,
  onChange,
  value,
  type,
  name,
  onClick,
  required = false,
  min = "",
  disabled = false,
}: IPropsInput) => {
  return (
    <ConntainerNewInput>
      <MyNewInput
        key={`${name}_Input`}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        type={type}
        error={error}
        onClick={onClick}
        required={required}
        min={min}
        disabled={disabled}
      />
      <MySpan error={error}>
        {required ? `${placeholder}*` : placeholder}
      </MySpan>
    </ConntainerNewInput>
  );
};

export default Input;
