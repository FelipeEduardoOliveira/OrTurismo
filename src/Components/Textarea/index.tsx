import React from "react";
import { ConntainerNewInput, MySpan, TextAreaInput } from "../Input/styles";

interface TextareaProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  name: string;
  qtdRow?: number;
}

const Textarea = ({
  onChange,
  value,
  placeholder,
  name,
  qtdRow = 5,
}: TextareaProps) => {
  return (
    <ConntainerNewInput>
      <TextAreaInput
        key={`${name}_Textarea`}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        rows={qtdRow}
      />
      <MySpan error={false}>{placeholder}</MySpan>
    </ConntainerNewInput>
  );
};

export default Textarea;
