import React, { useEffect } from "react";
import { Banner } from "../../Components/Containers/Banner";
import { TitleBanner, SubtitleBanner } from "./styled";
import HowDoesItWork from "../../Components/HowDoesItWork";
import FeedbackAvaliation from "../../Components/FeedbackAvaliation";

const HomePage = () => {

  const token = process.env.REACT_APP_INSTA_TOKEN;

  useEffect(()=>{
    const env = process.env.NODE_ENV;
    console.log({env})
  },[])

  return (
    <div>
      <Banner>
        {/* <TitleBanner>Rhormens</TitleBanner> */}
        {/* <SubtitleBanner>Uma viagem inteira pensando em você</SubtitleBanner> */}
      </Banner>

      <HowDoesItWork />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <FeedbackAvaliation />
      </div>

      {/* <HowItWork /> */}
    </div>
  );
};

export default HomePage;
