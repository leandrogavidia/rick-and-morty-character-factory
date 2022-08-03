import React from "react";
import styled from "styled-components";

const Container = styled.li`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme}) => theme.colorPalette.fourthColor};
    border-radius: 0.8rem;
    overflow: hidden;
    overflow-x: auto;
    filter: drop-shadow(0 0 0.6rem ${({theme}) => theme.colorPalette.fourthColor});
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Image = styled.img`
`
const Button = styled.button`
    width: 25%;
    margin-right: 4rem;
    background-color: ${({theme}) => theme.colorPalette.fourthColor};
    border: solid 0.2rem ${({theme}) => theme.colorPalette.secondColor};
    color: ${({theme}) => theme.colorPalette.primaryColor};
    border-radius: 0.4rem;
    padding: 0.4rem 0.8rem;
    line-height: 1.5;
    font-weight: bold;
    font-size: 1.2rem;
    transition: 0.2s background-color ease-in-out;
    box-shadow: 0 0 0.8rem ${({ theme }) => theme.colorPalette.fourthColor};
    cursor: pointer;
    
    &:hover {
        background-color: ${({theme}) => theme.colorPalette.primaryColor};       
        color: ${({theme}) => theme.colorPalette.fourthColor};       
        box-shadow: 0 0 0.3rem ${({ theme }) => theme.colorPalette.primaryColor};
    }
`

const Paragraph = styled.p`
    font-size: 1.6rem;
    font-weight: bold;
    color: ${({theme}) => theme.colorPalette.primaryColor};
    margin-left: 2rem;
    margin-right: 2rem;
    filter: drop-shadow(0 0 0.1rem ${({theme}) => theme.colorPalette.primaryColor});
`

interface characterInfo {
    image: string,
    name: string
}

const CharacterItem = (props: characterInfo) => {
    return(
        <Container>
            <div>
                <Image 
                    width="120"
                    height="120"
                    src={props.image}
                    title={`Character: ${name}`}
                    alt={`Character: ${name}`}
                />
                <Paragraph>{props.name}</Paragraph>
            </div>
            <Button onClick={() => alert("Viw this person")}>View</Button>
        </Container>
    );
}

export { CharacterItem }