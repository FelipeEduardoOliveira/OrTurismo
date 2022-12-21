import styled from "styled-components";
import background from '../../../Assets/CapaBanner.png'

export const ContainerBanner = styled.div`
width: 100%;
height: 100vh;
background-image: url(${background});
background-size: cover;
background-position: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`