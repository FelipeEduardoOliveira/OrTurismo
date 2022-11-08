import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Divisor from '../Components/Divisor';
import Header from '../Components/Header';
import Contacts from '../Pages/Contacts';
import HomePage from '../Pages/Home';
import QuemSomos from '../Pages/QuemSomos';


const Rotas = () =>{

    

    return(

        <BrowserRouter>
        <Header/>
            <Routes>
                <Route  path='/' element={ <HomePage/> } />
            
                <Route path='/quem-somos' element={ <QuemSomos/> } />
            
                <Route path='/contatos' element={ <Contacts/> } />
                
                <Route path='*' element={ <p>Not found page</p> } />
            </Routes>
           
            <Divisor/>
        </BrowserRouter>
    ); 
}

export default Rotas;