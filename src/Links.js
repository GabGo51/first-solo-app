import  styled  from "styled-components"
import Icon from "react-icons-kit"
import {github} from 'react-icons-kit/fa/github'
import {githubSquare} from 'react-icons-kit/fa/githubSquare'
import {linkedinSquare} from 'react-icons-kit/fa/linkedinSquare'



const Links = () =>{
return(
<Container>
  <Link href="https://www.linkedin.com/in/gabriel-gosselin-802bb5247/"> <Icon size={42} icon={linkedinSquare}/></Link>
  <Link href="https://github.com/GabGo51"><Icon size={42} icon={githubSquare}/></Link>
</Container>
)

}

const Container = styled.div`
`

const Link = styled.a`
cursor: pointer;
margin-right: 20px;
`



export default Links