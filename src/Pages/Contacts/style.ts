import styled from "styled-components";

export const ContainerContats = styled.div`

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
export const MapAddress = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 57%;
@media (max-width: 877px) {
    width: 100%;
    height: 100%;
  }
` 
export const AddressInfoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 40%;
@media (max-width: 877px) {
    width: 100%;
    margin: 20px 0;
  }
` 