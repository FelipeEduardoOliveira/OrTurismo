import React from "react";
import { setContatosLocacaoDeVeiculos } from "../../../Database/api";
import { IpropsAlert } from "../../../utils/enums";

export const useLocacaoDeVeiculos = () => {
  // Alert
  const [showAlert, setShowAlert] = React.useState<IpropsAlert>();
  // Alert

  // ButtonLoad
  const [showButtonLoad, setShowButtonLoad] = React.useState<boolean>(false);
  // ButtonLoad

  // Dados da solicitação
  const [localRetirada, setLocalRetirada] = React.useState("");
  const [LocalDevolucao, setLocalDevolucao] = React.useState("");
  const [dataRetirada, setDataRetirada] = React.useState("");
  const [dataDevolucao, setDataDevolucao] = React.useState("");

  // Dados da solicitação

  // Dados de Contato
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [mensagem, setMensagem] = React.useState("");

  // Dados de Contato

  const clearFields = () => {
    setLocalRetirada("");
    setLocalDevolucao("");
    setDataRetirada("");
    setDataDevolucao("");
    setNome("");
    setEmail("");
    setTelefone("");
    setMensagem("");
  };

  const handleSubmit = (val: any) => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    setShowButtonLoad(true);
    const data = {
      localRetirada,
      LocalDevolucao,
      dataRetirada,
      dataDevolucao,
      nome,
      email,
      telefone,
      mensagem,
      isNew: true,
      createdAt: today,
    };
    setContatosLocacaoDeVeiculos(data)
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

    // setTimeout(() => {
    //   setShowAlert({
    //     open: false,
    //     message: "",
    //     type: "success",
    //   });
    // }, 3000);
    val.preventDefault();
  };

  return {
    nome,
    email,
    telefone,
    mensagem,
    showAlert,
    showButtonLoad,
    localRetirada,
    LocalDevolucao,
    dataRetirada,
    dataDevolucao,

    setNome,
    setEmail,

    handleSubmit,

    setTelefone,
    setMensagem,
    setLocalRetirada,
    setLocalDevolucao,
    setDataRetirada,
    setDataDevolucao,
  };
};
