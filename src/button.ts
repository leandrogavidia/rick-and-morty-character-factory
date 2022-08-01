import styled from "styled-components";

export const Button = styled.button`
    background: ${props => props.theme.colorPalette.secondColor};
    font-size: 1rem;
    padding: 1rem 2re;
    border: solid 1x red;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s;
    font-weight: 800;

    &:hover {
        background: blue;
    }
`