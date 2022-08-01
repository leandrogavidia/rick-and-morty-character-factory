import { Button } from "./button";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Theme } from "./styles/Theme";
import { Normalize } from "./styles/Normalize"
import React from "react";

function App() {

  return (
    <React.Fragment>
      <Theme>
        <Normalize />
        <GlobalStyles />
      </Theme>
      <Theme>
        <Button>Rick and Morty character factory</Button>
      </Theme>
    </React.Fragment>
  )
}

export default App
