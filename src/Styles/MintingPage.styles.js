import styled from "styled-components";
import { device } from "./devices";

export const MintLive = styled.span`
    font-size: 1.5rem;
    width: 100%;
    padding: 0;
    margin: 0;
    font-family: 'Lato', sans-serif;
    color: #606060;
    grid-area: live;

    @media ${device.mobileS} {
        text-align: center;
    }
    @media ${device.laptop} {
        text-align: left;
    }
`

export const MintHeadline = styled.h1`
    font-size: 5rem;
    padding: 0;
    text-align: center;
    width: 100%;
    margin: 0;
    font-family: 'Lato', sans-serif;
`
export const MintText = styled.p`
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
    font-family: 'Lato', sans-serif;
    text-align: center;
    color: #606060;
    width: 100%;
`
export const QuantityButton = styled.button`
    font-size: 2rem;
    padding: 0 0.7rem;
    margin: 0;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    text-align: center;
    background: ${props => props.theme.mint ? props.theme.mint : "#c0c0c0"};
    border: none;
    color: ${props => props.theme.mint ? props.theme.mint : "#1c1c1c"};
    border-radius: 100%;
`;

export const QuantityInput = styled.input`
        font-size: 2rem;
        border: 3px solid ${props => props.theme.mint ? props.theme.mint : "#1c1c1c"};
        border-radius: 5px;
        padding: 0.5rem;
        margin: 0;
        font-family: 'Lato', sans-serif;
        text-align: center;
        background: ${props => props.theme.mint ? props.theme.mint : "transparent"};
        color: ${props => props.theme.mint ? props.theme.mint : "#1c1c1c"};
        max-width: 50px;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    &[type=number] {
    -moz-appearance: textfield;
    }
`;

export const TotalPrice = styled.p`
    font-size: 1.2rem;
    padding: 0;
    margin: 0 0 1.3rem 0;
    font-family: 'Lato', sans-serif;
    text-align: center;
    color: #606060;
    width: 100%;
`

export const MaximumQuantityText = styled.p`
    font-size: 0.8rem;
    padding: 0;
    margin: 0;
    font-family: 'Lato', sans-serif;
    text-align: center;
    color: #606060;
    width: 100%;
`;

export const MintedQuantityText = styled.p`
    font-size: 0.8rem;
    padding: 0;
    margin: 0;
    font-family: 'Lato', sans-serif;
    text-align: center;
    color: #606060;
    width: 100%;
`;

export const TopImage = styled.img`
    width: 100%;
    height: 100%;
    @media ${device.mobileS} {
        display: flex;
    }
    @media ${device.mobileM} {
        display: flex;
    }
    @media ${device.mobileL} {
        display: flex;
    }
    @media ${device.tablet} {
        display: flex;
        max-width: 400px;
    }
    @media ${device.laptop} {
        display: none;
    }
    @media ${device.desktopL} {
        display: none;
    }
`;

export const BlockImage = styled.img`
    width: 30vw;
    @media ${device.mobileS} {
        display: none;
    }
    @media ${device.mobileM} {
        display: none;
    }
    @media ${device.mobileL} {
        display: none;
    }
    @media ${device.tablet} {
        display: none;
    }
    @media ${device.laptop} {
        display: flex;
        width: 30vw;
    }
    @media ${device.desktop} {
        display: flex;
        width: 30vw;
    }
    @media ${device.desktopL} {
        display: flex;
        width: 30vw;
    }
`;