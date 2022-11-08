import styled from "styled-components";


export const ButtonContainer = styled.button`
    min-height: 60px;
    min-width: 145px;
    padding: 20px 35px;
    border: 1px solid white;
    color: white;
    border-radius: 6px;
    background-color: #35b8be;
    transition: background-color 250ms ease;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
    &:hover{
        background-color: #2faeb4;
    }
`