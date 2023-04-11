import React from "react";
import {
  ContainerNewLogo,
  TextCardBanner,
} from "../styled";

const CardBanner = ({ item }: any) => {
  return (
    <ContainerNewLogo>
      <img src={item.icon} width={"200px"} height={"200px"} />
      <TextCardBanner>{item.title}</TextCardBanner>
    </ContainerNewLogo>
  );
};

export default CardBanner;
