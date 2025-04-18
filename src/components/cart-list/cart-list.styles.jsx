import styled from "styled-components";
import { BaseButton, ButtonGoogleSignIn, ButtonInverted } from "../button/button.styles";

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    ${BaseButton}, 
    ${ButtonGoogleSignIn}, 
    ${ButtonInverted} {
       margin-top: auto;
    }
`;

export const CartDropdownEmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

export const CartDropdownItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;
