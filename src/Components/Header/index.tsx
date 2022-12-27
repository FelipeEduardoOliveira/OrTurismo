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
             <Logotipo src={Logo} onClick={()=>redirectHome()}/>
            <NavigationContainer>
               
            <HamburguerMenu onClick={() => setDisabled(!disabled)}>

                <img src={MenuIcon}/>
            </HamburguerMenu>

                <MenuList disabled={disabled}>
                    <MenuItem selected={itemSelected === '/'}><Link to='/'>Home</Link></MenuItem>
                    <MenuItem selected={itemSelected === '/quem-somos'}><Link to='/quem-somos'>Quem somos</Link></MenuItem>
                    <MenuItem selected={itemSelected === '/blog'}><Link to='/blog'>Blog</Link></MenuItem>
                    <MenuItem selected={itemSelected === '/contatos'}><Link to='/contatos'>Contatos</Link></MenuItem>
                </MenuList>

                
                
            </NavigationContainer>
             </div>
        </HeaderContainer>
        </>
        
    )
}

export default Header;