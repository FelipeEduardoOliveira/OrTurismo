import styled from "styled-components";
import { IPropsError } from "../Input/styles";

export const ContainerSelectInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  width: 100%;
`;
export const SelectInputStyle = styled.select<IPropsError>`
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 2px solid ${(props) => (props.disabled ? "silver" : "#000")};
`;
export const SelectLabel = styled.label<IPropsError>`
  transition: 0.2s;
  font-size: 1rem;
  color: ${(props) => (props.disabled ? "silver" : "#000")};
`;
