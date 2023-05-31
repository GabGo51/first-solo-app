import  styled  from "styled-components"
import Icon from "react-icons-kit"
import {github} from 'react-icons-kit/fa/github'
import {githubSquare} from 'react-icons-kit/fa/githubSquare'
import {linkedinSquare} from 'react-icons-kit/fa/linkedinSquare'



const Links = () =>{
return(
<Container>
  <Link target="_blank" href="https://www.linkedin.com/in/gabriel-gosselin-802bb5247/"> <Icons size={42} icon={linkedinSquare}/></Link>
  <Link target="_blank" href="https://github.com/GabGo51"><Icons size={42} icon={githubSquare}/></Link>
</Container>
)

}

const Container = styled.div`
position: absolute;
bottom: 250px;
`

const Link = styled.a`
cursor: pointer;
margin-right: 20px;
`
const Icons = styled(Icon)`

transition: 200ms;
&:hover{
  scale: 0.9;
}
`


export default Links