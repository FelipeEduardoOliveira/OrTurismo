import styled from "styled-components";

export const ContainerHowItWork = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 3%;
  /* height: 100vh; */
`;
export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 878px) {
    flex-direction: column;
     align-content: space-between;
  }
`;
