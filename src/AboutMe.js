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
        I'm a web dev with a passion for snowboard, rock climbing and gaming/anime. When I'm not geeking online, you'll find me outside either climbing up the mountains or snowboarding down them. As a web developer, I'm fascinated by the intersection of technology and creativity. I've honed my skills in HTML, CSS, JavaScript, and React to build visually stunning and responsive websites. I strive to create seamless user experiences that captivate and engage visitors.

So, take a moment to explore my portfolio and discover some of the projects I've brought to life. If you have any questions or if you'd like to discuss a potential project, feel free to reach out. Let's collaborate and create something amazing together!
        </Text>
      </TextBox>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 1000px;
  width: 800px;
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

const TextBox = styled.div`

`;

const Title = styled.h2`
  border-bottom: 1px solid white;
  padding-bottom: 10px;
  margin-bottom: 40px;
`;

const Text = styled.p`
  font-size: 1.3em;
`;

export default AboutMe;
