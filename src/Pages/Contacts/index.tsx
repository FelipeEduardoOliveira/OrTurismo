import React, { useEffect, useRef } from "react";
import Container_Section from "../../Components/Containers/Section";
import TitleDivisor from "../../Components/TitleDivisor";
import {
  AddressInfoContainer,
  ContainerAddress,
  ContainerContats,
  MapAddress,
} from "./style";

const Contacts = () => {
  return (
    <ContainerContats>
      <TitleDivisor title="Contatos" />

      <ContainerAddress>
        <MapAddress>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.0677053507166!2d-46.869800785386474!3d-23.45802216366848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf031f1eb8e94f%3A0xe799568f138da780!2sAlameda%20Serra%20do%20Cip%C3%B3%2C%2081%20-%20Colinas%20da%20Anhanguera%2C%20Santana%20de%20Parna%C3%ADba%20-%20SP%2C%2006544-410!5e0!3m2!1spt-BR!2sbr!4v1667951013528!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapAddress>

        <AddressInfoContainer>
          <h1>Informações do endereço</h1>
          <address>
            Email: <a href="mailto:leandrogounos@gmail.com ">leandrogounos@gmail.com </a>.<br />
            <br />
            Telefone:<a href="tel:11 4153-6472">11 4153-6472</a> 
            <br />
            Celular: <a href="tel:11 99516-7949">11 99516-7949</a> 
            <br/>
            Alameda serra do cipó, 81 - Tamboré - Santana de Parnaíba
          </address>
        </AddressInfoContainer>
      </ContainerAddress>
    </ContainerContats>
  );
};

export default Contacts;
