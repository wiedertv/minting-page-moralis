import styled from "styled-components";
import { device } from "../devices";


export const Container = styled.div`
    margin: auto;
    width: 90vw;
    max-width: 1200px;
    padding: 0.5rem 1rem;
`

// media query para movil imagen arriba.
export const WrapperHero = styled.div`
    padding-top: 2rem;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    @media ${device.mobileS} {
        flex-direction: column;
      }
    @media ${device.mobileM} {
        flex-direction: column;
    }
    @media ${device.mobileL} {
        flex-direction: column;
    }
    @media ${device.tablet} {
        flex-direction: column;
    }
    @media ${device.laptop} {
        flex-direction: row;
        min-height: 80vh;
    }
    
    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    article {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        div {
            display: flex;
            padding-top: 2rem;
            flex-direction: row;
            width: 100%;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            
        }
        img {
            maxWidth: 30vw: 
            margin: 0;
            padding: 0;
            @media ${device.mobileS} {
                maxWidth: 80vw; 
              }
            @media ${device.mobileM} {
                maxWidth: 80vw; 
            }
            @media ${device.mobileL} {
                maxWidth: 80vw; 
            }
            @media ${device.tablet} {
                maxWidth: 80vw; 
            }
        }
    }
`
