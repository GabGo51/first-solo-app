import styled from "styled-components";
import Fruit from "./Images/Fruit.PNG";
const ProjectBox2 = () => {
  return (
    <Container>
      <Image src={Fruit} />
      <TextBox>
        <Title>Fruit Store</Title>
        <Text>Creation of a Fruit Store Website using React. Learning how to pass down props and making usage of a database to create reusable components. Styling the items depending on their status and availability.</Text>
      </TextBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-left: -60px;
  margin-bottom: 200px;
`;
const Image = styled.img`
  border-radius: 30px;
  width: 500px;
  margin-left: 100px;
  margin-right: 150px;
  filter: brightness(95%);
  transition: 200ms;

  &:hover{
    filter: brightness(105%);
    scale: 1.05;
    cursor: pointer;
  }
`;
const TextBox = styled.div`
width: 400px;

`;
const Title = styled.h3`
  font-size: 1.5em;
  margin-bottom: 40px;
`;

const Text = styled.p`
  font-size: 1.3em;
  line-height: 30px;
`;

export default ProjectBox2;
