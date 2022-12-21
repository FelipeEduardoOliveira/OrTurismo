import React from "react";
import CardBanner from "./Components";
import { MockHowDoesItWork } from "./mock";
import { ContainerBanner, ContainerHowDoesItWork } from "./styled";

const HowDoesItWork = () => {
  const renderCardBanner = () => {
   return MockHowDoesItWork.map((item, index) => {
      return <CardBanner key={item.title} item={item} className={`div${index}`}/>;
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
