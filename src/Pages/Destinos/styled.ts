import styled from "styled-components";


export const ContainerDestiny = styled.div`
/* width: 100%; */
display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, fr));
  grid-row-gap: 10px;

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