import styled from "styled-components";
import { Link } from "react-router-dom"
import icon1 from "../../assets/icon1.svg"
import icon2 from "../../assets/icon2.svg"
import icon3 from "../../assets/icon3.svg"
import icon4 from "../../assets/icon4.svg"


const Main = styled.div`
    position: absolute;
    height: 100vw;
    width: 120px;
    background-color: black;
    margin-top: -20px;
    padding-top: 200px;
`
const StyledLogo = styled(Link)`
    margin-bottom: 10px;
`
const Text = styled.p`
    margin-left: -70px;
    width: 200px;
    margin-block-start: 0em;
    margin-block-end: 0em;
    display: block;
    margin-top: 200px;
    height: 100%;
    color: white;
    transform: rotate(-90deg);
`
const LogosContainer = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    height: 100px;
`

function Leftbar(props) {
    return (
      <Main>
          <LogosContainer>
            <StyledLogo to="#"><img src={icon1} alt="icon1"/></StyledLogo>
            <StyledLogo to="#"><img src={icon2} alt="icon2"/></StyledLogo>
            <StyledLogo to="#"><img src={icon3} alt="icon3"/></StyledLogo>
            <StyledLogo to="#"><img src={icon4} alt="icon4"/></StyledLogo>
            <Text>Copyright, SportSee 2020</Text>
          </LogosContainer>
      </Main>  
    )
}

export default Leftbar