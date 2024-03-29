import styled from "styled-components";

interface IColor {
  linearColor?: string;
  hexColor?: string;
}

export const ContainerHowDoesItWork = styled.div`
  padding: 20px;
  /* background-color: cadetblue; */
`;

export const ContainerBanner = styled.div`
  display: grid;
  justify-items: center;
  align-items: start;

  grid-template-columns: repeat(4, minmax(300px, fr));

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  /* .div0{
    grid-row-start: 1;
  grid-row-end: 3;
  } */

  @media (max-width: 985px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerCardBanner = styled.div`
  max-width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 20px;
`;

export const IconContainer = styled.div<IColor>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100px;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  z-index: 9999;
  border: 2px solid ${(props) => props.hexColor};
  border-bottom: none;
`;
export const CardLetterContainer = styled.div<IColor>`
  position: relative;
  /* background-color: orange; */
  background-image: linear-gradient(${(props) => props.linearColor});
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding: 20px;
  height: 350px;
  border-radius: 20px;
  overflow: hidden;
  color: white;
`;

export const CircleDesign = styled.div`
  position: absolute;
  width: 100px;
  height: 90px;
  top: -50px;
  background-color: white;
  border-radius: 100%;
`;
export const CircleDesignDegrade = styled.div`
  position: absolute;
  width: 383px;
  height: 338px;
  background-color: #cd767647;
  border-radius: 248px;
  bottom: -55px;
  right: -151px;
  overflow: hidden;
`;
export const TitleCardBanner = styled.h3`
  /* padding: 15px 0; */
  padding-top: 30px;
  padding-bottom: 15px;
  font-size: 20px;
`;
export const TextCardBanner = styled.span`
  /* padding: 15px 0; */
  letter-spacing: 1px;
  line-height: 26px;
  font-size: 20px;
`;

export const ContainerNewLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 100%;
  width: 200px;
  height: 180px;
  padding: 20px;
  color: black;
`;
