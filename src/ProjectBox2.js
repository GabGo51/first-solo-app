import styled from "styled-components";
import Fruit from "./Images/gadgetgo.png";
const ProjectBox2 = () => {
  return (
    <Container>
      <Image src={Fruit} />
      <TextBox>
        <Title>E-Commerce Store</Title>
        <Text>First experience working with a team! Me and 4 other devs created a full-stack E-commerce store. Browsing objects, adding them to the cart and "buying" them like an actual online store. </Text>
      </TextBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -60px;
  margin-bottom: 200px;
`;
const Image = styled.img`
  border-radius: 10px;
  width: 500px;
  margin-left: 100px;
  margin-right: 150px;
  filter: brightness(95%);
  transition: 200ms;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 30;
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
