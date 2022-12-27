import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HeaderContainer, NavigationContainer, MenuList, MenuItem, HamburguerMenu, Logotipo} from "./style";
import MenuIcon from '../../Assets/menu.png';
import Logo from '../../Assets/Logo.png';
import ContactsHeader from "../ContactsHeader";

const Header = ()=>{

    const [itemSelected, setItemSelected] = useState<string>('')
    
    const { pathname } = useLocation();
    const navigate = useNavigate()
    
    const redirectHome = () =>{
        navigate('/')
    }

    useEffect(()=>{
        
        setItemSelected(pathname)
    },[pathname]);

    const [disabled, setDisabled] = useState(true);

    return(
        <>
        <ContactsHeader/>
        
        <HeaderContainer>
             <div style={{display:'flex'}}>
             <Logotipo src={Logo} onClick={()=>{redirectHome(), setDisabled(!disabled)}}/>
            <NavigationContainer>
               
            <HamburguerMenu onClick={() => setDisabled(!disabled)}>

                <img src={MenuIcon}/>
            </HamburguerMenu>

                <MenuList disabled={disabled}>
                    <MenuItem selected={itemSelected === '/'} onClick={() => setDisabled(!disabled)}><Link to='/'>Home</Link></MenuItem>
                    <MenuItem selected={itemSelected === '/quem-somos'} onClick={() => setDisabled(!disabled)}><Link to='/quem-somos'>Quem somos</Link></MenuItem>
                    <MenuItem selected={itemSelected === '/blog'} onClick={() => setDisabled(!disabled)}><Link to='/blog'>Blog</Link></MenuItem>
                    <MenuItem selected={itemSelected === '/contatos'} onClick={() => setDisabled(!disabled)}><Link to='/contatos'>Contatos</Link></MenuItem>
                </MenuList>

                
                
            </NavigationContainer>
             </div>
        </HeaderContainer>
        </>
        
    )
}

export default Header;