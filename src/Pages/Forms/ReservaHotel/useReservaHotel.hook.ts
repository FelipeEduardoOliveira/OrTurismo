import React from "react";
import { setContatosReservaHotel } from "../../../Database/api";
import { IpropsAlert } from "../../../utils/enums";

export const useReservaHotel = () => {
  // Alert
  const [showAlert, setShowAlert] = React.useState<IpropsAlert>();
  // Alert

  // ButtonLoad
  const [showButtonLoad, setShowButtonLoad] = React.useState<boolean>(false);
  // ButtonLoad

  // Dados da solicitação
  const [destino, setDestino] = React.useState("");
  const [dataSaida, setDataSaida] = React.useState("");
  const [dataRetorno, setDataRetorno] = React.useState("");
  const [passageirosAdultos, setPassageirosAdultos] = React.useState<number>(0);
  const [passageirosMenores, setPassageirosMenores] = React.useState<number>(0);

  // Dados da solicitação

  // Dados de Contato
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [mensagem, setMensagem] = React.useState("");

  // Dados de Contato

  const clearFields = () => {
    setDataSaida("");
    setDataRetorno("");
    setDestino("");
    setPassageirosAdultos(0);
    setPassageirosMenores(0);
    setNome("");
    setEmail("");
    setTelefone("");
    setMensagem("");
  };

  const qtdPassageiros = React.useMemo(() => {
    return [
      { label: "0", value: 0, disabled: false },
      { label: "1", value: 1, disabled: false },
      { label: "2", value: 2, disabled: false },
      { label: "3", value: 3, disabled: false },
      { label: "4", value: 4, disabled: false },
      { label: "5", value: 5, disabled: false },
      { label: "6", value: 6, disabled: false },
      { label: "7", value: 7, disabled: false },
      { label: "8", value: 8, disabled: false },
      { label: "9", value: 9, disabled: false },
    ];
  }, []);

  const handleSubmit = (val: any) => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    setShowButtonLoad(true);
    const data = {
      dataSaida,
      dataRetorno,
      destino,
      passageirosAdultos,
      passageirosMenores,
      nome,
      email,
      telefone,
      mensagem,
      isNew: true,
      createdAt: today,
    };
    setContatosReservaHotel(data)
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
    destino,
    dataSaida,
    dataRetorno,
    passageirosAdultos,
    passageirosMenores,
    qtdPassageiros,
    telefone,
    mensagem,
    showAlert,
    showButtonLoad,

    setNome,
    setEmail,

    handleSubmit,

    setDestino,
    setDataSaida,
    setDataRetorno,
    setPassageirosAdultos,
    setPassageirosMenores,
    setTelefone,
    setMensagem,
  };
};
