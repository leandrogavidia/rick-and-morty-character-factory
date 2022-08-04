import React from "react";
import styled from "styled-components";
import { AppContext } from "../AppContext/AppContext";

interface Props {
    view: boolean
}

const List = styled.ul<Props>`
    position: fixed;
    height: 100vh;
    right: 0;
    top: 0;
    transition: transform 0.2s ease-in-out;
    transform: ${(props) => props.view == true ? "translateX(0)" : "translateX(100vw)" };
    background-color: ${({ theme }) => theme.colorPalette.secondColor};
    box-shadow: -0.8rem 0 2rem ${({ theme }) => theme.colorPalette.fourthColor};
    overflow-y: auto ;
    width: 100%;
    padding: 4rem;
    margin: auto;

    li:nth-child(even) {
            margin: 4rem auto;
        }

    @media(min-width: 600px) {
        width: 60%;
    }

    @media(min-width: 1000px) {
        width: 40%;
        padding: 4rem;
    
        li:nth-child(even) {
            margin: 4rem auto;
        }
    }

`

const MenuOptions = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.6rem;

        button {
            background-color: ${({theme}) => theme.colorPalette.fourthColor};
            border: solid 0.2rem ${({theme}) => theme.colorPalette.secondColor};
            color: ${({theme}) => theme.colorPalette.primaryColor};
            border-radius: 0.4rem;
            width: 12rem;
            padding: 0.8rem 0.8rem;
            line-height: 1.5;
            font-weight: bold;
            font-size: 1.2rem;
            box-shadow: 0 0 0.4rem ${({ theme }) => theme.colorPalette.thirdColor};

            transition: 0.2s background-color ease-in-out;
            cursor: pointer;
            
            &:hover {
                background-color: ${({theme}) => theme.colorPalette.primaryColor};       
                color: ${({theme}) => theme.colorPalette.fourthColor};       
                box-shadow: 0 0 0.3rem ${({ theme }) => theme.colorPalette.primaryColor};
            }
        }

        @media (min-width: 600px) {
            font-size: 2rem;
        }
`

const CharacterHistory = ({ children }: { children: React.ReactNode }) => {

    const { showMenu, setShowMenu } = React.useContext(AppContext);

    return(
        <List view={showMenu} >
            <MenuOptions>
                <p><strong>All history</strong></p>
                <button onClick={() => setShowMenu(!showMenu)}>Closed</button>
            </MenuOptions>
            { children }
        </List>
    );
}

export { CharacterHistory }