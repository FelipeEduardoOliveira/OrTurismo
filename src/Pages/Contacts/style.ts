import styled from "styled-components";

export const ContainerContats = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px 3%;
`

export const ContainerAddress = styled.div`
width: 100%;
height: 100vh;
background-color: aliceblue;
display: flex;
justify-content: space-between;
@media (max-width: 877px) {
    flex-direction: column;
  }

` 
export const FormContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`

export const ContainerQuestions = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`