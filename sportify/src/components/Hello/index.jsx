import styled from "styled-components"

const Wrapper = styled.div`
    margin-left: 250px;
    font-size: 1.8em;
`
const Title = styled.h1`
    font-weight: 600;
`

const Text = styled.p`
    font-weight: 400;
    font-size: 0.8em;
`

function Hello(props) {
    return (
        <Wrapper>
            <Title>Bonjour <span className="firstname">{props?.name}</span></Title>
            <Text>Félicitations ! Vous avez explosé vos objectifs hier 👏</Text>
        </Wrapper>
    )
}

export default Hello