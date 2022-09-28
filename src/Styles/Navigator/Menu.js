import styled from "styled-components";
import {device} from '../devices';


export const NavigatorMenu = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    width: 90vw;
    margin: 0 auto;
    gap: 4rem;
    background: ${props => props.theme.mint ? props.theme.mint : "transparent"};
    color: ${props => props.theme.mint ? props.theme.mint : "#1c1c1c"};
    ul {
        @media ${device.mobileS} {
            display: none;
        }
        @media ${device.laptop} {
            display: flex; 
            max-width: 800px;
        }
        
        @media ${device.desktop} {
            display: flex;
            max-width: 1400px;
        }
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
        list-style-type: none;
        gap: 0.5rem;
        width: 90vw;
        padding: 0.5rem 1rem;
        background: ${props => props.theme.mint ? props.theme.mint : "transparent"};
        color: ${props => props.theme.mint ? props.theme.mint : "#1c1c1c"};
        li {
            color: ${props => props.theme.mint ? props.theme.mint : "#1c1c1c"};
            padding: 0rem 1.5rem;
            width: 100%;
            text-align: center;
            a{
                color: ${props => props.theme.mint ? props.theme.mint : "#1c1c1c"};
                text-decoration: none;
                font-size: 1rem;
                text-transform: capitalize;
                font-family: 'Lato', sans-serif;
                &:hover {
                    color: ${props => props.theme.mint ? props.theme.mint : "#1c1c1c"};
                    text-decoration: none;
                }
            }
        }
        li:not(:last-child) { border-right: 1px solid black; }
    }
    @media ${device.mobileS} {
       justify-content: space-around;
    }
    @media ${device.laotop} {
        justify-content: center;
    }

    `;  

export const LogoMenu =styled.img`
    padding-left: 2rem;
    width: 100%;
    max-width: 150px;
    height: auto;
    `;

export const UlMenu = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    list-style-type: none;
    gap: 4rem;
    width: 90vw;
    align-items: center;
    padding: 0.5rem 1rem;
    background: ${props => props.theme.mint ? props.theme.mint : "transparent"};
    color: ${props => props.theme.mint ? props.theme.mint : "black"};
    `;

export const StyledMenu = styled.nav`
  display: flex;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  flex-direction: column;
  justify-content: center;
  background: #f2f2f2;
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  
  @media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.mobileM} {
    width: 100%;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
  @media ${device.tablet} {
    width: 100%;
  }

  button {
    margin: 0 auto;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    font-family: 'Lato', sans-serif;
    letter-spacing: 0.1rem;
    color: #1c1c1c;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media ${device.mobileS} {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #1c1c1c;
    }
  }
`;

export const Divisor = styled.div`
@media ${device.mobileS} {
  display: none;
}
@media ${device.laptop} {
  display: flex; 
  max-width: 800px;
}
`