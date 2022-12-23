import React, { useState } from "react";
import Input from "../Input";
import { ContainerForm, ContainerFormData, ContainerForm_01, ContainerForm_02 } from "./style";

const Form = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [whatsApp, setWhatApp] = useState<string>("");
  const [messageText, setMessageText] = useState<string>("");

  

  return (
    <ContainerForm >
      <ContainerFormData>
      <ContainerForm_02>
        <Input
          onChange={(e: any) => setName(e)}
          name={"Nome"}
          value={name}
          placeholder={"Nome *"}
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
          placeholder={"WhatsApp *"}
        />
      </ContainerForm_02>
      <ContainerForm_01>
        <textarea id="message" name="message" placeholder="Escreva sua mensagem *" rows={10} cols={50} spellCheck={true} value={messageText} onChange={(e:any)=>setMessageText(e.target.value)}>          
        </textarea>
      </ContainerForm_01>
      </ContainerFormData>     
    </ContainerForm>
  );
};

export default Form;
 