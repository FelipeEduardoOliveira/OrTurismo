import styled from "styled-components";

export const ContainerHowDoesItWork = styled.div`
  padding: 20px;
  /* background-color: cadetblue; */
`;

export const ContainerBanner = styled.div`
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, fr));

  @media (min-width: 600px) {
   grid-template-columns: repeat(2, 1fr); 
}
@media (min-width: 900px) {
   grid-template-columns: repeat(4, 1fr); 
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

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100px;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  z-index: 9999;
  border: 2px solid black;
  border-bottom: none;
`;
export const CardLetterContainer = styled.div`
  position: relative;
  background-color: orange;
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
  padding: 15px 0;
  letter-spacing: 1px;
  line-height: 26px;
`;
