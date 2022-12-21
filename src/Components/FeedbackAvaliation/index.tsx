import React from "react";
import Cards from "../Card";
import TitleDivisor from "../TitleDivisor";
import { myMockFeedback } from "./mockFeedback";
import { ContainerAvaliationFeedback } from "./style";

const FeedbackAvaliation = () => {
  const renderAvaliations = () => {
    return myMockFeedback.map((item,index) => {
      return <Cards data={item} key={index}/>;
    });
  };
  return (
    <>
      <TitleDivisor title="O que falam de nós?" />

      <ContainerAvaliationFeedback>
        <div style={{ padding: "10px 3%", display: "flex" }}>
          {renderAvaliations()}
        </div>
      </ContainerAvaliationFeedback>
    </>
  );
};

export default FeedbackAvaliation;
