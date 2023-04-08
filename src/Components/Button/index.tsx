import React from "react";
import { ButtonContainer } from "./style";
import Loading from "../Loading";

interface IPropsButton {
  title: string;
  onClick: () => void;
  disabled?: boolean;
  load?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({
  title,
  onClick,
  disabled = false,
  load = false,
  type,
}: IPropsButton) => {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled || load} type={type}>
      {load ? <Loading /> : title}
    </ButtonContainer>
  );
};

export default Button;
