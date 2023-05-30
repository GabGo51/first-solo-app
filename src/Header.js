import  styled  from "styled-components"


const Header = () =>{

return(
  <Container>
    <Title>GabGo.dev</Title>
    <ButtonContainer>
      <Button>Home</Button>
      <Button>About</Button>
      <Button>Project</Button>
      <Button>Contact</Button>
    </ButtonContainer>
  
  </Container>
)
}

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`

const Title = styled.p`
font-size: 1.3em;
font-weight: bold;
margin: 30px;
`

const ButtonContainer = styled.div`
margin: 40px;
`

const Button = styled.button`
background-color: transparent;
color: white;
font-weight: bold;
font-size: 1.2em;
border: none;
padding: 10px;
margin-right: 20px;
cursor: pointer;
transition: 200ms;

&:hover{

  scale: 1.15;
}


`

export default Header
