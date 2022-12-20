import React from "react";
import {
  CardLetterContainer,
  CircleDesign,
  CircleDesignDegrade,
  ContainerCardBanner,
  IconContainer,
  TextCardBanner,
  TitleCardBanner,
} from "../styled";

const CardBanner = ({ item }: any) => {
  return (
    <ContainerCardBanner>
      <IconContainer>
        <img src={item.icon} width={"62px"} height={"62px"} />
      </IconContainer>
      <CardLetterContainer>
        <CircleDesign/>
        <CircleDesignDegrade />
        <TitleCardBanner>{item.title ? item.title : ""}</TitleCardBanner>
        <TextCardBanner>{item.text ? item.text : ""}</TextCardBanner>
      </CardLetterContainer>
    </ContainerCardBanner>
  );
};

export default CardBanner;
