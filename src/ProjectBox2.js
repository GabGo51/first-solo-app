import styled  from "styled-components"
import Fruit from "./Images/Fruit.PNG"
const ProjectBox2 = () =>{
 return(

  <Container>
    <Image src={Fruit}/>
    <TextBox>
        <Title>Fruit Store</Title>
        <Text>
          Creation of a Fruit Store Website using React
        </Text>
      </TextBox>

  </Container>
 )

}

const Container = styled.div`
display: flex;
`
const Image = styled.img`
border-radius: 30px;
width: 500px;
margin-left: 100px;
margin-right: 150px;
`
const TextBox = styled.div`

`
const Title = styled.h3`
font-size: 1.5em;
margin-bottom: 40px;
`

const Text = styled.p`
font-size: 1.3em;
`


export default ProjectBox2