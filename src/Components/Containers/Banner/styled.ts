import styled from "styled-components";
import background from '../../../Assets/village.jpg'

export const ContainerBanner = styled.div`
width: 100%;
height: 100vh;
background-image: url(${background});
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`