import styled from "styled-components";
import { CharacterContainer } from "../CharacterContainer/CharacterContainer";
import { CharacterItem } from "../CharacterItem/CharacterItem";

const MainComponent = styled.main`
    width: 100%;
    max-width: 1920px;
    margin: 4rem auto 0 auto;
`

const MainContainer = styled.div`
    width: inherit;
    padding: 0 2rem;
`

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, auto);
    grid-gap: 4rem 2rem;
`

const Button = styled.button`
    grid-row: 1 / 2;
    grid-column: ${(props) => props.column === "left" ? 1 / 2 : 2 / 3};
    width: 100%;
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

const Main = () => {
    return (
        <MainComponent>
            <MainContainer>
                <CharacterContainer 
                    image="https://rickandmortyapi.com/api/character/avatar/218.jpeg"
                    name="Rick Sanchez"
                    id={0}
                    status="Alive"
                    species="Human"
                    type="Genio"
                    gender="Male"
                    origin="Tierra"
                    location="Nave"
                    created="00/00/0000"
                />
                <Container>
                    <Button column="left" onClick={() => alert("Generate a character")}>Generate character</Button>
                    <Button onClick={() => alert("View all history")}>View character history</Button>
                    <MiniCharacterHistory>
                        <CharacterItem 
                            image="https://rickandmortyapi.com/api/character/avatar/218.jpeg"
                            name="Rick Sanchez"
                        />
                        <CharacterItem 
                            image="https://rickandmortyapi.com/api/character/avatar/218.jpeg"
                            name="Rick Sanchez"
                        />
                        <CharacterItem 
                            image="https://rickandmortyapi.com/api/character/avatar/218.jpeg"
                            name="Rick Sanchez"
                        />
                    </MiniCharacterHistory>
                </Container>
            </MainContainer>
        </MainComponent>
    );
}

export { Main }