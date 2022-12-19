import styled from "styled-components";
interface IColor {
    colors: { gray: string; white: string; black: string, lightBlue: string };
  }
interface IContainerSection {
  invert: boolean;
  }

export const SectionContainer = styled.div<IContainerSection>`
display: flex;
flex-direction: ${props => props.invert ? 'row-reverse' : 'row'};
align-items: center;
/* width: 100%; */
/* height: 100vh; */
padding: 5px 3%;
/* background: rgb(114,217,212);
background: linear-gradient(90deg, rgba(114,217,212,1) 0%, rgba(110,110,218,1) 51%, rgba(2,69,83,1) 100%); */

@media (max-width: 877px) {
    flex-direction: column;
    height: 100%;
    padding: 40px 3%;
  }
`

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
/* height: 100%; */
@media (max-width: 877px) {
    width: 100%;
  }
`

export const TitleSection = styled.h1<IColor>`
padding: 0 10px;
font-size: 20px;
width: 90%;
color: ${props=>props.colors.black};
strong{
    color: ${props=>props.colors.black}
}
`

export const SubtitleSection = styled.h3<IColor>`
padding: 10px 0px;
width: 90%;
font-size: 18px;
color: ${props=>props.colors.lightBlue};
font-family: 'NotoSans-Light';
`
export const ButtonContainerSection = styled.div`
padding: 20px 0px;
width: 90%;
display: flex;
flex-direction: row;
justify-content: flex-start;
@media (max-width: 877px) {
    justify-content: center;
  }
`


export const ImageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;
height: 100%;
@media (max-width: 877px) {
    width: 100%;
  }
`
export const Imagem = styled.img`
    max-width: 100%;
    height: 80%;
    filter: grayscale(0.3);
    vertical-align: middle;
    display: inline-block;
    border-radius: 8px;
    @media (max-width: 877px) {
        height: auto;
  }
`

export const ListTextContainer = styled.div<IColor>`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: flex-start;
margin-left: 10%;
width: 100%;
h3{
  font-size: 18px;
color: ${props=>props.colors.lightBlue};
font-family: 'NotoSans-Light';
}
details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}
/* height: 100%; */
@media (max-width: 877px) {
    width: 100%;
  }
`