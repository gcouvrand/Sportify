import { Link } from "react-router-dom"
import mainLogo from "../../assets/mainLogo.svg"
import styled from "styled-components";

const StyledLogo = styled(Link)`
    color: white;
    margin-top: 20px;
`
const StyledLink = styled(Link)`
    color: white;
    margin-top: 30px;
    font-size: 1.5em;
`
const Nav = styled.nav`
    background-color: black;
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 150px;
`

function Header(props) {
    return (
        <Nav>
            <StyledLogo to="#"> <img src={mainLogo} alt="main_logo"/></StyledLogo>
            <StyledLink to="#">Accueil</StyledLink>
            <StyledLink to="#">Profil</StyledLink>
            <StyledLink to="#">Réglage</StyledLink>
            <StyledLink to="#">Communauté</StyledLink>
        </Nav>
    )
}

export default Header