import { styled } from "styled-components";
import { useEffect, useState, useRef } from "react";

const Pod = () => {
  const podRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (event) => {
      const { clientX, clientY } = event;
    };

    document.addEventListener('mousemove',handleMouse)

    return () =>{
      document.removeEventListener('mousemove',handleMouse)
    }
  }, []);


  return <Box>AYO</Box>;
};

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: bold;
  font-size: 2em;
`;

export default Pod;
