import styled from "styled-components";


export const ContainerPost = styled.div`
padding: 10px 3%;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center ;
`
export const ContainerImagem = styled.div`
/* height: 350px; */

max-width: 600px;
img{
    width: 100% !important;
    height: 100%!important;
    margin: 0;
    padding: 0;
    object-fit: cover;
    object-position: center;
}
`
export const ContainerText = styled.div`
padding: 10px 0;
max-width: 600px;
font-size: 20px;
    text-align: justify;
    letter-spacing: 1px;

`

export const ContainerVoltar = styled.div`
    width: 100%;
    display: flex;
    padding: 20px 0;
    font-size: 16px;
    font-weight: 600;

    a{
        text-decoration: none;
        display: flex;
        color: #000;
    }
    a img{
        padding-right: 20px;
    }
`