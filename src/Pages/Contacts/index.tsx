import React, { useEffect, useRef } from "react";
import Container_Section from "../../Components/Containers/Section";
import Form from "../../Components/Form";
import TitleDivisor from "../../Components/TitleDivisor";
import {
  ContainerContats, FormContainer,
} from "./style";

const Contacts = () => {
  const whatsAppNumber = "5511962913779";
  const whatsAppText =
    "Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20uma%20viagem!";
  const whatAppLink = `https://wa.me/${whatsAppNumber}?text=${whatsAppText}`;

  return (
    <ContainerContats>
      <TitleDivisor title="Contatos" />

      <FormContainer>
      <Form/>
      </FormContainer>

      {/* <Container_Section
        title="Ficou interessado? FALE CONOSCO"
        subtitle={`Preencha o formulário abaixo para que possamos ajudá-lo da melhor forma ou nos envie pelo <a href=https://wa.me/${whatsAppNumber}?text=${whatsAppText} target='_blank'>WhatsApp</a>`}
        invert={false}
      /> */}

      {/* <div style={{display:'flex', justifyContent:'space-around', alignItems: 'center'}}>
        
        
      </div> */}

      
    </ContainerContats>
  );
};

export default Contacts;
