import React, { OptionHTMLAttributes } from "react";
import { ContainerSelectInput, SelectInputStyle, SelectLabel } from "./styles";

interface OptionsSelectInputProps {
  value: string | number;
  label: string;
  disabled: boolean;
}

interface SelectInputsProps {
  disabled?: boolean;
  name: string;
  id: string;
  options: OptionsSelectInputProps[];
  onChange: (value: string | number) => void;
}

const SelectInput = ({
  disabled = false,
  name,
  id,
  options,
  onChange,
}: SelectInputsProps) => {
  return (
    <ContainerSelectInput>
      <SelectLabel disabled={disabled} htmlFor={id}>
        {name}
      </SelectLabel>

      <SelectInputStyle
        onChange={(val) => onChange(val.target.value)}
        disabled={disabled}
        name={name}
        id={id}
        defaultValue={"DEFAULT"}
      >
        {options.map((item, index) => {
          return (
            <option
              key={index}
              value={item.value}
              disabled={item.disabled}
              selected={item.disabled}
            >
              {" "}
              {item.label}
            </option>
          );
        })}
      </SelectInputStyle>
    </ContainerSelectInput>
  );
};

export default SelectInput;
