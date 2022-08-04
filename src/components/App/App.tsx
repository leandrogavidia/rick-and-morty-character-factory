import React from "react";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { Theme } from "../../styles/Theme";
import { Normalize } from "../../styles/Normalize";
import { useQuery, gql } from '@apollo/client';
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { AppProvider } from "../AppContext/AppContext";

const ALL_CHARACTERS =  gql`
    query {
      characters {
        info {
          count
          pages
        }
        results {
          id
          name
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
          image
          created
        }
      }
    }
`

function App() {

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

  const [ allCharacter, setAllCharacter ] = React.useState<characterData[]>([]);
  const { loading, error, data } = useQuery(ALL_CHARACTERS);
  
  React.useEffect(() => {
    setAllCharacter(data && data.characters.results)
    console.log(allCharacter)
  }, [])
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>
    
  return (
    <AppProvider>
      <Theme>
        <Normalize />
        <GlobalStyles />
      </Theme>
      <Theme>
        <Header/>
        <Main />
        <Footer />    
      </Theme>
    </AppProvider>
  )
}

export default App
