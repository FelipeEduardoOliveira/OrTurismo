import React from "react";
import CardBanner from "./Components";
import { MockHowDoesItWork } from "./mock";
import { ContainerBanner, ContainerHowDoesItWork } from "./styled";

const HowDoesItWork = () => {
  const renderCardBanner = () => {
   return MockHowDoesItWork.map((item) => {
      return <CardBanner key={item.title} item={item}/>;
    });
  };

  return (
    <ContainerHowDoesItWork>
      <ContainerBanner>
        {renderCardBanner()}
      </ContainerBanner>
    </ContainerHowDoesItWork>
  );
};

export default HowDoesItWork;
