import React from "react";
import {
  ButtonContainerSection,
  ImageContainer,
  Imagem,
  SectionContainer,
  SubtitleSection,
  TextContainer,
  TitleSection,
} from "./style";
import { colors } from "../../../utils/Colors";
import Button from "../../Button";

interface IProprContainerSection {
    title: string;
    subtitle: string;
    imagem?: string;
    invert: boolean;
}

const Container_Section = ({title, subtitle, imagem, invert}:IProprContainerSection) => {

  return (
    <SectionContainer invert={invert}>
      <TextContainer>
        <TitleSection colors={colors}>
          {title}
        </TitleSection>

        <SubtitleSection colors={colors}>
          {subtitle}
        </SubtitleSection>

        <ButtonContainerSection>
          <Button title="Fale conosco" onClick={() => console.log()}/>
        </ButtonContainerSection>
      </TextContainer>
      {imagem&&(
        <ImageContainer>
        <Imagem src={imagem} alt={''}/>
      </ImageContainer>
      )}
      
    </SectionContainer>
  );
};

export default Container_Section;
