import React from "react";
import {
  ContainerNewLogo,
  TextCardBanner,
} from "../styled";

const CardBanner = ({ item }: any) => {
  return (
    // <ContainerCardBanner>
    //   <IconContainer hexColor={item.hexColor}>
    //     <img src={item.icon} width={"62px"} height={"62px"} />
    //   </IconContainer>
    //   <CardLetterContainer linearColor={item.linearColor}>
    //     <CircleDesign/>
    //     {/* <CircleDesignDegrade /> */}
    //     <TitleCardBanner>{item.title ? item.title : ""}</TitleCardBanner>
    //     <TextCardBanner>{item.text ? item.text : ""}</TextCardBanner>
    //   </CardLetterContainer>
    // </ContainerCardBanner>
    <ContainerNewLogo>
      <img src={item.icon} width={"62px"} height={"62px"} />
      <TextCardBanner>{item.title}</TextCardBanner>
    </ContainerNewLogo>
  );
};

export default CardBanner;
