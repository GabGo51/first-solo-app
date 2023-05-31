import styled from "styled-components";
import Luigi from "./Images/luigi.PNG";

const ProjectBox1 = () => {
  return (
    <Container>
      <TextBox>
        <Title>Luigi's Mansion</Title>
        <Text>
          A simple JavaScript flash Game inspired by Luigi's Mansion, a favorite
          game of mine. Implemeneted hitboxes, gave the player some health and
          made the game harder by adding enemies as time would go by. Added some
          sound effects and a background soundtrack. Played around with gifs and
          simple css animations.
        </Text>
      </TextBox>
      <Image src={Luigi} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-bottom: 100px;
  flex-wrap: wrap;
`;
const Image = styled.img`
  width: 400px;
  
  border-radius: 30px;
  margin-top: -100px;
  filter: brightness(85%);
  transition: 200ms;

  &:hover{
    filter: brightness(100%);
    scale: 1.05;
  }
`;
const TextBox = styled.div`
  width: 400px;
  margin-right: 200px;
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
