import React, { useState } from "react";
import Input from "../Input";
import { ContainerForm, ContainerFormData, ContainerForm_01, ContainerForm_02 } from "./style";

const Form = ({name, setName, email, setEmail, phone, setPhone, message, setMessage}:any) => {

  

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
          onChange={(e: any) => setPhone(e)}
          name={"WhatsApp"}
          value={phone}
          placeholder={"WhatsApp *"}
        />
      </ContainerForm_02>
      <ContainerForm_01>
        <textarea id="message" name="message" placeholder="Escreva sua mensagem *" rows={10} cols={50} spellCheck={true} value={message} onChange={(e:any)=>setMessage(e.target.value)}>          
        </textarea>
      </ContainerForm_01>
      </ContainerFormData>     
    </ContainerForm>
  );
};

export default Form;
 