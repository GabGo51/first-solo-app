import styled from "styled-components";
import Luigi from "./Images/bloom.PNG";

const ProjectBox1 = () => {
  return (
    <Container>
      <TextBox>
        <Title>BLOOM Plant-Care</Title>
        <Text>
          My Bootcamp final project and my first full-stack solo project. A simple web application tracking the watering of the plants you log in your garden. Uses React JS Node MongoDb and express. 
        </Text>
      </TextBox>
      <Image src={Luigi} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-bottom: 200px;
  flex-wrap: wrap;
  
`;
const Image = styled.img`
  width: 400px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 30;
  border-radius: 10px;
  /* margin-top: -100px; */
  margin-right: -30px;
  filter: brightness(85%);
  transition: 200ms;

  &:hover{
    filter: brightness(100%);
    scale: 1.05;
    cursor: pointer;
  }
`;
const TextBox = styled.div`
  width: 400px;
  margin-right: 50px;
`;
const Title = styled.h3`
  font-size: 1.5em;
  margin-bottom: 40px;
`;

const Text = styled.p`
  font-size: 1.3em;
  line-height: 30px;
`;

export default ProjectBox1;
