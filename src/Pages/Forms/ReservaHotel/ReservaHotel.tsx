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
import { useReservaHotel } from "./useReservaHotel.hook";
import SelectInput from "../../../Components/SelectInput";
import Button from "../../../Components/Button";
import BasicAlerts from "../../../Components/Alert";
import Textarea from "../../../Components/Textarea";

const ReservaHotel = () => {
  const {
    nome,
    email,
    destino,
    dataSaida,
    dataRetorno,
    showAlert,
    qtdPassageiros,
    showButtonLoad,
    telefone,
    mensagem,
    setTelefone,
    setMensagem,
    setPassageirosAdultos,
    setPassageirosMenores,
    setNome,
    setEmail,
    handleSubmit,
    setDestino,
    setDataSaida,
    setDataRetorno,
  } = useReservaHotel();

  return (
    <>
      <ContainerForms>
        <TitleForms>Personalize sua viagem</TitleForms>
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
                name="destino"
                placeholder="Destino"
                onChange={(val: string) => setDestino(val)}
                value={destino}
                required
              />
            </GridContainer>
            <GridContainer>
              <Input
                name="dataIda"
                placeholder="Data de ida"
                onChange={(val: string) => setDataSaida(val)}
                value={dataSaida}
                type={"date"}
              />
              <Input
                name="dataVolta"
                placeholder="Data de volta"
                onChange={(val: string) => setDataRetorno(val)}
                value={dataRetorno}
                type={"date"}
                disabled={!dataSaida}
                min={dataSaida}
              />
            </GridContainer>
            <GridContainer>
              <SelectInput
                id="passageirosAdultos"
                name="Quantidade de adultos"
                options={qtdPassageiros}
                onChange={(val) => setPassageirosAdultos(Number(val))}
              />
              <SelectInput
                id="passageirosAdultos"
                name="Quantidade de menores"
                options={qtdPassageiros}
                onChange={(val) => setPassageirosMenores(Number(val))}
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

export default ReservaHotel;
