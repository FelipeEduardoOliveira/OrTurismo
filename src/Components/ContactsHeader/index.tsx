import React from "react";
import SuportIcon from "../../Assets/support.png";
import EmaiIcon from "../../Assets/mail.png";
import WhatappIcon from "../../Assets/whatsAppIcon.png";
import InstaIcon from "../../Assets/instagramBlack.png";
import {
  ContainerFirstHeader,
  IconHeader,
  ItemFisrtHeader,
  Letters,
} from "./styled";

const ContactsHeader = () => {

    const whatsAppNumber = '5511962913779';
    const whatsAppText = 'Ol%C3%A1,%20tudo%20bem?%20Gostaria%20de%20uma%20ajuda%20para%20o%20planejamento%20da%20minha%20viagem.';
    const whatAppLink = `https://wa.me/${whatsAppNumber}?text=${whatsAppText}`


  return (
    <ContainerFirstHeader>
      <ItemFisrtHeader>
        <IconHeader src={SuportIcon} />
        <Letters>Central de atendimentos:<a href="tel:+55111234-5678"> <strong>55 11 1234-5678</strong> </a> </Letters>
      </ItemFisrtHeader>
      <ItemFisrtHeader>
        <IconHeader src={EmaiIcon} />
        <Letters>Email: <a href="mailto:teste@teste.com" target={'_blank'}> <strong>teste@teste.com</strong> </a></Letters>
      </ItemFisrtHeader>
      <ItemFisrtHeader>
        <IconHeader src={WhatappIcon} />
        <Letters>WhatsApp: <a href={whatAppLink} target='_blank'> <strong>11 1234-5678</strong> </a></Letters>
      </ItemFisrtHeader>
      <ItemFisrtHeader>
        <IconHeader src={InstaIcon} />
        <Letters>Instagram: <a href={'https://www.instagram.com/or.rhormenstur/'} target='_blank'> <strong>@or.rhormenstur</strong></a></Letters>
      </ItemFisrtHeader>
    </ContainerFirstHeader>
  );
};

export default ContactsHeader;
