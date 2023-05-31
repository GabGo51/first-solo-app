import styled from "styled-components";
import boutme from "./Images/boutme.jpg";
import Icon from "react-icons-kit";
import { spinner8 } from "react-icons-kit/icomoon/spinner8";
import { keyframes } from "styled-components";
const AboutMe = () => {
  return (
    <Container>
      <Image src={boutme} alt="Me boarding" />
      <Circle icon={spinner8} size={200}  />
      <TextBox>
        <Title>ABOUT ME</Title>
        <Text>
          The sun was shining brightly as I walked through the bustling city
          streets. People hurried past me, their footsteps echoing against the
          pavement. I marveled at the diversity of the crowd, each person with
          their own story and destination. I decided to take a detour and
          explore a nearby park. The air was filled with the sweet scent of
          blooming flowers, and the sound of birds chirping provided a soothing
          melody. I found a peaceful spot under a tall oak tree and sat down,
          closing my eyes to soak in the tranquility.
        </Text>
      </TextBox>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 800px;
  width: 700px;
  padding-bottom: 200px;
  display: flex;
  position: relative;
  margin-bottom: 60px;
`;

const Image = styled.img`
  width: 450px;
  height: 600px;
  border-radius: 20px;
  object-fit: cover;
  margin-left: -200px;
  margin-right: 200px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const rotate360 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(100deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(230deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Circle = styled(Icon)`
  position: absolute;
  bottom: 120px;
  margin-left: 140px;
  animation: ${rotate360} 2s linear infinite;
  color: white;
  opacity: 0.8;
  
`;

const TextBox = styled.div``;

const Title = styled.h2`
  border-bottom: 1px solid white;
  padding-bottom: 10px;
  margin-bottom: 40px;
`;

const Text = styled.p`
  font-size: 1.3em;
`;

export default AboutMe;
