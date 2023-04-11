import React from "react";
import TitleDivisor from "../TitleDivisor";
import CardBanner from "./Components";
import { MockHowDoesItWork } from "./mock";
import { ContainerBanner, ContainerHowDoesItWork } from "./styled";
import { Link } from "react-router-dom";

const HowDoesItWork = () => {
  const renderCardBanner = () => {
    return MockHowDoesItWork.map((item, index) => {
      return (
        <Link to={`/${item.link}`}>
          <CardBanner key={item.title} item={item} className={`div${index}`}/>
        </Link>
      );
    });
  };

  return (
    <ContainerHowDoesItWork>
      <TitleDivisor title="Como funciona" />
      <ContainerBanner>{renderCardBanner()}</ContainerBanner>
    </ContainerHowDoesItWork>
  );
};

export default HowDoesItWork;
