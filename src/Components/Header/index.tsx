import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HeaderContainer, NavigationContainer, MenuList, MenuItem, HamburguerMenu, Logotipo, PhoneAndLogoContainer, Icon } from "./style";
import MenuIcon from '../../Assets/menu.png';
import Logo from '../../Assets/Logo.png';
import InstaIcon from '../../Assets/instagram.png';
import WhatsAppIcon from '../../Assets/whatsAppIcon.png';

const Header = ()=>{

    const [itemSelected, setItemSelected] = useState<string>('')
    
    const { pathname } = useLocation();

    const whatsAppNumber = '551112345678';
    const whatsAppText = 'Ol%C3%A1,%20tudo%20bem?%20N%C3%B3s%20da%20OR%20Rhormens%20Turismo%20ficamos%20muito%20felizes%20com%20o%20seu%20contato!%20Como%20podemos%20te%20ajudar%20hoje?';
    const whatAppLink = `https://wa.me/${whatsAppNumber}?text=${whatsAppText}`
   

    useEffect(()=>{
        
        setItemSelected(pathname)
    },[pathname]);

    const [disabled, setDisabled] = useState(true);

    return(
        <HeaderContainer>
             <div style={{display:'flex'}}>
             <Logotipo src={Logo}/>
            <NavigationContainer>
               
            <HamburguerMenu onClick={() => setDisabled(!disabled)}>

                <img src={MenuIcon}/>
            </HamburguerMenu>

                <MenuList disabled={disabled}>
                    <MenuItem selected={itemSelected === '/'}><Link to='/'>Home</Link></MenuItem>
                    <MenuItem selected={itemSelected === '/quem-somos'}><Link to='/quem-somos'>Quem somos</Link></MenuItem>
                    <MenuItem selected={itemSelected === '/destinos'}><Link to='/destinos'>Destinos</Link></MenuItem>
                    <MenuItem selected={itemSelected === '/contatos'}><Link to='/contatos'>Contatos</Link></MenuItem>
                </MenuList>

                
                
            </NavigationContainer>
             </div>

             <PhoneAndLogoContainer>
                <div>
                    <p> 55 11 <strong>1234-5678</strong></p>
                    <p> <Icon src={WhatsAppIcon} tamanho='15px'/> <a href={whatAppLink} target='_blank'>11 1234-5678</a></p>
                    <p> <a href='mailto:teste@teste.com' target='_blank'>teste@teste.com</a></p>
                </div>
                <Icon src={InstaIcon} />
             </PhoneAndLogoContainer>
        </HeaderContainer>
    )
}

export default Header;