import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HeaderContainer, NavigationContainer, MenuList, MenuItem, HamburguerMenu } from "./style";
import MenuIcon from '../../Assets/menu.png';

const Header = ()=>{

    const [itemSelected, setItemSelected] = useState<string>('')
    
    const { pathname } = useLocation();
   

    useEffect(()=>{
        
        setItemSelected(pathname)
    },[pathname]);

    const [disabled, setDisabled] = useState(true);

    return(
        <HeaderContainer>
             <h1>Logo</h1>
            <NavigationContainer>
               
            <HamburguerMenu onClick={() => setDisabled(!disabled)}>

                <img src={MenuIcon}/>
            </HamburguerMenu>

                <MenuList disabled={disabled}>
                    <MenuItem selected={itemSelected === '/'}><Link to='/'>Home</Link></MenuItem>
                    <MenuItem selected={itemSelected === '/quem-somos'}><Link to='/quem-somos'>Quem somos</Link></MenuItem>
                    <MenuItem selected={itemSelected === '/contatos'}><Link to='/contatos'>Contatos</Link></MenuItem>
                </MenuList>

                
                
            </NavigationContainer>
        </HeaderContainer>
    )
}

export default Header;