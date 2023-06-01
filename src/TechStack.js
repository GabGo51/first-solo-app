import  styled  from "styled-components"
import Icon from "react-icons-kit"
import {htmlFive} from 'react-icons-kit/icomoon/htmlFive'
import {css3} from 'react-icons-kit/icomoon/css3'
import {git} from 'react-icons-kit/icomoon/git'
import {code} from 'react-icons-kit/ikons/code'

const TechStack = () =>{


  return(
  <Container>
    <Title>TechStack</Title>
    <i class="fa-solid fa-code"></i>
    <IconContainer>
      <i class="fa-brands fa-html5" ></i>
      <i class="fa-brands fa-css3" ></i>
      <i class="fa-brands fa-js" ></i>
      <i class="fa-brands fa-react" ></i>
      <i class="fa-brands fa-git-alt" ></i>
      <i class="fa-brands fa-node-js"></i>
      
      
    </IconContainer>
  </Container>
  )

}

const Container = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
bottom: 100px;

i{
  margin-right: 60px;
  scale: 2;
}
`

const Title = styled.p`
font-size: 1.5em;
margin-right: 40px;
font-weight: 500;
margin-top: -7px;
`

const IconContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
justify-content: center;
margin-left: 40px;

i{
  
}
`

const Icon2 = styled.i`
size: 40px;
`
export default TechStack