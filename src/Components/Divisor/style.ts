import styled from "styled-components";

interface IColor {
  colors: { gray: string; white: string; black: string, lightBlue: string };
}

export const Divisor_main = styled.div<IColor>`
/* position: absolute;
bottom: 0; */
  background-color: ${(props) => props.colors.gray};
  color: ${props => props.colors.white};
  font-size: 15px;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 3%;
`;
