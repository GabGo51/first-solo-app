import styled  from "styled-components"
import Luigi from "./Images/luigi.PNG"


const ProjectBox1 = () =>{
 return(

  <Container>
    
    <TextBox>
        <Title>Luigi's Mansion</Title>
        <Text>
          A simple flash Game inspired by Luigi's Mansion, a favorite game of mine. Implemeneted hitboxes, gave the player some health and made the game harder by adding enemy as time would go by.
        </Text>
    </TextBox>
    <Image src={Luigi}/>

  </Container>
 )

}

const Container = styled.div`
display: flex;
margin-bottom: 100px;
`
const Image = styled.img`
width: 400px;
border-radius: 30px;
margin-top: -100px;
`
const TextBox = styled.div`
width: 400px;
margin-right: 100px;
`
const Title = styled.h3`
font-size: 1.5em;
margin-bottom: 40px;
`

const Text = styled.p`
font-size: 1.3em;
`


export default ProjectBox1