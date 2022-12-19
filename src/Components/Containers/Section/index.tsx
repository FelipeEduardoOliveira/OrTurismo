import React from "react";
import {
  ButtonContainerSection,
  ImageContainer,
  Imagem,
  ListTextContainer,
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
  linkButton?: string;
  list?:any;
}

const Container_Section = ({
  title,
  subtitle,
  imagem,
  invert,
  linkButton,
  list
}: IProprContainerSection) => {
  const renderText = (list: Array<any>) => {
    return (
        
          list.map((item) => {
            return (
              <details open={true} style={{padding:'10px 0'}} onClick={()=>{}}>
                <summary>{item.title}</summary>
                <h3>{item.text}</h3>
                </details>
            );
          })
        
    );
  };

  function createMarkup() {
    return {__html: subtitle};
  }

  return (
    <SectionContainer invert={invert}>
      <TextContainer>
        <TitleSection colors={colors}>{title}</TitleSection>

        {subtitle&&(
          <SubtitleSection colors={colors} dangerouslySetInnerHTML={createMarkup()}></SubtitleSection>
        )}

        <ListTextContainer colors={colors}>
        {list && renderText(list)}
        </ListTextContainer>

        {linkButton && (
          <ButtonContainerSection>
            <Button
              title="Fale conosco"
              onClick={() => console.log(linkButton)}
            />
          </ButtonContainerSection>
        )}
      </TextContainer>
      {imagem && (
        <ImageContainer>
          <Imagem src={imagem} alt={""} />
        </ImageContainer>
      )}
    </SectionContainer>
  );
};

export default Container_Section;
