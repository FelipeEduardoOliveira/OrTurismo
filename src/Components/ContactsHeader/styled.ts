import styled from "styled-components";


export const ContainerFirstHeader = styled.div`
padding: 10px 3%;
display: flex;
justify-content: space-around;
@media(max-width: 900px){
    display: none;
}
/* justify-content: space-between; */
`
export const ItemFisrtHeader = styled.div`
display: flex;
align-items: center;

a{
    color: black;
}
`
export const IconHeader = styled.img`
width: 18px;
margin-right: 10px;
`
export const Letters = styled.span`
font-size: 15px;
`