import React from "react";
import { ButtonContainer } from "./style";
import Loading from '../Loading';

interface IPropsButton {
    title: string;
    onClick: () => void;
    disabled?: boolean;
    load?: boolean;
}

const Button = ({title, onClick, disabled, load }:IPropsButton) =>{
    return(
        <ButtonContainer onClick={onClick} disabled={disabled}>
         {load ? <Loading/> : title} 
        </ButtonContainer>
    )
}

export default Button;