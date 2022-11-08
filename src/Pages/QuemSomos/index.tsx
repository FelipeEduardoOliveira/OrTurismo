import React from "react";
import Container_Section from "../../Components/Containers/Section";
import TitleDivisor from "../../Components/TitleDivisor";



const QuemSomos = () =>{
    return(
        <div>
         <TitleDivisor title="Quem somos"/>

         <Container_Section title='Quem somos' subtitle='descritiv de quem somos' invert={false}/>
        </div>
    )
}

export default QuemSomos;