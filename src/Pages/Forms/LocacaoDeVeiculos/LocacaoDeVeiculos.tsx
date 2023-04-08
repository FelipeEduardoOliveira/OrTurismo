import React, { useEffect } from "react";
import {
  BoxForm,
  ContainerForms,
  FormContainer,
  GridContainer,
  Subtitle,
  TitleForms,
} from "../style";
import Input from "../../../Components/Input";
import { useLocacaoDeVeiculos } from "./useLocacaoDeVeiculos.hook";
import SelectInput from "../../../Components/SelectInput";
import Button from "../../../Components/Button";
import BasicAlerts from "../../../Components/Alert";
import Textarea from "../../../Components/Textarea";

const LocacaoDeVeiculos = () => {
  const {
    nome,
    email,
    showAlert,
    showButtonLoad,
    telefone,
    mensagem,
    LocalDevolucao,
    dataDevolucao,
    dataRetirada,
    localRetirada,

    setDataDevolucao,
    setDataRetirada,
    setLocalDevolucao,
    setLocalRetirada,
    setTelefone,
    setMensagem,
    setNome,
    setEmail,
    handleSubmit,
  } = useLocacaoDeVeiculos();

  return (
    <>
      <ContainerForms>
        <TitleForms>Monte sua viagem</TitleForms>
        <span>
          Oferecemos experiências personalizadas, com isso, preencha os campos
          abaixo, nos informando as condições ideais para propormos a você a
          viagem ideal !!
        </span>
        <FormContainer onSubmit={handleSubmit}>
          <BoxForm>
            <Subtitle>Dados da solicitação</Subtitle>
            <GridContainer>
              <Input
                name="localRetirada"
                placeholder="Local de retirada"
                onChange={(val: string) => setLocalRetirada(val)}
                value={localRetirada}
                required
              />
              <Input
                name="devolucao"
                placeholder="Local de devolução"
                onChange={(val: string) => setLocalDevolucao(val)}
                value={LocalDevolucao}
                required
              />
            </GridContainer>
            <GridContainer>
              <Input
                name="dataRetirada"
                placeholder="Data de retirada"
                onChange={(val: string) => setDataRetirada(val)}
                value={dataRetirada}
                type={"datetime-local"}
              />
              <Input
                name="dataDevolucao"
                placeholder="Data de devolução"
                onChange={(val: string) => setDataDevolucao(val)}
                value={dataDevolucao}
                type={"datetime-local"}
                disabled={!dataRetirada}
                min={dataRetirada}
              />
            </GridContainer>
          </BoxForm>

          <BoxForm>
            <Subtitle>Dados de contato</Subtitle>

            <GridContainer>
              <Input
                name="name"
                placeholder="Nome"
                onChange={(val: string) => setNome(val)}
                value={nome}
                required
              />
              <Input
                name="email"
                placeholder="Email"
                onChange={(val: string) => setEmail(val)}
                value={email}
                type="email"
              />
              <Input
                name="phone"
                placeholder="Telefone"
                onChange={(val: string) => setTelefone(val)}
                value={telefone}
                required
              />
            </GridContainer>
            <GridContainer>
              <Textarea
                name="mensagem"
                placeholder="Mensagem"
                value={mensagem}
                onChange={(val) => setMensagem(val)}
              />
            </GridContainer>
          </BoxForm>

          <div>
            <Button title="Enviar" onClick={() => {}} load={showButtonLoad} />
          </div>
        </FormContainer>
      </ContainerForms>

      {showAlert && showAlert.open && (
        <BasicAlerts message={showAlert.message} type={showAlert.type} />
      )}
    </>
  );
};

export default LocacaoDeVeiculos;
