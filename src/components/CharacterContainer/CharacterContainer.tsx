import styled from "styled-components";

const MainContainer = styled.div`
    max-width: 800px;
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: repeat(2, auto);
    background-color: ${({theme}) => theme.colorPalette.fourthColor};
    box-shadow: 0 0 1.6rem ${({theme}) => theme.colorPalette.fourthColor};
    border-radius: 1.2rem;
    overflow: hidden;
    margin-bottom: 4rem;

    @media (min-width: 600px) {
        margin-bottom: 0;
    }
`

const CharacterImage = styled.img`
    width: 100%;
`

const CharacterData = styled.div`
    padding: 4rem 2rem 2rem 2rem;
`

const CharacterTitle = styled.h1`
    margin: 0 0 2rem 0;
    border-bottom: 0.2rem solid ${({theme}) => theme.colorPalette.secondColor};
    padding-bottom: 0.8rem;
    margin-bottom: 2.8rem;
    font-size: 2.4rem;
`

const CharacterParagraph = styled.p`
    margin: 1.6rem 0;
    font-size: 1.6rem;
    line-height: 1.5;
    border-bottom: 0.1rem rgba(255, 255, 255, 0.2) solid;
    padding-bottom: 1.2rem;
    strong {
        color: ${({theme}) => theme.colorPalette.secondColor};
    }
`

interface OriginAndLocation {
    name: string
}

interface characterData {
    image: string,
    name: string,
    id: number,
    status: string,
    species: string,
    type: string | undefined,
    gender: string,
    origin: OriginAndLocation,
    location: OriginAndLocation,
    created: string
}

const CharacterContainer = (props: characterData) => {
        return (
            <MainContainer>
                <CharacterImage 
                    src={props.image}
                    alt={`Character: ${props.name}`}
                    title={`Character: ${props.name}`}
                />
                <CharacterData>
                    <CharacterTitle>{props.name}</CharacterTitle>
                    <CharacterParagraph><strong>Id:</strong> {props.id}</CharacterParagraph>
                    <CharacterParagraph><strong>Status:</strong> {props.status}</CharacterParagraph>
                    <CharacterParagraph><strong>Species:</strong> {props.species}</CharacterParagraph>
                    <CharacterParagraph><strong>Type:</strong> {props.type}</CharacterParagraph>
                    <CharacterParagraph><strong>Gender:</strong> {props.gender}</CharacterParagraph>
                    <CharacterParagraph><strong>Origin:</strong> {props.origin.name}</CharacterParagraph>
                    <CharacterParagraph><strong>Location:</strong> {props.location.name}</CharacterParagraph>
                    <CharacterParagraph><strong>Created at:</strong> {props.created}</CharacterParagraph>
                </CharacterData>
            </MainContainer>
        );
}

export { CharacterContainer }