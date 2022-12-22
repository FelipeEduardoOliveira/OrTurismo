import React  from "react";
import { Banner } from "../../Components/Containers/Banner";
import HowDoesItWork from "../../Components/HowDoesItWork";
import FeedbackAvaliation from "../../Components/FeedbackAvaliation";
import background from '../../Assets/CapaBannerLarge.png'
const HomePage = () => {




  return (
    <div>
      <Banner>
        <img src={background} />
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
