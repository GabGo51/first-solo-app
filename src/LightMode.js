import { styled } from "styled-components";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "./Context";


const LightMode = () => {

  const {light, setLight} = useContext(ThemeContext)

  const handleClick = () =>{
   setLight(!light)
   console.log(light);
  }
  return (
    <Container>
      <Button light = {light} onClick={handleClick}>
      { light?(
        <i class="fa-solid fa-moon"></i>
      ):(
        <i class="fa-sharp fa-solid fa-sun"></i>
      )}
      </Button>
    </Container>
  );
};

const Container = styled.div`
position: fixed;
bottom: 20px;
right: 20px;
z-index: 2000;
`

const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
border: none;
width: 50px;
height: 50px;
border-radius: 50%;
transition: 200ms;
background-color: ${({light}) => light?"black":"white"} ;

i{
  scale: 1.8;
  color:${({light}) => light?"white":"black"} 
}


&:hover {
  background-color: grey;
}
`
export default LightMode