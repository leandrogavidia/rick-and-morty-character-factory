import React from "react";
import styled from "styled-components";

const FooterComponent = styled.footer`
    width: 100%;
    background-color: ${({ theme }) => theme.colorPalette.fourthColor};
    height: 4rem;

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
            transition: color 0.2s ease-in-out, filter 0.2s ease-in-out;
            
            &:hover {
                color: ${({ theme }) => theme.colorPalette.primaryColor};
                filter: drop-shadow(0 0 0.5rem ${({ theme }) => theme.colorPalette.primaryColor});
            }

            &:visited {
                color: ${({ theme }) => theme.colorPalette.secondColor};
            }
        }
    }

    @media (min-width: 600px) {
        height: 6rem;

        div {
            a {
                font-size: 1.6rem;
                margin-left: 4rem;
            }
        }
    }

    @media (min-width: 1000px) {
        height: 8rem;

        div {
            a {
                font-size: 2.4rem;
                margin-left: 8rem;
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