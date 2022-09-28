import styled from "styled-components";
import { device } from "../devices";

export const AuthenticationButtonStyled = styled.button`
    font-size: 1rem;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    font-family: 'Lato', sans-serif;
    text-align: center;
    min-width: 200px;
    background-color: ${props => props.authenticated ? "#606060" : "transparent"};
    color: ${props => props.authenticated ? "#c0c0c0" : "#606060"};
    border: 2px solid #1c1c1c;
    border-radius: 20px;
    @media ${device.mobileS} {
        display: ${props => props.mobile ? "flex" : "none"};
        min-width: 100px;
        width: 50vw;
    }
    @media ${device.laptop} {
        display: flex; 
        max-width: 200px;
    }
    
    @media ${device.desktop} {
        display: flex;
        max-width: 200px;
    }
    img {
        width: 100%;
        max-width: 20px;
        height: auto;
    }
    &:hover {
        cursor: pointer;
    ]
`;