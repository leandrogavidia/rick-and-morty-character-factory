import React from "react";
import styled from "styled-components";
import { CharacterContainer } from "../CharacterContainer/CharacterContainer";
import { CharacterItem } from "../CharacterItem/CharacterItem";
import { AppContext } from "../AppContext/AppContext";
import { CharacterHistory } from "../CharacterHistory/CharacterHistory";

interface Props {
    column?: string
}

const MainComponent = styled.main`
    width: 100%;
    margin: 4rem auto 4rem auto;

    @media (min-width: 600px) {
        margin: 6rem auto;
    }

    @media (min-width: 1000px) {
        margin: 8rem auto;
    }
`

const MainContainer = styled.div`
    width: inherit;
    padding: 0 2rem;
    max-width: 1920px;
    margin: 0 auto;

    @media (min-width: 600px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 100%;
        grid-gap: 0 4rem;
        padding: 0 4rem;
    }

    @media (min-width: 1000px) {
        width: 100%;
        grid-template-columns: 1fr 2fr;
        padding: 0 8rem;
        grid-gap: 0 8rem;
    }
`

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 90%;
    grid-gap: 4rem 2rem;
    align-items: start;

    @media (min-width: 1000px) {
        margin-right: 8rem;
    }
`

const Button = styled.button<Props>`
    grid-row: 1 / 2;
    grid-column: ${(props) => props.column === "left" ? 1 / 2 : 2 / 3};
    width: 100%;
    background-color: ${({theme}) => theme.colorPalette.fourthColor};
    border: solid 0.2rem ${({theme}) => theme.colorPalette.secondColor};
    color: ${({theme}) => theme.colorPalette.primaryColor};
    border-radius: 0.4rem;
    padding: 0.8rem 0.8rem;
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

    @media (min-width: 1000px) {
        font-size: 2rem;
    }
`

const MiniCharacterHistory = styled.ul`
    grid-row: 2 / 3;
    grid-column: 1 / 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;

    li:nth-child(even) {
        margin: 3.2rem 0;
    }
`

const ContainerNoCharacter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 2;

    h2 {
        margin-top: 2.8rem;
    }

    @media (min-width: 600px) {
        grid-column: 1 / 3;

        button {
            font-size: 2rem;
            max-width: 800px;
        }

        h2 {
            font-size: 2rem;
        }
    }
`

const Main = () => {

    interface OriginAndLocation {
        name: string
    }
    
    
    interface characterData {
        image: string,
        name: string,
        id: number,
        status: string,
        species: string,
        type: string,
        gender: string,
        origin: string,
        location: string,
        created: string
    }


    const { 
        characterList,
        mainCharacter,
        getRandomCharacter,
        setShowMenu,
        showMenu
    } = React.useContext(AppContext);

    return (
        <MainComponent>
            <MainContainer>

                { characterList.length > 0 ?

                    <React.Fragment>
                        <CharacterContainer 
                            image={mainCharacter ? mainCharacter.image : ""}
                            name={mainCharacter ? mainCharacter.name : ""}
                            id={mainCharacter ? mainCharacter.id : 0}
                            status={mainCharacter ? mainCharacter.status : ""}
                            species={mainCharacter ? mainCharacter.species : ""}
                            type={mainCharacter ? mainCharacter.type : ""}
                            gender={mainCharacter ? mainCharacter.gender : ""}
                            origin={mainCharacter ? mainCharacter.origin as any : "" } 
                            location={mainCharacter ? mainCharacter.location as any : ""}
                            created={mainCharacter ? mainCharacter.created : ""}
                        />
                        <Container>
                            <Button onClick={() => getRandomCharacter(Math.floor(Math.random()*200))} column="left" >Generate character</Button>
                            <Button onClick={() => setShowMenu(!showMenu)}>View all history</Button>
                            <MiniCharacterHistory>
 
                                    <CharacterItem image={characterList[characterList.length - 1].image} name={characterList[characterList.length - 1].name} character={characterList[characterList.length - 1]} />
                                    { characterList.length > 1 ? <CharacterItem image={characterList[characterList.length - 2].image} name={characterList[characterList.length - 2].name} character={characterList[characterList.length - 2]} /> : null }
                                    { characterList.length > 2 ? <CharacterItem image={characterList[characterList.length - 3].image} name={characterList[characterList.length - 3].name} character={characterList[characterList.length - 3]} /> : null }
                                    { characterList.length > 3 ? <CharacterItem image={characterList[characterList.length - 4].image} name={characterList[characterList.length - 4].name} character={characterList[characterList.length - 4]} /> : null }


                            </MiniCharacterHistory>
                        </Container>
                        <CharacterHistory>
                            {
                                characterList.map((character: characterData )  => <CharacterItem key={character.id} image={character.image} name={character.name} character={character} />).reverse()
                            }
                        </CharacterHistory>
                    </React.Fragment>


                    :

                    <ContainerNoCharacter>
                            <Button onClick={() => getRandomCharacter(Math.floor(Math.random()*826))}>Generate my first character</Button>
                            <h2>There are no characters generated, generate your first character.</h2>
                    </ContainerNoCharacter> 
                }

            </MainContainer>
        </MainComponent>
    );
}

export { Main }