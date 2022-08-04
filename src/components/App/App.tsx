import React from "react";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { Theme } from "../../styles/Theme";
import { Normalize } from "../../styles/Normalize";
import { useQuery, gql } from '@apollo/client';
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { AppProvider } from "../AppContext/AppContext";
import logo from "../../assets/images/rick-and-morty-logo.png";
import styled from "styled-components";

const Logo = styled.img`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 100%;
  max-width: 700px;
`

const Error = styled.p`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-size: 1.6rem;
  font-weight: bold;
`

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
  
  if (loading) return <Logo src={logo} title="Rick and Morty logo" alt="Rick and Morty logo" />
  if (error) return <Error>{error.message}</Error>
    
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
