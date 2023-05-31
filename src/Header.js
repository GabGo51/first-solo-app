import { useState, useEffect } from "react";
import  styled  from "styled-components"


const Header = () =>{

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
    <ButtonContainer>
      <Button onClick={() => handleClick("Home")}>Home</Button>
      <Button onClick={() => handleClick("About")}>About</Button>
      <Button onClick={() => handleClick("Project")}>Project</Button>
      <Button onClick={() => handleClick("Contact")}>Contact</Button>
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
`

const Title = styled.p`
font-size: 1.3em;
font-weight: bold;
margin: 30px;
`

const ButtonContainer = styled.div`
margin: 40px;
`

const Button = styled.button`
background-color: transparent;
color: white;
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


`

export default Header
