import styled from "styled-components";

interface IMenu {
  disabled: boolean;
}
interface IPropsMenuItem {
  selected: boolean;
}
interface IIconProps {
  tamanho?: string;
}

export const HeaderContainer = styled.header`
  display: flex;
  background-color: aliceblue;
  justify-content: center;
  align-items: center;
  padding: 20px 3%;
  margin-top: 39px;
  justify-content: space-between;
  @media (max-width: 877px) {
    justify-content: center;
    margin-top: 0;
    z-index: 9999;
  }
`;
export const Logotipo = styled.img`
 width: 150px;
 cursor: pointer;
`;
export const Icon = styled.img<IIconProps>`
 width: ${(props) => (props.tamanho ? props.tamanho : '30px')};
`;
export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  /* width: 100%; */
  align-items: center;

  @media (max-width: 877px) {
    /* flex-direction: column; */
  }
`;
export const MenuList = styled.ul<IMenu>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 877px) {
    flex-direction: column;
    background-color: #eef8ff;
    position: absolute;
    top: 88px;
    width: 100%;
    right: 0;
    display: ${(props) => (props.disabled ? "none" : "flex")};
    z-index: 999999;
  }
`;

export const MenuItem = styled.li<IPropsMenuItem>`
  padding: 0 16px;
  opacity: 0.8;
  transition: opacity 200ms ease;
  text-transform: none;
  list-style: none;

  a {
    font-size: 18px;
    color: ${(props) => (props.selected ? "#3eaba9" : "#28224b")};
    text-decoration: none;
    &:hover {
      color: #3eaba9;
    }
  }

  @media (max-width: 877px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px 0;
    &:hover {
      border-bottom: 1px solid black;
    }
  }
`;

export const HamburguerMenu = styled.div`
  width: 50px;
  height: 50px;
  display: none;
  z-index: 1;

  @media (max-width: 877px) {
    display: flex;
  }
`;

export const PhoneAndLogoContainer = styled.div`

  display: flex;  
  justify-content: space-around;
  align-items: center;
  text-align: left;

  div{
    padding: 0 10px;
    font-size: 14px;
  }
  div p {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a{
    
    color: #000;
  }

  @media (max-width: 480px) {
    display: none;
  }
`
