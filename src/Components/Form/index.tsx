import React, { useState } from "react";
import Input from "../Input";
import CheckboxInput from "./checkboxInput";
import { interesseEmContato, tipoDeViajante } from "./question";


const Form = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [whatsApp, setWhatApp] = useState<string>("");

  return (
    <form style={{ width: "100%", maxWidth: "600px" }}>
      <div>
        <h1>Entrar em contato</h1>
        <Input
          onChange={(e: any) => setName(e)}
          name={"Nome"}
          value={name}
          placeholder={"Nome"}
        />
        <Input
          onChange={(e: any) => setEmail(e)}
          name={"Email"}
          value={email}
          placeholder={"Email"}
        />
        <Input
          onChange={(e: any) => setWhatApp(e)}
          name={"WhatsApp"}
          value={whatsApp}
          placeholder={"WhatsApp"}
        />
      </div>

<CheckboxInput listData={interesseEmContato} Title={'Qual o seu interesse com o contato?'} />
{/* <CheckboxInput listData={tipoDeViajante} Title={'Qual o seu interesse com o contato?'} /> */}
      
      
    </form>
  );
};

export default Form;
