import React, {  useState } from "react";
import Button from "../../Components/Button";
import Form from "../../Components/Form";
import CheckboxInput from "../../Components/Form/checkboxInput";
import { interesseEmContato, tipoDeViajante } from "../../Components/Form/question";
import TitleDivisor from "../../Components/TitleDivisor";
import {
  ContainerContats, ContainerQuestions, FormContainer,
} from "./style";

const Contacts = () => {

  const [personalizeMensagem, setPersonalizeMensagem] = useState(false);

  return (
    <ContainerContats>
      <TitleDivisor title="Contatos" />
      <h1 style={{padding:'10px 0'}}>Entrar em contato</h1>
      <FormContainer>
        
     
      <Form/>

      <p style={{padding:'10px 0', cursor:'pointer', color:'blue'}} onClick={()=>setPersonalizeMensagem(!personalizeMensagem)}>Personalizar minha mensagem</p>

      {personalizeMensagem&&(
          <ContainerQuestions>
          <CheckboxInput listData={interesseEmContato} Title={'Qual o seu interesse com o contato?'} />
            <CheckboxInput listData={tipoDeViajante} Title={'Qual o seu interesse com o contato?'} />
          </ContainerQuestions>
      )}
     
      </FormContainer>

      <Button title="Enviar" onClick={()=>console.log()} key={'Send-button'}/>
    </ContainerContats>
  );
};

export default Contacts;
