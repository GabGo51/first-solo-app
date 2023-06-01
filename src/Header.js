import { useState, useEffect } from "react";
import  styled  from "styled-components"
import { useContext } from "react"
import { ThemeContext } from "./Context"

const Header = () =>{
  const {light} = useContext(ThemeContext)

  const [scroll, setScroll] = useState(false)

  const handleClick = (buttonText) =>{
    if (buttonText === "Home") {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
    } 
    if (buttonText === "About") {
      // Scroll to the top of the page
      window.scrollTo({ top: 1000, behavior: "smooth" });
    } 
    if (buttonText === "Project") {
      // Scroll to the top of the page
      window.scrollTo({ top: 2000, behavior: "smooth" });
    } 
    if (buttonText === "Contact") {
      // Scroll to the top of the page
      window.scrollTo({ top: 4000, behavior: "smooth" });
    } 

  };

  const handleScroll = () => {
    // Check if the page has been scrolled down
    if (window.pageYOffset > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

return(
  <Container>
    <Title>GabGo.dev</Title>
    <ButtonContainer >
      <Button light={light} onClick={() => handleClick("Home")}>Home</Button>
      <Button light={light} onClick={() => handleClick("About")}>About</Button>
      <Button light={light} onClick={() => handleClick("Project")}>Project</Button>
      <Button light={light} onClick={() => handleClick("Contact")}>Contact</Button>
    </ButtonContainer>
  
  </Container>
)
}

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 20;

@media screen and (max-width: 1700px) {
  align-items: flex-start;
}

`

const Title = styled.p`
font-size: 1.3em;
font-weight: bold;
margin: 30px;

@media screen and (max-width: 1500px) {
  opacity: 0;
}

`

const ButtonContainer = styled.div`
margin: 40px;

@media screen and (max-width: 1700px) {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  
}


`

const Button = styled.button`
background-color: transparent;
color: ${({light}) => light ? "#247A6A":'white'};
font-weight: bold;
font-size: 1.2em;
border: none;
padding: 10px;
margin-right: 20px;
cursor: pointer;
transition: 200ms;

&:hover{

  scale: 1.15;
}

@media screen and (max-width: 1700px) {
  margin-bottom: 40px;
}


`

export default Header
