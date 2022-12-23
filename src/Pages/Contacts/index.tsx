import React, { useState } from "react";
import Button from "../../Components/Button";
import Form from "../../Components/Form";
import CheckboxInput from "../../Components/Form/checkboxInput";
import {
  interesseEmContato,
  tipoDeViajante,
} from "../../Components/Form/question";
import TitleDivisor from "../../Components/TitleDivisor";
import emailjs from "@emailjs/browser";
import {
  ContainerContats,
  ContainerDataViagem,
  ContainerPersonalizeMessage,
  ContainerQuestions,
  FormContainer,
  Loader,
} from "./style";
import DateInput from "../../Components/DateInput";
import { Dayjs } from "dayjs";
import Input from "../../Components/Input";
import { useEffect } from "react";
import BasicAlerts from "../../Components/Alert";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading";

const Contacts = () => {
  const [personalizeMensagem, setPersonalizeMensagem] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [tripTime, setTripTime] = useState("");
  const [dateValue, setDateValue] = useState<Date | "">("");
  const [messageCheck, setmessageCheck] = useState([]);
  const [load, setLoad] =useState(false)
  const [showAlert, setShowAlert] = useState({
    open: false,
    message: "",
    type: "",
  });
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed).toISOString().split("T")[0];
  const naviagate = useNavigate();

  const serviceID = String(process.env.REACT_APP_SERVICE_ID);
  const templateID = String(process.env.REACT_APP_TEMPLATE_ID);
  const publicKey = String(process.env.REACT_APP_USER_ID);

  const templateParams = {
    name_user: name ? name : "-",
    email_user: email ? email : "-",
    phone_user: phone ? phone : "-",
    message: message ? message : "-",
    date_trip: dateValue ? dateValue : "-",
    day_quantity: tripTime ? tripTime : "-",
    preference: messageCheck ? messageCheck : "-",
  };

  const validateField = () => {
    if (!name) {
      return alert("Preencha o nome");
    }
    if (!phone) {
      return alert("Preencha o phone");
    }
    if (!message) {
      return alert("Preencha a message");
    }
    sendEmailContact();
  };
  const sendEmailContact = async () => {
    setLoad(true)
    await emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        setShowAlert({
          open: true,
          message: "Email enviado com sucesso!",
          type: "success",
        });

        setTimeout(() => {
          naviagate("/");
          setShowAlert({
            open: false,
            message: "",
            type: "",
          });
        }, 3000);
      })
      .catch((error) => {
        setShowAlert({
          open: true,
          message: "Ops, tivemos um problema, tente novamente mais tarde!",
          type: "warning",
        });

        setTimeout(() => {
          setShowAlert({
            open: false,
            message: "",
            type: "",
          });
        }, 3000);
      });

      setLoad(false)
  };

  return (
    <ContainerContats>
     {load&&(
       <Loader>

       <Loading/>
     </Loader>
     )}
      <TitleDivisor title="Contatos" />
      <h1 style={{ padding: "10px 0" }}>Entrar em contato</h1>
      <FormContainer>
        <Form
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          message={message}
          setMessage={setMessage}
        />

        <p
          style={{ padding: "10px 0", cursor: "pointer", color: "blue" }}
          onClick={() => setPersonalizeMensagem(!personalizeMensagem)}
        >
          Personalizar minha mensagem
        </p>

        {personalizeMensagem && (
          <ContainerPersonalizeMessage>
            <ContainerQuestions>
              <CheckboxInput
                key={"Checklis-personalizado"}
                listData={interesseEmContato}
                Title={"Qual o seu interesse com o contato?"}
                setmessageCheck={setmessageCheck}
                messageCheck={messageCheck}
              />
            </ContainerQuestions>

            <ContainerDataViagem>
              <DateInput
                value={dateValue}
                setValue={setDateValue}
                minDate={today}
                title={"Dia da viagem"}
              />
              <Input
                onChange={(e: any) => setTripTime(e)}
                name={"Tempo viagem"}
                value={tripTime}
                placeholder={"Dias que vai viajar"}
              />
            </ContainerDataViagem>
          </ContainerPersonalizeMessage>
        )}
      </FormContainer>

      <Button
        title="Enviar"
        onClick={() => validateField()}
        key={"Send-button"}
      />

      {showAlert.open && (
        <BasicAlerts message={showAlert.message} type={showAlert.type} />
      )}
    </ContainerContats>
  );
};

export default Contacts;
