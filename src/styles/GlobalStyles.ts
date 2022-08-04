import { createGlobalStyle } from "styled-components";
import orbitronRegularWoff from "../assets/fonts/orbitron-v25-latin-regular.woff";
import orbitronRegularWoff2 from "../assets/fonts/orbitron-v25-latin-regular.woff2";
import orbitron600Woff from "../assets/fonts/orbitron-v25-latin-600.woff";
import orbitron600Woff2 from "../assets/fonts/orbitron-v25-latin-600.woff2";
import orbitron800Woff from "../assets/fonts/orbitron-v25-latin-800.woff";
import orbitron800Woff2 from "../assets/fonts/orbitron-v25-latin-800.woff2";

interface ColorPalette {
    primaryColor: string,
    secondColor: string,
    thirdColor: string,
    fourthColor: string,

    whiteColor: string,
    blackColor: string
}

interface Theme {
    colorPalette: ColorPalette
}

interface Props {
    theme: Theme
}

const GlobalStyles = createGlobalStyle`
        @font-face {
            font-family: "Orbitron";
            src:
                url(${orbitronRegularWoff2}) format("woff2"),
                url(${orbitronRegularWoff}) format("woff");
            font-weight: 400;
            font-style: normal;
            font-display: fallback;
        }

        @font-face {
            font-family: "Orbitron";
            src:
                url(${orbitron600Woff2}) format("woff2"),
                url(${orbitron600Woff}) format("woff");
            font-weight: 600;
            font-style: normal;
            font-display: fallback;
        }

        @font-face {
            font-family: "Orbitron";
            src:
                url(${orbitron800Woff2}) format("woff2"),
                url(${orbitron800Woff}) format("woff");
            font-weight: 800;
            font-style: normal;
            font-display: fallback;
        }


    :focus-visible {
        outline: 0.1rem ${(props: Props) => props.theme.colorPalette.secondColor} solid;
    }
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        scrollbar-width: thin;
        scrollbar-color: ${props => props.theme.colorPalette.primaryColor} rgba(0, 0, 0, 0);
    }
    
    /* Works on Chrome, Edge, and Safari */

    *::-webkit-scrollbar {
        width: 0.4rem;
    }
    
    *::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0);
    }
    
    *::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colorPalette.primaryColor};
        border-radius: 2rem;
        border: none;
    }
    
    html {
        font-size: 62.5%;
    }
    
    body {
        font-family: Orbitron, sans-serif;
        height: 100vh;
        background-color: ${props => props.theme.colorPalette.thirdColor};
        color: ${props => props.theme.colorPalette.whiteColor};
    }
`

export { GlobalStyles }