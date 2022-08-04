import styled from "styled-components";
import logo from "../../assets/images/rick-and-morty-logo.png";

const HeaderComponent = styled.header`
    width: 100%;
    margin: 0 auto;
    height: 4rem;
    background-color: ${({theme}) => theme.colorPalette.fourthColor};

    @media(min-width: 600px) {
        height: 6rem;
    }

    @media(min-width: 1000px) {
        height: 8rem;
    }
`

const HeaderContainer = styled.div`
    width: inherit;
    max-width: 1920px;
    height: inherit;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
`

const HeaderLogo = styled.img`
    filter: drop-shadow(0 0 0.1rem ${({theme}) => theme.colorPalette.primaryColor});
    margin-left: 1.6rem;
    transition: filter 0.6s ease-in-out ;
    cursor: pointer;

    &:hover {
        filter: drop-shadow(0 0 0.4rem ${({theme}) => theme.colorPalette.secondColor});
    }

    @media(min-width: 600px) {
        width: 12rem;
        margin-left: 4rem;
    }

    @media(min-width: 1000px) {
        width: 16rem;
        margin-left: 8rem;
    }
`

const Header = () => {
    return (
        <HeaderComponent>
            <HeaderContainer>
                <HeaderLogo
                    onClick={() => document.location.reload()}
                    src={logo}
                    alt="Rick and Morty Logo" 
                    title="Rick and Morty Logo"
                    width="100"
                />
            </HeaderContainer>
        </HeaderComponent>
    )
}

export { Header }