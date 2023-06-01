import { styled } from "styled-components";
import { useState } from "react";

const LightMode = () => {

  const [light, setlight] = useState(false)

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
width: 50px;
height: 50px;
background-color: white;
border-radius: 50%;
bottom: 20px;
right: 20px;
`

const Button = styled.button`
border: none;
`
export default LightMode