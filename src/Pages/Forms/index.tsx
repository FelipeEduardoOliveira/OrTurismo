import React from "react";
import {  useParams } from "react-router-dom";
import MonteSuaViagem from "./MonteSuaViagem";
import PassagensAereas from "./PassagensAereas/PassagensAereas";
import LocacaoDeVeiculos from "./LocacaoDeVeiculos/LocacaoDeVeiculos";
import ReservaHotel from "./ReservaHotel/ReservaHotel";

const Forms = () => {
  const params = useParams();

  const renderForm = () => {
    switch (params.idForm) {
      case "monte-sua-viagem":
        return <MonteSuaViagem />;
      case "passagens-aereas":
        return <PassagensAereas />;
      case "locacao-de-veiculos":
        return <LocacaoDeVeiculos />;
      case "reserva-de-hoteis":
        return <ReservaHotel />;

      default:
        return <>Adicione um formulario para esse parametro</>;
        break;
    }
  };
  return <div>{renderForm()}</div>;
};

export default Forms;
