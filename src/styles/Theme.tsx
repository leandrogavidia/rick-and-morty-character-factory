import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

const theme: DefaultTheme = {
    colorPalette: {
        primaryColor: "#CCFFBD",
        secondColor: "#7ECA9C",
        thirdColor: "#40394A",
        fourthColor: "#1C1427",

        whiteColor: "#fff",
        blackColor: "#000"
    },
    fontSizes: {
        title: "9rem"
    }
}

const Theme = ({children}: {children: React.ReactNode}): React.ReactElement => {
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    );
}

export { Theme, theme }