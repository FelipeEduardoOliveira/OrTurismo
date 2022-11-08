import React from 'react';
import Container_Section from '../../Components/Containers/Section';
import Divisor from '../../Components/Divisor';
import Header from '../../Components/Header';
import { renderContainers } from '../../utils/Containers';
import HowItWork from '../../Components/Containers/HowItWork';


 const HomePage = () =>{
    return(
        <div>
            {
                renderContainers.map((item: any)=>{
                    return(
                        <Container_Section title={item.title} subtitle={item.subtitle}  imagem={item.image} invert={item.invert}/>
                    )
                })
            }

            <HowItWork />
            
        </div>
    )
}

export default HomePage;