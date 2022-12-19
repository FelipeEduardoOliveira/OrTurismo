import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HeaderContainer, NavigationContainer, MenuList, MenuItem, HamburguerMenu, Logotipo, PhoneAndLogoContainer, Icon } from "./style";
import MenuIcon from '../../Assets/menu.png';
import Logo from '../../Assets/Logo.png';
import FacebookIcon from '../../Assets/facebookIcon.png';
import WhatsAppIcon from '../../Assets/whatsAppIcon.png';

const Header = ()=>{

    const [itemSelected, setItemSelected] = useState<string>('')
    
    const { pathname } = useLocation();

    const whatsAppNumber = '551112345678';
    const whatsAppText = 'Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20uma%20viagem!';
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
                </div>
                <Icon src={FacebookIcon} />
             </PhoneAndLogoContainer>
        </HeaderContainer>
    )
}

export default Header;