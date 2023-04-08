import styled from "styled-components";

export const ContainerForms = styled.div`
  padding: 20px 3%;
  @media (max-width: 695px) {
    flex-direction: column;
    padding: 20px 20px;
  }
`;

export const TitleForms = styled.h1`
  font-size: 18px;
  padding: 10px 0;
  margin: 10px 0;
  border-bottom: 1px solid silver;
`;
export const Subtitle = styled.h1`
  font-size: 20px;
`;
export const BoxForm = styled.div`
  padding: 20px 0;
  width: 100%;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  align-items: center;
`;
export const GridContainer = styled.div`
  display: flex;
  @media (max-width: 695px) {
    flex-direction: column;
  }
`;

export const Loader = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-color: #00000063;
display: flex;
justify-content: center;
align-items: center;
`