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
    <Icon icon={code} size={36}/>
    <IconContainer>
      <Icon icon={htmlFive} size={32} style={{ marginRight: '40px' }}/>
      <Icon icon={css3} size={32} style={{ marginRight: '40px' }} />
      <Icon icon={git} size={32} style={{ marginRight: '40px' }}/>
      
    </IconContainer>
  </Container>
  )

}

const Container = styled.div`
position: absolute;
display: flex;
align-items: center;
bottom: 100px;
`

const Title = styled.p`
font-size: 1.3em;
margin-right: 40px;
font-weight: 500;
`

const IconContainer = styled.div`
display: flex;
justify-content: space-between;
margin-left: 40px;
`
export default TechStack