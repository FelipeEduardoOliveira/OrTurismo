import styled from "styled-components";

export const CheckboxContainerInput = styled.div`
  margin: 10px 0;
  max-width: 500px;
`;
export const TitleQuestions = styled.h1`
  font-size: 18px;
`;
export const TitleCheckbox = styled.label`
display: flex;
align-items: center;
  padding: 10px 0;
  cursor: pointer;
`;
export const InputCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

export const IconDescription = styled.img`
  width: 20px;
`;

export const ContainerForm = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 100%;

`
export const ContainerFormData = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
@media(max-width: 757px){
  flex-direction: column;
  width: 80%;
}
`
export const ContainerForm_01 = styled.div`
width: 50%;
margin: 10px;
display: flex;
justify-content: center;
align-items: center;
min-height: 250px;

textarea{
  resize: none;
  /* border: 1px solid red; */
  padding: 10px;
}

@media(max-width: 757px){
  margin: none;
  width: 100%;
  textarea{
  padding: 0;
}
}
`
export const ContainerForm_02 = styled.form`
width: 50%;
margin: 10px;
min-height: 250px;
@media(max-width: 757px){
  margin: none;
  width: 100%;
}
`