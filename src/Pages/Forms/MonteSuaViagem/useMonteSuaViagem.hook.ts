import React from "react";
import {
  getAllContatoDeViagem,
  setContatosViagens,
} from "../../../Database/api";
import { IpropsAlert } from "../../../utils/enums";

export const useMonteSuaViagem = () => {
  // Alert
  const [showAlert, setShowAlert] = React.useState<IpropsAlert>();
  // Alert

  // ButtonLoad
  const [showButtonLoad, setShowButtonLoad] = React.useState<boolean>(false);
  // ButtonLoad

  const clearFields = () => {
    setNome("");
    setEmail("");
    setWhatsApp("");
    setTelefoneResidencial("");
    setTelefoneComercial("");
    setTipoTransporte("");
    setDataSaida("");
    setDataRetorno("");
    setDestino("");
    setLocalEmbarque("");
  };

  // Dados para contato
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [whatsApp, setWhatsApp] = React.useState("");
  const [telefoneResidencial, setTelefoneResidencial] = React.useState("");
  const [telefoneComercial, setTelefoneComercial] = React.useState("");
  // Dados para contato

  // Dados da viagem
  const [tipoTransporte, setTipoTransporte] = React.useState<string | number>(
    ""
  );
  const [destino, setDestino] = React.useState("");
  const [localEmbarque, setLocalEmbarque] = React.useState("");
  const [dataSaida, setDataSaida] = React.useState("");
  const [dataRetorno, setDataRetorno] = React.useState("");
  // Dados da viagem

  const tipoDeViagemOptions = React.useMemo(() => {
    return [
      {
        label: "Selecione o tipo de transporte",
        value: "DEFAULT",
        disabled: true,
      },
      { label: "Aéreo", value: "aereo", disabled: false },
      { label: "Rodoviário", value: "rodoviario", disabled: false },
      {
        label: "Não quero transporte",
        value: "não_quero_transporte",
        disabled: false,
      },
    ];
  }, []);

  const handleSubmit = (val: any) => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    setShowButtonLoad(true);
    const data = {
      nome,
      email,
      whatsApp,
      telefoneResidencial,
      telefoneComercial,
      tipoTransporte,
      destino,
      localEmbarque,
      dataSaida,
      dataRetorno,
      isNew: true,
      createdAt: today,
    };
    setContatosViagens(data)
      .then(() => {
        setShowButtonLoad(false);
        clearFields();
        setShowAlert({
          open: true,
          message: "Enviado com sucesso",
          type: "success",
        });
      })
      .catch(() => {
        setShowButtonLoad(false);
      });

    setTimeout(() => {
      setShowAlert({
        open: false,
        message: "",
        type: "success",
      });
    }, 3000);
    val.preventDefault();
  };

  return {
    nome,
    email,
    whatsApp,
    telefoneResidencial,
    telefoneComercial,

    tipoTransporte,
    destino,
    localEmbarque,
    dataSaida,
    dataRetorno,

    tipoDeViagemOptions,

    showAlert,

    showButtonLoad,

    setNome,
    setEmail,
    setWhatsApp,
    setTelefoneResidencial,
    setTelefoneComercial,

    handleSubmit,

    setTipoTransporte,
    setDestino,
    setLocalEmbarque,
    setDataSaida,
    setDataRetorno,
  };
};
