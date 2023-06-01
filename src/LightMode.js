import { styled } from "styled-components";
import { useState } from "react";

const LightMode = ({light, setlight}) => {

  

  const handleClick = () =>{
   setlight(!light)
   console.log(light);
  }
  return (
    <Container>
      <Button onClick={handleClick}>

      </Button>
    </Container>
  );
};

const Container = styled.div`
position: fixed;

bottom: 20px;
right: 20px;
`

const Button = styled.button`
border: none;
width: 50px;
height: 50px;
border-radius: 50%;
transition: 200ms;
z-index: 20;

&:hover {
  background-color: black;
}
`
export default LightMode