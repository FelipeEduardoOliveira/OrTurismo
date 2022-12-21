import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Divisor from '../Components/Divisor';
import Header from '../Components/Header';
import Contacts from '../Pages/Contacts';
import HomePage from '../Pages/Home';
import QuemSomos from '../Pages/QuemSomos';
import WhatsIcon from '../Assets/whatsapp.png';

const Rotas = () =>{
    const whatsAppNumber = '551112345678';
    const whatsAppText = 'Ol%C3%A1,%20tudo%20bem?%20Gostaria%20de%20uma%20ajuda%20para%20o%20planejamento%20da%20minha%20viagem.';
    const whatAppLink = `https://wa.me/${whatsAppNumber}?text=${whatsAppText}`
    

    return(

        <BrowserRouter>
        <Header/>
            <Routes>
                <Route  path='/' element={ <HomePage/> } />
            
                <Route path='/quem-somos' element={ <QuemSomos/> } />
            
                <Route path='/contatos' element={ <Contacts/> } />
                
                <Route path='*' element={ <p>Not found page</p> } />
            </Routes>

            <div style={{position:'fixed', bottom: '35px', right: '35px', zIndex:"999999", cursor:'pointer'}}>
                <a href={whatAppLink} target='_blank'>
                <img src={WhatsIcon} width={'65px'}/>
                </a>
            </div>
           
            <Divisor/>
        </BrowserRouter>
    ); 
}

export default Rotas;