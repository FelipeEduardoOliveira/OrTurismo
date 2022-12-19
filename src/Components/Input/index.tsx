import React from "react";
import { ConntainerNewInput, MyNewInput, MySpan } from "./styles";

interface IPropsInput {
  error?:boolean
  placeholder:string;
  onChange: any
  value: string
  type?: string
  name: string
  onClick?: any
}


const Input = ({
  error,
  placeholder,
  onChange,
  value,
  type,
  name,
  onClick
}:IPropsInput) => {
  return (
    <ConntainerNewInput>
        <MyNewInput 
        key={`${name}_Input`}
            placeholder={placeholder}   
            onChange={(e)=>onChange(e.target.value)}
            value={value}
            type={type}
            error={error}
            onClick={onClick}
        />
        <MySpan error={error}>
                {placeholder}
        </MySpan>

        

    </ConntainerNewInput>
  );
};

export default Input;
