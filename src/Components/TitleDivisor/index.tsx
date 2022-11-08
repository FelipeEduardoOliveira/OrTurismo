import React from "react";
import { ContainerHeader } from "./style";

interface IPropsContainer{
    title: string
}

const TitleDivisor = ({title}:IPropsContainer) =>{
    return(
            <ContainerHeader>
            {title}
            </ContainerHeader>
    )
}

export default TitleDivisor;