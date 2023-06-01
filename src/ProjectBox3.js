import styled  from "styled-components"
import Cookie from "./Images/Cookie.PNG"

const ProjectBox3 = () =>{
 return(

  <Container>
    
    <TextBox>
        <Title>Coockie Clicker</Title>
        <Text>
          A React idle Game that made use of Hooks to update the states and effects of the game components. Also made use of keyboard event listener so the player could use space bar to generate cookies.
        </Text>
    </TextBox>

    <Image src={Cookie}/>

  </Container>
 )

}

const Container = styled.div`
display: flex;

`
const Image = styled.img`
width: 580px;
border-radius: 30px;
filter: brightness(95%);
  transition: 200ms;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover{
    filter: brightness(105%);
    scale: 1.05;
    cursor: pointer;
  }

`
const TextBox = styled.div`
margin-right: 100px;
margin-left: 40px;
line-height: 30px;
width: 350px;
`
const Title = styled.h3`
font-size: 1.5em;
margin-bottom: 40px;
`

const Text = styled.p`
font-size: 1.3em;
`


export default ProjectBox3