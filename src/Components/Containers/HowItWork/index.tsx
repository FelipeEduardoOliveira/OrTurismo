import React from "react";
import { ContainerHowItWork,  CardContainer } from "./style";
import Cards from "../../Card";
import TitleDivisor from "../../TitleDivisor";


const HowItWork = () =>{
    return(
        <ContainerHowItWork>
            <TitleDivisor title="HowItWork"/>

            <CardContainer>
            <Cards />    
            <Cards />    
            <Cards />    
            </CardContainer>

          
            
        </ContainerHowItWork>
    )
}

export default HowItWork;