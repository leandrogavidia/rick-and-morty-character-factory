import React from "react";
import { gql, useLazyQuery } from "@apollo/client";

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

interface ContextProps {
    showMenu: boolean,
    setShowMenu: ( value: boolean ) => void,
    characterList: characterData[],
    setCharacterList: ( character: characterData[] ) => void,
    mainCharacter: characterData | null,
    setMainCharacter: ( character: characterData ) => void,
    getRandomCharacter: ( id: number ) => void,
    changeMainCharacter: ( character: characterData ) => void
}

const AppContext = React.createContext<ContextProps>({} as ContextProps);

const AppProvider = ({ children }: {children: React.ReactNode}) => {


    const RANDOM_CHARACTER = gql`
        query findCharacter($characterNumber: [ID!]!) {
            charactersByIds(ids: $characterNumber) {
                image
                name
                id
                status
                species
                type
                gender
                origin {
                    name
                }
                location {
                    name
                }
                created
            }
        }
    `

    const [ characterList, setCharacterList ] = React.useState<characterData[]>([]);
    const [ mainCharacter, setMainCharacter ] = React.useState<characterData | null>(null);
    const [showMenu, setShowMenu] = React.useState<boolean>(false);
    const [getCharacter, result] = useLazyQuery(RANDOM_CHARACTER);

    const getRandomCharacter = (characterId: number) => {

        getCharacter({ variables: { characterNumber: characterId } })
    
        console.log(RANDOM_CHARACTER)
    }

    const changeMainCharacter = (newCharacter: characterData) => {
        setMainCharacter(newCharacter);
    } 

    React.useEffect(() => {
        if(result.data) {
            setCharacterList([...new Set([...characterList, result.data.charactersByIds[0]])])
            setMainCharacter(result.data.charactersByIds[0])

            console.log(result.data.charactersByIds[0])
            console.log(characterList)
        }

    }, [result])

    return(
        <AppContext.Provider value={{ 
            characterList,
            setCharacterList,
            mainCharacter,
            setMainCharacter,
            getRandomCharacter,
            changeMainCharacter,
            showMenu,
            setShowMenu
         }}>
             {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppProvider }