import  styled  from "styled-components"
import boutme from "./Images/boutme.jpg"
const AboutMe = () => {

return(

  <Container>
    <Image src={boutme} alt="Me boarding"/>
    <TextBox>
      <Title>AYOO</Title>
      <Text></Text>
    </TextBox>
    
  </Container>


)
}

const Container = styled.div`
margin-top: 800px;
width: 1000px;
padding-bottom: 1000px;
display: flex;
`

const Image = styled.img`
width: 450px;
height: 600px;
border-radius: 20px;
object-fit: cover;
margin-left: -30px;
`

const TextBox = styled.div`

`

const Title = styled.h2`

`

const Text = styled.p`

`

export default AboutMe