import React from 'react';
import Container_Section from '../../Components/Containers/Section';
import { renderContainers } from '../../utils/Containers';
import HowItWork from '../../Components/Containers/HowItWork';
import { Banner } from '../../Components/Containers/Banner';
import { TitleBanner, SubtitleBanner, TextInitial } from './styled';
import TitleDivisor from '../../Components/TitleDivisor';


 const HomePage = () =>{
    return(
        <div>

            <Banner>
                    <TitleBanner>Rhormens</TitleBanner>
                    <SubtitleBanner>Uma viagem inteira pensando em você</SubtitleBanner>

            </Banner>
            {/* {
                renderContainers.map((item: any)=>{
                    return(
                        <Container_Section title={item.title} subtitle={item.subtitle}  imagem={item.image} invert={item.invert}/>
                    )
                })
            } */}
            
            <TextInitial>Somos a sua agência especializada em viagens personalizadas, com a missão de transformar o seu sonho em realidade e permitir que você viva essa experiência da melhor forma.</TextInitial>


            {/* <HowItWork /> */}
            
        </div>
    )
}

export default HomePage;