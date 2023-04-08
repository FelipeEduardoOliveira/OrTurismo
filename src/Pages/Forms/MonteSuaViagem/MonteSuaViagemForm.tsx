import React from "react";
import {
  BoxForm,
  ContainerForms,
  FormContainer,
  GridContainer,
  Subtitle,
  TitleForms,
} from "../style";
import Input from "../../../Components/Input";
import { useMonteSuaViagem } from "./useMonteSuaViagem.hook";
import SelectInput from "../../../Components/SelectInput";
import Button from "../../../Components/Button";
import BasicAlerts from "../../../Components/Alert";

const MonteSuaViagem = () => {
  const {
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
  } = useMonteSuaViagem();

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
            <Subtitle>Dados para contato</Subtitle>
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
                required
              />
            </GridContainer>
            <GridContainer>
              <Input
                name="whatsApp"
                placeholder="WhatsApp"
                onChange={(val: string) => setWhatsApp(val)}
                value={whatsApp}
              />
              <Input
                name="homePhone"
                placeholder="Telefone residencial"
                onChange={(val: string) => setTelefoneResidencial(val)}
                value={telefoneResidencial}
              />
              <Input
                name="phoneCompany"
                placeholder="Telefone comercial"
                onChange={(val: string) => setTelefoneComercial(val)}
                value={telefoneComercial}
              />
            </GridContainer>
          </BoxForm>

          <BoxForm>
            <Subtitle>Dados da viagem</Subtitle>
            <GridContainer>
              <SelectInput
                id="tipoTransporte"
                name="Tipo de transporte"
                options={tipoDeViagemOptions}
                onChange={(val) => setTipoTransporte(val)}
              />
            </GridContainer>
            <GridContainer>
              <Input
                name="destino"
                placeholder="Destino"
                onChange={(val: string) => setDestino(val)}
                value={destino}
              />
              <Input
                name="localEmvbarque"
                placeholder="Local de embarque"
                onChange={(val: string) => setLocalEmbarque(val)}
                value={localEmbarque}
              />
            </GridContainer>
            <GridContainer>
              <Input
                name="dataSaida"
                placeholder="Data de saída"
                onChange={(val: string) => setDataSaida(val)}
                value={dataSaida}
                type={"date"}
              />
              <Input
                name="dataRetorno"
                placeholder="Retorno"
                onChange={(val: string) => setDataRetorno(val)}
                value={dataRetorno}
                type={"date"}
                disabled={!dataSaida}
                min={dataSaida}
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

export default MonteSuaViagem;
