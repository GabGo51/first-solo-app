import  styled from "styled-components"
import ProjectBox1 from "./ProjectBox1"
import ProjectBox2 from "./ProjectBox2"
import ProjectBox3 from "./ProjectBox3"
import { useContext } from "react"
import { ThemeContext } from "./Context"

const Project = () => {
  const {light} = useContext(ThemeContext)
return(
  <Container>
    <Title light = {light}>Projects</Title>
    <ProjectBox1/>
    <ProjectBox2/>
    <ProjectBox3/>
  </Container>

  
)

}


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
width: 1200px;
padding-bottom: 200px;
margin-left: -200px;
margin-top: 90px;

`

const Title = styled.h2`
font-size: 1.9em;
margin-bottom: 200px;
border: ${({light}) => light ? "1px solid black":'1px solid white'};
padding: 10px 20px;
border-radius: 5px;
`


export default Project