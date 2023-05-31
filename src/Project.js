import  styled from "styled-components"
import ProjectBox1 from "./ProjectBox1"
import ProjectBox2 from "./ProjectBox2"
import ProjectBox3 from "./ProjectBox3"

const Project = () => {
return(
  <Container>
    <Title>Projects</Title>
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
padding-bottom: 1000px;
margin-left: -200px;

`

const Title = styled.h2`
font-size: 1.9em;
margin-bottom: 200px;
border: 1px solid white;
padding: 10px 20px;
border-radius: 5px;
`


export default Project