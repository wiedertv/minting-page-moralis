import styled from "styled-components";

export const MintButton = styled.button`
    background: ${props => props.theme.mint ? props.theme.mint : "#1c1c1c"};
    color: ${props => props.theme.mint ? props.theme.mint : "white"};
    border: 1px solid ${props => props.theme.mint ? props.theme.mint : "# q1c1c1c"};
    border-radius: 10px;
    padding: 0.8rem 2.5rem;
    margin: 0.5rem;
    font-size: 1.4rem;

    &:hover {
        cursor: pointer;
        background: #1c1c1c;
        opacity: 0.8;
    }

    &:disabled {
        background: #1c1c1c;
        opacity: 0.8;
        cursor: not-allowed;
    }
`