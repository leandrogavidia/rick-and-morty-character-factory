import React from "react";
import styled from "styled-components";

const FooterComponent = styled.footer`
    width: 100%;
    background-color: ${({ theme }) => theme.colorPalette.fourthColor};
    height: 4rem;
    position: relativea;
    bottom: 0;
    margin-top: 6rem;

    div {
        width: inherit;
        height: inherit;
        max-width: 1920px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 0 auto;

        a {
            font-weight: bold;
            font-size: 1.2rem;
            text-decoration: none;
            color: ${({ theme }) => theme.colorPalette.whiteColor};
            margin-left: 2rem;
            transition: color 0.2s ease-in-out;

            &:hover, &:visited {
                color: ${({ theme }) => theme.colorPalette.primaryColor};
            }
        }
    }
`

const Footer = () => {
    return (
        <FooterComponent>
            <div>
                <a 
                    href="https://github.com/leandrogavidia/rick-and-morty-character-factory"
                    target="_blank"
                    title="Repository"
                >Repository</a>
            </div>
        </FooterComponent>
    );
}

export { Footer }