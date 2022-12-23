import styled from "styled-components";


export const ContainerDestiny = styled.div`
width: 100%;
min-height: 100vh;
`
export const ContainerCardsBlog = styled.div`
padding: 20px 0;
display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, fr));
  grid-row-gap: 10px;
  a{
   color: #000;
   text-decoration: none;
  }

  @media (min-width: 600px) {
   grid-template-columns: repeat(2, 1fr); 
}
@media (min-width: 900px) {
   grid-template-columns: repeat(3, 1fr); 
}
@media (min-width: 1000px) {
   grid-template-columns: repeat(4, 1fr); 
}
`