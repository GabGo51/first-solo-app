import  styled  from "styled-components"
import Compute from "./Images/compute2.png"
import Icon from "react-icons-kit"
import {location} from 'react-icons-kit/icomoon/location'


const Intro = () =>{

return(
  <IntroBox>
    <Title>React Web Developper</Title>
    <Image src={Compute}/>
    <Description>Hi, I'm Gabriel Gosselin. A pasionate React Web Developper based in Montreal, Canada <Icon icon={location} size={26} style={{ color: "#B75D5D" }}/></Description>
  </IntroBox>
  
  
)
}

const IntroBox = styled.div`
position: absolute;
z-index: 2;
`
const Image = styled.img`
position: absolute;
top: -60px;
left: -60px;
z-index: 1;
`

const Title = styled.h1`
position: relative;
font-size: 3em;
z-index: 2;

`

const Description = styled.p`
position: relative;
z-index: 2;
margin-top: 40px;
font-size: 1.5em;
width: 500px;
line-height: 40px;
color: #DFDFDF;
`

export default Intro